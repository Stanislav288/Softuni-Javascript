function exercise(input){
    function solution(){
        let products={protein:0,carbohydrate:0,fat:0,flavour:0};
        let recipes={
            apple:{protein:0,carbohydrate:1,fat:0,flavour:2},
            coke:{protein:0,carbohydrate:10,fat:0,flavour:20},
            burger:{protein:0,carbohydrate:5,fat:7,flavour:3},
            omelet:{protein:5,carbohydrate:0,fat:1,flavour:1},
            cheverme:{protein:10,carbohydrate:10,fat:10,flavour:10}};
        return function(input){
            let inputArgs=input.split(/\s+/);
            let command=inputArgs[0];
            if(command==='report'){
                return(`protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`);
            }else if(command==='prepare'){
                let recipe=inputArgs[1];
                let quantity=Number(inputArgs[2]);
                let neededProtein=recipes[recipe].protein*quantity;
                let neededCarbohydrate=recipes[recipe].carbohydrate*quantity;
                let neededFat=recipes[recipe].fat*quantity;
                let neededFlavour=recipes[recipe].flavour*quantity;
                if(products.protein<neededProtein){
                    return('Error: not enough protein in stock');
                }else if(products.carbohydrate<neededCarbohydrate){
                    return('Error: not enough carbohydrate in stock');
                }else if(products.fat<neededFat){
                    return('Error: not enough fat in stock');
                }else if(products.flavour<neededFlavour){
                    return('Error: not enough flavour in stock');
                }

                products.protein-=neededProtein;
                products.carbohydrate-=neededCarbohydrate;
                products.fat-=neededFat;
                products.flavour-=neededFlavour;

                return('Success');
            }else{
                let microelement=inputArgs[1];
                let quantity=Number(inputArgs[2]);
                products[microelement]+=quantity;
                return('Success');
            }

        }
    }

    let manager=solution();
    // manager('restock flavour 50');
    // manager('prepare coke 4');
    return manager(input);
}

// exercise('restock protein 100');
// exercise('restock carbohydrate 100');
// exercise('restock fat 100');
// exercise('restock flavour 100');

exercise('restock flavour 50');
exercise('prepare coke 4');