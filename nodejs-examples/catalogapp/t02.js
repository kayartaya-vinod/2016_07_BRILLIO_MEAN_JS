var products = require("./lib/repository/products");

var id = "5796e12f017548fa05cca961";

products.getProduct(id, (err, product)=>{
	if(err){
		console.log(err);
	}
	else {
		console.log("product is", product);
	}
});

console.log("t02 finished executing");