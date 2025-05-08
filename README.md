# To-do_list_Project

Objectif :
Créer une page web permettant à l'utilisateur de gérer ses tâches quotidiennes avec un design inspiré de la productivité et du développement personnel. L'application doit permettre d’ajouter, de marquer comme terminée et de supprimer des tâches, tout en offrant une interface agréable et fonctionnelle.

Thème : Productivité personnelle
Le but de cet exercice est de créer une liste de tâches simple mais élégante, destinée à aider les utilisateurs à organiser leur journée de manière efficace. Le thème "Productivité personnelle" doit se refléter dans le design, l’interaction et la fonctionnalité de l’application. L'interface doit inciter à la productivité, la clarté et la simplicité.

Consignes :
1. Structure HTML
Créez un fichier index.html qui contiendra les éléments suivants :

En-tête :

Un titre "Ma Liste de Tâches" avec un slogan du type : "Organise ta journée pour réussir"

Un champ de saisie pour ajouter une nouvelle tâche, avec un bouton "Ajouter".

Liste de tâches :

Chaque tâche doit être affichée avec :

Un titre de la tâche.

Une case à cocher pour marquer la tâche comme terminée.

Un bouton de suppression pour enlever la tâche.

La possibilité d’afficher un message différent selon le nombre de tâches (ex : "Aucune tâche", "3 tâches à accomplir").

Options supplémentaires :

Un bouton "Supprimer les tâches terminées" pour enlever toutes les tâches complétées.

Un bouton pour réinitialiser la liste si l’utilisateur souhaite recommencer à zéro (optionnel).

2. Style CSS
Créez un fichier styles.css pour rendre votre application élégante et inspirante. Voici quelques idées pour votre design :

Palette de couleurs : Utilisez des couleurs qui inspirent la productivité, comme le bleu clair, le vert pastel, et des touches de blanc pour créer un effet apaisant et motivant. Vous pouvez aussi ajouter des touches de couleurs vives comme l’orange ou le jaune pour attirer l’attention sur les boutons importants.

Typographie : Choisissez des polices modernes et claires. Vous pourriez opter pour une police sans-serif comme Roboto ou Open Sans pour la lisibilité, avec des titres plus audacieux pour motiver l'utilisateur.

Design épuré : Utilisez un design minimaliste, avec des bordures arrondies et des ombres légères pour créer une interface moderne et légère.

Responsive : Le design doit être adaptatif. La liste de tâches doit s’ajuster aux tailles d'écran des ordinateurs de bureau, tablettes et smartphones. Utilisez des media queries pour cela.

3. Fonctionnalité JavaScript
Créez un fichier script.js pour ajouter de l'interactivité à votre application :

Ajout de tâche : L’utilisateur peut entrer une tâche dans un champ de saisie, puis appuyer sur le bouton "Ajouter" pour l'ajouter à la liste.

Marquage des tâches comme terminées : Lorsqu’une tâche est terminée (coche la case), elle doit se barrer et changer de couleur (par exemple, griser la tâche ou la rendre semi-transparente).

Suppression de tâche : L’utilisateur peut supprimer une tâche en cliquant sur le bouton "Supprimer" associé à chaque tâche.

Suppression des tâches terminées : Le bouton "Supprimer les tâches terminées" doit supprimer toutes les tâches dont la case à cocher est activée.

Réinitialisation de la liste : Le bouton "Réinitialiser la liste" doit effacer toutes les tâches présentes dans la liste.

4. Gestion de l'état des tâches
Stockage local (localStorage) : Utilisez localStorage pour sauvegarder les tâches de l’utilisateur. Lors d'un rafraîchissement de la page, les tâches doivent être rétablies dans leur état (qu'elles soient terminées ou non).

Bonus (optionnel) :
Priorité des tâches :

Ajoutez un système de priorité pour chaque tâche (Haute, Moyenne, Basse). Cela pourrait être un petit label coloré à côté de chaque tâche. Par exemple, une tâche de haute priorité pourrait être rouge, tandis qu'une tâche de basse priorité serait verte.

Animations :

Utilisez des animations CSS pour rendre l’ajout et la suppression des tâches plus dynamiques. Par exemple, lorsque vous ajoutez une tâche, elle pourrait apparaître avec une animation fluide.

Système de catégories de tâches :

Ajoutez des catégories (ex : "Travail", "Personnel", "Urgent") pour mieux organiser les tâches. Chaque tâche pourrait être associée à une catégorie, et vous pourriez afficher les tâches selon ces catégories (filtrage).

Notifications :

Ajoutez une petite fonctionnalité de notification qui apparaît lorsque l’utilisateur a terminé toutes ses tâches, lui félicitant pour sa productivité.

Livrables attendus :
Un repository GitHub public avec tous les fichiers nécessaires : index.html, styles.css, script.js.

L'application doit être fonctionnelle, avec l'ajout, la suppression, le marquage comme terminé des tâches, ainsi que l'option de supprimer toutes les tâches terminées.

Une version responsive qui s'adapte à différentes tailles d'écran.

Une version déployée via GitHub Pages pour tester et montrer le projet en ligne.

Comment utiliser Git et GitHub pour collaborer :
Création du repository GitHub : Créez un repository GitHub, ajoutez votre collègue en tant que collaborateur.

Clonage et travail sur les fichiers :

Personne 1 : Peut s'occuper du fichier index.html et de la structure de base.

Personne 2 : Peut s'occuper du design dans styles.css et de la logique dans script.js.

Commit et push :

Faites régulièrement des commits pour chaque fonctionnalité ajoutée, puis poussez les changements sur GitHub.

Utilisation de branches :
Si vous travaillez sur des parties indépendantes du projet, vous pouvez utiliser des branches pour éviter les conflits, par exemple :

main : pour le code stable.

design : pour les changements CSS.

feature/add-tasks : pour les fonctionnalités JavaScript.

Pull Requests (PR) : Lorsqu'une partie du travail est terminée, ouvrez une pull request pour intégrer les modifications dans la branche principale. Cela permet d'examiner les changements avant de les fusionner.

Conclusion
Cet exercice vous permettra de créer une application simple mais efficace pour la gestion de tâches, avec un thème inspiré de la productivité personnelle. Vous allez également apprendre à collaborer sur un projet web en utilisant Git et GitHub, ce qui est essentiel dans le cadre du travail en équipe.
