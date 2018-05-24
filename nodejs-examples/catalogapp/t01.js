// t01.js
// testing products.createProduct

var products = require("./lib/repository/products");
var ObjectID = require('mongodb').ObjectID
var prd = {
	// _id: ObjectID("5796f2ef1a476621ade5770e"),
	name: "Water bottle",
	category: "grocery",
	brand: "Fosters",
	unit_price: 10.5
};

products.createProduct(prd, (err, status)=>{
	if(err){
		console.log("There was an error!!", err);
	}
	else {
		console.log("status", status);
	}
});

console.log("t01 finished executing.");