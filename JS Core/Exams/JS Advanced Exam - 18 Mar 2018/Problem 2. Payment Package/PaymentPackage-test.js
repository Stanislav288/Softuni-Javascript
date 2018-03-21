let assert=require('chai').assert;

let PaymentPackage=require(
    "./PaymentPackage.js");

describe("PaymentPackage class", function() {
    let myPaymentPackage = {};
    let nameConstants=['HR Services','Consultation','Partnership Fee'];
    let valueConstants=[1500,800,700];
    beforeEach(function () {
        myPaymentPackage = new PaymentPackage(nameConstants[0],valueConstants[0]);
    });
       // assert.doesNotThrow(function(){StringBuilder._vrfyParam('pesho')},TypeError,'Argument must be string')
    it('has functions attached to object', function () {
        // let desc=Object.getOwnPropertyDescriptor(myPaymentPackage, 'VAT');
        //console.log(Object.getOwnPropertyDescriptor(myPaymentPackage,'name'));
        assert.notEqual(myPaymentPackage.name,undefined, "Missing name");
        assert.notEqual(myPaymentPackage.value,undefined, "Missing value");
        assert.notEqual(myPaymentPackage.VAT,undefined, "Missing VAT");
        assert.notEqual(myPaymentPackage.active,undefined, "Missing active");
        assert.notEqual(myPaymentPackage.hasOwnProperty('toString'),true, "Missing toString function");
    });


    it("Test constructor with valid params", function () {
        assert.equal(myPaymentPackage._name,nameConstants[0]);
        assert.equal(myPaymentPackage._value,valueConstants[0]);
        assert.equal(myPaymentPackage._VAT,20);
        assert.equal(myPaymentPackage._active,true);
    });

    it("Test name setter invalid param", function () {
        assert.Throw(function(){myPaymentPackage.name=null},Error,'Name must be a non-empty string');
        assert.Throw(function(){myPaymentPackage.name=123},Error,'Name must be a non-empty string');
        assert.Throw(function(){myPaymentPackage.name=false},Error,'Name must be a non-empty string');
        assert.Throw(function(){myPaymentPackage.name=''},Error,'Name must be a non-empty string');
    });

    it("Test name setter valid param", function () {
        assert.equal(myPaymentPackage.name=nameConstants[1],nameConstants[1]);
        assert.equal(myPaymentPackage.name=nameConstants[2],nameConstants[2]);
    });

    it("Test value setter invalid param", function () {
        assert.Throw(function(){myPaymentPackage.value=null},Error,'Value must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.value=-12.5},Error,'Value must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.value=-13},Error,'Value must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.value='asfasf'},Error,'Value must be a non-negative number');
    });

    it("Test value setter valid param", function () {
        assert.equal(myPaymentPackage.value=valueConstants[1],valueConstants[1]);
        assert.equal(myPaymentPackage.value=0,0);
        assert.equal(myPaymentPackage.value=valueConstants[2],valueConstants[2]);
    });

    it("Test VAT setter invalid param", function () {
        assert.Throw(function(){myPaymentPackage.VAT=null},Error,'VAT must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.VAT=-12.5},Error,'VAT must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.VAT=-13},Error,'VAT must be a non-negative number');
        assert.Throw(function(){myPaymentPackage.VAT='asfasf'},Error,'VAT must be a non-negative number');
    });

    it("Test VAT setter valid param", function () {
        assert.equal(myPaymentPackage.VAT=valueConstants[1],valueConstants[1]);
        assert.equal(myPaymentPackage.VAT=valueConstants[2],valueConstants[2]);
        assert.equal(myPaymentPackage.VAT=0,0);
    });

    it("Test active setter invalid param", function () {
        assert.Throw(function(){myPaymentPackage.active=null},Error,'Active status must be a boolean');
        assert.Throw(function(){myPaymentPackage.active=-12.5},Error,'Active status must be a boolean');
        assert.Throw(function(){myPaymentPackage.active=-13},Error,'Active status must be a boolean');
        assert.Throw(function(){myPaymentPackage.active='asfasf'},Error,'Active status must be a boolean');
    });

    it("Test active setter valid param", function () {
        assert.equal(myPaymentPackage.active=true,true);
        assert.equal(myPaymentPackage.active=false,false);
    });

    it("Test toString function with no data", function () {
        assert.equal(myPaymentPackage.toString(),'Package: HR Services\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800');

        myPaymentPackage.active=false;
        assert.equal(myPaymentPackage.toString(),'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    });
});
