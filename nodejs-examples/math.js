
// module.exports = {}; // need not be done; implicit
console.log(module.exports);

module.exports.factorial = function (num){

	var f = 1;
	for(var i=1; i<=num; i++){
		f *= i;
	}
	return f;
}
console.log(module.exports);


module.exports.square = function(num){
	return num*num;
}
console.log(module.exports);


module.exports.cube = function(num){
	return num*num*num;
}
console.log(module.exports);
