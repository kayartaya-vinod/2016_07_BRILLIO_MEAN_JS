var products = require("../../service/products");

module.exports = (req, resp)=>{

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