let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log(`Sous-total : ${sousTotal}`);

let reduction = 0;

if ((codePromo ?? false) && estMembre){
    reduction = sousTotal * reductionPourcentage / 100;
} 
console.log(`Montant de la réduction : ${reduction}`);

let totalFinal = sousTotal - reduction;

let statut ="";
let nouveauSolde = soldeCompte;

if (totalFinal <= soldeCompte){
    statut = "Paiement accepté";
    nouveauSolde = soldeCompte - totalFinal;
} else {
    statut = "Solde insuffisant";
}
console.log(statut);

console.log("===== Récapitulatif =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction : ${reduction} MAS`);
console.log(`Total     : ${totalFinal.toFixed(3)} MAS`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSolde.toFixed(3)} MAD`);
console.log("=========================");