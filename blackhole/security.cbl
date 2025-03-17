IDENTIFICATION DIVISION.
PROGRAM-ID. SECURE-WEBPAGE.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.

DATA DIVISION.
WORKING-STORAGE SECTION.

* Security Headers
01 NEWLINE PIC X VALUE X"0A".
01 CONTENT-TYPE PIC X(50) VALUE "Content-Type: text/html".
01 HEADER-CSP PIC X(200) VALUE "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';".
01 HEADER-XFRAME PIC X(50) VALUE "X-Frame-Options: DENY".
01 HEADER-XSS PIC X(50) VALUE "X-XSS-Protection: 1; mode=block".
01 HEADER-NOSNIFF PIC X(50) VALUE "X-Content-Type-Options: nosniff".
01 HEADER-REFERRER PIC X(50) VALUE "Referrer-Policy: strict-origin-when-cross-origin".
01 HEADER-STS PIC X(100) VALUE "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload".
01 HEADER-PERMISSIONS PIC X(100) VALUE "Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()".

PROCEDURE DIVISION.
    DISPLAY CONTENT-TYPE.
    DISPLAY NEWLINE.
    DISPLAY HEADER-CSP.
    DISPLAY NEWLINE.
    DISPLAY HEADER-XFRAME.
    DISPLAY NEWLINE.
    DISPLAY HEADER-XSS.
    DISPLAY NEWLINE.
    DISPLAY HEADER-NOSNIFF.
    DISPLAY NEWLINE.
    DISPLAY HEADER-REFERRER.
    DISPLAY NEWLINE.
    DISPLAY HEADER-STS.
    DISPLAY NEWLINE.
    DISPLAY HEADER-PERMISSIONS.
    DISPLAY NEWLINE.
    DISPLAY NEWLINE.

    DISPLAY "<!DOCTYPE html>".
    DISPLAY "<html lang='en'>".
    DISPLAY "<head>".
    DISPLAY "    <meta charset='UTF-8'>".
    DISPLAY "    <meta http-equiv='X-UA-Compatible' content='IE=edge'>".
    DISPLAY "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>".
    DISPLAY "    <title>Secure COBOL Page</title>".
    DISPLAY "    <script>".
    DISPLAY "        'use strict';".
    DISPLAY "        document.addEventListener('contextmenu', event => event.preventDefault());".
    DISPLAY "    </script>".
    DISPLAY "</head>".
    DISPLAY "<body>".
    DISPLAY "    <h1>Secure COBOL Web Page</h1>".
    DISPLAY "    <p>Your connection is protected with security best practices.</p>".
    DISPLAY "</body>".
    DISPLAY "</html>".

    STOP RUN.