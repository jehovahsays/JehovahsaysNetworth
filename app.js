/*
    Secured Router for MEV Wiki
    Target Folder: /mev
*/
const http = require('http');
const fs = require('fs');
const path = require('path');

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

// Define the subdirectory to serve
const STATIC_DIR = path.join(__dirname, 'mev');

const server = http.createServer((req, res) => {
    req.on('error', err => {
        console.error('Request Error:', err);
        res.statusCode = 400;
        res.end('400: Bad Request');
    });

    // 1. Normalize and Sanitize the Path
    let safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    // 2. Point to the 'mev' folder instead of root
    let filePath = path.join(STATIC_DIR, safePath);

    if (req.url === '/date') {
        res.setHeader('Content-Type', 'text/plain');
        return res.end(new Date().toISOString());
    }

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`File Not Found: ${filePath}`);
                // Looking for 404.html inside the 'mev' folder
                fs.readFile(path.join(STATIC_DIR, '404.html'), (err404, data404) => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data404 || '404: File Not Found');
                });
                return;
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.end(data);
        });
    });
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`MEV Wiki (serving /mev) started on port ${PORT}`);
    if(process.env.NODELAB === "true"){
        console.log("Local Environment: http://127.0.0.1");
    }
});
