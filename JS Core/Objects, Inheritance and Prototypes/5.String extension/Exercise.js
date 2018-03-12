(function(){
    String.prototype.ensureStart=function(str){
        if(!this.startsWith(str)){
            return str+this;
        }

        return this;
    };
    String.prototype.ensureEnd=function(str){
        if(!this.endsWith(str)){
            return this+str;
        }

        return this;
    };
    String.prototype.isEmpty=function () {
        return this==='';
    };
    String.prototype.truncate=function(n){
        if(n<4){
            return Array(n+1).join('.');
        }

        if(this.length<n){
            return;
        }

        if(this.substring(' ')!=-1){
            let string=this;
            let lastBiggestSpaceIndex=0;
            (function(){
                for(let i in string){
                    if(string[i]===' '){
                        if(lastBiggestSpaceIndex<=i){
                            lastBiggestSpaceIndex=i;
                        }else{
                            break;
                        }
                    }
                }
            })();
            return this.substring(0,lastBiggestSpaceIndex)+'...';
        }

        return  this.substring(0,n)+'...';
    };
    String.format=function(string,...params){
        for(let param in params){
            let regex=new RegExp('\\{'+param+'\}');
            string=string.replace(regex,params[param]);
        }

        return string;
    };
})();

console.log('the quick brown fox jumps over the lazy dog'.truncate(6));
console.log('quick brown fox jumps over the lazy dog'.ensureStart('the '));
console.log('quick brown fox jumps over the lazy dog'.ensureStart('the '));

let abc='abc';
abc.ensureEnd(abc);
console.log("haha".ensureStart('b'));
String.format('The {0} {1} fox',
    'quick', 'brown'
);
