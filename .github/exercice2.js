let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i=0; i<valeurs.length; i++){
    
    let affichage = String(valeurs[i]);
           
    if (valeurs[i] === ""){
        affichage = "(Chaine vide)";
    }
    if (valeurs[i]){
        console.log( affichage + " -> truthy");
    } else {
        console.log( affichage + " -> falsy");
    }
}