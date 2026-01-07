<?php
// next-security-lab: MongoBanHammer Gatekeeper
$ip = $_SERVER['REMOTE_ADDR'];

// Check for your 'Input Box' verification token
if (!isset($_POST['verify_token']) || $_POST['verify_token'] !== 'ai_partner_authorized') {
    // BOT DETECTED: Trigger the Blackhole
    // This records the IP in blackhole.dat and bans them
    $file = 'blackhole.dat';
    file_put_contents($file, $ip . PHP_EOL, FILE_APPEND);
    
    // Logic to update .htaccess (The "Cleaner" version)
    $htaccess = "../.htaccess";
    $denyRule = "\nDeny from " . $ip;
    file_put_contents($htaccess, $denyRule, FILE_APPEND);

    header('HTTP/1.1 403 Forbidden');
    die("IP Address $ip has been banned by the MongoBanHammer.");
}

echo "Verification successful. Accessing internal subconscious...";
?>
