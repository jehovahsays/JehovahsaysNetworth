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

  

<style>html { height: 100% }body { min-height: 100% }:root{   font-family: "Open Sans", sans-serif;   font-size: 16px;   font-weight: 400;}*{   margin: 0;   box-sizing: border-box;}.page{   min-height: 100vh;   background-color: #fff;   color: #000;}.navbar{   position: sticky;   top: 0;   height: 65px;   background-color: #212529;   color: #fff;}.navbar-inner{   display: flex;   flex-direction: row;   align-items: center;   justify-content: space-between;   height: 64px;   max-width: 1440px;   margin-inline: auto;   padding-inline: 4%;}.navbar-toggler,.navbar-toggler-check{   display: none;}.navbar-menu{   display: flex;   flex-direction: row;   gap: 1rem;}.navbar-link{   display: block;   padding: .5rem 1.25rem;   text-align: center;   text-decoration: none;   color: rgba(255, 255, 255, .5);   transition: color .15s;}.navbar-link:hover{   color: #fff;}.navbar-link-active{   color: #fff;   pointer-events: none;}.logo{   font-family: "Montserrat", sans-serif;   font-size: 1.75rem;   font-weight: 600;   letter-spacing: 1px;}.logo-link{   text-decoration: none;   color: inherit;}.button{   display: inline-block;   padding: .5rem 1.75rem;   text-align: center;   text-decoration: none;   background-color: #0d6efd;   color: #fff;   border-radius: 9999px;   transition: filter .15s;}.button:hover{   filter: brightness(.9);}@media only screen and (max-width:1024px) {   .navbar-menu{      gap: .5rem;   }   .button{      padding-inline: 1.5rem;   }}@media only screen and (max-width:768px) {   :root{      font-size: 15px;   }      .navbar-menu{      position: absolute;      top: -100vh;      left: 0;      width: 100%;      flex-direction: column;      padding: .5rem 4% 1rem;      background-color: #212529;      z-index: -1;      transition: top .5s;   }   .navbar-toggler{      display: block;      font-size: 1.5rem;   }   .navbar-toggler-check:checked + .navbar-menu{      top: 64px;   }}</style>



<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript" SRC="./js/elizabot.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript" SRC="./js/elizadata.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript">
<!--

var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

function elizaReset() {
	eliza.reset();
	elizaLines.length = 0;
	elizaStep();
}

function elizaStep() {
	var f = document.forms.e_form;
	var userinput = f.e_input.value;
	if (eliza.quit) {
		f.e_input.value = '';
		if (confirm("This session is over.\nStart over?")) elizaReset();
		f.e_input.focus();
		return;
	}
	else if (userinput != '') {
		var usr = 'YOU:   ' + userinput;
		var rpl ='' + eliza.transform(userinput);
		elizaLines.push(usr);
		elizaLines.push(rpl);
		// display nicely
		// (fit to textarea with last line free - reserved for extra line caused by word wrap)
		var temp  = new Array();
		var l = 0;
		for (var i=elizaLines.length-1; i>=0; i--) {
			l += 1 + Math.floor(elizaLines[i].length/displayCols);
			if (l >= displayRows) break
			else temp.push(elizaLines[i]);
		}
		elizaLines = temp.reverse();
		f.e_display.value = elizaLines.join('\n');
	}
	else if (elizaLines.length == 0) {
		// no input and no saved lines -> output initial
		var initial = 'ElizaBot: ' + eliza.getInitial();
		elizaLines.push(initial);
		f.e_display.value = initial + '\n';
	}
	f.e_input.value = '';
	f.e_input.focus();
	  var msg = new SpeechSynthesisUtterance(initial); 
  window.speechSynthesis.speak(msg); 
  var msg = new SpeechSynthesisUtterance(rpl); 
  window.speechSynthesis.speak(msg); 

}

//-->
</SCRIPT>

<title>ElizaBot</title>

</head>

<footer style="position:fixed;top:0px;right:0px;height:5vh;width:100vw;text-align:center;background: blue;">
<body class="page" style="background-color:white;">   
<header class="navbar">      
<div class="navbar-inner"> 
  <form
id="secure-form-answer"
action="./script.php" 
method="post">
<input
style="position:fixed;top:5px;left:10px;height:50px;width:85vw;"
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
placeholder="add a new eliza bot Initial repsonse" 
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

</form>
        
<h1 class="logo">      
</h1><i class="fa fa-home"></i>
<label for="navbar-toggler" class="navbar-toggler">&#9776;<i class="fas fa-bars"></i>        
 </label>         
 <input type="checkbox" id="navbar-toggler" class="navbar-toggler-check">       
 <nav class="navbar-menu">            
	<a href="./en/about.html"><button>about</button></a><br><br>
	<a href="./en/tv.html"><button>tv</button></a><br><br>
	<a href="./en/radio.html"><button>radio</button></a>
				
 </nav>      
 </div>   
 </header>
 <center>    
</footer> 

<BR><BR>
<BR><BR>

<BODY TOPMARGIN="0" LEFTMARGIN="0" RIGHTMARGIN="0" BOTTOMMARGIN="0" MARGINHEIGHT="0" MARGINWIDTH="0" STYLE="border:0" onload="window.setTimeout('elizaReset()',100)"><A NAME="top"></A>
<TABLE BORDER="0" CELLSPACING="10" CELLPADDING="0">
<FORM NAME="e_form" onsubmit="elizaStep();return false">   
<TR><TD COLSPAN="2">
<TEXTAREA style="width:288px;height:300px;" NAME="e_display" COLS="60" ROWS="20">
</TEXTAREA></TD></TR>
<TR VALIGN="middle">
	<TD><INPUT style="width:250px;" 
	TYPE="text" 
	NAME="e_input" 
	SIZE="50" 
	id="filterInput" 
	onkeyup="titleInput()" 
	autocomplete="true" 
	autocorrect="off" 
	autocapitalize="off" 
	spellcheck="true" 
	x-webkit-speech></TD>
	</TR>
</FORM>
</TABLE>

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
