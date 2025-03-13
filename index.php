<?php
// Secure redirect to index.html
// Set security headers
header("X-Frame-Options: DENY"); // Prevent clickjacking
header("X-XSS-Protection: 1; mode=block"); // Enable XSS protection
header("X-Content-Type-Options: nosniff"); // Prevent MIME-sniffing
header("Content-Security-Policy: default-src 'self'"); // Set strict CSP
header("Referrer-Policy: no-referrer-when-downgrade"); // Control referrer information
header("Strict-Transport-Security: max-age=31536000; includeSubDomains"); // Enforce HTTPS (if server supports it)

// Optional: Log the redirect if needed
// error_log("Redirect from index.php to index.html: " . $_SERVER['REMOTE_ADDR']);

// Check if the request is using HTTPS (optional)
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
    // Redirect to index.html with status code 301 (permanent redirect)
    header("Location: index.html", true, 301);
} else {
    // Optional: Force HTTPS before redirecting
    // Uncomment the lines below if you want to force HTTPS
    // $host = $_SERVER['HTTP_HOST'];
    // $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    // header("Location: https://$host$uri/index.html", true, 301);
    
    // If not enforcing HTTPS, just redirect
    header("Location: index.html", true, 301);
}

// Ensure the script stops executing after the redirect
exit();
?>