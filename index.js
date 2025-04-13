const { validate } = require('revalidator');

const prompt = require('prompt-sync')(); //Import de prompt-sync

console.log("Bienvenue dans le jeu de l'OIE 🦆");
//Creation  du  joueur
let joueur = {
nom: "TOM",
case: 0
};

//lancer un dé
function lancerUnDe(){
    return Math.floor(Math.random() * 6) +1;
};
//console.log(lancerUnDe())

//lancer un joueur
function lancerUnJoueur(){
    return [lancerUnDe(), lancerUnDe()];
}
//console.log(lancerUnJoueur())

//Déplacer le pion en fonction du resultat
function deplacerUnJouer(valeurDes){
    let total = valeurDes[0] + valeurDes[1];
    console.log(`${joueur.nom} a lancé ${valeurDes[0]} et ${valeurDes[1]} (total: ${total})`);
if(premierTour && total === 9){
    if ((valeurDes[0] === 4 && valeurDes[1] === 5) || (valeurDes[0] === 5 && valeurDes[1] === 4)) {  //Un 4+5 force le joueur à se déplacer directement sur la case 53 ! 
        console.log(`4+5 obtenu ! ${joueur.nom} avance directement à la case 53 !`);
        joueur.case = 53;
    } 
}


};
deplacerUnJouer();

while (jeuEnCours) {
    prompt('Appuyez sur entrée pour lancer les dés...');
    let valeurDuDes = lancerDesJoueur();
    jeuEnCours = !deplacerUnJoueur(valeurDuDes, premierTour, tour);
    //premierTour = false;
    //tour++;
};