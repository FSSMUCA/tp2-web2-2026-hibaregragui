let paires = [ [0, ""], [0, "0"], [0, false], ["", false], [null, undefined], [null, false], [NaN, NaN], [1, "1"], ["\t\n", 0] ];
let X = 0;

for (i=0; i<paires.length; i++){
    let a = paires[i][0];
    let b = paires[i][1];

    console.log(`${a} == ${b} -> ${a == b}   |   ${a} === ${b} -> ${a === b}`);

    if (a == b && a !== b){
        X++;
    }
}

console.log("---");
console.log(`${X} paire(s) où == et === donnent des résultats différents`);