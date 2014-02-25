// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

var fs = require('fs');

var fileContent= fs.readFileSync('pledge.mp3');
var binaryBuffer= new Buffer(fileContent, 'binary');
var base64MP3= binaryBuffer.toString('base64');

// console.log("The file is:" + base64MP3);

var http = require('http');
var server = http.createServer(); 
var handleReq = function(req,res){
	res.writeHead(200, {});
	console.log("Trying to write base64 as response...");
	res.end(base64MP3); 
};

server.on('request', handleReq); 
server.listen(8888);