var express = require("express");
var app = express();

app.use(express.static(__dirname + "/../www"));

app.listen(8080, function(){
	console.log("server started at port 8080.");
	console.log("using " + __dirname + "/../www" + " for static files");
});
