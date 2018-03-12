let expect=require('chai').expect;
let assert=require('chai').assert;
require("chai").should();

Object.defineProperty(global, "should", {
    value: require("chai").Should(),
    enumerable: true,
    configurable: true,
    writable: true
});

let lookupChar=require(
    "./lookupChar.js")
    .lookupChar;

describe('lookupChar',function(){
    it('with undefined params, should return undefined',function(){
        assert.equal(lookupChar(undefined,undefined),undefined,'Function did not return the correct result!');
    });
    it('with no params, should return undefined',function(){
        assert.equal(lookupChar(),undefined,'Function did not return the correct result!');
    });
    it('with missing index param, should return undefined',function(){
        assert.equal(lookupChar('abc'),undefined,'Function did not return the correct result!');
    });
    it('with a number parameter, should return undefined',function(){
        assert.equal(lookupChar(13,'as'),undefined,'Function did not return the correct result!');
    });
    it('with a array parameter, should return undefined',function(){
        assert.equal(lookupChar([],54),undefined,'Function did not return the correct result!');
    });
    it('with a object parameter, should return undefined',function(){
        assert.equal(lookupChar({},0),undefined,'Function did not return the correct result!');
    });
    it('with a object parameter, should return undefined',function(){
        assert.equal(lookupChar(13,0),undefined,'Function did not return the correct result!');
    });
    it('with a wrong type index parameter, should return undefined',function(){
        assert.equal(lookupChar('abc','fff'),undefined,'Function did not return the correct result!');
    });
    it('with a both parameters invalid, should return undefined',function(){
        assert.equal(lookupChar(13,'gg'),undefined,'Function did not return the correct result!');
    });
    it('with an index out range, should return message error',function(){
        assert.equal(lookupChar('abc',-1),'Incorrect index','Function did not return the correct result!');
        assert.equal(lookupChar('abc',3),'Incorrect index','Function did not return the correct result!');
        assert.equal(lookupChar('abc',4),'Incorrect index','Function did not return the correct result!');
        assert.equal(lookupChar('abc',3,14),'Incorrect index','Function did not return the correct result!');
        assert.equal(lookupChar('abc',-3,14),'Incorrect index','Function did not return the correct result!');
    });
    it('with multiple consecutive correct checks, should return correct values',function(){
        assert.equal(lookupChar('abc',0),'a','Function did not return the correct result!');
        assert.equal(lookupChar('abc',1),'b','Function did not return the correct result!');
        assert.equal(lookupChar('abc',2),'c','Function did not return the correct result!');
        assert.equal(lookupChar('gayagh',3),'a','Function did not return the correct result!');
    });
});