'use strict'

var assert = require("assert");
var math = require("../math");
describe('#math', function () {
    describe('method of in complex', function () {
        it('should return complex(1+0i) when parse 1,+1', function () {
            var c = new math.Complex.of('1');
            assert.equal(1, c.r);
            assert.equal('1+0i', c.toString());
            c = new math.Complex.of('+1');
            assert.equal(1, c.r);
            assert.equal('1+0i', c.toString());
        });
        
        it('should return complex(1+2i) when parse 1+2i', function () {
            var c = new math.Complex.of('1+2i');
            assert.equal(1, c.r);
            assert.equal(2, c.i);
            assert.equal('1+2i', c.toString());
        });
        
        it('should return complex(1-2i) when parse 1-2i', function () {
            var c = new math.Complex.of('1-2i');
            assert.equal(1, c.r);
            assert.equal(-2, c.i);
            assert.equal('1-2i', c.toString());
        });
        
         it('should return complex(1-2i) when parse -2i+1', function () {
            var c = new math.Complex.of('-2i+1');
            assert.equal(1, c.r);
            assert.equal(-2, c.i);
            assert.equal('1-2i', c.toString());
        });  
    });
    describe('method of add in complex', function () {
         it('should return complex(2) when parse 1,+,1', function () {
            var c1 = new math.Complex.of('1');
            var c2= new math.Complex.of('1');
            var result= c1.add(c2);
            assert.equal(2, result.r);
            assert.equal(0, result.i);
            assert.equal('2+0i', result.toString());
         });  
          it('should return complex(2) when parse 1,+,1+2i', function () {
            var c1 = new math.Complex.of('1');
            var c2= new math.Complex.of('1+2i');
            var result= c1.add(c2);
            assert.equal(2, result.r);
            assert.equal(2, result.i);
            assert.equal('2+2i', result.toString());
         });  
        
    
    
    });
    describe('method of substract in complex', function () {
         it('should return complex(2) when parse 1,-,1', function () {
            var c1 = new math.Complex.of('1');
            var c2= new math.Complex.of('1');
            var result= c1.substract(c2);
            assert.equal(0, result.r);
            assert.equal(0, result.i);
            assert.equal('0+0i', result.toString());
         });  
          it('should return complex(2) when parse 2+2i,-,1', function () {
            var c1 = new math.Complex.of('2+2i');
            var c2= new math.Complex.of('1');
            var result= c1.substract(c2);
            assert.equal(1, result.r);
            assert.equal(2, result.i);
            assert.equal('1+2i', result.toString());
         });  
        
    
    
    });
    
    
    
    
    
    
    
    
    
});