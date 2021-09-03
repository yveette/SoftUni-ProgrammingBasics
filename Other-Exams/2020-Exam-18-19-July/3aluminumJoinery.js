function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;

    let noSell = false;

    if (count < 10) {
        console.log(`Invalid order`);
        noSell = true;
    }

    switch (type) {
        case "90X130":
            price = 110 * count;
            if (count > 30 && count <= 60) {
                price = price * 0.95;
            } else if (count > 60) {
                price = price * 0.92;
            }
            break;
        case "100X150":
            price = 140 * count;
            if (count > 40 && count <= 80) {
                price = price * 0.94;
            } else if (count > 80) {
                price = price * 0.90;
            }
            break;
        case "130X180":
            price = 190 * count;
            if (count > 20 && count <= 50) {
                price = price * 0.93;
            } else if (count > 50) {
                price = price * 0.88;
            }
            break;
        case "200X300":
            price = 250 * count;
            if (count > 25 && count <= 50) {
                price = price * 0.91;
            } else if (count > 50) {
                price = price * 0.86;
            }
            break;
    }

    switch (delivery) {
        case "With delivery":
            price += 60;
            break;
    }

    if (count > 99) {
        price = price * 0.96;
    }

    if (!noSell) {
        console.log(`${price.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
//4180.00 BGN

aluminumJoinery(["105", "100X150", "With delivery"]);
//12758.40 BGN 

aluminumJoinery(["2", "130X180", "With delivery"]);
//Invalid order