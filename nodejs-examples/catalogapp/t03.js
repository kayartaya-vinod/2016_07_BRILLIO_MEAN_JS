var products = require("./lib/repository/products");

products.getAll((err, products)=>{
	if(err){
		console.log(err);
	}
	else {
		console.log("There are " + products.length + " products!");
	}
});

products.getByCategory("vegitable", (err, products)=>{
	if(err){
		console.log(err);
	}
	else {
		console.log("There are " + products.length + " vegitables!");
	}
});

products.getByBrand("Zespri", (err, products)=>{
	if(err){
		console.log(err);
	}
	else {
		console.log("There are " + products.length + " products of Zespri brand!");
	}
});

console.log("t02 finished executing");









