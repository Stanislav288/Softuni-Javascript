//1.	Print an Array with a given Delimiter
function printArrayWithGivenDelimiter(arr){
    let delimiter=arr.pop(arr.length-1);
    console.log(arr.join(delimiter));
}

//2.	Print every N-th Element from an Array
function printEveryNElementFromArray(arr){
    let step=arr.pop(arr.length-1);
    arr.forEach((a,i)=>i%step===0?console.log(a):'');
}

//3.	*Add and Remove Elements from Array
function addAndRemoveElementsFromArray(arr){
    let result=[];
    for(let e in arr){
        if(arr[e]==='add') {
            let number=parseInt(e)+1;
            result.push(number);
        }else{
            result.pop();
        }
    }

    if(result.length===0){
        console.log('Empty');
    }else{
        result.forEach(a=>console.log(a));
    }
}

//4.	Rotate Array
function rotateArray(arr){
    let numberOfRotations=arr.pop()%arr.length;
    for(let i=0;i<numberOfRotations;i++){
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

//5.	Extract an Non-decreasing Subsequence from an Array
function extractAnNonDecreasingSubsequenceFromAnArray(arr){
    let lastNumberOfSequence=arr[0];
    arr.filter((a,b)=>a>b,a).forEach(a=>console.log(a));
}

//6.	Sort an Array by 2 Criteria
function sortAnArrayBy2Criteria(arr){
   arr.sort(
        function(a,b){
            if(a.length>b.length){
                return 1;
            }else if(a.length<b.length){
                return -1;
            }else {
                if(a>b){
                    return 1;
                }else if(a<b){
                    return -1;
                }else {
                    return 0;
                }
            }}).forEach(a=>console.log(a));
}

//7.	Magic Matrices
function magicMatrices(arr){
    let isMatrixMagical=true;
    let arrLength=arr.length;
    let sum;
    for(let row=0;row<arrLength;row++){
     if(sum===undefined){
         sum=arr[row].reduce((a,b)=>a+b);
     }

     if(sum!=arr[row].reduce((a,b)=>a+b)){
         isMatrixMagical=false;
         break;
     }
    }

    var currentRow=0;
    for(let col=0;col<arr[currentRow].length;col++){
        for(let row=0;row<arrLength;row++){
            if(sum!=arr[row].reduce((a,b)=>a+b)){
                isMatrixMagical=false;
                break;
            }
        }
    }

    return isMatrixMagical;
}


//7.	Magic Matrices
function magicMatrices(arr){
    let rows=arr[0];
    let cols=arr[1];


}


sortAnArrayBy2Criteria(['alpha','beta','gamma']);
// extractAnNonDecreasingSubsequenceFromAnArray([1,3,8,4,10,12,3,2,24]);