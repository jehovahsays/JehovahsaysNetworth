<?php
header_remove( 'X-Powered-By' );
header( 'Cache-control: none, no-cache, private, max-age=0' );
header( 'Pragma: no-cache' );
header( 'Content-Type-Options: nosniff' );
header( 'X-Content-Type-Options: nosniff' );
header( 'XSS-Protection: 1; mode=block' );
header( 'X-XSS-Protection: 1; mode=block' );
header( 'Referrer-Policy: same-origin' );

$file_pointer = "index.html"; 						
if (file_exists($file_pointer))  
{ 
    echo "<script> var msg = new SpeechSynthesisUtterance('connected'); window.speechSynthesis.speak(msg); </script>";
    echo "<body onload='loadout()'><script>function loadout(){window.location.href = 'index.html'}</script>";
    exit();
}
?>
