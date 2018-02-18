//1.	Towns to JSON
function townsToJson(arr){
    let townsArray=[];
    for(let town of arr.splice(1)){
        let [townName,latitude,longitude]=town.split(/\s*\|\s*/).filter(a=>a!='');
        let townObj={Town:townName,Latitude:Number(latitude),Longitude:Number(longitude)};
        townsArray.push(townObj)
    }
    console.log(JSON.stringify(townsArray));
}

//2.	Score to HTML
function scoreToHtml(){

}

townsToJson(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);