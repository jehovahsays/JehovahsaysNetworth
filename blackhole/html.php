<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    foreach ($_POST as $variable => $value) {
        if (empty($value) || $variable === 'secure-form-answer-Human') {
            continue;
        }

        // Sanitize value
        $value = preg_replace('/[^a-zA-Z0-9_-]/', '_', $value);

        // Generate output
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Redirecting</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 20px; }
                a { display: inline-block; padding: 10px; background: #007BFF; color: #FFF; text-decoration: none; border-radius: 5px; }
                a:hover { background: #0056b3; }
            </style>
        </head>
        <body>
            <p>Click the link to visit the webpage for the keyword <strong>$value</strong></p>
            <a href='./en/$value.html'>$value</a>
        </body>
        </html>";

        // Exit after processing one valid entry
        break;
    }
}
?>