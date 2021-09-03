function zadacha(input) {
    let otbor = input[0];
    let suvenir = input[1];
    let suvenirCount = Number(input[2]);

    let total = 0;
    let fail = false;

    switch (otbor) {
        case "Argentina":
            switch (suvenir) {
                case "flags":
                    total = suvenirCount * 3.25;
                    break;
                case "caps":
                    total = suvenirCount * 7.20;
                    break;
                case "posters":
                    total = suvenirCount * 5.10;
                    break;
                case "stickers":
                    total = suvenirCount * 1.25;
                    break;
                default:
                    console.log(`Invalid stock!`);
                    fail = true;
                    break;
            }
            break;
        case "Brazil":
            switch (suvenir) {
                case "flags":
                    total = suvenirCount * 4.20;
                    break;
                case "caps":
                    total = suvenirCount * 8.50;
                    break;
                case "posters":
                    total = suvenirCount * 5.35;
                    break;
                case "stickers":
                    total = suvenirCount * 1.20;
                    break;
                default:
                    console.log(`Invalid stock!`);
                    fail = true;
                    break;
            }
            break;
        case "Croatia":
            switch (suvenir) {
                case "flags":
                    total = suvenirCount * 2.75;
                    break;
                case "caps":
                    total = suvenirCount * 6.90;
                    break;
                case "posters":
                    total = suvenirCount * 4.95;
                    break;
                case "stickers":
                    total = suvenirCount * 1.10;
                    break;
                default:
                    console.log(`Invalid stock!`);
                    fail = true;
                    break;
            }
            break;
        case "Denmark":
            switch (suvenir) {
                case "flags":
                    total = suvenirCount * 3.10;
                    break;
                case "caps":
                    total = suvenirCount * 6.50;
                    break;
                case "posters":
                    total = suvenirCount * 4.80;
                    break;
                case "stickers":
                    total = suvenirCount * 0.90;
                    break;
                default:
                    console.log(`Invalid stock!`);
                    fail = true;
                    break;
            }
            break;
        default:
            console.log(`Invalid country!`);
            fail = true;
            break;
    }

    if (!fail) {
        console.log(`Pepi bought ${suvenirCount} ${suvenir} of ${otbor} for ${total.toFixed(2)} lv.`)
    }
}

zadacha(["Brazil",
    "stickers",
    "5"])
zadacha(["Denmark",
    "caps",
    "8"])
zadacha(["USA",
    "caps",
    "18"])
zadacha(["Croatia",
    "flags",
    "13"])
zadacha(["Argentina",
    "shirts",
    "35"])

