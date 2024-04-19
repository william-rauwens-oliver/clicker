// Sélectionne l'élément avec l'ID "clickButton"
const clickButton = document.getElementById("clickButton");

// Ajoute un écouteur d'événements sur cet élément
clickButton.addEventListener("click", function() {
    // Augmente le score de pointsParClic
    points += pointsParClic;
    // Met à jour l'affichage
    updateDisplay();
});

// Sélectionne l'élément avec l'ID "resetButton"
const resetButton = document.getElementById("resetButton");

// Ajoute un écouteur d'événements sur cet élément
resetButton.addEventListener("click", function() {
    // Réinitialise le score à 0
    points = 0;
    // Met à jour l'affichage
    updateDisplay();
});

// Sélectionne l'élément avec l'ID "elements"
const elementsContainer = document.getElementById("elements");

// Ajoute des écouteurs d'événements sur chaque bouton d'élément
elementsContainer.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        acheterElement(button.textContent.split(" ")[0]);
    });
});

// Sélectionne l'élément avec l'ID "bonus"
const bonusContainer = document.getElementById("bonus");

// Ajoute des écouteurs d'événements sur chaque bouton de bonus
bonusContainer.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        acheterBonus(button.textContent.split(" ")[0]);
    });
});
