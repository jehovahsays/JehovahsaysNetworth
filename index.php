<?php
function modifyHeaders($buffer) {
    header_remove("X-Powered-By");
    header("X-Content-Type-Options: nosniff");
    header("X-XSS-Protection: 1; mode=block");
    header("X-Frame-Options: DENY");
    header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;");
    header("Referrer-Policy: strict-origin-when-cross-origin");
    header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
    header("Cross-Origin-Resource-Policy: same-site");
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Pragma: no-cache");
    header("Expires: 0");
    header("Vary: Accept-Encoding");
    header("Connection: Keep-alive");
    return $buffer;
}
ob_start("modifyHeaders");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="description" content="Support this project by sending $1 through Cash App. Every contribution helps. Thank you!">
<title>Support Morgan Shatee Byers</title>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Support Morgan Shatee Byers",
  "description": "Support this project by sending $1 through Cash App. Every contribution helps.",
  "url": "http://morgansbyers.scienceontheweb.net"
}
</script>
</head>
<body>
<center>
<p>
Send $1  
<br>
<a href="https://cash.app/$morgansbyers">https://cash.app/$morgansbyers</a>
</p>
</center>
</body>
</html>
<?php
ob_end_flush();
?>