'use strict'

var assert = require("assert");
var sum = require("../js-task-1.2.js");
describe('#sumobj', function () {
    describe('sum object', function () {
        it('should return 3,4,5 when the object array is [{a:1,b:2,c:5},{a:2,b:2}]', function () {
            assert.equal(3, (sum.sumobj([{a:1,b:2,c:5},{a:2,b:2}])).a);
			assert.equal(4, (sum.sumobj([{a:1,b:2,c:5},{a:2,b:2}])).b);
			assert.equal(5, (sum.sumobj([{a:1,b:2,c:5},{a:2,b:2}])).c);
        });

        it('should return NaN when passing empty string', function () {
	    	assert.equal(true,sum.sumobj(""));
        });

        it('should return undefined when passing undefined', function () {
            assert.equal(undefined,sum.sumobj(undefined));
        });
    });
});