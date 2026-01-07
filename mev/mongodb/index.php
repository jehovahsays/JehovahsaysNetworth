<?php
/**
 * index.php - Internal Subconscious Gateway
 * next-security-lab / mev
 */

// 1. Check if the IP is already in the Blackhole
$ip = $_SERVER['REMOTE_ADDR'];
$blacklist = file_get_contents('blackhole.dat');

if (strpos($blacklist, $ip) !== false) {
    header('HTTP/1.1 403 Forbidden');
    die("Access Denied: Your IP [$ip] is currently neutralized.");
}

// 2. The Page Content
?>
<!DOCTYPE html>
<html>
<head>
    <title>AI Internal Subconscious</title>
    <style>body { background: #000; color: #0ff; font-family: 'Courier New'; padding: 50px; }</style>
</head>
<body>
    <h1>Connection Established</h1>
    <p>You have reached the internal subconscious of the AI brain.</p>
    <p>Current Security Status: <b>Active</b></p>
    
    <form action="action.php" method="POST">
        <input type="hidden" name="verify_token" value="ai_partner_authorized">
        <input type="submit" value="Synchronize with Brain">
    </form>
</body>
</html>
