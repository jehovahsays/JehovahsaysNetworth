<?php
// Start output buffering
ob_start();

/**
 * Remove the link corresponding to the given filename (without extension)
 * from index.html.
 */
function removeLinkFromIndex($filenameWithoutExt) {
    $indexFile = "./index.html";
    
    // Check if index.html is writable
    if (!is_writable($indexFile)) {
        error_log("Cannot write to index.html - check permissions");
        return false;
    }
    
    // Build the expected link markup as it appears in index.html.
    // Adjust this pattern if your link markup changes.
    $linkMarkup = "<br><a href=\"./en/" . $filenameWithoutExt . ".html\" class=\"titleInput\"><button>" . $filenameWithoutExt . "</button></a><br>";
    
    // Get the content of index.html
    $content = file_get_contents($indexFile);
    if ($content === false) {
        error_log("Failed to read index.html");
        return false;
    }
    
    // Remove the link markup from the content
    $newContent = str_replace($linkMarkup, "", $content);
    
    // Write the updated content back to index.html
    if (file_put_contents($indexFile, $newContent) === false) {
        error_log("Failed to update index.html");
        return false;
    }
    
    return true;
}

// Check if a deletion request is made via GET parameters.
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['filename'])) {
    // Use basename() to prevent directory traversal attacks.
    $filename = basename($_GET['filename']);
    $filepath = "./en/" . $filename;
    
    // Check if the file exists before attempting to delete
    if (file_exists($filepath)) {
        if (unlink($filepath)) {
            // Remove the corresponding link from index.html.
            // We assume the link in index.html uses the filename without its extension.
            $filenameWithoutExt = pathinfo($filename, PATHINFO_FILENAME);
            if (removeLinkFromIndex($filenameWithoutExt)) {
                echo "File '$filename' and its link have been removed.";
            } else {
                echo "File '$filename' was deleted, but failed to update index.html.";
            }
        } else {
            die("Failed to delete file '$filename'.");
        }
    } else {
        echo "File '$filename' does not exist.";
    }
    
    // Optional: Log deletion info to a deleted log file (if needed)
    $logFile = "./en/deleted.html";
    $handle = fopen($logFile, "a");
    if ($handle) {
        foreach ($_GET as $variable => $value) {
            fwrite($handle, "<br>" . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . "<br>\r\n");
        }
        fclose($handle);
    }
    
    // Redirect after deletion
    header('Location: ./en/deleted.html');
    exit();
}

// End output buffering and flush the content
ob_end_flush();
clearstatcache();
?>