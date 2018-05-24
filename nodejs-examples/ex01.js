// ex01.js

function factorial(num){
	var f = 1;
	for(var i=1; i<=num; i++){
		f *= i;
	}
	return f;
}

var num = 5;
var fac = factorial(num);

console.log("factorial of " + num + " is " + fac);


// node ex01
