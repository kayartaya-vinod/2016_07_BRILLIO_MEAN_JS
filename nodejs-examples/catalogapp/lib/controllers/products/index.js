var products = require("../../service/products");


module.exports.getAll = function(req, resp){

	products.getAllProducts((err, products)=>{
		if(err){
			// to be handled later
		}
		else {
			// adds "Content-Type" header
			// sets the repsonse code to 200
			// converts products to json string
			// ends the response by calling end()
			resp.json(products);
		}
	});

};

module.exports.getProductById = (req, resp)=>{

	var id = req.params["id"];
	products.getProductById(id, (err, product)=>{
		if(err){
			// later handled in different way!!
			resp.end("There was an error: " + err.message);
		}
		else {
			resp.json(product);
		}
	});
};