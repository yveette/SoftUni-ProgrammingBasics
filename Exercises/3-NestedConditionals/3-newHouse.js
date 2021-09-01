function houseFlowers(input) {
    let flower = input[0];
    let num = Number(input[1]);
    let budjet = Number(input[2]);
    let price;

    if (flower == "Roses") {
        if (num > 80) {
            price = (num * 5.00) * 0.90;
        } else {
            price = num * 5.00;
        }
    } else if (flower == "Dahlias") {
        if (num > 90) {
            price = (num * 3.80) * 0.85;
        } else {
            price = num * 3.80;
        }
    } else if (flower == "Tulips") {
        if (num > 80) {
            price = (num * 2.80) * 0.85;
        } else {
            price = num * 2.80;
        }
    } else if (flower == "Narcissus") {
        if (num < 120) {
            price = (num * 3.00) * 1.15;
        } else {
            price = num * 3.00;
        }
    } else if (flower == "Gladiolus") {
        if (num < 80) {
            price = (num * 2.50) * 1.20;
        } else {
            price = num * 2.50;
        }
    }

    if (budjet >= price) {
        console.log(`Hey, you have a great garden with ${num} ${flower} and ${(budjet - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budjet).toFixed(2)} leva more.`);
    }
}

houseFlowers(["Roses", "55", "250"]);
// Not enough money, you need 25.00 leva more.

houseFlowers(["Tulips", "88", "260"]);
// Hey, you have a great garden with 88 Tulips and 50.56 leva left.

houseFlowers(["Narcissus", "119", "360"]);
// Not enough money, you need 50.55 leva more.