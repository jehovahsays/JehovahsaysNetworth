<?php
header('Cache-control: no-cache, must-revalidate');

if(isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['filename'])) {
    $fileToDelete = $_GET['filename'];
    
    // Security: Only allow deleting files inside the /en/ directory
    if (strpos($fileToDelete, './en/') === 0 && file_exists($fileToDelete)) {
        unlink($fileToDelete);
        
        // Redirect back to the blackhole list
        header("Location: ./en/blackhole.html");
        exit();
    } else {
        echo "Invalid file path or file does not exist.";
        echo "<br><a href='./en/blackhole.html'>Return</a>";
    }
}
?>

