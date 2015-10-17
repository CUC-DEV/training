'use strict'

function Complex(real, imaginary) {
	this.r = real || 0;
	this.i = imaginary || 0;
}

Complex.prototype = {
	contruct: Complex,
	add: function (c) {
		this.r += c.r;
		this.i += c.i;
		return this;
	},

	substract: function (c) {
		this.r -= c.r;
		this.i -= c.i;
		return this;
	},

	toString: function () {
		return "" + this.r + (this.i>=0?("+"+this.i):this.i) + "i";
	}
}

function isImaginary(part) {
	return part && (part.indexOf("i") > 0);
}

function getImaginary(part) {
	return Number(part.slice(0, part.length - 1));
}

Complex.of = function (exp) {
	var r = 0, i = 0;
	if(/^[\+\-]?\d+i?$/g.test(exp)){
		// only one number
		var n = exp;
		if(isImaginary(exp)){
			i = getImaginary(exp)
		}else{
			r = Number(n);
		}
	}else{
		var match = /([\+\-]?\d+i?)([\+\-]\d+i?)/g.exec(exp);
		var n1 = match[1], n2 = match[2];
		if(isImaginary(n1)){
			i = getImaginary(n1);
			r = Number(n2);
		}else{
			i = getImaginary(n2);
			r = Number(n1);
		}
	}
	
	return new Complex(r, i);
}

exports.Complex = Complex;