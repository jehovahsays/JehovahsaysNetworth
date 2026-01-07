/*
    Secured Router for MEV Wiki (Universal Membrane)
    Target Folder: /mev
    Features: Dynamic Path Detection, Query Sanitization, P2P Chat Support
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
    '.xml': 'application/xml',
    '.dat': 'text/plain' // Supports the Blackhole ledger
};

/**
 * DYNAMIC ENVIRONMENT SENSOR:
 * Resolves the difference between local root and nested GitHub structures.
 */
function getStaticDir() {
    const primary = path.join(__dirname, 'mev');
    const nested = path.join(__dirname, 'mev', 'mev');
    
    if (fs.existsSync(nested)) return nested;
    if (fs.existsSync(primary)) return primary;
    return __dirname; 
}

const STATIC_DIR = getStaticDir();

const server = http.createServer((req, res) => {
    req.on('error', err => {
        console.error('Request Error:', err);
        res.statusCode = 400;
        res.end('400: Bad Request');
    });

    // 1. Sanitize: Strip query strings (?t=) used by mobile cache-busters
    const urlClean = req.url.split('?')[0];
    
    // 2. Normalize and Sanitize the Path
    let safePath = path.normalize(urlClean).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    // 3. Resolve Path inside the Membrane
    let filePath = path.join(STATIC_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                // FALLBACK: If file is not in /mev/, check the app root.
                // This ensures /chat/ and /blackhole/ remain accessible.
                const fallbackPath = path.join(__dirname, safePath);
                if (fs.existsSync(fallbackPath) && fallbackPath !== filePath) {
                    return fs.readFile(fallbackPath, (err2, data2) => {
                        const ext = path.extname(fallbackPath).toLowerCase();
                        res.setHeader('Content-Type', MIME_TYPES[ext] || 'text/plain');
                        res.end(data2);
                    });
                }

                console.error(`[404] Not Found: ${filePath}`);
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
    console.log(`[${new Date().toLocaleTimeString()}] MEV Membrane active on port ${PORT}`);
    console.log(`Serving from: ${STATIC_DIR}`);
    console.log(`Local Gateway: http://127.0.0.1`);
});
