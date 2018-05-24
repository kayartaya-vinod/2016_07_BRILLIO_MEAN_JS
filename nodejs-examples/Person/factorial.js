
function fnFact(num){

	var f = 1;
	for(var i=1; i<=num; i++){
		f *= i;
	}
	return f;
}

module.exports = fnFact;