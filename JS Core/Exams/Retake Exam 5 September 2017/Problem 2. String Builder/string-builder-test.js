let assert=require('chai').assert;

let StringBuilder=require(
    "./string-builder.js")
    .StringBuilder;


describe('stringBuilder',function(){
    let stringBuilder;
    beforeEach(function() {
        stringBuilder=new StringBuilder();
    });

    it('_vrfyParam function',function(){
        assert.throws(function(){StringBuilder._vrfyParam(12312)},TypeError,'Argument must be string');
        assert.throws(function(){StringBuilder._vrfyParam([])},TypeError,'Argument must be string');
        assert.throws(function(){StringBuilder._vrfyParam({})},TypeError,'Argument must be string');

        assert.doesNotThrow(function(){StringBuilder._vrfyParam('pesho')},TypeError,'Argument must be string')
    });

    it('StringBuilder constructor with undefined parameter, should return empty array',function(){
      stringBuilder=new StringBuilder(undefined);
      assert.deepEqual([],stringBuilder._stringArray);
    });

    it('StringBuilder constructor with not undefined parameter, should return not empty array',function(){
        stringBuilder=new StringBuilder('abc');
        assert.deepEqual(['a','b','c'],stringBuilder._stringArray);
    });

    it('append function should work properly',function(){
        stringBuilder=new StringBuilder('abc');
        stringBuilder.append('def');
        assert.deepEqual(['a','b','c','d','e','f'],stringBuilder._stringArray);

        stringBuilder=new StringBuilder();
        stringBuilder.append('def');
        assert.deepEqual(['d','e','f'],stringBuilder._stringArray);
    });

    it('prepend function should work properly',function(){
        stringBuilder=new StringBuilder('abc');
        stringBuilder.prepend('def');
        assert.deepEqual(['d','e','f','a','b','c'],stringBuilder._stringArray);

        stringBuilder=new StringBuilder();
        stringBuilder.prepend('def');
        assert.deepEqual(['d','e','f'],stringBuilder._stringArray);
    });

    it('insertAt function should work properly',function(){
        stringBuilder=new StringBuilder('abc');
        stringBuilder.insertAt('def',1);
        assert.deepEqual(['a','d','e','f','b','c'],stringBuilder._stringArray);

        stringBuilder=new StringBuilder();
        stringBuilder.insertAt('def',1);
        assert.deepEqual(['d','e','f'],stringBuilder._stringArray);
    });

    it('remove function should work properly',function(){
        stringBuilder=new StringBuilder('abcdef');
        stringBuilder.remove(1,3);
        assert.deepEqual(['a','e','f'],stringBuilder._stringArray);

    });

    it('toString function should work properly',function(){
        stringBuilder=new StringBuilder('abcdef');
        assert.equal('abcdef',stringBuilder.toString());
    });
});