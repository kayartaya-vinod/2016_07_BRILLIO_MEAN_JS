var MongoClient = require("mongodb").MongoClient,
	ObjectID = require("mongodb").ObjectID, 
	url = "mongodb://localhost:27017/catalogdb";

module.exports.addUser = function(user, callback){
	MongoClient.connect(url, (err, db)=>{
		if(err){
			callback({
				"message": "Error while connecting to db",
				"rootCause": err
			}, null);
		}
		else {
			var users = db.collection("users");
			users.insert(user, (err, status)=>{
				if(err){
					callback({
						"message": "Error while inserting to users collection",
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
}

