function charity(input) {
    let days = Number(input[0]);
    let confectioners = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakesDayPrice = cakes * 45;
    let wafflesDayPrice = waffles * 5.8;
    let pancakesDayPrice = pancakes * 3.2;

    let moneyDays = (cakesDayPrice + wafflesDayPrice + pancakesDayPrice) * days;
    let moneyConfectioners = moneyDays * confectioners;
    let moneyTotal = moneyConfectioners - moneyConfectioners / 8;

    console.log(moneyTotal);
}

charity(["23", "8", "14", "30", "16"]); // 137687.2
charity(["131", "5", "9", "33", "46"]); // 426175.75
