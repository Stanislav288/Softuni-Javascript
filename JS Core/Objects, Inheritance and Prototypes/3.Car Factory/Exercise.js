function exercise(input){
   let car={};
   car.model=input.model;
   car.engine=(function(){
       let power=input.power;
       let volume;
       if(power>=200){
           volume=3500;
           power=200;
           return {power,volume};
       }else if(power<=90){
           power=90;
           volume=1800;
           return {power,volume};
       }else {
           power=120;
           volume=2400;
           return {power,volume};
       }
   })();
   car.carriage={type:input.carriage,color:input.color};
   car.wheels=(function(){
       let wheelsize= Math.floor(input.wheelsize);
       if(wheelsize%2===0){
          wheelsize--;
       }

       return [wheelsize,wheelsize,wheelsize,wheelsize];
   }());

  return car;
}

exercise({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);