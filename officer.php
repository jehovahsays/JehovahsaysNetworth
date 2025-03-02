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
header( 'Host: officer' );
header( 'description: officer' );
header( 'keywords: officer' );
header( 'Vary: Accept-Encoding' );
header( 'Expires: 0' );
header( 'Referrer-Policy:  same-origin' );
header( 'Accept-Language: en-US,en;q=0.5' );
header( 'Connection: Keep-alive' );
$answer1 = $_POST['secure-form-answer-Human'];        
$totalCorrect = 1;  
if ($answer1 == "Human") { $totalCorrect++; }            
echo "<div id='results'>$totalCorrect /  1 correct</div>";

foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$file_pointer = "./en/us/" . $value . ".html"; 						
	if (file_exists($file_pointer))  
	{ 
	echo "The file $file_pointer already exists <br>"; 
	//echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage you protected for the keyword<br><br><a href='./en/$value.html'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('the keyword $value already protected'); window.speechSynthesis.speak(msg); </script>";
	echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/us/$value.html'}</script>";
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './officer.html'}</script>";
	exit();
	}
}

foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);	
	$handle = fopen("./en/us/" . $value . ".html", "a");
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
	.  "action=\"../../index.php\" "
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
	.  "placeholder=\"add another keyword\" "
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
	.  "<br>is protected"
	.  "<script> var msg = new SpeechSynthesisUtterance('$value is protected'); window.speechSynthesis.speak(msg); </script>"
	.  ""
	.  "<br><br>"
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
	. "protected:"
	. $value
	. "\""	
	. ":"
	. "\""
	. "en/us/"
	. $value
    . "\""
	. "\n"
    . "}}}");
}


 //echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage you protected for the keyword $value <br><br> <a href='./en/$value.html'>$value</a><br><br>";
 echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/us/$value.html'}</script>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './officer.html'}</script>"; 
 echo "<script> var msg = new SpeechSynthesisUtterance('you protected the keyword $value'); window.speechSynthesis.speak(msg); </script>";		
fclose($handle);
//header('Location: ' . $_SERVER['HTTP_REFERER']);
clearstatcache();
exit();
?>