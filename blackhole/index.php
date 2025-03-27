<?php
header_remove( "X-Powered-By" );
include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');
header( "Content-Security-Policy: default-src 'self'; script-src 'self' http: https:; style-src 'self'; img-src 'self' data:;");
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
<!-- Security in CSS -->
<style>
body {
font-family: 
Arial, 
sans-serif;
background-color: 
gray;
text-align: 
left;
margin: 
50px;
}
input[type=text] {
	width: 100%;
	height: 1px;
	padding: 12px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	border: none;
	background-color: black;
	color: white;
}
button {
	position:fixed;
	top:0px;
	left:0px;
	width:100vw;
	height:100vh;
	background-color: gray;
}
</style>
<title>
index
</title>
<meta 
name="description" 
content="keyword search">
</head>
<button>
<body>
<form
id="secure-form-answer"
action="./blackhole/script.php" 
method="post">
<input
style="position:fixed;top:50px;left:50px;
height:50px;width:75vw;"
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
<a 
rel="nofollow" 
style="display:none;" 
href="/blackhole/">
</noscript>
<!-- JavaScript Security -->
<script>
        // Enforce strict CSP dynamically (if applicable)
        document.addEventListener("DOMContentLoaded", function() {
            let metaCSP = document.createElement('meta');
            metaCSP.httpEquiv = "Content-Security-Policy";
            metaCSP.content = "default-src 'self'; script-src 'self';  style-src 'self'; img-src 'self' data:;";
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
</form>
<br><br>
<a href="./blackhole/index.html">
Click here to explore this website
</a>
</body>
</button>
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
