function extend(template){
    Object.prototype.extend=extend;
    let obj={};
    obj=(function(){
        for(let p in template){
            if((typeof template[p])==='function'){
               Object.getPrototypeOf(obj)[p]=template[p];
            }else{
                obj[p]=template[p];
            }
        }

        return obj;
    })();

    return obj;
}

// extend({
//     name: '',
//     setName: function (newValue) {
//         this.name = newValue;
//     },
//     getName: function () {
//         return this.name;
//     }
// });

extend({
    health: 100,
    mana: 50
});