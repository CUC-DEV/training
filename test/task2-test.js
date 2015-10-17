'use strict'

var assert = require("assert");
var ap= require("../js-task-1.2");
describe('#sum', function () {
    describe('sum string num', function () {
        it('should return [2,4,6] when sum [1,2,3]]', function () {
            assert.equal(2,ap.obsum(("1,2,3"),("1,2,3"))[0]);
             assert.equal(4,ap.obsum(("1,2,3"),("1,2,3"))[1]);
              assert.equal(6,ap.obsum(("1,2,3"),("1,2,3"))[2]);
        });
        
        it('should return NAN when non-number string is passing', function () {
            assert.equal(true, isNaN(ap.obsum(("1,2,5s"),("1"))));
        });
        it('should return undefined when passing undefined', function () {
           assert.equal(undefined,ap.obsum(undefined,undefined))
        });
    });
});
