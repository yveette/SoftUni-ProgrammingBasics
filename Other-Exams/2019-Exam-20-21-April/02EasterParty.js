function party(input) {
    let guests = Number(input[0]);
    let guestsPrice = Number(input[1]);
    let budget = Number(input[2]);

    if (guests >= 10 && guests <= 15) {
        guestsPrice = guestsPrice * 0.85;
    } else if (guests > 15 && guests <= 20) {
        guestsPrice = guestsPrice * 0.80;
    } else if (guests > 20) {
        guestsPrice = guestsPrice * 0.75;
    } else {
        guestsPrice = guestsPrice;
    }

    let cakePrice = budget * 0.1;
    let total = (cakePrice + guestsPrice * guests).toFixed(2);

    if (budget >= total) {
        console.log(`It is party time! ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(total - budget).toFixed(2)} leva needed.`);
    }
}

party([18, 30, 450]);
// No party! 27.00 leva needed.

party([8, 25, 340]);
// It is party time! 106.00 leva left. 

party([24, 35, 550]);
// No party! 135.00 leva needed.