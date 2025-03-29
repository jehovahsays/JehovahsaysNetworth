<?php
header_remove( "X-Powered-By" );
//header( "Content-Security-Policy: default-src 'self'; script-src 'self' http: https:; style-src 'self'; img-src 'self' data:;");
header( "X-Content-Type-Options: nosniff");
header( "X-Frame-Options: DENY");
header( "Referrer-Policy: same-origin");
header( "Permissions-Policy: geolocation=(), microphone=(), camera=()");
header( "Cross-Origin-Embedder-Policy: require-corp");
header( "Cross-Origin-Opener-Policy: same-origin");
header( "Cross-Origin-Resource-Policy: same-site");
header( "Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header( "Pragma: no-cache");
header( "Content-Type-Options: nosniff" );
header( "XSS-Protection: 1; mode=block" );
header( "X-XSS-Protection: 1; mode=block" );
header( "Vary: Accept-Encoding" );
header( "viewport: width=device-width, initial-scale=1.0" );
header( "Host: index" );
header( "description: index" );
header( "keywords: index" );
header( "Expires: 0" );
header( "Accept-Language: en-US,en;q=0.5" );
header( "Connection: Keep-alive" );
header( 'Access-Control-Allow-Origin: *');
//header( 'Location: ./index.html');
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
?>
<!DOCTYPE html>
<html 
lang="en">
<head>
<meta 
charset="UTF-8">
<meta 
http-equiv="X-UA-Compatible" 
content="IE=Edge;chrome=1">
<meta 
name="apple-mobile-web-app-capable" 
content="yes">
<meta 
name="viewport" 
content="width=device-width, 
initial-scale=1.0">
<meta 
http-equiv="X-Content-Type-Options" 
content="nosniff">
<meta 
http-equiv="X-Frame-Options" 
content="DENY">
<meta 
http-equiv="Referrer-Policy" 
content="strict-origin-when-cross-origin">
<meta 
http-equiv="Permissions-Policy" 
content="geolocation=(), microphone=(), 
camera=()">
<meta 
http-equiv="X-XSS-Protection" 
content="1; mode=block">
<meta 
http-equiv="Cache-Control" 
content="private, no-store, no-cache, 
must-revalidate, proxy-revalidate, 
max-age=0" />
<meta 
http-equiv="Pragma" 
content="no-cache">
<meta 
http-equiv="Expires" 
content="0">
<meta 
http-equiv="Clear-Site-Data" 
content="*">
    <title>Boot Screen Simulation</title>
    <style>
        body {
            background-color: black;
            color: limegreen;
            font-family: monospace;
            padding: 20px;
            white-space: pre-wrap;
            font-size: 16px;
        }
        #bootText {
            display: block;
            min-height: 400px;
        }
        .blinking-cursor {
            display: inline-block;
            width: 10px;
            height: 16px;
            background-color: limegreen;
            animation: blink 1s infinite;
        }
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

<pre id="bootText"></pre>
<span class="blinking-cursor">
<a href='index.htm'>Skip this page</a>
</span>

<script>

    const bootLines = [
        "Initializing BIOS...",
        "Checking system integrity...",
        "Loading kernel...",
        "Detecting hardware...",
        "Initializing devices...",
        "Performing security checks...",
        "System Ready.",
        "-----------------------------",
        "Type yes to continue or no to exit to 3rd party search engine? (yes / no)"
    ];

    const asciiArt = [
	    "       /   ",
	    "      .    ",
	    "    /  /   ",
        "  .----.   ",
        " /      \\ ",
        " | 0  0  | ",
        " |   --  | ",
        " \\_____/  "
    ];

    let bootTextEl = document.getElementById("bootText");
    let index = 0;

    function showBootText() {
        if (index < bootLines.length) {
            bootTextEl.textContent += bootLines[index] + "\n";
            index++;
            setTimeout(showBootText, 1000);
        } else {
            askForContinuation();
        }
    }

    function askForContinuation() {
        let input = prompt("Type yes to continue? (yes / no)").toLowerCase();
        if (input === "yes") {
			//window.location.href = "index.htm"; // Entrance into website
            showASCIIArt();
        } else {
            window.location.href = "https://www.google.com"; // Change this to the actual safe exit page
        }
    }

    function showASCIIArt() {
        bootTextEl.textContent += "\nLoading visual mode...\n\n";
        asciiArt.forEach((line, i) => {
            setTimeout(() => {
                bootTextEl.textContent += line + "\n";
            }, i * 1000);
        });
    }

    showBootText();
	
	
</script>

</body>
</html>
<?PHP
	// Update index.html - with error handling
    foreach($_POST as $variable => $value) {
	if (empty($value) || $variable === 'secure-form-answer-Human') {
	continue;
	}
	
	// Redirect the user to the created page if user input value empty
	exit();
	
	ob_end_flush();
	}
?>
