// ex07.js - reading files

var fs = require("fs"); // core module

console.log("ex07 started!");
console.log("reading a file....");
fs.readFile("./ex01.js", function(err, content){
	if(!err){
		console.log(""+content);
	}
	else {
		console.log(err);
	}
});
console.log("ex07 finished!");
