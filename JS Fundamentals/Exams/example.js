function abc() {
    let array=[1,2,5,10,5]
    let num=array.reduce(function (a,b) {
        console.log('a -->'+a);
        console.log('b -->'+b);
        console.log(a+b);
        return a+b;
    });
}

abc();