let expect=require('chai').expect;
let assert=require('chai').assert;
require("chai").should();

Object.defineProperty(global, "should", {
    value: require("chai").Should(),
    enumerable: true,
    configurable: true,
    writable: true
});

let isOddOrEven=require(
    "C:\\Users\\A053\\WebstormProjects\\JavaScript Softuni\\JS Core\\Unit Testing and Error Handling\\2.Even or Odd\\isOdd.js")
    .isOddOrEven;

describe('isOddOrEven',function(){
    it('with a number parameter, should return undefined',function(){
        expect(isOddOrEven(13)).to.equal(undefined,'Function did not return the correct result!');
    });
    // it('with a object parameter, should return undefined',function(){
    //     expect(isOddOrEven({name:'Kiro'})).should.equal(undefined,'Function did not return the correct result!');
    // });
    it('with an even length string, should return correct result',function(){
        assert.equal(isOddOrEven('roar'),'even','Function did not return the correct result!');
    });
    it('with an add length string, should return correct result',function(){
        expect(isOddOrEven('gosho')).to.equal('odd','Function did not return the correct result!');
    });
    it('with multiple consecutive correct checks, should return correct values',function(){
        expect(isOddOrEven('dog')).to.equal('odd','Function did not return the correct result!');
        expect(isOddOrEven('brain')).to.equal('odd','Function did not return the correct result!');
        expect(isOddOrEven('unit')).to.equal('even','Function did not return the correct result!');
    });
});