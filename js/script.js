let points = 0;
const pointsDisplay = document.getElementById('points-display');

document.addEventListener('click', function() {
    points++;
    updatePointsDisplay();
});

function updatePointsDisplay() {
    pointsDisplay.textContent = 'Points: ' + points;
}
