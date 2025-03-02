<?php
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
//require 'edit.php';
// Allow requests from any origin (useful during development)
// In production, you may want to restrict this to specific domains.
//header('Access-Control-Allow-Origin: *');

$answer1 = $_POST['secure-form-answer-Human'];        
$totalCorrect = 1;  
if ($answer1 == "&#x48;&#x75;&#x6D;&#x61;&#x6E;") { $totalCorrect++; }            
echo "<div id='results'>$totalCorrect /  1 correct</div>";


foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$file_pointer = "./en/" . $value . ".html"; 
	if (file_exists($file_pointer))  
	{ 
	//echo "The file $file_pointer already exists <br>"; 
	//echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the protected keyword $value<br><br><a href='./en/us/$value.html'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('keyword already added'); window.speechSynthesis.speak(msg); </script>";
	echo "<body onload='loadout()'><script>function loadout(){window.location.href = './index.html?q=$value#en/$value'}</script>";	
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value.html'}</script>";
	exit();
	}
}

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
	.   "<title>"
	.   $value
	.   "</title>"
	.   "<head>"
	.   ""
	.  "<form "
	.  "id=\"secure-form-answer\""
	.  "action=\"../index.php\" "
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
	.  "<script> var msg = new SpeechSynthesisUtterance('$value'); window.speechSynthesis.speak(msg); </script>"
	.  ""
	.  "<br><br>"
	.  ""
	.  "<a href=\"../delete.php?action=delete&filename=./en/$value.html\"><button>delete this keyword</button></a>"
	.  ""
	.  "</body>"
	. "<html>");
}
	
foreach($_POST as $variable => $value) 
{    
    $value = str_replace(' ', '_', $value);	
	$handle = fopen("./js/index.json", "a");
	// load the data and delete the line from the array 
	$lines = file('./js/index.json'); 
	$last = sizeof($lines) - 1 ; 
	unset($lines[$last]); 
	// write the new data to the file 
	file_put_contents('./js/index.json', $lines); 
	$value = str_replace(' ', '_', $value);
	fwrite($handle, 
      ","	
	. "\""
	. $value
	. "\""	
	. ":"
	. "\""
	. "en/"
	. $value
    . "\""
	. "\n"
    . "}}}");
}

//echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the protected keyword $value<br><br><a href='./en/us/$value.html'>$value</a><br><br>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value'}</script>";
 echo "<body onload='loadout()'><script>function loadout(){window.location.href = './index.html?q=$value#en/$value'}</script>"; 
 echo "<script> var msg = new SpeechSynthesisUtterance('keyword added to search'); window.speechSynthesis.speak(msg); </script>";		
fclose($handle);
//header('Location: ' . $_SERVER['HTTP_REFERER']);
clearstatcache();
exit();
?>