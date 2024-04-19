// Initialisation des variables
let points = 0;
let pointsDeJeu = 0;
let clicsParClick = 1;
let clicsAuto = 0;
let intervalID;

// Récupération de l'élément d'affichage des points
const pointsDisplay = document.getElementById('cadran');

// Fonction pour mettre à jour l'affichage des points
function updatecadran() {
    pointsDisplay.textContent = 'Score: ' + pointsDeJeu;
}

// Fonction pour gérer les clics sur la fleur
function clicSurFleur() {
    pointsDeJeu += clicsParClick;
    document.getElementById("points").innerText = pointsDeJeu;
}

// Écouteur d'événement pour les clics sur la fleur
document.getElementById('clickButton').addEventListener('click', clicSurFleur);

// Fonction pour acheter un élément
function acheterElement(nomElement) {
    if (pointsDeJeu >= 100) {
        alert("Vous avez acheté " + nomElement);
        pointsDeJeu -= 100;
        document.getElementById("points").innerText = pointsDeJeu;

        if (nomElement === "Clics Rapides") {
            clicsParClick = 2;
            pointsDeJeu *= 2;
            document.getElementById("points").innerText = pointsDeJeu;
            demarrerJeuAuto();
        } else if (nomElement === "Machine à Points") {
            clicsAuto = 1;
            if (!intervalID) {
                intervalID = setInterval(gagnerPointsAuto, 1000);
            }
        } else if (nomElement === "Usine de Prodiges") {
            clicsAuto += 2;
            if (!intervalID) {
                intervalID = setInterval(gagnerPointsAuto, 1000);
            }
        }
    } else {
        alert("Vous n'avez pas assez de points pour acheter cet élément.");
    }
}

// Fonction pour acheter un bonus
function acheterBonus(nomBonus) {
    if (pointsDeJeu >= 200) {
        alert("Vous avez acheté " + nomBonus);
        pointsDeJeu -= 200;
        pointsDeJeu += 200;
        document.getElementById("points").innerText = pointsDeJeu;
        updatecadran();

        if (nomBonus === "Accélérateur de Clics") {
            clicsParClick *= 3;
        } else if (nomBonus === "Multiplier x2") {
            clicsAuto *= 2;
        } else if (nomBonus === "Supercharge de Prodiges") {
            clicsAuto += 5;
        }
    } else {
        alert("Vous n'avez pas assez de points pour acheter ce bonus.");
    }
}

// Fonction pour gagner des points automatiquement
function gagnerPointsAuto() {
    pointsDeJeu += 10;
    document.getElementById("points").innerText = pointsDeJeu;
}

// Fonction pour démarrer le jeu automatique
function demarrerJeuAuto() {
    if (!intervalID) {
        intervalID = setInterval(gagnerPointsAuto, 5000);
    }
}
