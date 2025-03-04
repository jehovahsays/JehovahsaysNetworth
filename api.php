<?php
// Securing HTTP Security Headers
header_remove( 'X-Powered-By' );
header( 'Cache-control: none, no-cache, private, max-age=0' );
header( 'Pragma: no-cache' );
header( 'Content-Type-Options: nosniff' );
header( 'X-Content-Type-Options: nosniff' );
header( 'XSS-Protection: 1; mode=block' );
header( 'X-XSS-Protection: 1; mode=block' );
header( 'Vary: Accept-Encoding' );
header( 'viewport: width=device-width, initial-scale=1.0' );
header( 'Accept-Language: en-US,en;q=0.5' );
header( 'Connection: Keep-alive' );
header( 'Host: index' );
header( 'description: index' );
header( 'keywords: index' );
header( 'Vary: Accept-Encoding' );
header( 'Expires: 0' );
header( 'Referrer-Policy:  same-origin' );
header( 'Accept-Language: en-US,en;q=0.5' );
header( 'Connection: Keep-alive' );

// Allow requests from any origin (useful during development)
// In production, you may want to restrict this to specific domains.

header('Access-Control-Allow-Origin: *');

// Halting all incoming connections for form verification answer.

$answer1 = $_POST['secure-form-answer-Human'];        
$totalCorrect = 1;  
if ($answer1 == "&#x48;&#x75;&#x6D;&#x61;&#x6E;") { $totalCorrect++; }            
echo "<div id='results'>$totalCorrect /  1 correct</div>";

// When visitor edits page they return to page that was edited.
//header('Location: ' . $_SERVER['HTTP_REFERER']);

foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$file_pointer = "./en/" . $value . ".html"; 
	if (file_exists($file_pointer))  
	{ 
	echo "The file $file_pointer already exists <br>"; 
	echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('keyword already added'); window.speechSynthesis.speak(msg); </script>";
	echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>";	
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value.html'}</script>";
	exit();
	}
}

	foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);
	$handle = fopen("./index.html", "a");
	fwrite($handle, 
	  "<br><a href=" 
	. "\"" 
	. "./en/" 
	. $value
	. ".html"
	. "\"" 
	. "class=" 
	. "\"" 
	. "titleInput" 
	. "\"" 
	. ">" 
	. "<button>"
	. $value
    . "</button>"	
	. "</a><br>"
	. "\r\n");
}


// Create HTML template page on new page
foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$handle = fopen("./en/" . $value . ".html", "a");
	fwrite($handle, 
     "<!DOCTYPE html>"
	.  "<html>"
	.   "<head>"
	.   "<meta "
	.   "name=\"viewport\""
	.   "content=\"width=device-width\"/>"
	.    "<link rel=\"stylesheet\" href=\"../style.css\">"
	.    ""
	.   "<title>"
	.   $value
	.   "</title>"
	.  "<style>"
    .   ".homebutton {"
    .   "	position:fixed;"
    .   "	top:0px;"
    .   "	hieght:20px;"
    .   "	width:30px;"
    .   "	background-color: black;	"
    .   "}"
    .   ""
    .  "</style>"
	.   "<head>"
		.    "<body style=\"background-color:white;\">"
	.    "<body class=\"page\">"
	.    ""
	.    "   <header class=\"navbar\">"
	.    "      <div class=\"navbar-inner\">"
	.    "         <h1 class=\"logo\">"
	.    "         </h1>"
	.     "<a href=\"../index.html\">		 "
	.     "<img src=\"../favicon.ico\" style=\"position:fixed;font-size:10px;height:60px;width:50px;top:0px;left:0;\"> <i class=\"fa fa-home\"></i></button></a>"
	.     ""
	.   ""
	.  "<form "
	.  "id=\"secure-form-answer\""
	.  "action=\"../api.php\" "
	.  "method=\"post\">	"
	.  "<input "
	.  "id=\"secure-form-answer\""
	.  "onkeyup=\"titleInput()\""
	.  "autocomplete=\"true\""
	.  "autocorrect=\"off\"  "
	.  "autocapitalize=\"off\" "
	.  "spellcheck=\"true\""
	.  "type=\"text\" "
	.  "name=\"secure-form-answer-Human\""
	.  "maxlength=\"524288\" "
	.  "value=\"\""
	.  "aria-label=\"search\"  "
	.  "placeholder=\"create another keyword\" "
	.  "x-webkit-speech"
	.  "required>"
	.  "<noscript>"
	.  "<label "
	.  "for=\"secure-form-answer-Human\">"
	.  "&#x48;&#x75;&#x6D;&#x61;&#x6E;"
	.  "</label>"
	.  "</noscript>"
	.  "</form>				"
	.  ""
	.  "<br>"
	.  $value
    .  "<br><br>"
	.  "<script> var msg = new SpeechSynthesisUtterance('$value'); window.speechSynthesis.speak(msg); </script>"
	.  ""
	.   "         <label for=\"navbar-toggler\" class=\"navbar-toggler\">|||"
	.   "		 <i class=\"fas fa-bars\"></i>"
	.   "         </label>"
	.   "         <input type=\"checkbox\" id=\"navbar-toggler\" class=\"navbar-toggler-check\">"
	.   "         <nav class=\"navbar-menu\">"
	.   ""
	.   "            <a href=\"./$value.html\" class=\"navbar-link navbar-link-active\">$value</a>"
	.   "            <a href=\"../about.html\" class=\"navbar-link\">About</a>"
	.   "            <a href=\"../recent.html\" class=\"navbar-link\">Recent Pages</a>"
	.   "            <a href=\"../options.html\" class=\"navbar-link\">Options</a>"
	.   "            <a href=\"../more.html\" class=\"button\">More</a>"
	.   "         </nav>"
	.   "      </div>"
	.   "   </header>"
	.  "<br><br>"
	.  ""
	.  "<a href=\"../delete.php?action=delete&filename=./en/$value.html\"><button>delete this keyword</button></a>"
	.  ""
	.  "</body>"
	. "<html>");
}

echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value'}</script>";
 echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>"; 
 echo "<script> var msg = new SpeechSynthesisUtterance('keyword added to search'); window.speechSynthesis.speak(msg); </script>";		
fclose($handle);
exit();
// Clear stat cache
clearstatcache();
// End output buffering and flush the content
ob_end_flush();
?>