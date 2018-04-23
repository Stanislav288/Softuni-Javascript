function arithmephile(inputArray) {
    if (inputArray.length === 0) {
        return;
    }

    if (inputArray.length === 1) {
        console.log(inputArray[0]);
        return;
    }

    inputArray.map((a) => {
        return Number(a);
    });

    let biggestProduct = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < inputArray.length; i++) {
        let currentNumber = Number(inputArray[i]);
        if (currentNumber >= 0 && currentNumber <= 9) {
            let currentProduct = 0;
            currentProduct = inputArray.slice(i + 1, i + currentNumber + 1).reduce(function (total, num) {
                return total * num;
            }, 1);
            biggestProduct = currentProduct > biggestProduct ? currentProduct : biggestProduct;
        }
    }

    console.log(biggestProduct);
}

// arithmephile([10, 20, 2, 30, 44, 4, 56, 20, 24,-1]);
//arithmephile([4, 56, 20, 24,-1]);
//arithmephile([18, 42, 19, 36, 1, -297, 38, 100, 9, -249, -170, -18, -208, -11, -87, -90, -286, -27]);

function rosettaStone(inputArray) {
    let n = Number(inputArray[0]);
    let templMatrix = [];
    let decrMatrix = [];
    for (let i = 1; i < inputArray.length; i++) {
        if (i <= n) {
            decrMatrix.push(inputArray[i].split('/\\s+/'));
        } else {
            templMatrix.push(inputArray[i].split('/\\s+/'));
        }
    }

    for (let templMatrixRow = 0; templMatrixRow < templMatrix.length; templMatrixRow++) {
        for (let templMatrixCol = 0; templMatrixCol < templMatrix[templMatrixRow].length; templMatrixCol++) {

        }
    }
}

// rosettaStone([ '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22' ]
// );

function radicalMarketing(inputArray) {
    let market = new Map();
    let personIndex = 1;
    for (let i = 0; i < inputArray.length; i++) {
        let params = inputArray[i].split(/-/);
        if (params.length === 1) {
            if (market.get(params[0]) === undefined) {
                market.set(params[0], {subscribers: [], subscribeTo: [], personIndex: personIndex});
                personIndex++;
            }
        } else {
            let person1Key = params[0];
            let person2Key = params[1];
            if (person1Key === person2Key || market.get(person1Key) === undefined || market.get(person2Key) === undefined) {
                continue;
            }

            let person1Value = market.get(person1Key);
            let person2Value = market.get(person2Key);

            if (!person2Value.subscribers.includes(person1Key)) {
                person2Value.subscribers.push(person1Key);
            }

            if (!person1Value.subscribeTo.includes(person2Key)) {
                person1Value.subscribeTo.push(person2Key);
            }

            market.set(person1Key, person1Value);
            market.set(person2Key, person2Value);
        }
    }

    market = [...market].sort(function (p1, p2) {
        let [p1Key, p1Value] = p1;
        let [p2Key, p2Value] = p2;

        let p1SubsLength = p1Value.subscribers.length;
        let p2SubsLength = p2Value.subscribers.length;

        let p1SubsToLength = p1Value.subscribeTo.length;
        let p2SubsToLength = p2Value.subscribeTo.length;

        if (p1SubsLength < p2SubsLength) {
            return 1;
        } else if (p1SubsLength > p2SubsLength) {
            return -1;
        } else {
            if (p1SubsToLength < p2SubsToLength) {
                return 1;
            } else if (p1SubsToLength > p2SubsToLength) {
                return -1;
            } else {
                if (p1Value.personIndex < p2Value.personIndex) return -1;
                if (p1Value.personIndex > p2Value.personIndex) return 1;
                return 0;
            }
        }
    });

    let [topPersonKey, topPersonValue] = market[0];
    let topPersonSubs = topPersonValue.subscribers;
    console.log(topPersonKey);
    for (let i = 0; i < topPersonSubs.length; i++) {
        console.log(`${i + 1}. ${topPersonSubs[i]}`);
    }

}

// radicalMarketing(['T',
//     'E',
//     'S',
//     'T',
//     'D-D',
//     'Q-P',
//     'R-D'
// ]);

function spyMaster(inputArray) {
    let specialKey = inputArray[0];
    inputArray.shift();
    let encodedMessage = inputArray.join('\n');
    let patternAllPairs = new RegExp(`(\\s|^)(${specialKey}\\s+)([A-Z$!#%]{8,})(\\s|$|[.,])`, 'gim');
    let regex = new RegExp('^([A-Z$!#%]+)$');
    let newString = encodedMessage.replace(patternAllPairs, replacer);
    console.log(newString);

    function replacer(match, p1, p2, p3,p4, offset, string) {
        if (regex.test(p3)) {
            p3=p3.toLowerCase()
                .replace(/!/g, 1)
                .replace(/%/g, 2)
                .replace(/#/g, 3)
                .replace(/\$/g, 4);
        }

        return p1 + p2 + p3+p4;
    }
}

// spyMaster([
//     "specialKey",
//     "In this text the specialKey HELLOWORLD! is correct, but",
//     "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
//     "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
// ]);

// spyMaster(['enCode',
// 'Some messages are just not encoded what can you do?',
// 'RE - ENCODE THEMNOW! - he said.',
// 'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%'
// ]);

// spyMaster([
//     'secret',
//     'Random text with secrets EVERYWHERE',
// 'secret HEREHERE and one secret OVERTHEREANDEVERYWHERE',
// 'secret SECRETTIME, and secret KINDATHERE.',
//     'secret ONELINER',
// 'and maybe secret FALSESE or secret TRUESECRET or secret ENDONCOMA',
//    'here are three secrets one secret OVERHERE, one secret OVERTHERE and one secret DISSAPPOINT'
// ]);
//
// spyMaster([
//     "miXedTestS",
//     "This should be correct - mixedtests          ISCORRECTOK,",
//     "not this one though remiXedTestS ITSWRONGKIDS",
//     "as is this one mixedtestsos               TOTALL!WRONG",
//     "Now on to the correct ones MIXEDTESTS  WHYSHOULDITFAIL or this MiXeDtEsTs OK!DOK!LOK!",
//     "and here are some more",
//     "mIXeDtEsTS JUS!%T#SO!!M$%%ST##!$FF",
//     "MIXEDtests ITSF!%NERE#$LLY. mixedTESTS   ANOTHEROKONE",
//     "this one's wrong tho mixedTest  WRONGTEST"
// ]);
//
// spyMaster([
//     "tricky",
//     "And now the tricky tests",
//     "Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%",
//     "Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -",
//     "Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE",
//     "Be very carefull now trICkY plainwrong, trICkY PLAINWRONG",
//     "next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS",
//     "It's tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,",
//     "now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.",
//     "DON'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.",
//     "Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow"
// ]);

// spyMaster([
// "symbol",
// "symbol TEST!#$%, and symbol %$$!#$$% and symbol H$H$H$H$",
// "symbol FAIL!@#$ symbol )_(~*^@WOW, symbol %%%%!!##$$^",
// "symbol ano!the%rf!ai$$l%#",
// "symbol S#OME!#SU$CC$E%SS%%.",
// "lets not forget the underscore symbol WRONG_WRONG",
// "This sentence is capitalized symbol WOWZ0RZLEL",
// "LETS MIX IN LOWER LETTERS symbol NOTg0NNAWORK"
// ]);

spyMaster([
    "hiddenTrap",
    "Now the ultimate hiddenTrap HIDDENTR just some text",
    "who said the message couldn't be contained in the key",
    "or it could be this HIDDENTRAP, HIDDENTRAP HIDDENTRA",
    "some more tests this one is wrong (HIDDENTRAP HIDDENTRA)",
"now with some spaces HIDDENTRAP         HIDDENTRA  HIDDENTRAP  HIDDENTR",
"hiddenTrap HiddenTRA, hiddenTrap HIDDENTRA"
]);