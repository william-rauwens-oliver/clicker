function acheterElement(nomElement) {

    if (pointsDeJeu >= 100) {

        alert("Vous avez acheté " + nomElement);
        
        pointsDeJeu -= 100;
        document.getElementById("points").innerText = pointsDeJeu;
    } else {
        alert("Vous n'avez pas assez de points pour acheter cet élément.");
    }
}

function acheterBonus(nomBonus) {
    // Vérifier si l'utilisateur a assez de points pour acheter le bonus
    if (pointsDeJeu >= 200) {
        // Logique pour acheter un bonus
        alert("Vous avez acheté " + nomBonus);
        // Mettre à jour les points de jeu
        pointsDeJeu -= 200;
        document.getElementById("points").innerText = pointsDeJeu;
    } else {
        alert("Vous n'avez pas assez de points pour acheter ce bonus.");
    }
}
