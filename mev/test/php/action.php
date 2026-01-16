<?php
header('Cache-control: no-cache, must-revalidate');
header('X-Content-Type-Options: nosniff');
header('X-XSS-Protection: 1; mode=block');

// Define directory constants
$subDir = "./en/";

foreach($_POST as $variable => $value) {
    $value = str_replace(' ', '_', $value);
    $cleanValue = htmlspecialchars($value);
    $filePath = $subDir . $value . ".html";

    // 1. Check if file exists
    if (file_exists($filePath)) { 
        echo "<script>
            var msg = new SpeechSynthesisUtterance('I found the keyword $cleanValue'); 
            window.speechSynthesis.speak(msg);
            setTimeout(function(){ window.location.href = '$filePath'; }, 1000);
        </script>";
        exit();
    }

    // 2. Create the new keyword page
    $handle = fopen($filePath, "w"); // Use "w" to create fresh
    $content = "<!DOCTYPE html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>$cleanValue</title>
    <style>
        body { background: black; color: white; font-family: sans-serif; padding: 20px; text-align: center; }
        button { padding: 10px; margin: 10px; cursor: pointer; }
        .editable { border: 1px dashed #555; padding: 20px; margin-top: 50px; min-height: 100px; }
    </style>
</head>
<body>
    <a href='./blackhole.html'><button>Return to Blackhole</button></a>
    <!-- Path to delete.php which is one level up -->
    <a href='../delete.php?action=delete&filename=./en/$value.html'><button style='color:red;'>Delete Keyword</button></a>
    
    <div class='editable' contenteditable='true'>
        <h1>$cleanValue</h1>
        <p>Click here to define the keyword...</p>
    </div>
</body>
</html>";
    fwrite($handle, $content);
    fclose($handle);

    // 3. Append the new link to blackhole.html
    $indexHandle = fopen($subDir . "blackhole.html", "a");
    $newLink = "\n<a href=\"$value.html\" class=\"titleInput\"><button>$value</button></a>";
    fwrite($indexHandle, $newLink);
    fclose($indexHandle);

    // 4. Success feedback and redirect
    echo "<script>
        var msg = new SpeechSynthesisUtterance('Added keyword $cleanValue'); 
        window.speechSynthesis.speak(msg);
        setTimeout(function(){ window.location.href = '$subDir" . "blackhole.html'; }, 1000);
    </script>";
    exit();
}
?>

