/*
    Secured Router for MEV Wiki
    Fixes: Path Traversal, MIME Types, Port Handling, and Directory Indexing
*/
const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. MIME Type Map: Essential for images and PWA assets to load correctly
const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.txt': 'text/plain',
    '.xml': 'application/xml'
};

const server = http.createServer((req, res) => {
    // Basic error handling for the request
    req.on('error', err => {
        console.error('Request Error:', err);
        res.statusCode = 400;
        res.end('400: Bad Request');
    });

    // 2. Normalize and Sanitize the Path (Fixes Path Traversal)
    let safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    let filePath = path.join(__dirname, safePath);

    // 3. Special Route: Date (Existing Logic)
    if (req.url === '/date') {
        res.setHeader('Content-Type', 'text/plain');
        return res.end(new Date().toISOString());
    }

    // 4. Directory & File Serving Logic
    // First, check if the path exists and if it is a directory
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            // If user visits /blackhole/, point them to /blackhole/index.html
            filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`File Not Found: ${filePath}`);
                // Serve your custom 404 page
                fs.readFile(path.join(__dirname, '404.html'), (err404, data404) => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data404 || '404: File Not Found');
                });
                return;
            }

            // 5. Set Correct Content-Type based on extension
            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            
            // Security Header to prevent MIME sniffing
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.end(data);
        });
    });
});

// 6. Port Handling: Use 8080 if 80 requires root privileges
const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`MEV Wiki started on port ${PORT}`);
    if(process.env.NODELAB === "true"){
        console.log("Local Environment: http://127.0.0.1");
    }
});
