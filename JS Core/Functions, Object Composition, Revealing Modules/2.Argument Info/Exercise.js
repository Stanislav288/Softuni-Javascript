function argumentInfo(...arr){

    let summary=new Map();

    arr.forEach((e,i)=>function(){
        let elementType=typeof e;
        console.log(elementType+': '+e);
        if(summary.get(elementType)==null){
            summary.set(elementType,1);
        }else{
            summary.set(elementType,summary.get(elementType)+1);
        }
    }());

   [...summary].sort(
       function (g1, g2) {
           let [g1Key, g1Value] = g1;
           let [g2Key, g2Value] = g2;

           if (g1Value > g2Value) return -1;
           if (g1Value < g2Value) return 1;
       })
       .forEach(([k,v],i)=>console.log(`${k} = ${v}`));
}

argumentInfo(42,function(){console.log('Hello world!')},'cat','cat');