<?php
// Halts bad bots from entering webpage if on php action file stops edits also.
include(realpath(getenv('DOCUMENT_ROOT')) .'/balckhole/blackhole.php');
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

    $linkMarkup = "<br><a href=\"./en/$filenameWithoutExt.html\" class=\"titleInput\"><button>$filenameWithoutExt</button></a><br>";
    
    $content = file_get_contents($indexFile);
    if ($content === false) return false;

    $newContent = str_replace($linkMarkup, "", $content);
    
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

// Check if delete request is made
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['filename'])) {
    $filename = basename($_GET['filename']);
    $filepath = "./en/" . $filename;

    if (file_exists($filepath) && unlink($filepath)) {
        $filenameWithoutExt = pathinfo($filename, PATHINFO_FILENAME);
        $htmlUpdated = removeLinkFromIndex($filenameWithoutExt);
        $jsonUpdated = removeFromIndexJson($filenameWithoutExt);

        if ($htmlUpdated && $jsonUpdated) {
            echo "File '$filename' and its entries have been removed.";
        } elseif ($htmlUpdated) {
            echo "File '$filename' deleted, but index.json update failed.";
        } elseif ($jsonUpdated) {
            echo "File '$filename' deleted, but index.html update failed.";
        } else {
            echo "File '$filename' deleted, but index updates failed.";
        }
    } else {
        echo "File '$filename' does not exist.";
    }

    // Redirect after deletion
    header('Location: ./en/deleted.html');
    exit();
}

ob_end_flush();
clearstatcache();
?>