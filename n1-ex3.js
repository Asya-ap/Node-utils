const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/plain');
    res.write('Love you to the moon and back');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});