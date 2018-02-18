//Problem 1 – The Hungry Programmer
function theHungryProgrammer(meals,commands){
    let commandsArgs;
    let mealsEaten=0;
    let endCycle=false;
    for(let command of commands){
        commandsArgs=command.split(/\s+/);
        switch(commandsArgs[0]){
            case 'Serve':
                if(meals.length!=0){
                    console.log(`${meals.pop()} served!`);
                }
            break;
            case 'Eat':
                if(meals.length!=0){
                    console.log(`${meals.shift()} eaten`);
                    mealsEaten++;
                }
                break;
            case 'Add':
                if(commandsArgs.length==2)meals.unshift(commandsArgs[1]);
                break;
            case 'Consume':
                if(meals.length>commandsArgs[2] && 0<=commandsArgs[1] &&  commandsArgs[1]<=commandsArgs[2]){
                    console.log('Burp!');
                    mealsEaten+=meals.splice(commandsArgs[1],commandsArgs[2]-commandsArgs[1]+1).length;
                }
                break;
            case 'Shift':
                if(meals.length>commandsArgs[1] && commandsArgs[1]>=0
                && meals.length>commandsArgs[2] && commandsArgs[2]>=0){
                    let temp=meals[commandsArgs[1]];
                    meals[commandsArgs[1]]=meals[commandsArgs[2]];
                    meals[commandsArgs[2]]=temp;
                }
                break;
            case 'End':endCycle=true;
                break;
            default:continue;
        }

        if(endCycle){
            break;
        }
    }

    if(meals.length==0){
        console.log('The food is gone');
    }else{
        console.log('Meals left: '+meals.join(', '));
    }

    console.log('Meals eaten: '+mealsEaten);
}


//Problem 2 – Expedition
function expedition(primaryArray,secondaryArray,overlayCoordinates,startingCoordinates){
    //for(let i=0;i<overlayCoordinates.length;i++){
    for(let [overlayCoordX,overlayCoordY] of overlayCoordinates){
        for(let row=0;row<secondaryArray.length;row++){
            if(overlayCoordX+row>=primaryArray.length){
                break;
            }

            for(let col=0;col<secondaryArray[row].length;col++){
                if(overlayCoordY+col>=primaryArray[row].length){
                    break;
                }

                if(secondaryArray[row][col]==1){
                    if(primaryArray[overlayCoordX+row][overlayCoordY+col]==1){
                        primaryArray[overlayCoordX+row][overlayCoordY+col]=0;
                    }else{
                        primaryArray[overlayCoordX+row][overlayCoordY+col]=1;
                    }
                }
            }
        }
    }

    //let walkedPath=new Set();
    let lastX=startingCoordinates[0];
    let lastY=startingCoordinates[1];
    let currentX=startingCoordinates[0];
    let currentY=startingCoordinates[1];
    let exitSide;
    let isDeadEnd;
    let steps=1;
    while(true){
        isDeadEnd=true;
        if(primaryArray[currentX+1][currentY]==0 && currentX+1!=lastX){
            exitSide='Bottom';
            lastX=currentX;
            lastY=currentY;
            currentX=currentX+1;
            isDeadEnd=false;
            steps++;
        }else if(primaryArray[currentX-1][currentY]==0 && currentX-1!=lastX){
            exitSide='Top';
            lastX=currentX;
            lastY=currentY;
            currentX=currentX-1;
            isDeadEnd=false;
            steps++;
        }else if(primaryArray[currentX][currentY+1]==0 && currentY+1!=lastY){
            exitSide='Right';
            lastY=currentY;
            lastX=currentX;
            currentY=currentY+1;
            isDeadEnd=false;
            steps++;
        }else if(primaryArray[currentX][currentY-1]==0 && currentY-1!=lastY){
            exitSide='Left';
            lastY=currentY;
            lastX=currentX;
            currentY=currentY-1;
            isDeadEnd=false;
            steps++;
        }

        //console.log(exitSide+'  lastX='+lastX+'  lastY='+lastY+'  currentX='+currentX+'  currentY='+currentY);
        if(currentX==0 || currentX==primaryArray.length-1 || currentY==0 || currentY==primaryArray[0].length-1){
            console.log(steps);
            console.log(exitSide);
            break;
        }

        if(isDeadEnd){
            let quadrant;
            if(currentX<primaryArray.length/2 && currentY<primaryArray[0].length/2){
                quadrant=2;
            }

            if(currentX>=primaryArray.length/2 && currentY<primaryArray[0].length/2){
                quadrant=3;
            }

            if(currentX>=primaryArray.length/2 && currentY>=primaryArray[0].length/2){
                quadrant=4;
            }

            if(currentX<primaryArray.length/2 && currentY>=primaryArray[0].length/2){
                quadrant=1;
            }


            console.log(steps);
            console.log('Dead end '+quadrant);
            break;
        }
    }
}

//Problem 3 – Lost in the Mountains
function lostInTheMountains(keyword,text){
    let messageRegex=new RegExp(pattern,'g');
    let pattern=`east.*?(\d{2},(?:[^,]*)\d{6}).*?${keyword}(.*)${keyword}north.*?(\d{2},(?:[^,]*)\d{6})`;
   // pattern=pattern.replace(/keyword/g,keyword);
    let regex=new RegExp(pattern,'g');
    while(true) {
        let example=text.match(regex);
        let match =regex.exec(text);
        if(!match){
            break;
        }

        match.forEach(a => console.log(a));
    }
}

// lostInTheMountains('4ds',
// 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');

//Problem 4 – Rest House
function restHouse(rooms,quests){
    let roomsQuests=new Map();
    let roomsFreeBeds=new Map();
    for(let val of JSON.parse(JSON.stringify(rooms))) {
        roomsQuests.set(val.number, new Map());

        if (val.type === 'double-bedded') {
            roomsFreeBeds.set(val.number, 2);
        } else {
            roomsFreeBeds.set(val.number, 3);
        }
    }

    for(let couple of JSON.parse(JSON.stringify(quests))){
        let first=couple.first;
        let second=couple.second;
        if(couple.first){

        }

    }


}

restHouse([ { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } ],
    [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
        { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]);