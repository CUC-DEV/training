'use strict'

var math = require('./math');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


var doCalulate = function () {
	rl.question("Give me an expression to calculate: ", function (expression) {
		// TODO: process expression and output result;
		if (expression == 'exit') rl.close();
		else {
			var result = parseExpression(expression)
			console.log("This is result: ", result);
			doCalulate();
		}
	});
}

doCalulate();


// 5+3i,+,2+1i
function parseExpression(expression) {
	var res="toCalculate";
	var ops = expression.split(',');
	var c1 = math.Complex.of(ops[0]);
	var op = ops[1];
	var c2 = math.Complex.of(ops[2]);
	switch(op){
		case '+' : res = c1.add(c2).toString(); break;
		case '-' : res = c1.substract(c2).toString();break;
		case '*' : res = c1.multiplication(c2).toString();break;
			}
	return res;
}