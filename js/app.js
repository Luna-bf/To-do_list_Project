'use strict'; //Version stricte de JavaScript

//Je récupère mes éléments HTML
const elements = {
    allTasks: document.querySelector('#all-tasks ul'),
    checkbox: document.querySelector('#task-name'),
    submitTaskBtn: document.querySelector("#submit-btn"),
    filterPriority: document.querySelector('#filter-priority'),
    filterCategory: document.querySelector('#filter-category'),
    displayBtn: document.querySelector('#display-btn'),
};

//J'indique mes priorités et leur valeur
const priorities = {
    priorityHigh : 1,
    priorityNormal : 2,
    priorityLow : 3
};

//Je déclare mes catégories et leur valeur
const categories = {
    noCategory : '(Sans catégorie)',
    work : '(Travail)',
    personnal : '(Personnel)',
    urgent : '(Urgent)',
    house : '(Maison)',
    food : '(Alimentation)',
    sport : '(Sport)',
    hygiene : '(Hygiène)',
    other : '(Autre)',
};

//Toutes les tâches saisies par l'utilisateur seront enregistrées dans le tableau "myTasks"
let myTasks = [];

console.log(myTasks);

//La fonction qui va me permettre de gérer les tâches
function displayTasks() {
    //Je vide les tâches précédentes du ul (si je ne fais pas ça le tableau contenant mes tâches se répètera à chaque fois que j'ajoute une nouvelle tâche)
    elements.allTasks.innerHTML = '';

    //Je créé les tâches de manière dynamique avec une BOUCLE
    //car je veux que le code éxécuté dans la boucle se REPETE POUR CHAQUE tâche
    for(let myTask of myTasks) { //J'utilise une boucle for...of

        //A l'intérieur, je créé les éléments qui vont me servir à créer une tâche
        const li = document.createElement('li'); //Comme l'élément HTML qui contient toutes mes tâches est une liste, je déclare une balise li comme élément parent, elle contiendra tout les éléments déclarés si-dessous
        const label = document.createElement('label'); //Je déclare ensuite un élément label
        const input = document.createElement('input');
        const span = document.createElement('span');
        const penIcon = document.createElement('i'); //Modification de la tâche (nécéssite le CDN de Font Awesome)
        const trashIcon = document.createElement('i'); //Suppression de la tâche
        input.type = 'checkbox'; //J'assigne un type checkbox à mon input, car la tâche doit être cochée afin d'être validée
    
        //J'ajoute un eventListener (écoute d'évènement) à mon élément input
        input.addEventListener('change', (e) => { //change permet de changer l'état d'un élément
            myTask.isDone = input.checked; //checked est la valeur qui correspond à l'état coché de checkbox
        });

        //Je créé un noeud de texte pour l'élément label
        const labelName = document.createTextNode(myTask.title); //Ici label représente le nom de la tâche, pour que celui-ci soit égal à la valeur saisie par l'user à la création d'une tâche, je déclare qu'il faut récupérer le titre (title) attribué lors de la création de la tâche
        span.textContent += myTask.category; //J'utilise la propriété textContent car je veux ajouter du texte dans la balise span, ici le texte correspondra à la catégorie saisie par l'utilisateur
        
        /*
        La librairie Font Awesome permet d'intégrer des icônes à son projet, il est possible de les intégrer en CSS ou bien
        directement en HTML avec la balise "i", une icone Font Awesome se présente généralement de cette manière : <i class="fa-solid fa-pen"></i>
        
        J'ai déjà créé mes éléments i si-dessus (voir ligne n°) donc je n'ai plus qu'a leur assigner la classe correspondant
        à l'élément que je veux afficher
        */
        penIcon.classList.add('fa-solid', 'fa-pen'); //J'ajoute une icône à mon élément i (qui se trouvera à côté de l'élément span)
        trashIcon.classList.add('fa-solid', 'fa-trash'); //classList.add() permet d'ajouter une classe à un élément

        //Puis, toujours dans ma boucle for of, je gère les priorité avec un switch, j'ajoute une classe dédiée à chaque priorité
        switch(myTask.priority) {
            case priorities.priorityHigh: //Dans le cas où ma priorité est élevée...
                label.classList.add('high'); //J'ajoute une classe 'high' (cela va être utile pour la partie CSS)
                break; //Puis je met un break, si la condition est vraie (si la priorité saisie est élevée) alors on sort du bloc switch. Si elle est fausse, le code continue de s'éxécuter jusqu'à ce qu'il soit vrai
            case priorities.priorityNormal:
                label.classList.add('normal');
                break;
            case priorities.priorityLow:
                label.classList.add('low');
                break;
            default: //Si les 3 conditions au desssus sont fausses, le comportement par défaut est éxécuté. Ici, si aucune priorité est saisie, on ajoute la classe 'none' (aucune)
                label.classList.add('none');
                break;
        }

        //Je fais pareil pour les catégories
        switch(myTask.category) {
            case categories.work:
                span.classList.add('work'); //Les classes sont ajoutées dans la balise span car les catégories seront affichées dans cette balise
                break;
            case categories.personnal:
                span.classList.add('personnal');
                break;
            case categories.urgent:
                span.classList.add('urgent');
                break;
            case categories.studies:
                span.classList.add('studies');
                break;
            case categories.food:
                span.classList.add('food');
                break;
            case categories.house:
                span.classList.add('house');
                break;
            case categories.sport:
                span.classList.add('sport');
                break;
            case categories.hygiene:
                span.classList.add('hygiene');
                break;
            case categories.hobbies:
                span.classList.add('hobbies');
                break;
            case categories.other:
                span.classList.add('other');
                break;
            default:
                span.classList.add('noCategory');
                break;
        }

        //Puis j'attache tous les éléments ensemble
        label.append(input, labelName); //Je met l'input et le nom des tâches dans le label
        li.append(label, span, penIcon, trashIcon); //Je met label, span et icon dans l'élément li
        elements.allTasks.append(li); //Et enfin je met mon élément li dans l'élément qui contient l'id all-tasks en allant le chercher dans l'objet elements et en sélectionnant allTasks (le container)
    
        //J'ajoute un évènement à mon icône poubelle
        trashIcon.addEventListener('click', () => {
            li.remove(); //Si elle est cliquée, la tâche qui lui est associée est supprimée
        });
    }
}

//J'affiche la liste au chargement de la page en appelant ma fonction
displayTasks();

//J'ajoute un évènement à mon formulaire, lorsqu'il est soummit :
elements.submitTaskBtn.addEventListener('submit', (e) => {
    
    //J'empêche le rechargement de la page
    e.preventDefault();
        
    //Je récupère les données de mon formulaire
    const formData = new FormData(elements.submitTaskBtn);
        
    //Puis je créé une nouvelle tâche
    const newTask = {
        title: formData.get('task_name'), //Je récupère la donnée name (task_title) de l'input se trouvant dans le form
        priority: Number(formData.get('choose_priority')), //J'utilise l'attribut Number pour bien récupérer un nombre et non une string
        category: formData.get('choose_category'),
        isDone: false //Par défaut, la tâche n'est pas finie
    };
        
    //J'ajoute cette nouvelle tâche à mon tableau
    myTasks.push(newTask);
        
    //Puis je met tout à jour en appelant ma fonction
    displayTasks();
});


//Fonction pour filtrer les tâches par catégorie (à améliorer)

/*elements.displayBtn.addEventListener('submit', () => {
        
    //J'empêche le rechargement de la page
    e.preventDefault();
           
    function categoryType() {
        display(elements.filterPriority.value, elements.filterCategory.value);
    }
    
    function priorityType() {
        display(elements.filterPriority.value, elements.filterCategory.value);
    }
        
    function display(category, priority) {
        Array.from(elements.cards).forEach(card => card.classList.remove('hidden'));
    }
          
    if(category) {
        Array.from(elements.cards).filter(card => !card.classList.contains(category)).forEach(card => card.classList.add('hidden'))
    }
            
    if(priority) {
        Array.from(elements.cards).filter(card => !card.classList.contains(priority)).forEach(card => card.classList.add('hidden'))
    } 
    
        
        
    //Je récupère les données de mon formulaire
    const formData = new FormData(elements.filterPriority);
        
    //Puis je créé une nouvelle tâche
    const filterTasks = {
        title: formData.get('task_name'), //Je récupère la donnée name (task_title) de l'input se trouvant dans le form
        priority: Number(formData.get('choose_priority')), //J'utilise l'attribut Number pour bien récupérer un nombre et non une string
        isDone: false //Par défaut, la tâche n'est pas finie
    };
        
    //Puis je met tout à jour en appelant ma fonction
    displayTasks();
});*/

//La fonction qui va me permettre de supprimer uniquement les tâches terminées
/*elements.deleteBtn.addEventListener('click', (e) => {
    
    e.preventDefault()

    //Faire une boucle afin de déterminer si le nombre de tâche(s) cochée(s) est supérieur ou inférieur à 1 ???
    if(elements.deactivatePrompt.hasAttribute('disabled') === false && (myTasks = myTasks.filter(myTask => !myTask.isDone > 0))) { //On vérifie que l'élément ayant l'id 'deactivate-msg' ai l'attribut 'disabled' déclaré en false (soit non-existant) pour savoir si on l'affiche ou non et on supprime toutes les tâches qui ont la propriété isDone en true
        window.alert('Félicitations ! Vous avez terminé une tâche !');
        displayTasks(); //Je met à jour l'affichage en appelant ma fonction
    } else if(elements.deactivatePrompt.hasAttribute('disabled') === false && (myTasks = myTasks.filter(myTask => !myTask.isDone > 1))) { //Pareil qu'au dessus mais on vérifie également si le nombre de tâches est supérieur à 1, si oui alors le message change en conséquences
        window.alert('Félicitations ! Vous avez terminé plusieurs tâches !');
        displayTasks();
    } else {
        myTasks = myTasks.filter(myTask => !myTask.isDone); //Si l'élément ayant l'id 'deactivate-msg' a l'attribut 'disabled' déclaré en 'true' alors on affiche juste les tâches non cochées
        displayTasks();
    }
    
    //S'il reste des tâches non complétées, on récupère un nouveau tableau uniquement avec les tâches non complétées
    //On met pas prevent default car le bouton "Supprimer les tâches" a l'attribut 'click' et non 'submit' car le btn ne fait pas parti d'un formulaire
});*/