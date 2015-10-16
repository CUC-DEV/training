'use strict'

var assert = require("assert");
var sum = require("../task1-example");
describe('#sumInt', function () {
    describe('sum string num', function () {
        it('should return 15 when sum 1 to 5', function () {
            assert.equal(15, sum.sumInt("1,2,3,4,5"));
        });

        it('should return NAN when non-number string is passing', function () {
            assert.equal(true, isNaN(sum.sumInt("1,2,3,4,5s")));
        });

        it('should return 0 when passing empty string', function () {
            //TODO: add assertion
            assert.equal(0,sum.sumInt(" "));
        });

        it('should return undefined when passing undefined', function () {
            //TODO: add assertion
           assert.equal(undefined,sum.sumInt(undefined))
        });
    });
});
