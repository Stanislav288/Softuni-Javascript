let assert=require('chai').assert;
let jsdom=require('C:\\Users\\A053\\Desktop\\node-v8.9.4-win-x64\\node_modules\\jsdom-global\\index.js')();
let $=require('C:\\Users\\A053\\Desktop\\node-v8.9.4-win-x64\\node_modules\\jquery\\dist\\jquery.min.js');
//let document=new JSDOM(`C:\\Users\\A053\\WebstormProjects\\JavaScript Softuni\\JS Core\\Unit Testing and Error Handling\\5.Shared Object\\shared-object.html`);
//let window=document.defaultValue;
//console.log(window);
//
document.body.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shared Object</title>
</head>
<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>
</html>
`;
// console.log(document.body.innerHTML);


let sharedObject=require(
    "./shared-object.js")
    .sharedObject;


describe('sharedObject',function(){
    before(()=>global.$ = $);
    beforeEach(function() {
        sharedObject.name=null;
        sharedObject.income=null;
    });

    it('check sharedObject initial state',function(){
        assert.equal(undefined,sharedObject.name);
        assert.equal(undefined,sharedObject.income);
    });

    it('changeName function invalid name, should not change name',function(){
        sharedObject.changeName([]);
        assert.equal(undefined,sharedObject.name);

        sharedObject.changeName('');
        assert.equal(undefined,sharedObject.name);
    });

    it('changeName function valid name, should  change name',function(){
        sharedObject.changeName('abc');
        assert.equal('abc',sharedObject.name);

        sharedObject.changeName('cbacba');
        assert.equal('cbacba',sharedObject.name);

        sharedObject.changeName(123);
        assert.equal(123,sharedObject.name);

    });

    it('changeIncome function invalid income, should  not change income',function(){
        sharedObject.changeIncome('cbacba');
        assert.equal(undefined,sharedObject.income);

        sharedObject.changeIncome([]);
        assert.equal(undefined,sharedObject.income);

        sharedObject.changeIncome({});
        assert.equal(undefined,sharedObject.income);

        sharedObject.changeIncome(-1234);
        assert.equal(undefined,sharedObject.income);

        sharedObject.changeIncome(199.5);
        assert.equal(undefined,sharedObject.income);

        sharedObject.changeIncome(0);
        assert.equal(undefined,sharedObject.income);
    });

    it('changeIncome function valid income, should change income',function(){
        sharedObject.changeIncome(10);
        assert.equal(10,sharedObject.income);

        sharedObject.changeIncome(199);
        assert.equal(199,sharedObject.income);
    });

    it('updateName function invalid name, should not change name',function(){
        sharedObject.name='old value';

        $('#name').val('');
        sharedObject.updateName();
        assert.equal('old value',sharedObject.name);

        $('#name').val([]);
        sharedObject.updateName();
        assert.equal('old value',sharedObject.name);

        $('#name').val(null);
        sharedObject.updateName();
        assert.equal('old value',sharedObject.name);
    });

    it('updateName function valid name, should change name',function(){
        $('#name').val('this is new value');
        sharedObject.updateName();
        assert.equal('this is new value',sharedObject.name);

        $('#name').val(123);
        sharedObject.updateName();
        assert.equal(123,sharedObject.name);
    });

    it('updateIncome function invalid income, should not change income',function(){
        sharedObject.income=100;

        $('#income').val(-555);
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);

        $('#income').val(1.55);
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);

        $('#income').val('simple text');
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);

        $('#income').val(NaN);
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);

        $('#income').val(0);
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);
    });

    it('updateIncome function valid income, should change income',function(){
        $('#income').val(100);
        sharedObject.updateIncome();
        assert.equal(100,sharedObject.income);
    });
});