
import "./exo1.js"
import "./exo2.js"
import "./exo4.js"
import "./exocalculette.js"
import "./todolist.js"

//Exo1

//Récupérer les boutons
let NavBoutons = document.querySelectorAll("#MesBoutons a");
// Récupérer les panels
let panels = document.querySelectorAll("#container-panel .panel")
// Fonction pour le changement d'état
let ChangePanel = function (changement) {

    //Permet d'éviter le rechargement
    changement.preventDefault();



    // Récupérer le panel active
    let panelActive = document.querySelector("#container-panel .active");
    // Enlever la class active du panel active
    panelActive.classList.remove("active");
    // Récuperer le bouton active
    let boutonActive = document.querySelector("#MesBoutons .active");
    // Enlever la class active du bouton active
    boutonActive.classList.remove("active")


    // Ajouter la class active au bouton cliquer
    changement.target.classList.add("active");
    // Récupérér position du bouton
    let position = changement.target.getAttribute("data-position");
    // Trouver la div correspondante à ce bouton
    let divCorrespondante = document.querySelector("#exo" + position + "-panel");

    if (divCorrespondante) {
        // Ajouter la class active à cette div
        divCorrespondante.classList.add("active");
    } else {
        panelActive.classList.add('active');
        console.log("pas de div correspondante");
    }

}

// Ajouter un écouteur d'événement sur mes boutons
NavBoutons.forEach((element) => {
    element.addEventListener('click', ChangePanel)
});

