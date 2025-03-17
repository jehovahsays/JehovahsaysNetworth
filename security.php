<?php
declare(strict_types=1);
session_start();

// Generate CSRF Token if not set
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Set HTTP Security Headers
header("Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{$_SESSION['csrf_token']}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;");
header("X-Frame-Options: DENY");
header("X-Content-Type-Options: nosniff");
header("X-XSS-Protection: 1; mode=block");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), fullscreen=()");
header("Strict-Transport-Security: max-age=63072000; includeSubDomains; preload");

// Prevent Clickjacking
header("X-Frame-Options: DENY");

// Disable PHP Error Display (to prevent information leaks)
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// Prevent MIME Sniffing
header("X-Content-Type-Options: nosniff");

// Secure session cookies
session_set_cookie_params([
    'httponly' => true,
    'secure' => isset($_SERVER['HTTPS']), // Only send over HTTPS
    'samesite' => 'Strict'
]);

// Secure user input function
function secureInput(string $data): string {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

// Secure database connection using PDO
function getDBConnection(): PDO {
    $dsn = "mysql:host=localhost;dbname=secure_db;charset=utf8mb4";
    $username = "secure_user";
    $password = "secure_password";
    try {
        $pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        return $pdo;
    } catch (PDOException $e) {
        exit("Database connection error.");
    }
}

// Process Form Submission (CSRF Protected)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die("CSRF validation failed.");
    }

    $name = secureInput($_POST['name'] ?? '');
    if (!empty($name)) {
        $pdo = getDBConnection();
        $stmt = $pdo->prepare("INSERT INTO users (name) VALUES (:name)");
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->execute();
        echo "Data submitted securely.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure PHP Page</title>
    <script src="secure.js" nonce="<?php echo $_SESSION['csrf_token']; ?>"></script>
</head>
<body>

    <h1>Secure PHP Web Page</h1>
    <p>Your connection is protected with security best practices.</p>

    <!-- Secure Form (CSRF Protected) 
    <form id="secureForm" method="POST" action="">
        <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
    </form> -->

    <script nonce="<?php echo $_SESSION['csrf_token']; ?>">
        "use strict";

        // Disable right-click to prevent basic inspection
        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // Secure Fetch API (Prevents CSRF Attacks)
        async function secureFetch(url, options = {}) {
            const defaultOptions = {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": document.querySelector('input[name="csrf_token"]').value
                }
            };
            const response = await fetch(url, { ...defaultOptions, ...options });
            return response.ok ? response.json() : Promise.reject("Request failed");
        }
    </script>

</body>
</html>