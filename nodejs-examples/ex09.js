// ex09.js - using express module

var express = require("express");

var app = express();

// HTTP GET REQUEST
app.get("/", require("./handlers/rootHandler"));

// HTTP GET REQUEST for "/about"
app.get("/about", require("./handlers/aboutHandler"));


app.listen(3000, function(){
	console.log("application is listening at port 3000");
});