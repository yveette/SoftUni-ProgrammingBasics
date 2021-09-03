function easter(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let priceBread = 4.00;
    let priceEgg = 0.45;

    let countBread = Math.ceil(guests / 3.00);
    let countEggs = Math.ceil(guests * 2.00);

    let totalBread = countBread * priceBread;
    let totalEggs = countEggs * priceEgg;
    let total = (totalBread + totalEggs).toFixed(2);

    if (budget >= total) {
        console.log(`Lyubo bought ${countBread} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`);
    }
}

easter(["10", "35"]);
// Lyubo bought 4 Easter bread and 20 eggs.
// He has 10.00 lv. left.

easter([9, 12]);
// Lyubo doesn't have enough money.
// He needs 8.10 lv. more.

