//Exo6

//LEVEL 1 //

// Récuperer les éléments du DOM
// Récuperer l'input 1
let num1 = document.querySelector("#exo6-panel .nb1");
// Récuperer l'input 2
let num2 = document.querySelector("#exo6-panel .nb2");
// Récuperer le bouton égale
let btnEgal = document.querySelector("#exo6-panel .calc1");
// Récupérer le span pour la réponse
let result1 = document.querySelector("#exo6-panel .result1");

// Fonction additioner
let addition = function (event) {
    // On Récupère le nombre 1 après le clique
    let nombre1 = parseInt(num1.value);// Transformation avec parseInt
    // On récupère le nombre 2 après le clique
    let nombre2 = +num2.value;// Transformation avec le "+"
    // On addition les deux nombres et on les stocke
    let resultat = nombre1 + nombre2;
    // On met dans le span result le resultat
    result1.textContent = resultat;
}

// Ajouter un écouteur d'événement
btnEgal.addEventListener("click", addition);































//LEVEL 2 //

// Récupérer éléments

let chiffres = document.querySelectorAll("#exo6-panel .chiffre");
let operations = document.querySelectorAll("#exo6-panel .operation");
let egal = document.querySelector("#exo6-panel .egal");
let input = document.querySelector("#exo6-panel .nbr");
let resultat = document.querySelector("#exo6-panel .resultat");

// Déclarer nombre
let nombre;
// Déclarer operateur
let operateur;





// Créer les fonctions


// AJouter nombre dans l'input
let addNumber = function (event) {
    //Prendre le nombre du bouton clické
    let chiffre = event.target.textContent;
    //Ajouter le chiffre dans l'input
    input.value += chiffre;


}
// CHoisir opérateur
let chooseOperation = function (event) {
    // On récupère la valeur de l'input
    nombre = input.value;
    // ON récupère l'operateur
    operateur = event.target.textContent;

    // Vérifier si le nombre est vide
    if (nombre == "" && resultat.textContent == "") {
        //On affiche un message erreur
        resultat.textContent = "choose number";

    } else if (nombre == "" && resultat.textContent != "") {

        //Vérifier si on a pas déjà un opérateur
        let checkOperateur = resultat.textContent.charAt(resultat.textContent.length - 1);


        if (checkOperateur.match(/[\+\/\-\*]/)) {
            resultat.textContent = resultat.textContent.replace(/[\+\/\-\*]/,
                event.target.textContent);
            ;
            return;

        } else {
            resultat.textContent += event.target.textContent;
        }
    } else {
        // ON place le nombre et l'opérateur dans le résultat
        resultat.textContent = nombre + operateur;
        //Vider l'input
        input.value = "";
    }

}


//  Faire calcul
let calculate = function (event) {
    //Récupérer les deux nombres
    let numero1 = parseFloat(resultat.textContent);
    let numero2 = parseFloat(input.value);
    let numResultat;


    switch (operateur) {
        case "+":
            numResultat = numero1 + numero2;
            break;
        case "-":
            numResultat = numero1 - numero2;
            break;
        case "*":
            numResultat = numero1 * numero2;
            break;
        case "/":
            numResultat = numero1 / numero2;
            break;
        default:
            console.log("error");

    }

    resultat.textContent = numResultat;
    input.value = "";





}





// Ajouter écouteurs d'évènements

// AJouter le click aux chiffres
chiffres.forEach(element => {
    element.addEventListener("click", addNumber)
})

// AJouter le click aux opérateurs
operations.forEach(element => {
    element.addEventListener("click", chooseOperation)
})

// AJouter le click au egal
egal.addEventListener("click", calculate);


