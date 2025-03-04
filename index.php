<?php
// Set HTTP Security Headers in PHP
header("Content-Security-Policy: default-src 'self'; script-src 'self' http: https:; style-src 'self'; img-src 'self' data:;");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("Referrer-Policy: same-origin");
header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
header("Cross-Origin-Embedder-Policy: require-corp");
header("Cross-Origin-Opener-Policy: same-origin");
header("Cross-Origin-Resource-Policy: same-site");
//header("Expect-CT: max-age=86400, enforce");
//header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");

// Prevent caching (optional security measure)
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

// Adding some more layers of security.
header_remove( "X-Powered-By" );
header( "Content-Type-Options: nosniff" );
header( "XSS-Protection: 1; mode=block" );
header( "X-XSS-Protection: 1; mode=block" );
header( "Vary: Accept-Encoding" );
header( "viewport: width=device-width, initial-scale=1.0" );
header( "Host: index" );
header( "description: index" );
header( "keywords: index" );
header( "Vary: Accept-Encoding" );
header( "Expires: 0" );
header( "Accept-Language: en-US,en;q=0.5" );
header( "Connection: Keep-alive" );

// Start output buffering to ensure headers are sent before content
ob_start();
// Clear stat cache
clearstatcache();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    
    <!-- Security Headers in HTML -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-epuiv="X-XSS-Protection" content="1; mode=block">
    <meta charset="charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="Cache-Control" content="private, no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta http-equiv="Clear-Site-Data" content="*">
    <meta http-equiv="Referrer-Policy" content="same-origin">
    <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
    <meta http-equiv="Cross-Origin-Embedder-Policy" content="require-corp">
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin">
    <meta http-equiv="Cross-Origin-Resource-Policy" content="same-site">
	<meta http-equiv="Content-Security-Policy" content="
    default-src 'self' http: https:;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https:;
    style-src 'self' 'unsafe-inline' http: https:;
    img-src data: http: https:;
    font-src 'self' http: https:;
    connect-src http: https:;
    frame-src 'self' http: https:;"/>
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
    <link rel="icon" type="image/png" href="./favicon.ico">
    <link rel="shortcut icon" href="./favicon.ico" media="(prefers-color-scheme: dark)"/>
    <link rel="shortcut icon" href="./favicon.ico" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
    <meta http-equiv="Set-Cookie" content="HttpOnly">
    <meta http-equiv="Connection" content="Keep-alive">
    <meta http-equiv="Referer" content="same-origin">
    <meta http-equiv="Content-Type" content="text/html">
    <!--<meta http-equiv="Expect-CT" content="max-age=86400, enforce">-->
    <!--<meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">-->

    <title>Secure Page</title>

    <!-- Security in CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: left;
            margin: 50px;
        }
    </style>
</head>
<body>

    <h1>Secure Index.php</h1>
    <p>This page has all major security headers implemented.</p>
<form
id="secure-form-answer"
action="./api.php" 
method="post">
<input
style="position:absolute;top:5px;left:5px;width:220px;"
id="filterInput"
onkeyup="titleInput()"
autocomplete="true"
autocorrect="off"  
autocapitalize="off" 
spellcheck="true"
type="text" 
name="secure-form-answer-Human"
maxlength="524288" 
value=""
aria-label="search"  
placeholder="search database" 
x-webkit-speech
required>		

<noscript>
<label 
for="secure-form-answer-Human">
&#x48;&#x75;&#x6D;&#x61;&#x6E;
</label>
</noscript>
</form>

    <!-- JavaScript Security -->
    <script>
        // Enforce strict CSP dynamically (if applicable)
        document.addEventListener("DOMContentLoaded", function() {
            let metaCSP = document.createElement('meta');
            metaCSP.httpEquiv = "Content-Security-Policy";
            metaCSP.content = "default-src 'self'; script-src 'self' http: https:; style-src 'self'; img-src 'self' data:;";
            document.head.appendChild(metaCSP);
        });

        // Prevent pasting malicious code into input fields
        document.addEventListener("paste", (event) => {
            event.preventDefault();
            alert("Pasting is disabled for security reasons.");
        });

        // Disable right-click (optional)
        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // Prevent keystroke logging attempts
        document.addEventListener("keydown", function(event) {
            if (event.ctrlKey && (event.key === "U" || event.key === "S" || event.key === "H")) {
                event.preventDefault();
                alert("Keyboard shortcuts are disabled for security.");
            }
        });
</body>
</html>

<?php
// Clean redirect
//header("Location: ./index.html");

foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$file_pointer = "./en/" . $value . ".html"; 
	if (file_exists($file_pointer))  
	{ 
	echo "The file $file_pointer already exists <br>"; 
	echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('keyword already added'); window.speechSynthesis.speak(msg); </script>";
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>";	
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value.html'}</script>";
	exit();
	}
}

echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value'}</script>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>"; 
 echo "<script> var msg = new SpeechSynthesisUtterance('keyword added to search'); window.speechSynthesis.speak(msg); </script>";		
exit();


// Clear stat cache
clearstatcache();

// End output buffering and flush the content
ob_end_flush();
?>