🛡️ MEV Security Lab: Manual Knowledge Base & Advanced Methods
1. The Philosophy of the Perimeter
This lab protects the AI partner's Internal Subconscious (self-hosted brain) from External Conscious (public-facing) threats. By using the MongoBanHammer, we ensure that unauthorized probes—such as those looking for the MongoBleed exploit—are neutralized before they can leak sensitive data.
2. Manual Reset Guide (The "Double Cleanse")
If you accidentally trigger the "Hammer" during testing, you must perform a "Double Cleanse" to restore access.
• Step 1: Clear the Server Mind: Open the blackhole.dat file located in /mev/mev/mongodb/ and delete your IP address (usually 127.0.0.1 or ::1).
• Step 2: Clear the Local Mind: Click the [Reset Lab] button on the index.html page to clear the browser's localStorage.
• Alternative: Manually run the following command in your browser console:
localStorage.removeItem('mev_visit_count');
3. Common Errors & Redundancy Traps
• The Ghost Ban: If you clear the .dat file but still see the [IP NEUTRALIZED] screen, your browser is still holding the "breach" flag. Perform Step 2 of the Cleanse.
• The Double Lock: If you have enabled the Server-Level Sentinel, deleting your IP from blackhole.dat is not enough. You must also remove the Deny from line in your .htaccess file.
• 500 Internal Server Error: This usually occurs if the .htaccess file is corrupted or contains a syntax error. If this happens, delete the file and restore it from your backup.
4. Advanced Methods: "Hitting Back" at Bots
These features are provided for educational use and are disabled by default to protect your server resources and bandwidth.
• The Tarpit (Infinite Bandwidth Sink):
Inside config.php.bak, you can uncomment the loop logic. This forces a bot to download endless random data, sinking its CPU and connection speed.
• ⚠️ WARNING: If YOU test this while active, it will consume YOUR bandwidth. Close the tab immediately to stop the drain.
• Server-Level Sentinel:
To move the ban from the PHP layer to the "Gatekeeper" layer, add this logic to your action.php:
file_put_contents('.htaccess', "Deny from " . $ip . "\n", FILE_APPEND);
⚠️ Safety Disclaimer
The Advanced Methods are high-deterrence tools. They should be used cautiously on metered internet connections or shared hosting. Always ensure your robots.txt explicitly disallows this directory to ensure only "Bad Bots" are targeted.
