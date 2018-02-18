function f1(){
    let string='123asfd1 22312fwdsf11 1212';
    let regex=new RegExp(/(\d+)([a-z]+)(\d+)/,'g');
    while(true) {
        let match =regex.exec(string);
        if(!match){
            break;
        }

        match.forEach(a => console.log(a));
        console.log();
    }
}

f1();