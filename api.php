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
	echo "<meta name='viewport' content='width=device-width, initial-scale=1'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
	echo "<script> var msg = new SpeechSynthesisUtterance('keyword already added'); window.speechSynthesis.speak(msg); </script>";
	echo "<body onload='loadout()'><script>function loadout(){window.location.href = './en/$value.html'}</script>";	
	//echo "<body onload='loadout()'><script>function loadout(){window.location.href = './#en/$value.html'}</script>";
	exit();
	}
}

	foreach($_POST as $variable => $value) 
{
	$value = str_replace(' ', '_', $value);
	$handle = fopen("./en/index.html", "a");
	fwrite($handle, 
	  "<br><a href=" 
	. "\"" 
	. "./" 
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
.  "<html lang=\"en\">"
.  "<head>"
.  " <meta charset=\"charset=UTF-8\">"
.  "<http-equiv=\"X-UA-Compatible\" content=\"IE=Edge;chrome=1\">"
.  "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">"
.  "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> "
.  "    <meta http-equiv=\"X-Content-Type-Options\" content=\"nosniff\">"
.  "    <meta http-equiv=\"X-Frame-Options\" content=\"DENY\">"
.  "    <meta http-epuiv=\"X-XSS-Protection\" content=\"1; mode=block\">"
.  "    <meta charset=\"charset=UTF-8\">"
.  "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge;chrome=1\">"
.  "    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">"
.  "    <meta http-equiv=\"Cache-Control\" content=\"private, no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0\" />"
.  "    <meta http-equiv=\"Pragma\" content=\"no-cache\" />"
.  "    <meta http-equiv=\"Expires\" content=\"0\" />"
.  "    <meta http-equiv=\"Clear-Site-Data\" content=\"*\">"
.  "    <meta http-equiv=\"Referrer-Policy\" content=\"same-origin\">"
.  "    <meta http-equiv=\"Permissions-Policy\" content=\"geolocation=(), microphone=(), camera=()\">"
.  "    <meta http-equiv=\"Cross-Origin-Embedder-Policy\" content=\"require-corp\">"
.  "    <meta http-equiv=\"Cross-Origin-Opener-Policy\" content=\"same-origin\">"
.  "    <meta http-equiv=\"Cross-Origin-Resource-Policy\" content=\"same-site\">"
.  "	<meta http-equiv=\"Content-Security-Policy\" content=\""
.  "    default-src 'self' http: https:;"
.  "    script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https:;"
.  "    style-src 'self' 'unsafe-inline' http: https:;"
.  "    img-src data: http: https:;"
.  "    font-src 'self' http: https:;"
.  "    connect-src http: https:;"
.  "    frame-src 'self' http: https:;\"/>"
.  "    <meta http-equiv=\"Connection\" content=\"Keep-alive\">"
.  "    <meta http-equiv=\"Referer\" content=\"same-origin\">"
.  "    <meta http-equiv=\"Content-Type\" content=\"text/html\">"
.  "    <!--<meta http-equiv=\"Expect-CT\" content=\"max-age=86400, enforce\">-->"
.  "    <!--<meta http-equiv=\"Strict-Transport-Security\" content=\"max-age=31536000; includeSubDomains\">-->"
.  "    <!--<meta http-equiv=\"Set-Cookie\" content=\"HttpOnly\">-->"
.  "<title>$value</title>"
.  "<style>"
.  "html { "
.  "height: 100% "
.  "}"
.  ""
.  "body { "
.  "min-height: 100% "
.  "}"
.  ""
.  ":root{"
.  "   font-family: \"Open Sans\", sans-serif;"
.  "   font-size: 16px;"
.  "   font-weight: 400;"
.  "}"
.  ""
.  "*{"
.  "   margin: 0;"
.  "   box-sizing: border-box;"
.  "}"
.  ""
.  ".page{"
.  "   min-height: 100vh;"
.  "   background-color: #fff;"
.  "   color: #000;"
.  "}"
.  ""
.  ".navbar{"
.  "   position: sticky;"
.  "   top: 0;"
.  "   height: 65px;"
.  "   background-color: #212529;"
.  "   color: #fff;"
.  "}"
.  ""
.  ".navbar-inner{"
.  "   display: flex;"
.  "   flex-direction: row;"
.  "   align-items: center;"
. "   justify-content: space-between;"
. "   height: 64px;"
. "   max-width: 1440px;"
. "   margin-inline: auto;"
. "   padding-inline: 4%;"
. "}"
. ""
. ".navbar-toggler,"
. ".navbar-toggler-check{"
. "   display: none;"
. "}"
. ""
. ".navbar-menu{"
. "   display: flex;"
. "   flex-direction: row;"
. "   gap: 1rem;"
. "}"
. ""
. ".navbar-link{"
. "   display: block;"
. "   padding: .5rem 1.25rem;"
. "   text-align: center;"
. "   text-decoration: none;"
. "   color: rgba(255, 255, 255, .5);"
. "   transition: color .15s;"
. "}"
. ""
. ".navbar-link:hover{"
. "   color: #fff;"
. "}"
. ""
. ".navbar-link-active{"
. "   color: #fff;"
. "   pointer-events: none;"
. "}"
. ""
. ".logo{"
. "   font-family: \"Montserrat\", sans-serif;"
. "   font-size: 1.75rem;"
. "   font-weight: 600;"
. "   letter-spacing: 1px;"
. "}"
. ""
. ".logo-link{"
. "   text-decoration: none;"
. "   color: inherit;"
. "}"
. ""
. ".button{"
. "   display: inline-block;"
. "   padding: .5rem 1.75rem;"
. "   text-align: center;"
. "   text-decoration: none;"
. "   background-color: #0d6efd;"
. "   color: #fff;"
. "   border-radius: 9999px;"
. "   transition: filter .15s;"
. "}"
. ""
. ".button:hover{"
. "   filter: brightness(.9);"
. "}"
. ""
. "@media only screen and (max-width:1024px) {"
. "   .navbar-menu{"
. "      gap: .5rem;"
. "   }"
. ""
. "   .button{"
. "      padding-inline: 1.5rem;"
. "   }"
. "}"
. ""
. "@media only screen and (max-width:768px) {"
. "   :root{"
. "      font-size: 15px;"
. "   }"
. "   "
. "   .navbar-menu{"
. "      position: absolute;"
. "      top: -100vh;"
. "      left: 0;"
. "      width: 100%;"
. "      flex-direction: column;"
. "      padding: .5rem 4% 1rem;"
. "      background-color: #212529;"
. "      z-index: -1;"
. "      transition: top .5s;"
. "   }"
. ""
. "   .navbar-toggler{"
. "      display: block;"
. "      font-size: 1.5rem;"
. "   }"
. ""
. "   .navbar-toggler-check:checked + .navbar-menu{"
. "      top: 64px;"
. "   }"
. "}"
. "</style>"
. "</head>"
. "<body class=\"page\" style=\"background-color:white;\">   "
. "<header class=\"navbar\">      "
. "<div class=\"navbar-inner\">         "
. "<h1 class=\"logo\">   "
. "$value      "
. "</h1>"
. "<i "
. "class=\"fa fa-home\">"
. "</i>"
. ""
. ""
. "<label "
. "for=\"navbar-toggler\" "
. "class=\"navbar-toggler\">"
. "&#9776;"
. "<i class=\"fas fa-bars\">"
. "</i>         "
. "</label>         "
. ""
. "<input "
. "type=\"checkbox\" "
. "id=\"navbar-toggler\" "
. "class=\"navbar-toggler-check\">         "
. "<nav class=\"navbar-menu\">            "
. "<a "
. "href=\"./$value.html\" "
. "class=\"navbar-link navbar-link-active\">"
. "$value"
. "</a>            "
. "<a "
. "href=\"./index.html\" "
. "class=\"navbar-link\">"
. "index"
. "</a>            "
. "</nav>      "
. "</div>   "
. "</header>"
. ""
. "<center>"
. "    <!-- JavaScript Security -->"
. "   <script>"
. "        document.addEventListener(\"DOMContentLoaded\", function() {"
. "            let metaCSP = document.createElement('meta');"
. "            metaCSP.httpEquiv = \"Content-Security-Policy\";"
. "            metaCSP.content = \"default-src 'self'; script-src 'self' http: https:; style-src 'self'; img-src 'self' data:;\";"
. "            document.head.appendChild(metaCSP);"
. "        });"
. ""
. "        document.addEventListener(\"paste\", (event) => {"
. "            event.preventDefault();"
. "            alert(\"Pasting is disabled for security reasons.\");"
. "        });"
. ""
. "        document.addEventListener(\"contextmenu\", (event) => event.preventDefault());"
. ""
. "        document.addEventListener(\"keydown\", function(event) {"
. "            if (event.ctrlKey && (event.key === \"U\" || event.key === \"S\" || event.key === \"H\")) {"
. "                event.preventDefault();"
. "                alert(\"Keyboard shortcuts are disabled for security.\");"
. "            }"
. "        });"
. "		</script>"
. "		"
. "<br><br>		"
. "<script> var msg = new SpeechSynthesisUtterance('$value'); window.speechSynthesis.speak(msg); "
. "</script> "
. ""
. ""
. "<a href=\"../delete.php?action=delete&filename=./en/$value.html\">"
. "<button>delete this keyword</button>"
. "</a>"
. ""
. "</body>"
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

echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>Click the link to visit the webpage for the keyword $value<br><br><a href='./en/$value.html'>$value</a><br><br>";
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