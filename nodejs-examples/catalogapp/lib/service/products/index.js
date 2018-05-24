// ---- lib/service/products/index.js

var products = require("../../repository/products");

// facade for getting all products from repository
// may involve some business logic such as 
// validating user, etc 
/**
Gets a product by id
Params: 
1. id:string - id of the product
2. callback - to recieve (error, product)
*/
module.exports.getProductById = function(id, callback){
	if(id && typeof id != "string"){
		callback({
			message: "id must be a string, got " + typeof id
		});
		return;
	}
	products.getProduct(id, callback);
};

/**
Gets all products
Params: 
1. callback - to recieve (error, product)
*/
module.exports.getAllProducts = function(callback){
	products.getAll(callback);
};
