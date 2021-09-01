function godzilaVsKing(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let priceClothes = Number(input[2]);

    let decor = budget * 0.1;

    if (people >= 150) {
        priceClothes = priceClothes * 0.9;
    }

    let money = decor + priceClothes * people;

    if (money > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(money - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - money).toFixed(2)} leva left.`);
    }
}

godzilaVsKing(["20000", "120", "55.5"]);
// Action!
// Wingard starts filming with 11340.00 leva left.

godzilaVsKing(["15437.62", "186", "57.99"]);
// Action!
// Wingard starts filming with 4186.33 leva left.

godzilaVsKing(["9587.88", "222", "55.68"]);
// Not enough money!
// Wingard needs 2495.77 leva more.






