let assert=require('chai').assert;

let list=require(
    "./add-delete-in-list.js");

describe("add and delete in list", function() {
    it("Test toString function with no data", function () {
        assert.equal(list.toString(),'');
    });

    it("Test delete function with invalid index", function () {
        assert.equal(list.delete('asff'),undefined);
        assert.equal(list.delete(),undefined);
        assert.equal(list.delete(-11),undefined);
        assert.equal(list.delete(100),undefined);
    });


    it("Test delete function with valid index", function () {
        list.add('aa');
        list.add('bb');
        list.add('cc');

        assert.equal(list.delete(0),'aa');
        assert.equal(list.delete(0),'bb');
    });

    it('has functions attached to object', function () {
        assert.equal(list.hasOwnProperty('add'),true, "Missing add function");
        assert.equal(list.hasOwnProperty('delete'),true, "Missing delete function");
        assert.equal(list.hasOwnProperty('toString'),true, "Missing toString function");
    });

    it("Test add function", function () {
        list.add('aa')
        assert.equal(list.toString(),'aa');

        list.add('bb')
        list.add('cc')
        assert.equal(list.toString(),'aa, bb, cc');
    });

    it("Test toString function with data", function () {
        list.add('aa');
        list.add('bb');
        list.add('cc');
        list.add('dd');

        assert.equal(list.toString(),'aa, bb, cc, dd');
    });
});
