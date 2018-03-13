function exercise(){
    class Melon{
        constructor(weight,melonSort){
            if(new.target===Melon){
                throw new Error('Abstract class cannot be instantiated directly');
            }

            this.weight=weight;
            this.melonSort=melonSort;
            this._elementIndex=weight*melonSort.length;
        }


        get elementIndex(){
            return this._elementIndex;
        }

        get elementName(){
            return undefined;
        }

        toString(){
return `Element: ${this.elementName}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);

        }

        get elementName(){
            return 'Water';
        }
    }

    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);

        }

        get elementName(){
            return 'Fire';
        }
    }

    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);

        }

        get elementName(){
            return 'Earth';
        }
    }

    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this._elementName='Water';
        }

        get elementName(){
            return this._elementName;
        }
    }

    class Melolemonmelon extends Airmelon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.morphOrder=['Fire', 'Earth', 'Air','Water'];
        }

        morph(){
            let currentElement=this.morphOrder.shift();
            this._elementName=currentElement;
            this.morphOrder.push(currentElement);
        }
    }

    return {Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}