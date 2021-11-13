// npm install --save-dev nodemon
// Craete Web Server - http Module
import { fs } from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, "OK", { 'Content-Type': 'text/html' })
    if (req.url === '/') {
        res.end("<h1>Home page</h1>")
    }
    else if (req.url === '/about') {
        res.end("<h1>About page</h1>")
    }
    else {
        res.end("<h1>404 Page not Found!!</h1>")
    }

    // or

    // if (req.url === '/') {
    // fs.readFile('./public/home.html',(error,data)=>{
    //     if(error) throw error;
    //     res.end(data);
    // })
    // }

});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log("Server running at http://localhost:8000")
});