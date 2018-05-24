var users = require("../../service/users");

module.exports.register = function(req, resp){

	users.register(req.body, (err, status)=>{
		if(err){
			resp.json({success: false, 
				message: "registration failed",
				error: err });
		}
		else {
			resp.json({success: true, 
				message: "registration sucessful",
				_id: status._id });
		}
	});
}