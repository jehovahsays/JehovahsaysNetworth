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
// Allow requests from any origin (useful during development)
// In production, you may want to restrict this to specific domains.
header('Access-Control-Allow-Origin: *');
// Start output buffering to ensure headers are sent before content
ob_start();
// Clear stat cache
clearstatcache();
?>
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="charset=UTF-8">
<http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Security Headers in HTML -->  
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-epuiv="X-XSS-Protection" content="1; mode=block">
    <meta charset="charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
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
    <!--<meta http-equiv="Set-Cookie" content="HttpOnly">-->
    <meta http-equiv="Connection" content="Keep-alive">
    <meta http-equiv="Referer" content="same-origin">
    <meta http-equiv="Content-Type" content="text/html">
    <!--<meta http-equiv="Expect-CT" content="max-age=86400, enforce">-->
    <!--<meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">-->

    <title>index</title>

    <!-- Security in CSS -->
    <style>
body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 50px;
        }
</style>
	
</head>
<body>

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
		</script>

		   
</body>
</html>

<?php

header( 'Location: ./en/deleted.html');


// user has clicked a delete hyperlink
if($_GET['action'] && $_GET['action'] == 'delete') {
	unlink($_GET['filename']);
}

foreach($_GET as $variable => $value) 
{
	$handle = fopen("./en/deleted.html", "a");
	fwrite($handle, 
	  "<br>" 
	. $value	
	. "<br>"
	. "\r\n");
}

exit();

// End output buffering and flush the content
ob_end_flush();

// Clear stat cache
clearstatcache();
?>