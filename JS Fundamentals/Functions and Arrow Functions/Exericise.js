//1.	Triangle of Stars
function triangleOfStars(number){
    for(let i=1;i<=2*number-1;i++){
        if(i<=number){
            console.log('*'.repeat(i));
        }else{
            console.log('*'.repeat(2*number-i));
        }
    }
}

//3.	Palindrome
function squareOfStars(number){
    if(number===undefined){
        number=5;
    }

    for(let i=1;i<=number;i++){
            console.log(('* '.repeat(number)));
    }
}

//3.	Palindrome
function palindrome(word){
    let reversedWord=word.split("").reverse().join("");
    console.log(word===reversedWord);
}


//4.	Day of the Week
function dayOfTheWeek(day){
    switch (day) {
        case "Sunday":
            return 7;
            break;
        case "Monday":
            return 1;
            break;
        case "Tuesday":
            return 2;
            break;
        case "Wednesday":
            return 3;
            break;
        case "Thursday":
            return 4;
            break;
        case "Friday":
            return 5;
            break;
        case "Saturday":
            return 6;
        default:
            return 'error';
    }
}

//5.	Functional Calculator
function functionCalculator(a,b,operator){
    switch (operator) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}

//6.	Aggregate Elements
function  aggregateElements(arr){
    console.log(arr.reduce((a,b)=>a+b));
    let fn=function(arr){
        let result=0;
        for(let i=0;i<arr.length;i++){
            result+=1/arr[i];
        }
        return result;
    }
    console.log(fn(arr));
    console.log(arr.join(""));
}

//7.	*Words Uppercase
function wordsUppercase(sentence){
    console.log(sentence.split(/\W+/).filter(function(n){ return n != '' }).map(a=>a.toUpperCase()).join(", "));
}

aggregateElements([1,2,3]);
wordsUppercase('Hi, how are you?');
