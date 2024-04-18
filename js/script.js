let points = 0;
const pointsDisplay = document.getElementById('points-display');
const removePointsBtn = document.getElementById('remove-points-btn');
const errorMessage = document.getElementById('error-message');

document.addEventListener('click', function() {
    points++;
    updatePointsDisplay();
});

removePointsBtn.addEventListener('click', function() {
    if (points >= 30) {
        points -= 30;
        updatePointsDisplay();
        clearErrorMessage();
    } else {
        displayErrorMessage("Vous n'avez pas assez de points pour retirer 30.");
    }
});

function updatePointsDisplay() {
    pointsDisplay.textContent = 'Points: ' + points;
}

function displayErrorMessage(message) {
    errorMessage.textContent = message;
}

function clearErrorMessage() {
    errorMessage.textContent = '';
}
