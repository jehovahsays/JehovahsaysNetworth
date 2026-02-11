<?php
header_remove('X-Powered-By');
header('Cache-control: none, no-cache, private, max-age=0');
header('Pragma: no-cache');
header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-XSS-Protection: 1; mode=block');
header('Vary: Accept-Encoding');
header('Referrer-Policy: same-origin');
header('Connection: Keep-alive');

echo <<<'HTML'
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>localhost</title>
     <meta name="description" content="localhost Wiki – Offline Encyclopedia. Learn, edit, explore." />
  <meta name="theme-color" content="#3366cc" />
  <meta name="color-scheme" content="light dark" />
 
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: blob:; script-src 'self' 'unsafe-inline'; object-src 'none'; style-src 'self' 'unsafe-inline';">
    <meta http-equiv="Referrer-Policy" content="no-referrer">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="Permissions-Policy" content="microphone=(), camera=(), geolocation=(), interest-cohort=()">
    <meta http-equiv="Cache-Control" content="no-store, max-age=0">
<script src="./purify.min.js"></script>
  <script src="./a.js" defer></script>
  <link rel="manifest" href="./manifest.json">
  <link rel="icon" href="./icon-192.png" type="image/png">
  
  <link rel="stylesheet" href="./styles.css" type="text/css">

<link rel="apple-touch-icon" href="./icon-192.png">

    <style>
        /* Base Setup: Minimalist terminal aesthetic */
        body {
            background-color: black;
            color: white;
            font-family: monospace;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }

        /* The Checkbox Hack for secure navigation */
        #menu-toggle { display: none; }

        .hamburger {
            position: fixed;
            top: 20px;
            left: 20px;
            font-size: 30px;
            cursor: pointer;
            z-index: 1000;
            color: peru;
            user-select: none;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.98);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 999;
        }

        nav a {
            color: peru;
            text-decoration: none;
            font-size: 24px;
            margin: 15px 0;
            text-transform: lowercase;
        }

        #menu-toggle:checked ~ nav { display: flex; }
        #menu-toggle:checked ~ .hamburger::before { content: "✕"; }
        .hamburger::before { content: "☰"; }

        article {
            display: none;
            max-width: 600px;
            margin-top: 80px;
            line-height: 1.6;
            color: #aaa;
            animation: fadeIn 0.5s forwards;
        }

        article:target { display: block; }

        .close-btn {
            display: inline-block;
            margin-top: 20px;
            color: peru;
            text-decoration: none;
            border: 1px solid #333;
            padding: 5px 10px;
            font-size: 12px;
            text-transform: lowercase;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="hamburger">
    <input type="text" id="globalInput" placeholder="Enter command..." onkeypress="if(event.key === 'Enter') processInput('globalInput')">
    <button onclick="processInput('globalInput')">search</button>
<script>
// index.html - Global Logic
const responseMap = {
    "main": { speech: "Navigating to the main dashboard.", path: "./#main" },
    "about": { speech: "Navigating to the about section.", path: "./#about" },
    "recent": { speech: "Reviewing recent changes.", path: "./#recent" },
    "terms": { speech: "Opening terms of service.", path: "./#terms" },
    "privacy": { speech: "Opening privacy policy.", path: "./#privacy" },
    "download": { speech: "Accessing the download portal.", path: "./#download" }
};

function processInput(inputId) {
    const inputField = document.getElementById(inputId);
    if (!inputField) return; // Guard clause if input doesn't exist

    const text = inputField.value.toLowerCase().trim();
    if (!text) return;

    const response = responseMap[text];

    if (response) {
        speakAndNavigate(response.speech, response.path);
    } else {
        // Fallback for unrecognized commands
        const msg = new SpeechSynthesisUtterance("Command not recognized in the knowledge base.");
        window.speechSynthesis.speak(msg);
    }
    inputField.value = ''; 
}

function speakAndNavigate(message, url) {
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Check if visual avatar elements exist on the current page
    const mouth = document.getElementById('mouth');
    const avatar = document.getElementById('avatar-container');

    utterance.onstart = () => {
        if (avatar) {
            avatar.classList.remove('hidden');
            avatar.classList.add('visible');
        }
        if (mouth) mouth.classList.add('speaking');
    };

    utterance.onend = () => {
        if (mouth) mouth.classList.remove('speaking');
        
        // Brief delay allows the speech to feel natural before the hash changes
        setTimeout(() => {
            window.location.hash = url.split('#')[1]; // Updates hash safely
            if (avatar && !avatar.matches(':hover')) { 
                avatar.classList.add('hidden'); 
            }
        }, 600);
    };

    window.speechSynthesis.speak(utterance);
}

// Wiki Parser for internal linking
function parseWiki(text) {
    if (!text) return "";
    // Converts [[Page Name]] into <a href="#Page-Name">Page Name</a>
    // Updated to replace spaces with underscores to match your URL preference
    return text.replace(/\[\[([^\]]+)\]\]/g, (match, p1) => {
        const anchor = p1.trim().replace(/ /g, "_");
        return `<a href="#${anchor}" class="wiki-link">${p1}</a>`;
    });
}
</script>			
            <br>
	</label>

    <nav>
	    <a href="#main" onclick="document.getElementById('menu-toggle').checked = false">#main</a>
        <a href="#about" onclick="document.getElementById('menu-toggle').checked = false">#about</a>
		
        <a href="#recent" onclick="document.getElementById('menu-toggle').checked = false">#recent</a>
        <a href="#terms" onclick="document.getElementById('menu-toggle').checked = false">#terms</a>
        <a href="#privacy" onclick="document.getElementById('menu-toggle').checked = false">#privacy</a>
        <a href="#download" onclick="document.getElementById('menu-toggle').checked = false">#download</a>
    </nav>

    <main>
	
        <article id="about">
            <h2>About</h2>
            <p>localhost 127.0.0.1 - Hardware-Software Sovereignty.</p>
            <a href="#" class="close-btn">close article</a>
        </article>

        <article id="terms">
            <h2>Terms</h2>
            <p>This internal subconscious environment is self-hosted and local-first.</p>
            <a href="#" class="close-btn">close article</a>
        </article>

        <article id="privacy">
            <h2>Privacy</h2>
            <p>Zero third-party dependencies. Your data belongs to your machine.</p>
            <a href="#" class="close-btn">close article</a>
        </article>

        <article id="download">
            <h2>Download</h2>
            <p><a href="./localhost.zip" class="close-btn">Download</a> the source code to create your own secure local instance.</p>
            <a href="#" class="close-btn">close article</a>
        </article>
		
	    <article id="main">
		
            <h2>main</h2>
            <a href="./index.htm#main" class="close-btn">
			Turn on Javascript</a><br>
        </article>	

        <article id="recent">
            <h2>Recent</h2>
            <p>url was incorrect format when it creates and shows users %20 instead of<br>
            _ or - for example if a user created a new page named Formatting Examples<br>
			https://127.0.0.1/#Formatting%20Examples.<br>
			</p>
            <a href="#" class="close-btn">close article</a>
        </article>		
    </main>
	
<script>
'use strict';

/**
 * Sovereign Interaction Protections
 */
(function() {
    // 1. Disable Right-Click Context Menu
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Disable Inspection Keyboard Shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U)
    document.addEventListener('keydown', function(e) {
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
            console.warn("Security: Inspection shortcuts are restricted.");
        }
    });

    // 3. The STOP! Security Warning (Self-XSS Protection)
    const warningTitle = "STOP!";
    const warningText = "This is a developer feature. Copy-pasting code here is a scam and will compromise your data.";
    
    console.log(`%c${warningTitle}`, "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;");
    console.log(`%c${warningText}`, "color: peru; font-size: 16px; font-family: monospace;");
})();
</script>

	<script>
if (window.location.pathname.endsWith('.html') || window.location.pathname.endsWith('.htm')) {
    const cleanURL = window.location.href.replace(/index\.(html|htm)/, '');
    window.history.replaceState(null, '', cleanURL);
}
</script>

<script>
// Add to the script block in index.html
window.addEventListener('load', () => {
    // If user lands on index.html without a hash, force them to the splash gate
    if (!window.location.hash || window.location.hash === '#main') {
        window.location.hash = 'main';
        // Optional: Add a subtle console log for the AI's internal state
        console.log("External Conscious Initialized.");
    }
});
</script>

</body>
</html>



HTML;
?>
