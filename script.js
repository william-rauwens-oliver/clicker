var pointsDeJeu = 0;
var clicsParClick = 1;
var clicsAuto = 0;
var intervalID;

function acheterElement(nomElement) {
    if (pointsDeJeu >= 100) {
        alert("Vous avez acheté " + nomElement);
        pointsDeJeu -= 100;
        document.getElementById("points").innerText = pointsDeJeu;

        if (nomElement === "Clics Rapides") {
            clicsParClick *= 2;
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

function acheterBonus(nomBonus) {
    if (pointsDeJeu >= 200) {
        alert("Vous avez acheté " + nomBonus);
        pointsDeJeu -= 200;
        document.getElementById("points").innerText = pointsDeJeu;

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

function gagnerPoints() {
    pointsDeJeu += clicsParClick;
    document.getElementById("points").innerText = pointsDeJeu;
}

function gagnerPointsAuto() {
    pointsDeJeu += clicsAuto;
    document.getElementById("points").innerText = pointsDeJeu;
}

function demarrerJeuAuto() {
    if (!intervalID) {
        intervalID = setInterval(gagnerPointsAuto, 1000);
    }
}
