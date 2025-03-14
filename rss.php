<?php
// Keep the original JSON output functionality
if (isset($_GET['format']) && $_GET['format'] === 'json') {
    header("Content-Type: application/json");
    
    $folder = "./en/"; // Change this to the folder you want to monitor
    if (!file_exists($folder)) {
        mkdir($folder, 0777, true); // Create the folder if it doesn't exist
    }
    
    $files = array_diff(scandir($folder), array('.', '..')); // Get files excluding . and ..
    echo json_encode(array_values($files));
    exit;
}

/**
 * Generate or update the RSS feed file
 */
function generateRSSFeed() {
    $folder = "./en/"; // The folder to monitor
    $rssFile = "rss.xml"; // RSS feed file name
    $siteURL = getSiteURL(); // Get the site URL dynamically
    $feedTitle = "My Website Feed"; // Change this to your feed title
    $feedDescription = "Latest updates from my website"; // Change this to your feed description
    
    // Create or update the RSS file
    if (!file_exists($folder)) {
        mkdir($folder, 0777, true);
        return false; // Exit if folder doesn't exist and was just created
    }
    
    // Get files and their information
    $files = array_diff(scandir($folder), array('.', '..'));
    $entries = [];
    
    foreach ($files as $file) {
        $filePath = $folder . $file;
        if (is_file($filePath)) {
            // Get file info
            $fileInfo = getFileInfo($filePath, $file, $siteURL);
            if ($fileInfo) {
                $entries[] = $fileInfo;
            }
        }
    }
    
    // Sort entries by publication date (newest first)
    usort($entries, function($a, $b) {
        return $b['timestamp'] - $a['timestamp'];
    });
    
    // Generate the RSS XML
    $rss = '<?xml version="1.0" encoding="UTF-8" ?>' . PHP_EOL;
    $rss .= '<rss version="2.0">' . PHP_EOL;
    $rss .= '  <channel>' . PHP_EOL;
    $rss .= '    <title>' . htmlspecialchars($feedTitle) . '</title>' . PHP_EOL;
    $rss .= '    <link>' . htmlspecialchars($siteURL) . '</link>' . PHP_EOL;
    $rss .= '    <description>' . htmlspecialchars($feedDescription) . '</description>' . PHP_EOL;
    $rss .= '    <lastBuildDate>' . date(DATE_RSS) . '</lastBuildDate>' . PHP_EOL;
    
    // Add entries
    foreach ($entries as $entry) {
        $rss .= '    <item>' . PHP_EOL;
        $rss .= '      <title>' . htmlspecialchars($entry['title']) . '</title>' . PHP_EOL;
        $rss .= '      <link>' . htmlspecialchars($entry['link']) . '</link>' . PHP_EOL;
        $rss .= '      <description>' . htmlspecialchars($entry['description']) . '</description>' . PHP_EOL;
        $rss .= '      <pubDate>' . $entry['pubDate'] . '</pubDate>' . PHP_EOL;
        $rss .= '      <guid isPermaLink="false">' . htmlspecialchars($entry['guid']) . '</guid>' . PHP_EOL;
        $rss .= '    </item>' . PHP_EOL;
    }
    
    $rss .= '  </channel>' . PHP_EOL;
    $rss .= '</rss>';
    
    // Write to file
    file_put_contents($rssFile, $rss);
    return true;
}

/**
 * Extract file information for RSS feed
 */
function getFileInfo($filePath, $fileName, $baseURL) {
    $timestamp = filemtime($filePath);
    $pubDate = date(DATE_RSS, $timestamp);
    $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
    
    // Create a unique link to the file
    $link = $baseURL . 'en/' . rawurlencode($fileName);
    $guid = $baseURL . 'en/' . rawurlencode($fileName) . '?t=' . $timestamp;
    
    // Try to extract a better title from HTML files
    $title = str_replace(['_', '-'], ' ', pathinfo($fileName, PATHINFO_FILENAME));
    $description = "File: " . $fileName;
    
    // For HTML files, try to parse and get actual title and description
    if ($fileExtension === 'html' || $fileExtension === 'htm') {
        $content = file_get_contents($filePath);
        
        // Extract title
        preg_match('/<title>(.*?)<\/title>/i', $content, $titleMatches);
        if (!empty($titleMatches[1])) {
            $title = trim($titleMatches[1]);
        }
        
        // Extract meta description
        preg_match('/<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']/i', $content, $descMatches);
        if (!empty($descMatches[1])) {
            $description = trim($descMatches[1]);
        } else {
            // Try to get first paragraph as description
            preg_match('/<p>(.*?)<\/p>/is', $content, $paraMatches);
            if (!empty($paraMatches[1])) {
                $description = strip_tags(trim($paraMatches[1]));
                if (strlen($description) > 200) {
                    $description = substr($description, 0, 197) . '...';
                }
            }
        }
    }
    
    return [
        'title' => $title,
        'link' => $link,
        'description' => $description,
        'pubDate' => $pubDate,
        'guid' => $guid,
        'timestamp' => $timestamp
    ];
}

/**
 * Get the current site URL
 */
function getSiteURL() {
    // Force HTTP protocol no matter what
    $protocol = "http://";
    $domainName = $_SERVER['HTTP_HOST'];
    
    // Remove script name from the path if present
    $path = $_SERVER['REQUEST_URI'];
    $scriptName = $_SERVER['SCRIPT_NAME'];
    if (strpos($path, $scriptName) === 0) {
        $path = dirname($scriptName);
    } else {
        $path = dirname($path);
    }
    
    // Ensure path ends with a slash
    if (substr($path, -1) !== '/') {
        $path .= '/';
    }
    
    $url = $protocol . $domainName . $path;
    
    // Ensure URL starts with http:// and not https://
    // This is a safety measure in case of server rewrites or other interference
    if (strpos($url, 'https://') === 0) {
        $url = 'http://' . substr($url, 8);
    }
    
    return $url;
}

/**
 * Check if RSS feed needs to be updated
 */
function needsUpdate($rssFile, $folder) {
    // If RSS file doesn't exist, it needs to be created
    if (!file_exists($rssFile)) {
        return true;
    }
    
    $rssModTime = filemtime($rssFile);
    
    // Get the latest modification time from the folder
    $latestModTime = 0;
    $files = array_diff(scandir($folder), array('.', '..'));
    
    foreach ($files as $file) {
        $filePath = $folder . $file;
        if (is_file($filePath)) {
            $fileModTime = filemtime($filePath);
            if ($fileModTime > $latestModTime) {
                $latestModTime = $fileModTime;
            }
        }
    }
    
    // If any file is newer than the RSS file, update is needed
    return $latestModTime > $rssModTime;
}

// Main execution

$rssFile = "rss.xml";
$folder = "./en/";

// Check if we need to update the RSS
if (needsUpdate($rssFile, $folder)) {
    generateRSSFeed();
}

// Determine output format
if (isset($_GET['format']) && $_GET['format'] === 'rss') {
    // Serve the RSS feed
    header('Content-Type: application/rss+xml');
    if (file_exists($rssFile)) {
        readfile($rssFile);
    } else {
        echo '<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Error</title><description>RSS feed not available</description></channel></rss>';
    }
} else {
    // Redirect to the RSS feed by default
    header('Location: ' . $rssFile);
}
?>