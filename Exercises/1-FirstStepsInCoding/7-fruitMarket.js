function fruitMarket(input) {
    let strawberriesLv = Number(input[0]);
    let bananasKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberriesKg = Number(input[4]);

    let priceRaspberries = strawberriesLv / 2;
    let priceOranges = priceRaspberries * 0.6;
    let priceBananas = priceRaspberries * 0.2;

    let raspberriesLv = raspberriesKg * priceRaspberries;
    let orangesLv = orangesKg * priceOranges;
    let bananasLv = bananasKg * priceBananas;
    let strawberryAll = strawberriesLv * strawberriesKg;

    let totalSum = raspberriesLv + orangesLv + bananasLv + strawberryAll;

    console.log(totalSum);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);     // 333.12
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);   // 561.1495
