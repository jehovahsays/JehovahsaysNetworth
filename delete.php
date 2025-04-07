<?php
header('Location: ./index.html');
// Halts bad bots from entering webpage if on php action file stops edits also.
include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');
// Start output buffering
ob_start();

/**
 * Remove an entry from index.html
 */
function removeLinkFromIndex($filenameWithoutExt) {
    $indexFile = "./index.html";

    if (!is_writable($indexFile)) {
        error_log("Cannot write to index.html - check permissions");
        return false;
    }

    $content = file_get_contents($indexFile);
    if ($content === false) return false;
    
    // Use the exact pattern format found in the index.html (no space between href and class)
    $linkMarkup = "<br><a href=\"./en/$filenameWithoutExt.html\"class=\"titleInput\"><button>$filenameWithoutExt</button></a><br>";
    
    $newContent = str_replace($linkMarkup, "", $content);
    
    // If no change was made, try a more flexible pattern
    if ($newContent === $content) {
        $pattern = '/<br>\s*<a\s+href="\.\/(en\/|en\/)?' . preg_quote($filenameWithoutExt, '/') . '\.html"class="titleInput">\s*<button>' . preg_quote($filenameWithoutExt, '/') . '<\/button>\s*<\/a>\s*<br>/i';
        $newContent = preg_replace($pattern, '', $content);
    }
    
    return file_put_contents($indexFile, $newContent) !== false;
}

/**
 * Remove an entry from index.json
 */
function removeFromIndexJson($filenameWithoutExt) {
    $jsonFile = "./index.json";

    if (!file_exists($jsonFile)) return false;
    if (!is_writable($jsonFile)) {
        error_log("Cannot write to index.json - check permissions");
        return false;
    }

    $jsonContent = file_get_contents($jsonFile);
    if ($jsonContent === false) return false;

    $data = json_decode($jsonContent, true);
    if ($data === null) return false;

    if (isset($data['en']['index'][$filenameWithoutExt])) {
        unset($data['en']['index'][$filenameWithoutExt]);

        if (empty($data['en']['index'])) {
            unset($data['en']['index']);
        }

        return file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)) !== false;
    }

    return false;
}

/**
 * Remove an entry from elizadata.js
 */
function removeFromElizaData($keyword) {
    $elizaFile = "./js/elizadata.js";
    
    if (!file_exists($elizaFile)) {
        error_log("elizadata.js does not exist");
        return false;
    }
    
    if (!is_writable($elizaFile)) {
        error_log("Cannot write to elizadata.js - check permissions");
        return false;
    }
    
    // Read the file content
    $content = file_get_contents($elizaFile);
    if ($content === false) return false;
    
    // Pattern to match the exact keyword line (with various possible formats)
    $patterns = [
        '/\s*"' . preg_quote($keyword, '/') . '",\s*\n/i',  // "keyword",
        '/\s*"' . preg_quote($keyword, '/') . '"\s*\n/i',   // "keyword"
        '/\s*"' . preg_quote($keyword, '/') . '",$/im',     // "keyword", (end of file)
        '/\s*"' . preg_quote($keyword, '/') . '"$/im'       // "keyword" (end of file)
    ];
    
    $newContent = $content;
    foreach ($patterns as $pattern) {
        // Try each pattern until one works
        $tempContent = preg_replace($pattern, "\n", $newContent);
        if ($tempContent !== $newContent) {
            $newContent = $tempContent;
            break;
        }
    }
    
    // Fix potentially malformed arrays after deletion (extra commas, etc.)
    $newContent = preg_replace('/,(\s*\n\s*)\]/m', '$1]', $newContent);  // Remove comma before closing bracket
    
    // Write back to file
    return file_put_contents($elizaFile, $newContent) !== false;
}

// Check if delete request is made
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['filename'])) {
    $filename = $_GET['filename'];
    
    // Extract the actual filename from the path
    if (strpos($filename, './en/') === 0) {
        $filename = substr($filename, 5); // Remove './en/' prefix
    } else if (strpos($filename, 'en/') === 0) {
        $filename = substr($filename, 3); // Remove 'en/' prefix
    }
    
    $filepath = "./en/" . $filename;
    $filenameWithoutExt = pathinfo($filename, PATHINFO_FILENAME);
    
    $fileDeleted = false;
    $htmlUpdated = false;
    $jsonUpdated = false;
    $elizaUpdated = false;
    
    // Delete the file
    if (file_exists($filepath)) {
        $fileDeleted = unlink($filepath);
    }
    
    if ($fileDeleted) {
        // Update index.html
        $htmlUpdated = removeLinkFromIndex($filenameWithoutExt);
        
        // Update index.json
        $jsonUpdated = removeFromIndexJson($filenameWithoutExt);
        
        // Update elizadata.js
        $elizaUpdated = removeFromElizaData($filenameWithoutExt);
        
        // Provide status feedback
        $message = "File '$filename' deleted. ";
        $message .= $htmlUpdated ? "Index.html updated. " : "Index.html update failed. ";
        $message .= $jsonUpdated ? "Index.json updated. " : "Index.json update failed. ";
        $message .= $elizaUpdated ? "Elizadata.js updated." : "Elizadata.js update failed.";
        
        echo $message;
    } else {
        echo "File '$filename' does not exist or cannot be deleted.";
        error_log("Failed to delete file: $filepath");
    }
    
    // Redirect after deletion
    exit();
}

ob_end_flush();
clearstatcache();
?>