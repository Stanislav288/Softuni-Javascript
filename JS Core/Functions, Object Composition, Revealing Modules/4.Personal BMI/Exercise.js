function exercise(name,age,weight,height){
    let result={name:name};

    let personalInfo={age:age,weight:weight,height:height};
    result['personalInfo']=personalInfo;
    let bmi=Math.round((weight)/Math.pow(height/100,2));
    result['BMI']=bmi;

    let status;
    if(bmi<18.5){
        status='underweight';
    }else if(bmi<25){
        status='normal';
    }else if(bmi<30){
        status='overweight';
    }else{
        status='obese';
    }

    result['status']=status;
    if(status==='obese'){
        result['recommendation']='admission required';
    }

    //console.log(result);
    return result;
}

exercise('Peter', 29, 75, 182);
exercise('Honey Boo Boo', 9, 57, 137);