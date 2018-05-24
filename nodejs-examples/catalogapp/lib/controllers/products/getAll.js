// this module represents a function, that makes
// use of the service layer to get all products 
// and writes the same to the response as JSON

var products = require("../../service/products");

module.exports = function(req, resp){

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