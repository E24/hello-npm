const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello, world!");
});

server.listen(3000, 'localhost', () => {
    console.log("I'm alive 🥳 Call me 📱");
});