var products = require("./lib/repository/products");

var id = "5796e12f017548fa05cca960";

products.deleteProduct(id, (err, status)=>{
	if(err){
		console.log(err);
	}
	else {
		console.log(status);
	}
});

console.log("t02 finished executing");