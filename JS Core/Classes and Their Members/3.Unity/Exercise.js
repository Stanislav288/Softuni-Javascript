function exercise(){
    class Rat{
        constructor(name){
            this.name=name;
            this.unitedRats=[];
        }

        unite(otherRat){
            if(!(otherRat instanceof Rat)){
                return;
            }

            this.unitedRats.push(otherRat);
        }

        getRats(){
            return this.unitedRats;
        }

        toString(){
            let result=this.name+'\n';
            result.append(this.getRats().map(a=>'##'+a.name).join('\n'));

            return result;
        }
    }
}