<?php
// redirect to http index.html
// Set security headers
header("X-Frame-Options: DENY"); // Prevent clickjacking
header("X-XSS-Protection: 1; mode=block"); // Enable XSS protection
header("X-Content-Type-Options: nosniff"); // Prevent MIME-sniffing
header("Content-Security-Policy: default-src 'self'"); // Set strict CSP
header("Location: index.html");
exit();
?>