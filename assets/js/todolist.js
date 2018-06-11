
// RÉCUPÉRATION DES ÉLÉMENTS DE BASE

//input de recherche
let nametask = document.querySelector("#exo7-panel #nametask")
//Bouton OK
let btnOK = document.querySelector("#exo7-panel #btnok")
//Bouton ALL
let btnAll = document.querySelector("#exo7-panel #btnall")
//Bouton A FAIRE
let btnToDo = document.querySelector("#exo7-panel #btntodo")
//Bouton FAIT
let btnDONE = document.querySelector("#exo7-panel #btndone")

// Div vide que l'on rempli
let taskList;

let newTask;


//--------------------------------------------------------------------------------------------//



// CRÉATION D'UN AJOUT DE TÂCHE

let ajoutdeTache = function (event) {
    // Si barre de tâche vide ou "tâche non-choisie" ==> tâche non-choisie"
    if (nametask.value == "" | nametask.value == "Tâche non-choisie") {
        nametask.value = ("Tâche non-choisie")
        return
    }

    // Création de la tâche 
    let newTask = document.createElement("div")

    // Création de la bordure de la barre de tâche qu'on crée
    newTask.classList.add("row", "border", "border-primary", "border25", "bg-white", "justify-content-between")

    // Ajout de la tâche qu'on crée dans la div vide
    taskList = document.querySelector(".tasklist")
    taskList.appendChild(newTask)

    // Ajout de la valeur de ce que l'on a écrit dans l'input + icônes 
    newTask.innerHTML = "<div class='texte pl-3 pt-2 pb-2'>" + nametask.value + "</div>" + " <div class='divicone pr-3 pt-2 pb-2'> <a class='valid pr-3'><i class='fas fa-check'></i></a> <a class='modif pr-3'><i class='fas fa-edit'></i></a> <a class='delete'><i class='far fa-times-circle'></i></a> </div>"
    nametask.value = "";


    // Déclaration des boutons de la bare de tâche que l'on a crée
    let btnvalid = newTask.querySelector(".divicone .valid")
    let btnmodif = newTask.querySelector(".divicone .modif")
    let btnsupp = newTask.querySelector(".divicone .delete")

    // Écouteur d'évènement des boutons de la barre de tâche que l'on a crée    
    btnvalid.addEventListener("click", validation)
    btnsupp.addEventListener("click", supprimer)
    btnmodif.addEventListener("click", modifier)
    nametask.value = "";


    newTask.classList.add("active")

}






// Fonction du bouton "validation" de la barre de tâche que l'on crée
let validation = function (event) {
    event.target.closest(".row").classList.toggle("bg-primary");
    event.target.closest(".row").classList.toggle("bg-white");

};

// Fonction du bouton "supprimer" de la barre de tâche que l'on crée
let supprimer = function (event) {
    taskList.removeChild(event.target.closest(".row"));
};

// Fonction du bouton "modifier" de la barre de tâche que l'on crée
let modifier = function (event) {
    // Ciblage divtexte
    let divtexte = event.target.closest(".row").querySelector(".texte")


    // Création de mon input qui va être dans ma divtexte
    let inputmodification = document.createElement("input")
    inputmodification.classList.add("input", "border25", "pl-2")
    divtexte.textContent = "";
    // Placement de mon input dans ma divtexte
    divtexte.appendChild(inputmodification);


    // Création du bouton pour la modification de mon input dans la barre de tâche que l'on a crée
    let btnmodification = document.createElement("button");
    btnmodification.classList.add("ml-2", "border25")
    btnmodification.textContent = " Modifie-moi"
    divtexte.appendChild(btnmodification);





    // Écouteur d'évènement pour modifier l'input de la barre de tâche que l'on a crée
    btnmodification.addEventListener("click", modifierinput)
};


// MOdifier l'input de la barre des tâche que l'on a crée
let modifierinput = function (event) {

    //Appel des variables pour la modification
    let inputmodifie = event.target.closest(".row").querySelector(".input")
    let divtexte = event.target.closest(".row").querySelector(".texte")
    if (inputmodifie.value == "") {
        inputmodifie.placeholder = "T'as rien modifié nulos"
        return
    }

    // Le contenu de l'input va être égal à ce que l'on tappe
    divtexte.textContent = inputmodifie.value

}


// -------------------------------------------------------------------------------------------//



// Affichage de toutes les tâches
let afficheAll = function () {
    event.preventDefault()
    taskList.classList.remove("done")
    taskList.classList.remove("todo")
}
btnAll.addEventListener("click", afficheAll)


// Affichage des tâches à faire
let afficheTodo = function () {
    event.preventDefault()
    taskList.classList.add("todo")
    taskList.classList.remove("done")
}

btnToDo.addEventListener("click", afficheTodo)

// Affichage des tâches faites
let afficheDone = function () {
    event.preventDefault()
    taskList.classList.add("done")
    taskList.classList.remove("todo")
}

btnDONE.addEventListener("click", afficheDone)











// Écouteur d'événement

// Ajout de tâche
btnOK.addEventListener("click", ajoutdeTache)
