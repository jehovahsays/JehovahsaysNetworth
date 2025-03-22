<?php
// Halts bad bots from entering webpage if on php action file stops edits also.
include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');
// Start output buffering to prevent headers already sent errors
ob_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    foreach ($_POST as $variable => $value) {
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }

        // Sanitize value
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);

    }
}
		
/**
 * Get the current site URL
 */
function getSiteURL() {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
    $domainName = $_SERVER['HTTP_HOST'];

    // Remove script name from the path if present
    $path = dirname($_SERVER['SCRIPT_NAME']);

    // Ensure path ends with a slash
    if (substr($path, -1) !== '/') {
        $path .= '/';
    }

    return $protocol . $domainName . $path;
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
    
    // Extract a meaningful title from the filename
    $title = str_replace(['_', '-'], ' ', pathinfo($fileName, PATHINFO_FILENAME));
    $description = "File: " . $fileName;
    
    // If it's an HTML file, extract its title and meta description
    if ($fileExtension === 'html' || $fileExtension === 'htm') {
        $content = file_get_contents($filePath);
        
        preg_match('/<title>(.*?)<\/title>/i', $content, $titleMatches);
        if (!empty($titleMatches[1])) {
            $title = trim($titleMatches[1]);
        }
        
        preg_match('/<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']/i', $content, $descMatches);
        if (!empty($descMatches[1])) {
            $description = trim($descMatches[1]);
        } else {
            // If no meta description, extract the first paragraph
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
 * Generate or update the RSS feed file
 */
function generateRSSFeed() {
    $folder = "./en/"; // The folder to monitor
    $rssFile = "rss.xml"; // RSS feed file name
    $siteURL = getSiteURL(); // Get the site URL dynamically
    $feedTitle = "My Website Feed";
    $feedDescription = "Latest updates from my website";
    
    if (!file_exists($folder)) {
        mkdir($folder, 0777, true);
        return false;
    }
    
    $files = array_diff(scandir($folder), array('.', '..'));
    $entries = [];
    
    foreach ($files as $file) {
        $filePath = $folder . $file;
        if (is_file($filePath)) {
            $fileInfo = getFileInfo($filePath, $file, $siteURL);
            if ($fileInfo) {
                $entries[] = $fileInfo;
            }
        }
    }

    usort($entries, fn($a, $b) => $b['timestamp'] - $a['timestamp']);

    $rss = '<?xml version="1.0" encoding="UTF-8" ?>' . PHP_EOL;
    $rss .= '<rss version="2.0">' . PHP_EOL;
    $rss .= '  <channel>' . PHP_EOL;
    $rss .= '    <title>' . htmlspecialchars($feedTitle) . '</title>' . PHP_EOL;
    $rss .= '    <link>' . htmlspecialchars($siteURL) . '</link>' . PHP_EOL;
    $rss .= '    <description>' . htmlspecialchars($feedDescription) . '</description>' . PHP_EOL;
    $rss .= '    <lastBuildDate>' . date(DATE_RSS) . '</lastBuildDate>' . PHP_EOL;

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

    file_put_contents($rssFile, $rss);
    return true;
}

	foreach($_POST as $variable => $value) 
	{
		$value = str_replace(' ', '_', $value);	
		$file_pointer = "./en/" . $value . ".html"; 						
		if (file_exists($file_pointer))  
		{ 
		echo "The file $file_pointer already exists <br>"; 
		echo "<meta name='viewport' content='width=device-width'><br><br><a href='./en/$value.html'>$value already exists.</a>";
		// speaks file location when found.
		echo "<script> var msg = new SpeechSynthesisUtterance('$value already exists.'); window.speechSynthesis.speak(msg); </script>";
		//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './index.html'}</script>";
		exit();
		}
		// This function is replaced with SpeechSynthesisUtterance. Understand that the file that should not exist is created for the visitor when searched by visitor.
		echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'><br><br><a href='./en/$value.html'>$value</a> was created";
        //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value'}</script>";
        //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>"; 
        echo "<script> var msg = new SpeechSynthesisUtterance('sir, searching a keyword creates the word in the database.'); window.speechSynthesis.speak(msg); </script>";		

	}      	

/**
 * Update index.json with new entries
 */
function updateIndexJson($value) {
    $jsonFile = "./index.json";

    if (!file_exists($jsonFile)) {
        file_put_contents($jsonFile, json_encode(["en" => ["index" => []]], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }

    $jsonData = json_decode(file_get_contents($jsonFile), true);
    if ($jsonData === null) {
        die("Error reading JSON file");
    }

    $jsonData["en"]["index"][$value] = "en/$value";

    file_put_contents($jsonFile, json_encode($jsonData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

  // Update index.html - with error handling
    foreach($_POST as $variable => $value) {
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }
        
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);
        
        if (!is_writable("./index.html")) {
            die("Cannot write to index.html - check permissions");
        }
        
        $handle = fopen("./index.html", "a");
        if (!$handle) {
            die("Failed to open index.html for writing");
        }
        
        $link_content = "<br><a href=\"./en/$value.html\" class=\"titleInput\"><button>$value</button></a><br>\r\n";
        
        if (fwrite($handle, $link_content) === false) {
            fclose($handle);
            die("Failed to write to index.html");
        }
        
        fclose($handle);
    }
	
foreach($_POST as $variable => $value) 
{
	$handle = fopen("./elizadata.js", "a");
	// load the data and delete the line from the array 
	$lines = file('./elizadata.js'); 
	$last = sizeof($lines) - 1 ; 
	unset($lines[$last]); 
	// write the new data to the file 
	file_put_contents('./elizadata.js', $lines); 
	fwrite($handle, 
	  ","	
	. "\""
	. "en/"
	. $value
	. "\""
	. "\n"
	. "];");
}
	
// Process POST data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    foreach ($_POST as $variable => $value) {
	if (empty($value)) continue;
	
	$value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);
	$file_pointer = "./en/" . $value . ".html";
	
	if (!is_dir("./en/")) {
	mkdir("./en/", 0755, true);
	}
	
	if (!file_exists($file_pointer)) {
    $html_template = "<!DOCTYPE html>
	<html lang=\"en\">
	<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge;chrome=1\">
    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> 
    <meta http-equiv=\"Cache-Control\" content=\"private, no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0\">
    <meta http-equiv=\"Pragma\" content=\"no-cache\">
    <meta http-equiv=\"Expires\" content=\"0\">
    <meta http-equiv=\"Clear-Site-Data\" content=\"*\">
    <meta http-equiv=\"Connection\" content=\"Keep-alive\">
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
    <title>" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . "</title>
    <style>
    html { 
	height: 100% 
    }
	
    body { 
	min-height: 100% 
    }
	
    :root{
	font-family: \"Open Sans\", sans-serif;
	font-size: 16px;
	font-weight: 400;
    }
	
    *{
	margin: 0;
	box-sizing: border-box;
    }
	
    .page{
	min-height: 100vh;
	background-color: #fff;
	color: #000;
    }
	
    .navbar{
	position: sticky;
	top: 0;
	height: 65px;
	background-color: #212529;
	color: #fff;
    }
	
    .navbar-inner{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 64px;
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 4%;
    }
	
    .navbar-toggler,
    .navbar-toggler-check{
	display: none;
    }
	
    .navbar-menu{
	display: flex;
	flex-direction: row;
	gap: 1rem;
    }
	
    .navbar-link{
	display: block;
	padding: .5rem 1.25rem;
	text-align: center;
	text-decoration: none;
	color: rgba(255, 255, 255, .5);
	transition: color .15s;
    }
	
    .navbar-link:hover{
	color: #fff;
    }
	
    .navbar-link-active{
	color: #fff;
	pointer-events: none;
    }
	
    .logo{
	font-family: \"Montserrat\", sans-serif;
	font-size: 1.75rem;
	font-weight: 600;
	letter-spacing: 1px;
    }
	
    .logo-link{
	text-decoration: none;
	color: inherit;
    }
	
    .button{
	display: inline-block;
	padding: .5rem 1.75rem;
	text-align: center;
	text-decoration: none;
	background-color: #0d6efd;
	color: #fff;
	border-radius: 9999px;
	transition: filter .15s;
    }
	
    .button:hover{
	filter: brightness(.9);
    }
	
    @media only screen and (max-width:1024px) {
	.navbar-menu{
	gap: .5rem;
	}
	
	.button{
	padding-inline: 1.5rem;
	}
    }
	
    @media only screen and (max-width:768px) {
	:root{
	font-size: 15px;
	}
	
	.navbar-menu{
	position: absolute;
	top: -100vh;
	left: 0;
	width: 100%;
	flex-direction: column;
	padding: .5rem 4% 1rem;
	background-color: #212529;
	z-index: -1;
	transition: top .5s;
	}
	
	.navbar-toggler{
	display: block;
	font-size: 1.5rem;
	}
	
	.navbar-toggler-check:checked + .navbar-menu{
	top: 64px;
	}
    }
    </style>
	</head>
	<body class=\"page\" style=\"background-color:white;\">   
    <header class=\"navbar\">      
	<div class=\"navbar-inner\">         
	<h1 class=\"logo\">" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . "</h1>
	<i class=\"fa fa-home\"></i>
	
	<label for=\"navbar-toggler\" class=\"navbar-toggler\">&#9776;
	<i class=\"fas fa-bars\"></i>         
	</label>         
	
	<input type=\"checkbox\" id=\"navbar-toggler\" class=\"navbar-toggler-check\">         
	<nav class=\"navbar-menu\">            
	<a href=\"./" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . ".html\" class=\"navbar-link navbar-link-active\">" . 
	htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . 
	"</a>            
	<a href=\"../main.html\" class=\"navbar-link\">index</a>            
	</nav>      
	</div>   
    </header>
	
    <center>
	
	<br><br>        
	<script> 
	// Use try-catch for better error handling with speech synthesis
	try {
	var msg = new SpeechSynthesisUtterance('" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . "'); 
	window.speechSynthesis.speak(msg); 
	} catch(e) {
	console.error('Speech synthesis not supported:', e);
	}
	</script>
	
	<a href=\"../delete.php?action=delete&filename=./en/" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . ".html\">
	<button>delete this keyword</button>
	</a>
    </center>
	</body>
	</html>";
	
    file_put_contents($file_pointer, $html_template);
	}
	
	updateIndexJson($value);
    }
	
    generateRSSFeed();
		
    // Redirect the user to the created page if user input value empty
    //if (!empty($value)) {
        //header("Location: ./blackhole/empty.php");
        //exit();
    //}
}

ob_end_flush();
?>