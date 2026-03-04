/* MEV Router: Pretty URL Support
   Maps /mev/ to /mev/index.html internally
*/
const http = require('http');
const fs = require('fs');
const path = require('path');

const STATIC_DIR = __dirname;

const server = http.createServer((req, res) => {
    const urlClean = req.url.split('?')[0];
    let safePath = path.normalize(urlClean).replace(/^(\.\.[\/\\])+/, '');

    // Default to root index
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    let filePath = path.join(STATIC_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        // Pretty URL Logic: If user visits /mev/, serve /mev/index.html
        if (!err && stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('404: Not Found');
                return;
            }
            // Standard MIME response...
            res.end(data);
        });
    });
});

server.listen(80);
