module.exports = function(req, resp){

	resp.set("Content-Type", "text/html");
	resp.write("<html><body><h1>");
	resp.write("Express webapp</h1><hr /></body></html");
	resp.end();
}