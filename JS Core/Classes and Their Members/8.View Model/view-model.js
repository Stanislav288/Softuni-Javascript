class Textbox {
    constructor(selector,regex){
        this._elements=$(selector).on('input',function(event){
            this.value=event.target.value;
        });

        this._invalidSymbols=regex;
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._elements.map(e=>e.value=value);

        this._value=value;
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        return this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
