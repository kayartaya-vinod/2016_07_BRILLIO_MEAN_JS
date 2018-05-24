var users = require("../../repository/users");

// this is a service function;
// makes use of the repository
module.exports.register = function(user, callback){

	// need to do validation
	if(user && !user.name){
		callback({
			message: "name is missing"
		});
		return;
	}

	if(user.c_password){
		delete user.c_password;	
	}
	
	// and perform persistence using repository
	users.addUser(user, callback);
};