function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allToys = puzzles + dolls + bears + minions + trucks;
    let moneyToys = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;

    if (allToys >= 50) {
        moneyToys = moneyToys * 0.75;
    }
    moneyToys = moneyToys * 0.9;

    if (moneyToys >= tripPrice) {
        console.log(`Yes! ${(moneyToys - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyToys).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);    // Yes! 418.20 lv left.
toyShop(["320", "8", "2", "5", "5", "1"]);    // Not enough money! 238.73 lv needed.