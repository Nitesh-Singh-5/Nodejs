// npm install --save-dev nodemon
// Craete Web Server - http Module
import http from 'http';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Response from Server');
    if (req.url != '/favicon.ico') {
        console.log(req.url);
    }
    console.log(req.method);
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log("Server running at http://localhost:8000")
});