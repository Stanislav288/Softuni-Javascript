function example(){
    class PaymentProcessor{

    constructor(options){
        this.payments=new Map();
        this._options={
            types: ["service", "product", "other"],
            precision: 2
        };

        if(options!=undefined){
            this.setOptions(options);
        }
    }

    registerPayment(id, name, type, value){
        if(typeof id!=='string' || id===''){
            throw new Error();
        }

        if(typeof name!=='string' || name===''){
            throw new Error();
        }

        if(typeof value!=='number'){
            throw new Error();
        }

        if(!this._options.types.includes(type)){
            throw new Error();
        }

        if(this.payments.has(id)){
            throw new Error();
        }

        this.payments.set(
            id,
            {id:id,
                name:name,
                type:type,
                value:this.precisionRound(value,this._options.precision)});
    }

    deletePayment(id){
        if(!this.payments.has(id)){
            throw new Error();
        }

        this.payments.delete(id);
    }

    get(id){
        if(!this.payments.has(id)){
            throw new Error();
        }

        let payment=this.payments.get(id);

        return `Details about payment ID: ${payment.id}\n- Name: ${payment.name}\n- Type: ${payment.type}\n- Value: ${payment.value}\n`;
    }

    setOptions(options){
        if(options.types==undefined && options.precision!=undefined){
            this._options.precision=options.precision;
        }

        if(options.types!=undefined && options.precision==undefined){
            this._options.types=options.types;
        }

        if(options.types!=undefined && options.precision!=undefined){
            this._options=options;
        }
    }

    toString(){
        let numberOfPayments=this.payments.size;
        let sumOfPayments=0;

        //let iter=this.payments.values()
        // while(iter.hasN) {
        //     String obj = (String)it.next();
        //     System.out.println(obj);
        // }
        for(let [key,value] of this.payments){
            sumOfPayments+=value.value;
        }

        return `Summary:
- Payments: ${numberOfPayments}
- Balance: ${sumOfPayments}
`
    }

    precisionRound(number, precision) {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
}

// Initialize processor with default options
    const generalPayments = new PaymentProcessor();
    generalPayments.registerPayment('', 'Microchips', 'product', 15000);


    generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
    generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
    console.log(generalPayments.toString());

// Should throw an error (invalid type)
   // generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

    generalPayments.setOptions({types: ['product', 'material']});
    generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
    console.log(generalPayments.get('E028'));
    generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
   // generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
    //generalPayments.get('E027');

    generalPayments.deletePayment('E028');
    console.log(generalPayments.toString());

// Initialize processor with custom types
    const servicePyaments = new PaymentProcessor({types: ['service']});
    servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
    servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
    console.log(servicePyaments.toString());

// Initialize processor with custom precision
    const transactionLog = new PaymentProcessor({precision: 5});
    transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
    console.log(transactionLog.toString());

}

example();