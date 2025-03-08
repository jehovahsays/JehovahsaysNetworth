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
	echo "<meta name='viewport' content='width=device-width, initial-scale=1'>Click the link to visit the webpage for the keyword $value<br><br><a href='./search.html?q=$value#en/$value'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('keyword already protected'); window.speechSynthesis.speak(msg); </script>";
	echo "<body onload='loadout()'><script>function loadout(){window.location.href = './index.html#en/$value'}</script>";	
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value.html'}</script>";
	exit();
	}
}
	foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);
	$handle = fopen("./en/database.html", "a");
	fwrite($handle, 
	  "<br><a href=" 
	. "\"" 
	. "./index.html#en/" 
	. $value
	. "\"" 
	. "class=" 
	. "\"" 
	. "titleInput" 
	. "\"" 
	. ">" 
	. "<button>"
	. "protected "
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
	.     "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
	.     ""
	.    "<link rel=\"stylesheet\" href=\"../index.css\">"
	.    ""
	.   "<title>"
	.   $value
	.   "</title>"
	.   "<head>"
	.    "<body style=\"background-color:white;\">"
    .  "<br><br>"
    .  ""
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
	$handle = fopen("./index.json", "a");
	// load the data and delete the line from the array 
	$lines = file('./index.json'); 
	$last = sizeof($lines) - 1 ; 
	unset($lines[$last]); 
	// write the new data to the file 
	file_put_contents('./index.json', $lines); 
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

echo "<meta name='viewport' content='width=device-width'>Click the link to visit the webpage for the keyword $value<br><br><a href='./search.html?q=$value#en/$value'>$value</a><br><br>";
 //echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value'}</script>";
 echo "<body onload='loadout()'><script>function loadout(){window.location.href = './index.html#en/$value'}</script>"; 
 echo "<script> var msg = new SpeechSynthesisUtterance('keyword protected'); window.speechSynthesis.speak(msg); </script>";		
fclose($handle);
exit();
// Clear stat cache
clearstatcache();
// End output buffering and flush the content
ob_end_flush();
?>