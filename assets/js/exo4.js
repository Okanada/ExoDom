//Exo4

//Récupérer le bouton
let Bouton = document.querySelector("#exo4-panel button");

//Récupérer les parents
let parent1 = document.querySelector("#exo4-panel #parent1")
let parent2 = document.querySelector("#exo4-panel #parent2")

//Récupérer l'enfant
let enfant = document.querySelector("#exo4-panel h3")

//Nombre de click
let nbClick = 0;


//Fonction
let ChangementDiv = function (deplacement, changer) {
    deplacement.preventDefault();
    parent1.classList.toggle("bg-anakinyoung");
    parent2.classList.toggle("bg-anakinold");

    if (parent1.children.length > 0) {
        parent2.appendChild(enfant);
        document.querySelector("#exo4-panel h3").innerHTML = 'Be with you';

    }

    else {
        parent1.appendChild(enfant);
        document.querySelector("#exo4-panel h3").innerHTML = 'May the force';
    }

    nbClick++;
    Bouton.innerText = "tu as cliqué " + nbClick + " fois";

}
Bouton.addEventListener('click', ChangementDiv);
