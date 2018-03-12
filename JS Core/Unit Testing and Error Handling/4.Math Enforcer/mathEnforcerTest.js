let assert=require('chai').assert;

let mathEnforcer=require(
    "./mathEnforcer.js")
    .mathEnforcer;

describe('mathEnforcer',function(){
    it('addFive function with wrong parameter types, should return undefined',function(){
        assert.equal(mathEnforcer.addFive(undefined),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.addFive('str'),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.addFive([]),undefined,'Function did not return the correct result!');
    });
    it('addFive function correct parameter, should return correct result',function(){
        assert.equal(mathEnforcer.addFive(5),10,'Function did not return the correct result!');
        assert.equal(mathEnforcer.addFive(1),6,'Function did not return the correct result!');
        assert.equal(mathEnforcer.addFive(1.3),6.3,'Function did not return the correct result!');
        assert.equal(mathEnforcer.addFive(-1),4,'Function did not return the correct result!');
    });
    it('subtractTen function with wrong parameter types, should return undefined',function(){
        assert.equal(mathEnforcer.subtractTen(undefined),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.subtractTen('str'),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.subtractTen([]),undefined,'Function did not return the correct result!');
    });
    it('subtractTen function correct parameter, should return correct result',function(){
        assert.equal(mathEnforcer.subtractTen(5),-5,'Function did not return the correct result!');
        assert.equal(mathEnforcer.subtractTen(-1),-11,'Function did not return the correct result!');
        assert.equal(mathEnforcer.subtractTen(1),-9,'Function did not return the correct result!');
        assert.equal(mathEnforcer.subtractTen(-1.5),-11.5,'Function did not return the correct result!');
    });


    it('sum function with multiple consecutive incorrect params, should return undefined',function(){
        assert.equal(mathEnforcer.sum(),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.sum('str',1),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.sum(1,'str'),undefined,'Function did not return the correct result!');
        assert.equal(mathEnforcer.sum('str','str'),undefined,'Function did not return the correct result!');
    });

    it('with multiple consecutive correct params, should return correct values',function(){
        assert.equal(mathEnforcer.sum(1,-1),0,'Function did not return the correct result!');
        assert.equal(mathEnforcer.sum(10,5),15,'Function did not return the correct result!');
        assert.equal(mathEnforcer.sum(3.5,1.5),5,'Function did not return the correct result!');
    });
});