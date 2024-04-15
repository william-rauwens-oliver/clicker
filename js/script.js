document.addEventListener("DOMContentLoaded", function() {
    let gold = parseInt(localStorage.getItem("gold")) || 0;
    let goldPerClick = parseInt(localStorage.getItem("goldPerClick")) || 1;
    let goldPerSecond = parseInt(localStorage.getItem("goldPerSecond")) || 0;
    let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10;
    let passiveIncomeCost = parseInt(localStorage.getItem("passiveIncomeCost")) || 50;
    let passiveIncomeInterval;

    const goldDisplay = document.getElementById("gold");
    const goldPerClickDisplay = document.getElementById("goldPerClick");
    const goldPerSecondDisplay = document.getElementById("goldPerSecond");
    const clickButton = document.getElementById("clickButton");
    const buyUpgradeButton = document.getElementById("buyUpgrade");
    const buyPassiveIncomeButton = document.getElementById("buyPassiveIncome");
    const upgradeCostDisplay = document.getElementById("upgradeCost");
    const passiveIncomeCostDisplay = document.getElementById("passiveIncomeCost");


    function updateGoldDisplay() {
        goldDisplay.textContent = gold;
    }


    function updateGoldPerClickDisplay() {
        goldPerClickDisplay.textContent = goldPerClick;
    }


    function updateGoldPerSecondDisplay() {
        goldPerSecondDisplay.textContent = goldPerSecond;
    }


    clickButton.addEventListener("click", function() {
        gold += goldPerClick;
        updateGoldDisplay();
    });


    buyUpgradeButton.addEventListener("click", function() {
        if (gold >= upgradeCost) {
            gold -= upgradeCost;
            goldPerClick++;
            upgradeCost *= 2;
            updateGoldDisplay();
            updateGoldPerClickDisplay();
            updateUpgradeCostDisplay();
        }
    });


    buyPassiveIncomeButton.addEventListener("click", function() {
        if (gold >= passiveIncomeCost) {
            gold -= passiveIncomeCost;
            goldPerSecond++;
            passiveIncomeCost *= 2;
            updateGoldDisplay();
            updateGoldPerSecondDisplay();
            updatePassiveIncomeCostDisplay();
            startPassiveIncome();
        }
    });


    function startPassiveIncome() {
        if (!passiveIncomeInterval) {
            passiveIncomeInterval = setInterval(function() {
                gold += goldPerSecond;
                updateGoldDisplay();
            }, 1000);
        }
    }


    function updateUpgradeCostDisplay() {
        upgradeCostDisplay.textContent = upgradeCost;
    }


    function updatePassiveIncomeCostDisplay() {
        passiveIncomeCostDisplay.textContent = passiveIncomeCost;
    }


    function saveGameState() {
        localStorage.setItem("gold", gold);
        localStorage.setItem("goldPerClick", goldPerClick);
        localStorage.setItem("goldPerSecond", goldPerSecond);
        localStorage.setItem("upgradeCost", upgradeCost);
        localStorage.setItem("passiveIncomeCost", passiveIncomeCost);
    }

    function loadGameState() {
        goldDisplay.textContent = gold;
        goldPerClickDisplay.textContent = goldPerClick;
        goldPerSecondDisplay.textContent = goldPerSecond;
        upgradeCostDisplay.textContent = upgradeCost;
        passiveIncomeCostDisplay.textContent = passiveIncomeCost;
        startPassiveIncome();
    }


    loadGameState();

    window.addEventListener("beforeunload", function() {
        saveGameState();
    });
    const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {

    gold = 0;
    goldPerClick = 1;
    goldPerSecond = 0;
    upgradeCost = 10;
    passiveIncomeCost = 50;
    

    clearInterval(passiveIncomeInterval);
    passiveIncomeInterval = null;

    updateGoldDisplay();
    updateGoldPerClickDisplay();
    updateGoldPerSecondDisplay();
    updateUpgradeCostDisplay();
    updatePassiveIncomeCostDisplay();


    saveGameState();
});
});
