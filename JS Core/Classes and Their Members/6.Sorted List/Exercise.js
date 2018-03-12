function exercise(){
    class SortedList{
        constructor(){
            this.listOfNumbers=[];
            console.log(this.listOfNumbers.length);
            this.size=0;
        }

        add(element){
            this.listOfNumbers.push(element);
            this.size++;
            this.sort();
        }

        remove(index){
            if(index<0 || index>=this.listOfNumbers.length){
                return;
            }

            this.size--;
            this.listOfNumbers.splice(index,1);
        }

        get(index){
            if(index<0 || index>=this.listOfNumbers.length){
                return;
            }

            return this.listOfNumbers[index];
        }

        sort(){
            this.listOfNumbers.sort((a,b)=>a-b);
        }
    }

        let sortList=new SortedList();
        console.log(sortList.hasOwnProperty('size'));
}

exercise();