<?php
header('Location: ../index.html');
// Halts bad bots from entering webpage if on php action file stops edits also.
include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');
// Start output buffering
ob_start();

// Check if delete request is made
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['filename'])) {
    $filename = basename($_GET['filename']);
    $filepath = "./en/" . $filename;

    if (file_exists($filepath) && unlink($filepath)) {
        $filenameWithoutExt = pathinfo($filename, PATHINFO_FILENAME);
        $htmlUpdated = removeLinkFromIndex($filenameWithoutExt);
  
        if ($htmlUpdated && $jsonUpdated) {
            echo "File '$filename' and its entries have been removed.";
        } elseif ($htmlUpdated) {
            echo "File '$filename' deleted, but index.html update failed.";
        } else {
            echo "File '$filename' deleted, but index updates failed.";
        }
    } else {
        echo "File '$filename' does not exist.";
    }
	
/**
 * Remove an entry from index.html
 */
function removeLinkFromIndex($filenameWithoutExt) {
    $indexFile = "../index.html";

    if (!is_writable($indexFile)) {
        error_log("Cannot write to index.html - check permissions");
        return false;
    }

    $linkMarkup = "<br><a href=\"./blackhole/en/$filenameWithoutExt.html\" class=\"titleInput\"><button>$filenameWithoutExt</button></a><br>";
    
    $content = file_get_contents($indexFile);
    if ($content === false) return false;

    $newContent = str_replace($linkMarkup, "", $content);
    
    return file_put_contents($indexFile, $newContent) !== false;
}
	

    // Redirect after deletion
    exit();
}

ob_end_flush();
clearstatcache();
?>