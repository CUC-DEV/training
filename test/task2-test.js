'use strict'

var assert = require("assert");
var sumob = require("../task2-example");
describe('#sumobject', function () {
    describe('sum string num', function () {
        var result={a:3, b:10, c:4};
        it('should return a:3, b:10, c:4', function () {
            assert.equal(3, sumob.sumobject([{a:1, b:2},{a:2, b:8, c:'4'}]).a);
            assert.equal(10, sumob.sumobject([{a:1, b:2},{a:2, b:8, c:'4'}]).b);
            assert.equal(4, sumob.sumobject([{a:1, b:2},{a:2, b:8, c:'4'}]).c);
            });//对象元素有重叠
        it('should return a:1, b:2, c:3,d:4', function () {
            assert.equal(1, sumob.sumobject([{a:1, b:2},{c:'3', d:'4'}]).a);
            assert.equal(2, sumob.sumobject([{a:1, b:2},{c:'3', d:'4'}]).b);
            assert.equal(3, sumob.sumobject([{a:1, b:2},{c:'3', d:'4'}]).c);
            assert.equal(4, sumob.sumobject([{a:1, b:2},{c:'3', d:'4'}]).d);
            });//对象元素无重叠
        it('should return NaN when passing empty string', function () {
            assert.equal(true, isNaN(sumob.sumobject([])));
        });

        it('should return undefined when passing undefined', function () {
             assert.equal(undefined, sumob.sumobject(undefined));
        });
        

    });
});