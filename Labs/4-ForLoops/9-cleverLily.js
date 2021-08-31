function birthdayLily(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let toys = 0;
    let total = 0;
    let money = 0;

    for (i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            money += 10;
            total = total + money;
            total--;
        } else {
            toys++;
        }
    }

    total += toys * priceToy;

    if (total >= priceWashingMachine) {
        console.log(`Yes! ${(total - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(Math.abs(total - priceWashingMachine)).toFixed(2)}`);
    }
}

birthdayLily(["10", "170", "6"]); // Yes! 5.00
birthdayLily(["21", "1570.98", "3"]); // No! 997.98 