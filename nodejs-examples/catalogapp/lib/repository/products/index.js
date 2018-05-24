// --- /lib/repository/products/index.js
// module name: "./lib/repository/products"

var MongoClient = require("mongodb").MongoClient,
	ObjectID = require("mongodb").ObjectID, 
	url = "mongodb://localhost:27017/catalogdb";

// public interface of this dao object

// module.exports.createProduct = function(){};
// module.exports.getProduct = function(){};
// module.exports.updateProduct = function(){};
// module.exports.deleteProduct = function(){};
// module.exports.getAll = function(){};
// module.exports.getByCategory = function(){};
// module.exports.getByBrand = function(){};

/** 
This method accepts a product object and a callback.
The callback should recieve error and status objects
as parameters
*/
module.exports.createProduct = function(product, callback){
	if(!product || !product.name 
		|| !product.unit_price
		|| !product.category 
		|| !product.brand){
		
		callback({
			"message": "name, unit_price, category and brand required for a product"
		}, null);
		return;
	}

	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");
			products.insert(product, (err, status)=>{
				if(err){
					callback({
						"message": "Error while inserting to products",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, status);
				}
			});
		}

		db.close();
	});
};

/**
This method takes two arguments:
1. id of the product (hexadecimal string)
2. callback to recieve error+data
*/
module.exports.getProduct = function(id, callback){
	if(!id){
		callback({
			message: "id is required, but missing"
		});
		return;
	}

	try{
		id = ObjectID(id);
	}
	catch(e){
		callback({
			message: "supplied id is invalid",
			rootCause: e
		});
		return;
	}

	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			// proucts.findOne({}, (err, doc)=>{});
			products.findOne({
				_id: id
			}, (err, doc)=>{
				if(err){
					callback({
						"message": "Error while getting product",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, doc);
				}

				db.close();
			});
		}
	});
};

/**
Updates a product document
Params:
1. product - document to be updated to the collection
2. callback - handler function to recieve err, status
*/
module.exports.updateProduct = function(product, callback){
	if(!product 
		|| !product._id 
		|| !product.name 
		|| !product.unit_price
		|| !product.category 
		|| !product.brand){
		callback({
			message: "product is not valid object. Must contain id, name, unit_price, category, brand"
		});
		return;
	}

	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			products.updateOne({
				_id: product._id
			}, product, (err, status)=>{
				if(err){
					callback({
						"message": "Error while updating product",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, status);
				}

				db.close();
			});
		}
	});

};


module.exports.deleteProduct = function(id, callback){
	if(!id){
		callback({
			message: "id is required, but missing"
		});
		return;
	}

	try{
		id = ObjectID(id);
	}
	catch(e){
		callback({
			message: "supplied id is invalid",
			rootCause: e
		});
		return;
	}

	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			products.remove({
				_id: id
			}, (err, status)=>{
				if(err){
					callback({
						"message": "Error while deleting product",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, status);
				}

				db.close();
			});
		}
	});
};

/**
This method takes only callback as an argument 
to recieve err+products as parameters
*/
module.exports.getAll = function(callback){
	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			// products.find().toArray((err, docs)=>{});
			products.find().toArray((err, docs)=>{
				if(err){
					callback({
						"message": "Error while getting products",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, docs);
				}

				db.close();
			});
		}
	});
};

/**
Params: 
1. category: string
2. callback: function(err, docs)
*/
module.exports.getByCategory = function(category, callback){
	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			// products.find().toArray((err, docs)=>{});
			products.find({"category": category}).toArray((err, docs)=>{
				if(err){
					callback({
						"message": "Error while getting products",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, docs);
				}

				db.close();
			});
		}
	});
};

/**
Params: 
1. brand: string
2. callback: function(err, docs)
*/
module.exports.getByBrand = function(brand, callback){
	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var products = db.collection("products");

			// products.find().toArray((err, docs)=>{});
			products.find({"brand": brand}).toArray((err, docs)=>{
				if(err){
					callback({
						"message": "Error while getting products",
						"rootCause": err
					}, null);
				}
				else {
					callback(null, docs);
				}

				db.close();
			});
		}
	});
};












