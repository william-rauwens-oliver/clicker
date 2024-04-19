// Initial state
let essences = 0;
let elements = [];
let bonuses = [];

// Load state from localStorage
if(localStorage.getItem("alchemistSave")) {
    const saveData = JSON.parse(localStorage.getItem("alchemistSave"));
    essences = saveData.essences;
    elements = saveData.elements;
    bonuses = saveData.bonuses;
}

// Update display
function updateDisplay() {
    document.getElementById("essenceDisplay").innerText = `Essences: ${essences}`;
    document.getElementById("elementsContainer").innerHTML = elements.map(element => `<div class="element">${element.name} (${element.cost} Essences)</div>`).join("");
}

// Click to alchemize
function clickAlchemy() {
    essences++;
    updateDisplay();
    // Ajoute la classe "shake" au bouton pour déclencher l'animation
    document.getElementById("alchemyButton").classList.add("shake");
    // Supprime la classe "shake" après un court délai pour arrêter l'animation
    setTimeout(function() {
        document.getElementById("alchemyButton").classList.remove("shake");
    }, 500); // 500 ms correspond à la durée de l'animation définie dans le CSS
}

// Save state to localStorage every 30 seconds
setInterval(() => {
    localStorage.setItem("alchemistSave", JSON.stringify({ essences, elements, bonuses }));
}, 30000);

// Initial display update
updateDisplay();
