function solve(arr,orderStrategy){

    let ascComparator=function (a,b) {
        return a-b;
    };

    let descComparator=function (a,b) {
        return b-a;
    };

    let sortTypes={
        'asc':ascComparator,
        'desc':descComparator
    };

   return (arr.sort(sortTypes[orderStrategy]));
}

solve([5,1,10],'asc');