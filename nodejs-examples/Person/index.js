// Person/index.js
// Module name will be "Person"
// represents a constructor


function Person (){
	// create members by initializing them to defaults
	this.name = "";
	this.age = 0;
	this.city = "Bangalore";
};

Person.prototype.info = function(){
	console.log(this.name + " ("
		+ this.age + " years) is from " 
		+ this.city);
};

module.exports = Person;