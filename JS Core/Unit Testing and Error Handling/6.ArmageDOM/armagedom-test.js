let assert=require('chai').assert;
let jsdom=require('C:\\Users\\A053\\Desktop\\node-v8.9.4-win-x64\\node_modules\\jsdom-global\\index.js')();
let $=require('C:\\Users\\A053\\Desktop\\node-v8.9.4-win-x64\\node_modules\\jquery\\dist\\jquery.min.js');


let html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ArmageDOM</title>
</head>
<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>
</html>`;

let nuke=require("./armagedom.js").nuke;

describe('nuke',function(){
    before(()=>global.$ = $);
    beforeEach(function() {
    document.body.innerHTML=html;
    });


    it('2 same selectors, should do nothing',function(){
        let selector=$('div');
        let expectedLength=selector.length;
        nuke(selector,selector);

        let actualLength=$('div').length;

        assert.equal($('div[class|="inside"]').length,1);
        assert.equal($('div[class|="target"]').length,1);
        assert.equal($('div[class|="nested target"]').length,1);
        assert.equal($('div[class|="nested target"]').children().length,1);
        assert.equal(actualLength,expectedLength);
    });

    it('2 different selectors, should remove elements',function(){
        let selector=$('div');
        let expectedLength=selector.length-2;
        nuke(selector,$('.target'));
        let actualLength=$('div').length;

        assert.equal(actualLength,expectedLength);
        assert.isAbove($('div[class|="inside"]').length,0);
        assert.equal($('div[class|="target"]').length,0);
        assert.equal($('div[class|="nested target"]').length,0);
    });

    it('2 different selectors, should remove nested elements',function(){
        let selector=$('span');
        nuke(selector,$('span[class|="nested"]'));

        assert.equal($('div[class|="inside"]').length,1);
        assert.equal($('div[class|="target"]').length,1);
        assert.equal($('div[class|="nested target"]').length,1);
        assert.equal($('div[class|="inside"]').children().length,1);
    });

    it('1 selector, should do nothing',function(){
        let selector=$('div');
        let expectedLength=selector.length;
        nuke(selector);

        let actualLength=$('div').length;

        assert.equal($('div[class|="inside"]').length,1);
        assert.equal($('div[class|="target"]').length,1);
        assert.equal($('div[class|="nested target"]').length,1);
        assert.equal($('div[class|="nested target"]').children().length,1);
        assert.equal(actualLength,expectedLength);
    });

    it('0 selectors, should do nothing',function(){
        let selector=$('div');
        let expectedLength=selector.length;
        nuke();

        let actualLength=$('div').length;

        assert.equal($('div[class|="inside"]').length,1);
        assert.equal($('div[class|="target"]').length,1);
        assert.equal($('div[class|="nested target"]').length,1);
        assert.equal($('div[class|="nested target"]').children().length,1);
        assert.equal(actualLength,expectedLength);
    });
});