let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}

let ageNombre = parseInt(age);
let ageStatut = (Number.isNaN(ageNombre) || ageNombre <= 0) ? "valeur invalide" : "valide";

let position = email.indexOf("@");
let emailValide = position !== -1 && email.indexOf(".", position) !== -1;

let score = parseInt(scoreJeu);
if (Number.isNaN(score)){
    score = 0;
}

let adminBool = (estAdmin === "true");

let connexion = derniereConnexion ?? "Jamais connecté";

let connexions = Number(nombreConnexions);
let texteConnexions = connexions === 0 ? "Aucune connexion" : connexions;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : "${ageNombre}" (${ageStatut})`);
console.log(`email            : "${email}" (${emailValide ? "Valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${score} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${adminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexion}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${texteConnexions}" (0 après conversion)`);
console.log("===============================");