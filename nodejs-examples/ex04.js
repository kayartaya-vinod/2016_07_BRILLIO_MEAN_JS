var factorial = require("./Person/factorial");

var Person = require("./Person");

console.log("typeof Person is " + typeof Person);

var p1 = new Person();
console.log("typeof p1 is " + typeof p1);

console.log(p1);
p1.info();

console.log("factorial(5)", factorial(5));
