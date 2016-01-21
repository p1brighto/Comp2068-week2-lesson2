import http = require('http');

var hostname:string = '127.0.0.1';
var port:number =process.env.PORT|| 8080;

http.createServer(function(req:http.serverRequest))
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, function (){
    console.log(`Server running at http://${hostname}:${port}/`);
});