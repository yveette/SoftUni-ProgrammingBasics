function easter(input) {
    let breadNum = Number(input[0]);
    let eggsNum = Number(input[1]);
    let cookiesNum = Number(input[2]);

    let breadPrice = 3.20;
    let eggsPrice = 4.35;
    let cookiesPrice = 5.40;
    let eggsPaintPrice = 0.15;

    let sumBread = breadNum * breadPrice;
    let sumEggs = eggsNum * eggsPrice;
    let sumEggsPaint = 12 * eggsNum * eggsPaintPrice;
    let sumCookies = cookiesNum * cookiesPrice;

    let total = (sumBread + sumEggs + sumEggsPaint + sumCookies).toFixed(2);
    console.log(total);

}

easter(["3", "2", "3"]);
// 38.10

easter(["4", "4", "3"]);
// 53.60

easter(["2", "3", "2"]);
// 35.65