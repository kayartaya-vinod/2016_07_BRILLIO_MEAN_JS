var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// enable CORS
app.use(function(req, resp, next) {
	resp.header("Access-Control-Allow-Origin", "*");
	resp.header("Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Accept");
	resp.header("Access-Control-Allow-Methods",
		"OPTIONS,GET,PUT,POST,DELETE");
	next();
});



app.get("/api/products", 
	require("./lib/controllers/products").getAll);

app.get("/api/products/:id", 
	require("./lib/controllers/products").getProductById);

app.post("/api/users",
	require("./lib/controllers/users").register);

app.listen(3000, ()=>{
	console.log("server started at port 3000");
});










