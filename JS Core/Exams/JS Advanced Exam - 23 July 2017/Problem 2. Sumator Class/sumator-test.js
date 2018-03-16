let assert=require('chai').assert;

let Sumator=require(
    "./sumator.js")
    .Sumator;


describe('Sumator',function(){
    let sumator;
    beforeEach(function() {
        sumator=new Sumator();
    });

    it('has functions attached to prototype', function () {
        assert.equal(Object.getPrototypeOf(sumator).hasOwnProperty('add'),true, "Missing add function");
        assert.equal(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums'),true, "Missing sumNums function");
        assert.equal(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter'),true, "Missing removeByFilter function");
        assert.equal(Object.getPrototypeOf(sumator).hasOwnProperty('toString'),true, "Missing toString function");
    });

    it('Sumator constructor, should return empty array',function(){
        assert.deepEqual([],sumator.data);
    });

    it('add function should work properly',function(){
        sumator.add(123);
        sumator.add('abc');
        assert.deepEqual([123,'abc'],sumator.data);
    });

    it('sumNums function not empty data, should return result',function(){
        sumator.add(123);
        sumator.add('abc');
        sumator.add(123);
        assert.equal(2*123,sumator.sumNums());

        sumator=new Sumator();
        sumator.add('abc');
        sumator.add('def');
        assert.equal(0,sumator.sumNums());

        sumator=new Sumator();
        sumator.add(15.5);
        sumator.add(13.5);
        assert.equal(29,sumator.sumNums());
    });

    it('sumNums function empty data, should return 0',function(){
        assert.equal(0,sumator.sumNums());
    });

    it('removeByFilter function should work properly',function(){
        let returnNumbers=function (x) {
            if (typeof (x) === 'number'){
                return x;
            }
        }

        sumator.add('abc');
        sumator.add('def');
        sumator.add(1);
        sumator.add(100);
        sumator.add('abc');
        sumator.removeByFilter(returnNumbers)
        assert.deepEqual(['abc','def','abc'],sumator.data);

        sumator=new Sumator();
        sumator.add(1);
        sumator.add(100);
        sumator.add(124);
        sumator.add(35);
        sumator.removeByFilter(x => x % 2 === 0);
        assert.deepEqual([1,35],sumator.data);
    });

    it('toString function empty,should return empty',function() {
        assert.equal('(empty)', sumator.toString());
    });

    it('toString function not empty, should return string',function(){
        sumator.add(1123);
        sumator.add('asd');
        sumator.add('dsfhdsf');
        assert.equal('1123, asd, dsfhdsf',sumator.toString());
    });
});