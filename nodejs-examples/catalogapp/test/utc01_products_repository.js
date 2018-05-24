// utc01_products_repository.js

var assert = require("chai").assert;
var products = require("../lib/repository/products");
var should = require("chai").should();
var ObjectID = require("mongodb").ObjectID;

// test suite
describe("Testing products repository", function(){

	it("should add a new product", function(done){

		var product = {
			// _id: ObjectID("5796e12f017548fa05cca961"),
			name: "Test",
			category: "Test",
			brand: "Test",
			unit_price: 10.34
		};

		products.createProduct(product, function(err, status){
			assert.equal(err, null);
			status.should.have.property("result");
			status.should.have.property("insertedCount");
			assert.equal(status.insertedCount, 1);
			done();
		});
	});


	// test case
	var id = "5796e12f017548fa05cca961";
	it("should get product for id "+id, function(done){

		products.getProduct(id, function(error, prd){
			assert.equal(prd.name, "Onion");
			assert.equal(prd.unit_price, 45);
			assert.equal(prd.category, "vegitable");

			done(); // notify mocha that the test case is finished
		});
	});

});














