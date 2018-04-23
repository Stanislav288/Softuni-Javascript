//Problem 1 – Bitcoin "Mining"
function bitcoinMining(shifts) {
    let dayOfFirstPurchaseOfBitcoin = 0;
    let bitcoins = 0;
    let money = 0;
    for (let i = 0; i < shifts.length; i++) {
        if ((i + 1) % 3 === 0) {
            money += 67.51 * 0.7 * shifts[i];
        } else {
            money += 67.51 * shifts[i];
        }

        if (money >= 11949.16) {
            let avaibleBitcoinForPurchase = Math.floor(money / 11949.16);
            money -= avaibleBitcoinForPurchase * 11949.16;
            bitcoins += avaibleBitcoinForPurchase;
            if (dayOfFirstPurchaseOfBitcoin === 0) {
                dayOfFirstPurchaseOfBitcoin = i + 1;
            }
        }
    }


    if (bitcoins != 0) {
        console.log('Bought bitcoins: ' + bitcoins);
        console.log('Day of the first purchased bitcoin: ' + dayOfFirstPurchaseOfBitcoin);
    } else {
        console.log('Bought bitcoins: 0');
    }

    money = money.toFixed(2);
    console.log(`Left money: ${money} lv.`);
}

//bitcoinMining(100, 200, 300) ;

//Problem 2 – Air Pollution
function airPollution(input, commands) {
    let sofiaMap = [];
    for (let i = 0; i < input.length; i++) {
        let elementsArgs = input[i].split(/\s+/);
        sofiaMap[i] = [];
        for (let k = 0; k < elementsArgs.length; k++) {
            sofiaMap[i][k] = parseInt(elementsArgs[k]);
        }
    }

    for (let command of commands) {
        let commandArgs = command.split(/\s+/);
        if (commandArgs[0] == 'breeze') {
            for (let k = 0; k < 5; k++) {
                sofiaMap[commandArgs[1]][k] = Math.max(sofiaMap[commandArgs[1]][k] - 15, 0);
            }
        } else if (commandArgs[0] == 'smog') {
            for (let i = 0; i < 5; i++) {
                for (let k = 0; k < 5; k++) {
                    sofiaMap[i][k] = sofiaMap[i][k] + parseInt(commandArgs[1]);
                }
            }
        } else {
            for (let i = 0; i < 5; i++) {
                sofiaMap[i][commandArgs[1]] = Math.max(sofiaMap[i][commandArgs[1]] - 20, 0);
            }
        }
    }

    let pollutedAreas = [];
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            if (sofiaMap[i][k] >= 50) {
                pollutedAreas.push("[" + i + "-" + k + "]");
            }
        }
    }

    if (pollutedAreas.length === 0) {
        console.log("No polluted areas");
    } else {
        console.log("Polluted areas: " + pollutedAreas.join(", "));
    }
}

//Problem 3 – Survey Parser
function serveyParser(text) {

    text = text.replace(/[\t\n\r]/g, "");

    let svgPattern = /<svg>(.|\s)*?<\/svg>/;
    let dataPattern =
        new RegExp(/<svg>.*?<cat>.*?<text>.*?\[(.*?)\]<\/text>.*?<\/cat>.*?<cat>.*?(?:<g><val>(\d+)<\/val>(\d+)<\/g>)*<\/cat>.*?<\/svg>/, 'g');
    if (!svgPattern.test(text)) {
        console.log('No survey found');
        return;
    }
}

//
// serveyParser('<svg><cat><text>How do you rate the special menu? [Food -' +
//     '\n Special]</text></cat>\n' +
//     '<cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>\n');

//Problem 4 – Game of Epicne

function gameOfEpicness(kingdomsInfos, commands) {
    let kingdoms = new Map();
    //JSON.parse(JSON.stringify(kingdomsInfos));
    for (let entry of kingdomsInfos) {
        if (kingdoms.get(entry.kingdom) == null) {
            kingdoms.set(entry.kingdom, new Map());
            kingdoms.get(entry.kingdom).set(entry.general, {army: entry.army, wins: 0, loses: 0});
        } else {
            if (kingdoms.get(entry.kingdom).get(entry.general) == null) {
                kingdoms.get(entry.kingdom).set(entry.general, {army: entry.army, wins: 0, loses: 0});
            } else {
                let oldArmy = kingdoms.get(entry.kingdom).get(entry.general).army;
                kingdoms.get(entry.kingdom).get(entry.general).army = oldArmy + entry.army;
            }
        }
    }

    for (let command of commands) {
        let [attKingdomName, attGeneralName, defKingdomName, defGeneralName] = command;
        //console.log(attKingdom+'-'+attGeneral+'-'+defKingdom+ '-'+defGeneral+'-');
        if (attKingdomName != defKingdomName) {
            let attackGeneral = kingdoms.get(attKingdomName).get(attGeneralName);
            let defGeneral = kingdoms.get(defKingdomName).get(defGeneralName);
            if (attackGeneral.army > defGeneral.army) {
                attackGeneral.wins++;
                defGeneral.loses++;
                attackGeneral.army = Math.floor(attackGeneral.army * 1.1);
                defGeneral.army = Math.floor(0.9 * defGeneral.army);
            } else if (attackGeneral.army < defGeneral.army) {
                defGeneral.wins++;
                attackGeneral.loses++;
                defGeneral.army = Math.floor(1.1 * defGeneral.army);
                attackGeneral.army = Math.floor(attackGeneral.army * 0.9);
            }
        }
    }
    kingdoms = [...kingdoms].sort(function (k1, k2) {
        let [k1Key, k1Value] = k1;
        let [k2Key, k2Value] = k2;

        let k1Wins = [...k1Value.values()].reduce((a, b) => a + b.wins, 0);
        let k2Wins = [...k2Value.values()].reduce((a, b) => a + b.wins, 0);

        let k1Loses = [...k1Value.values()].reduce((a, b) => a + b.loses, 0);
        let k2Loses = [...k2Value.values()].reduce((a, b) => a + b.loses, 0);
        
        if (k1Wins < k2Wins) {
            return 1;
        } else if (k1Wins > k2Wins) {
            return -1;
        } else {
            if (k1Loses < k2Loses) {
                return -1;
            } else if (k1Loses > k2Loses) {
                return 1;
            } else {
                if (k1Key < k2Key) return -1;
                if (k1Key > k2Key) return 1;
                return 0;
            }
        }

        //  console.log(k1Wins+'---'+k2Wins);
        //  console.log();
        //  if(k1Wins>k2Wins){
        //      return -1;
        //  }else if(k1Wins<k2Wins){
        //       return 1;
        //  }

    });

    //console.log(kingdoms);
    let [winnerName, winnerGenerals] = kingdoms[0];
    console.log("Winner: " + winnerName);
    for (let [generalName, generalInfo] of [...winnerGenerals].sort(
        function (g1, g2) {
            let [g1Key, g1Value] = g1;
            let [g2Key, g2Value] = g2;

            let g1Army = g1Value.army;
            let g2Army = g2Value.army;

            if (g1Army > g2Army) return -1;
            if (g1Army < g2Army) return 1;
            return 0;
        }
    )) {
        console.log("\/\\general: " + generalName);
        console.log('---army: ' + generalInfo.army.toFixed(0));
        console.log('---wins: ' + generalInfo.wins);
        console.log('---losses: ' + generalInfo.loses);
    }
}

"use strict";
gameOfEpicness([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);

// gameOfEpicness([{kingdom: "Stonegate", general: "Ulric", army: 5000},
//         {kingdom: "YorkenShire", general: "Quinn", army: 5000},
//         {kingdom: "Maiden Way", general: "Berinon", army: 1000}],
//     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]
// );