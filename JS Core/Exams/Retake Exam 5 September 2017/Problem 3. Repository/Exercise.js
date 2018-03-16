function exercise(){
    class Repository{
        constructor(props){
            this.props=props;
            this.data=new Map();
            this.id=0;
        }

        get count(){
            return this.data.size;
        }

        add(entity){
            for(let propKey of Object.keys(this.props)){
                if(!entity.hasOwnProperty(propKey)){
                    throw new Error(`Property ${propKey} is missing from the entity!`)
                }else{
                    if(typeof entity[propKey]!==this.props[propKey]){
                        throw new TypeError(`Property ${propKey} is of incorrect type!`);
                    }
                }
            }

        let currentId=this.id;
        this.data.set(currentId,entity);
        this.id++;
        return currentId;
        }

        get(id){
            if(this.data.get(id)===undefined){
                throw new Error(`Entity with id: ${id} does not exist!`);
            }

           return this.data.get(id);
        }

        update(id, newEntity){
            if(this.data.get(id)===undefined){
                throw new Error(`Entity with id: ${id} does not exist!`);
            }

            this.data.set(id, newEntity);
        }

        del(id){
            if(this.data.get(id)===undefined){
                throw new Error(`Entity with id: ${id} does not exist!`);
            }

            this.data.delete(id);
        }
    }
}