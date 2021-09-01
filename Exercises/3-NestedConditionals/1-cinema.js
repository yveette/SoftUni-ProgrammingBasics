function cinema(input) {
    let ticket = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let price = 0;

    if (ticket == "Premiere") {
        price = 12.00 * row * column;
    } else if (ticket == "Normal") {
        price = 7.50 * row * column;
    } else if (ticket == "Discount") {
        price = 5.00 * row * column;
    }

    console.log(`${price.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]); //1440.00 leva
cinema(["Normal", "21", "13"]); //2047.50 leva
cinema(["Discount", "12", "30"]); //1800.00 leva



