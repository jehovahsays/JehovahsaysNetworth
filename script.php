<?php
// Start output buffering to prevent headers already sent errors
ob_start();

// Basic input validation and sanitization
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Securing HTTP Security Headers - consolidated and consistent
    header_remove('X-Powered-By');
    
    // Security headers - properly formatted and organized
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
    header('Pragma: no-cache');
    header('Expires: 0');
    
    // Content type security
    header('X-Content-Type-Options: nosniff');
    header('X-XSS-Protection: 1; mode=block');
    
    // Referrer policy
    header('Referrer-Policy: same-origin');
    
    // Frame protection
    header('X-Frame-Options: DENY');
    
    // Connection and language headers
    header('Connection: Keep-alive');
    header('Accept-Language: en-US,en;q=0.5');
    header('Vary: Accept-Encoding');
    
    // CORS - Consider restricting this in production
    header('Access-Control-Allow-Origin: *');
    
    // Content-type must be set correctly
    header('Content-Type: text/html; charset=UTF-8');
    
    // Secure form verification with proper validation
    $answer1 = isset($_POST['secure-form-answer-Human']) ? htmlspecialchars($_POST['secure-form-answer-Human'], ENT_QUOTES, 'UTF-8') : '';
    $totalCorrect = 0;
    
    if ($answer1 === "&#x48;&#x75;&#x6D;&#x61;&#x6E;") { 
        $totalCorrect++; 
    }
    
    echo "<div id='results'>$totalCorrect / 1 correct</div>";

    // Process POST data with proper sanitization
    foreach ($_POST as $variable => $value) {
        // Skip empty values and the form verification field
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }
        
        // Sanitize filename - only allow alphanumeric, underscores and hyphens
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);
        
        // Check for directory traversal attempts
        if (strpos($value, '..') !== false || empty($value)) {
            die("Invalid input detected");
        }
        
        // Set up file paths with proper directory validation
        $file_pointer = "./en/" . $value . ".html";
        
        // Directory check
        if (!is_dir("./en/")) {
            if (!mkdir("./en/", 0755, true)) {
                die("Failed to create directory structure");
            }
        }
        
        // Check if file exists before creating
        if (file_exists($file_pointer)) {
            echo "The file $file_pointer already exists <br>";
            echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
            exit();
        }
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

    // Create HTML template page - with error handling
    foreach($_POST as $variable => $value) {
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }
        
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);
        
        if (!is_dir("./en/")) {
            if (!mkdir("./en/", 0755, true)) {
                die("Failed to create directory structure");
            }
        }
        
        if (file_exists("./en/$value.html") && !is_writable("./en/$value.html")) {
            die("Cannot write to ./en/$value.html - check permissions");
        }
        
        $handle = fopen("./en/$value.html", "w"); // Use 'w' instead of 'a' to prevent duplicate content
        if (!$handle) {
            die("Failed to open ./en/$value.html for writing");
        }
        
        // HTML template with consistent CSP policy and security measures
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
                <a href=\"../index.html\" class=\"navbar-link\">index</a>            
            </nav>      
        </div>   
    </header>

    <center>
        <!-- JavaScript Security -->
        <script>
            document.addEventListener(\"DOMContentLoaded\", function() {
                // CSP is better set via HTTP headers or meta tags in head
            });

            // Consider if these restrictions are truly necessary
            // They can frustrate legitimate users
            document.addEventListener(\"paste\", (event) => {
                event.preventDefault();
                alert(\"Pasting is disabled for security reasons.\");
            });

            document.addEventListener(\"contextmenu\", (event) => event.preventDefault());

            document.addEventListener(\"keydown\", function(event) {
                if (event.ctrlKey && (event.key === \"U\" || event.key === \"S\" || event.key === \"H\")) {
                    event.preventDefault();
                    alert(\"Keyboard shortcuts are disabled for security.\");
                }
            });
        </script>
        
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
        
        if (fwrite($handle, $html_template) === false) {
            fclose($handle);
            die("Failed to write to ./en/$value.html");
        }
        
        fclose($handle);
    }

    // Final output and redirect
    foreach($_POST as $variable => $value) {
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }
        
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);
        
        echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
                
        // Exit after processing one valid entry
        break;
    }
}

// Clear stat cache
clearstatcache();

// End output buffering and flush the content
ob_end_flush();
?>