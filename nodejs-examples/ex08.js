// ex08.js - http server

var http = require("http"); // core module

console.log("creating a server...");
var server = http.createServer(function(req, resp){
	resp.end("Hello Nodejs!");
});
console.log("server created!");

server.listen(3000, function(){
	console.log("server listening at port 3000");
});
