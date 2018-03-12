function exercise(){
    class Stringer{
        constructor(innerString,innerLength){
            this.innerString=innerString;
            this.innerLength=innerLength;
        }

        increase(length){
            this.innerLength+=length;
        }

        decrease(length){
            this.innerLength=Math.max(0,this.innerLength-length);
        }

        toString(){
            if(this.innerLength>=this.innerString.length){
                return this.innerString;
            }

            return this.innerString.substring(0,this.innerLength)+"...";
        }
    }
}