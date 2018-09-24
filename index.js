var http = require('http');

var server = http.createServer(function(req, res){
    res.end('hello world');
});

server.listen(3000);

console.log('Server started on port 3000');