let assert=require('chai').assert;

let makeList=require(
    "./list-add-left-right-clear.js");

describe("makeList function", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    it('has functions attached to object', function () {
        assert.equal(myList.hasOwnProperty('addLeft'),true, "Missing addLeft function");
        assert.equal(myList.hasOwnProperty('addRight'),true, "Missing addRight function");
        assert.equal(myList.hasOwnProperty('clear'),true, "Missing clear function");
        assert.equal(myList.hasOwnProperty('toString'),true, "Missing toString function");
    });


    it("Test addLeft function", function () {
        myList.addLeft('aa')
        assert.equal(myList.toString(),'aa');

        myList.addLeft('bb')
        myList.addLeft('cc')
        assert.equal(myList.toString(),'cc, bb, aa');
    });

    it("Test addRight function", function () {
        myList.addRight('aa')
        assert.equal(myList.toString(),'aa');

        myList.addRight('bb')
        myList.addRight('cc')
        assert.equal(myList.toString(),'aa, bb, cc');
    });

    it("Test combination of addRight function and addLeft", function () {
        myList.addRight('aa')
        myList.addLeft('bb')
        assert.equal(myList.toString(),'bb, aa');

        myList.addLeft('cc')
        myList.addRight('dd')
        assert.equal(myList.toString(),'cc, bb, aa, dd');
    });

    it("Test clear function", function () {
        myList.addRight('aa')
        myList.addLeft('bb')
        myList.addLeft('cc')
        myList.addRight('dd')
        myList.clear();
        assert.equal(myList.toString(),'');
    });

    it("Test toString function with data", function () {
        myList.addRight('aa')
        myList.addLeft('bb')
        myList.addLeft('cc')
        myList.addRight('dd')

        assert.equal(myList.toString(),'cc, bb, aa, dd');
    });

    it("Test toString function with no data", function () {
        assert.equal(myList.toString(),'');
    });
});
