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
</style>
<style>html { height: 100% }body { min-height: 100% }:root{   font-family: "Open Sans", sans-serif;   font-size: 16px;   font-weight: 400;}*{   margin: 0;   box-sizing: border-box;}.page{   min-height: 100vh;   background-color: #fff;   color: #000;}.navbar{   position: sticky;   top: 0;   height: 65px;   background-color: #212529;   color: #fff;}.navbar-inner{   display: flex;   flex-direction: row;   align-items: center;   justify-content: space-between;   height: 64px;   max-width: 1440px;   margin-inline: auto;   padding-inline: 4%;}.navbar-toggler,.navbar-toggler-check{   display: none;}.navbar-menu{   display: flex;   flex-direction: row;   gap: 1rem;}.navbar-link{   display: block;   padding: .5rem 1.25rem;   text-align: center;   text-decoration: none;   color: rgba(255, 255, 255, .5);   transition: color .15s;}.navbar-link:hover{   color: #fff;}.navbar-link-active{   color: #fff;   pointer-events: none;}.logo{   font-family: "Montserrat", sans-serif;   font-size: 1.75rem;   font-weight: 600;   letter-spacing: 1px;}.logo-link{   text-decoration: none;   color: inherit;}.button{   display: inline-block;   padding: .5rem 1.75rem;   text-align: center;   text-decoration: none;   background-color: #0d6efd;   color: #fff;   border-radius: 9999px;   transition: filter .15s;}.button:hover{   filter: brightness(.9);}@media only screen and (max-width:1024px) {   .navbar-menu{      gap: .5rem;   }   .button{      padding-inline: 1.5rem;   }}@media only screen and (max-width:768px) {   :root{      font-size: 15px;   }      .navbar-menu{      position: absolute;      top: -100vh;      left: 0;      width: 100%;      flex-direction: column;      padding: .5rem 4% 1rem;      background-color: #212529;      z-index: -1;      transition: top .5s;   }   .navbar-toggler{      display: block;      font-size: 1.5rem;   }   .navbar-toggler-check:checked + .navbar-menu{      top: 64px;   }}</style>
    <title>BIOS Setup Utility</title>
    <link rel="stylesheet" href="../styles.css">
</head>

<footer style="position:fixed;top:0px;right:0px;height:5vh;width:100vw;text-align:center;background: blue;
">

<body class="page" style="background-color:white;">   
<header class="navbar">      
<div class="navbar-inner"> 
<h1 class="logo">      
</h1><i class="fa fa-home"></i>
<label for="navbar-toggler" class="navbar-toggler">&#9776;<i class="fas fa-bars"></i>        
 </label>   
 
 <input type="checkbox" id="navbar-toggler" class="navbar-toggler-check">       
 <nav class="navbar-menu">   
 <a href="././blackhole/index.html">open command line interface</a>
</div>

    <div class="bios-container">
        <h1>BIOS Setup Utility</h1>
        <h2>System Information</h2>
        <table>
            <tr><td>BIOS Version:</td><td><?php echo "v0.00"; ?></td></tr>
            <tr><td>Processor:</td><td><?php echo "0.00 GHz"; ?></td></tr>
            <tr><td>Memory Installed:</td><td><?php echo "0MB DDR RAM"; ?></td></tr>
            <tr><td>Hard Disk:</td><td><?php echo "0GB IDE HDD"; ?></td></tr>
            <tr><td>Video Card:</td><td><?php echo "MX 0"; ?></td></tr>
            <tr><td>Boot Order:</td><td><?php echo "1. Floppy Drive<br>2. Hard Disk<br>3. CD-ROM"; ?></td></tr>
        </table>
        <div >
            <p><a href="./blackhole/index.html">[ ↑ ↓ ]</a> Navigate | <a href="./blackhole/index.html">[Enter]</a> Select | <a href="./blackhole/index.html">[ESC]</a> Exit</p>
        </div>
    </div>
</footer>
<script>
        function titleInput() {
            let input = document.getElementById('filterInput').value.trim().toLowerCase();
            let items = document.getElementsByClassName('titleInput');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = items[i].innerHTML.toLowerCase().includes(input) ? "list-item" : "none";
            }
            if (input !== "titleInput") {
                let msg = new SpeechSynthesisUtterance(input);
                window.speechSynthesis.speak(msg);
            }
        }
    </script>
	
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
