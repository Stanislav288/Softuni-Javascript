//Problem 1 – Spice Must Flow
function spiceMustFlow(startingYield){
    let spiceAmount=0;
    let days=0;
    while(true) {
        if (parseInt(startingYield)<100){
            spiceAmount-=26;
            break;
        }

        days++;
        spiceAmount+=startingYield-26;
        startingYield -= 10;

    }

    console.log(days);
    console.log(Math.max(0,spiceAmount));
}



//Problem 2 – Build a Wall
function buildAWall(sections){
    let days=0;
    let sectionsPerDay=[];
    let isReady=true;
    while(true){
        sectionsPerDay[days]=0;
        for(let i=0;i<sections.length;i++){
            if(sections[i]<30){
                isReady=false;
                sections[i]++;
                sectionsPerDay[days]++;
            }
        }

        if(isReady){
            break;
        }

        days++;
        isReady=true;
    }

    sectionsPerDay.pop();
    console.log(sectionsPerDay.map(a=>a*=195).join(', '));
    console.log(1900*195*sectionsPerDay.reduce((a,b)=>a+b)+' pesos');
}

//Problem 3 – Format Helper
function formatHelper([text]){
    console.log(text
        .replace(/([".,!?:;])\s*([^\1])/g,(match, g1, g2)=>`${g1} ${g2}`)
        .replace(/\s+([".,!?:;])/g,(match,g1)=>`${g1}`)
        .replace(/([".,!?:;])\s+([".,!?:;])/g,(match, g1, g2)=>`${g1}${g2}`)
        .replace(/(\d+)\s*[.]\s*(\d+)[.]\s*(\d+)\s*/g,(match, g1, g2, g3)=>`${g1}.${g2}.${g3}`)
        .replace(/"\s*(.*?)\s?"/g,(match, g1)=>`${g1}`));
}

// formatHelper('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also\n' +
//     'this date is pretty confusing : 20 . 12. 16 .\n');


//Problem 4 – Airport Statistics
function airportStatistics(input){
    let planes=new Map();
    let airports=new Map();
    let planeId;
    let town;
    let passengers;
    let action;
    let inputArgs;
    for(let entry of input){
       inputArgs=entry.split(/\s+/);
       planeId=inputArgs[0];
       town=inputArgs[1];
       passengers=parseInt(inputArgs[2]);
       action=inputArgs[3];
       if(planes.get(planeId)==null){
           if(action==='depart'){
                continue;
           }

            if(airports.get(town)==null){
                airports.set(town,{arrivals:passengers,departures:0});
            }else{
                airports.set(town,{arrivals:airports.get(town).arrivals+passengers,arrivals:airports.get(town).departures});
            }

            planes.set(planeId,{town:town,action:action});
       }else{
           if(planes.get(planeId).town!=town || planes.get(planeId).action===action){
               if(action==='depart') {
                   airports.set(town, {
                       arrivals: airports.get(town).arrivals,
                       arrivals: airports.get(town).departures+passengers
                   });
               }else{
                   airports.set(town, {
                       arrivals: airports.get(town).arrivals+passengers,
                       arrivals: airports.get(town).departures
                   });
               }
                continue;
           }else{
               if(action==='depart') {
                   airports.set(town, {
                       arrivals: airports.get(town).arrivals,
                       arrivals: airports.get(town).departures+passengers
                   });
               }else{
                   airports.set(town, {
                       arrivals: airports.get(town).arrivals+passengers,
                       arrivals: airports.get(town).departures
                   });
               }
               planes.set(planeId,{town:town,action:action})
           }
       }
    }

    for(let entry of planes) {
        console.log(JSON.stringify(entry));
    }

    console.log();
}

// airportStatistics(["Boeing474 Madrid 300 land",
//         "AirForceOne WashingtonDC 178 land",
//         "Airbus London 265 depart",
//         "ATR72 WashingtonDC 272 land",
//         "ATR72 Madrid 135 depart"]);

airportStatistics([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"]);