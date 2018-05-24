module.exports = function(req, resp){
	var info = {};
	info.author = "Vinod";
	info.datetime = new Date();

	resp.json(info);
}