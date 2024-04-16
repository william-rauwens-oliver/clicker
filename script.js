var pointsDeJeu = 0;
var clicsParClick = 1; // Nombre de points gagnés à chaque clic
var clicsAuto = 0; // Nombre de points gagnés automatiquement chaque seconde
var intervalID; // ID de l'intervalle pour l'avantage automatique

function acheterElement(nomElement) {
    if (pointsDeJeu >= 100) {
        alert("Vous avez acheté " + nomElement);
        pointsDeJeu -= 100;
        document.getElementById("points").innerText = pointsDeJeu;
        // Appliquer l'avantage de l'élément acheté
        if (nomElement === "Clics Rapides") {
            clicsParClick *= 2; // Double le nombre de points gagnés à chaque clic
        } else if (nomElement === "Machine à Points") {
            clicsAuto = 1; // 1 point gagné automatiquement toutes les secondes
            if (!intervalID) {
                intervalID = setInterval(gagnerPointsAuto, 1000);
            }
        } else if (nomElement === "Usine de Prodiges") {
            clicsAuto += 2; // Ajoute 2 points gagnés automatiquement chaque seconde
            if (!intervalID) {
                intervalID = setInterval(gagnerPointsAuto, 1000);
            }
        }
    } else {
        alert("Vous n'avez pas assez de points pour acheter cet élément.");
    }
}

function acheterBonus(nomBonus) {
    if (pointsDeJeu >= 200) {
        alert("Vous avez acheté " + nomBonus);
        pointsDeJeu -= 200;
        document.getElementById("points").innerText = pointsDeJeu;
        // Appliquer l'avantage du bonus acheté
        if (nomBonus === "Accélérateur de Clics") {
            clicsParClick *= 3; // Triple le nombre de points gagnés à chaque clic
        } else if (nomBonus === "Multiplier x2") {
            clicsAuto *= 2; // Double le nombre de points gagnés automatiquement chaque seconde
        } else if (nomBonus === "Supercharge de Prodiges") {
            clicsAuto += 5; // Ajoute 5 points gagnés automatiquement chaque seconde
        }
    } else {
        alert("Vous n'avez pas assez de points pour acheter ce bonus.");
    }
}

function gagnerPoints() {
    pointsDeJeu += clicsParClick;
    document.getElementById("points").innerText = pointsDeJeu;
}

function gagnerPointsAuto() {
    pointsDeJeu += clicsAuto;
    document.getElementById("points").innerText = pointsDeJeu;
}

// Fonction pour démarrer le jeu automatique
function demarrerJeuAuto() {
    if (!intervalID) {
        intervalID = setInterval(gagnerPointsAuto, 1000);
    }
}
