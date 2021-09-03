function totalBags(input) {
    let price20kg = Number(input[0]);
    let kgBag = Number(input[1]);
    let days = Number(input[2]);
    let countBags = Number(input[3]);

    let priceBag = 0;

    if (kgBag < 10) {
        priceBag = price20kg * 0.2;
    } else if (kgBag <= 20) {
        priceBag = price20kg * 0.5;
    } else {
        priceBag = price20kg;
    }

    if (days < 7) {
        priceBag = priceBag * 1.4;
    } else if (days <= 30) {
        priceBag = priceBag * 1.15;
    } else {
        priceBag = priceBag * 1.10;
    }

    let total = (priceBag * countBags).toFixed(2);
    console.log(`The total price of bags is: ${total} lv.`);
}

totalBags([30, 18, 15, 2]);
// The total price of bags is: 34.50 lv.

totalBags([25.50, 5, 36, 6]);
//The total price of bags is: 33.66 lv.

totalBags([63.80, 23, 3, 1]);
//The total price of bags is: 89.32 lv.