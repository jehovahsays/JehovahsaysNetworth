const http = require('http');
const fs = require('fs');
const path = require('path');

const STATIC_DIR = __dirname;

const server = http.createServer((req, res) => {
    const filePath = path.join(STATIC_DIR, 'index.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('404: index.html not found in current directory');
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(80);
