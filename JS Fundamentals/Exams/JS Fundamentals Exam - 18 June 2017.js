//Problem 1 – The Pyramid of King Djoser
function thePyramidOfKingDjoser(base,increment){
    let height=0;

    let stone=0;
    let marble=0;
    let lapisLazuli=0;
    let gold=0;
    for(let i=1;i<Number.MAX_SAFE_INTEGER;i++){
        height=i;
        if(base-2<=0){
            gold+=increment*Math.pow(base,2);
            break;
        }else if(i%5==0){
            stone+=increment*Math.pow(base-2,2);
            lapisLazuli+=increment*(Math.pow(base,2)-Math.pow(base-2,2));
        }else{
            stone+=increment*Math.pow(base-2,2);
            marble+=increment*(Math.pow(base,2)-Math.pow(base-2,2));
        }

        base-=2;
    }

    console.log('Stone required: '+Math.ceil(stone));
    console.log('Marble required: '+Math.ceil(marble));
    console.log('Lapis Lazuli required: '+Math.ceil(lapisLazuli));
    console.log('Gold required: '+Math.ceil(gold));
    console.log('Final pyramid height: '+Math.floor(increment*height));
}

//Problem 2 – Jan’s Notation
function jansNotation(arr){
    let numberPattern=/^\d+$/;
    let operands=arr.filter(a=>numberPattern.test(a));
    let operators=arr.filter(a=>!numberPattern.test(a));

    if(operands.length+1<operators.length){
        console.log('Error: not enough operands');
        return;
    }

    if(operands.length>operators.length+1){
        console.log('Error: too many operands!');
        return;
    }

    let result=0;
    for(let i=0;i<operands.length-1;i++){
        if(i==0){
            switch(operators[i]){
                case '/':
                    result=operands[i]/operands[i+1];
                    break;
                case '*':
                    result=operands[i]*operands[i+1];
                    break;
                case '-':
                    result=operands[i]-operands[i+1];
                    break;
                case '+':
                    result=operands[i]+operands[i+1];
                    break;
            }

            continue;
        }

        switch(operators[i]){
            case '/':
                result=result/operands[i+1];
                break;
            case '*':
                result=result*operands[i+1];
                break;
            case '-':
                result=result-operands[i+1];
                break;
            case '+':
                result=result+operands[i+1];
                break;
        }
    }

    console.log(result);
}

// jansNotation([7,33,18,'-']);
// jansNotation([15,'-']);
//jansNotation([-1,1,'+',101,'*',18,'+',3,'/']);
//jansNotation([31,2,'+',11,'/']);
//31, 2, 11
//+,  /




//Problem 4 – Galactic Elections
function galacticElectrons(){

}