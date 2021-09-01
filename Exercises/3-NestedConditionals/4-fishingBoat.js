function fishingPrice(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let fisherman = input[2];
    let ship;

    if (season == "Spring") {
        ship = 3000.00;
    } else if (season == "Summer" || season == "Autumn") {
        ship = 4200.00;
    } else if (season == "Winter") {
        ship = 2600.00;
    }

    if (fisherman <= 6) {
        ship = ship * 0.90;
    } else if (fisherman > 7 && fisherman <= 11) {
        ship = ship * 0.85;
    } else if (fisherman >= 12) {
        ship = ship * 0.75;
    }

    if (fisherman % 2 == 0 && season != "Autumn") {
        ship = ship * 0.95;
    } else {
        ship = ship;
    }

    if (budjet >= ship) {
        console.log(`Yes! You have ${(budjet - ship).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(ship - budjet).toFixed(2)} leva.`);
    }
}

fishingPrice(["3000", "Summer", "11"]);
// Not enough money! You need 570.00 leva.

fishingPrice(["3600", "Autumn", "6"]);
// Not enough money! You need 180.00 leva.

fishingPrice(["2000", "Winter", "13"]);
// Yes! You have 50.00 leva left.


