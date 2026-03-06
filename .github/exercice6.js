let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let defaut = "valeur par défaut";

console.log(`nom ?? "${defaut}" -> ${nom ?? defaut}`);
console.log(`age ?? "${defaut}" -> ${age ?? defaut}`);
console.log(`ville ?? "${defaut}" -> ${ville ?? defaut}`);
console.log(`score ?? "${defaut}" -> ${score ?? defaut}`);
console.log(`actif ?? "${defaut}" -> ${actif ?? defaut}`);

console.log("______________\n");

console.log(`nom || "${defaut}" -> ${nom || defaut}`);
console.log(`age || "${defaut}" -> ${age || defaut}`);
console.log(`ville || "${defaut}" -> ${ville || defaut}`);
console.log(`score || "${defaut}" -> ${score || defaut}`);
console.log(`actif || "${defaut}" -> ${actif || defaut}`);

console.log("______________\n");

console.log(`nom : ?? et || -> ${(nom ?? defaut) === (nom || defaut) ? "même résultat" : "résultat différent"}`);
console.log(`age : ?? et || -> ${(age ?? defaut) === (age || defaut) ? "même résultat" : "résultat différent"}`);
console.log(`ville : ?? et || -> ${(ville ?? defaut) === (ville || defaut) ? "même résultat" : "résultat différent"}`);
console.log(`score : ?? et || -> ${(score ?? defaut) === (score || defaut) ? "même résultat" : "résultat différent"}`);
console.log(`actif : ?? et || -> ${(actif ?? defaut) === (actif || defaut) ? "même résultat" : "résultat différent"}`);