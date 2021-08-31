function vacation(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let price = 0;

    if (room == "room for one person") {
        if (days > 0) {
            price = (18.00 * (days - 1)).toFixed(2);
        }
    } else if (room == "apartment") {
        if (days < 10) {
            price = ((25.00 * (days - 1)) * 0.70).toFixed(2);
        } else if (days >= 10 && days < 15) {
            price = ((25.00 * (days - 1)) * 0.65).toFixed(2);
        } else if (days >= 15) {
            price = ((25.00 * (days - 1)) * 0.50).toFixed(2);
        }

    } else if (room == "president apartment") {
        if (days < 10) {
            price = ((35.00 * (days - 1)) * 0.90).toFixed(2);
        } else if (days >= 10 && days < 15) {
            price = ((35.00 * (days - 1)) * 0.85).toFixed(2);
        } else if (days >= 15) {
            price = ((35.00 * (days - 1)) * 0.80).toFixed(2);
        }
    }

    if (grade == "positive") {
        price = (price * 1.25).toFixed(2);
    } else {
        price = (price * 0.90).toFixed(2);
    }

    console.log(price);
}

vacation(["14", "apartment", "positive"]);    // 264.06
vacation(["30", "president apartment", "negative"]);    // 730.80
vacation(["12", "room for one person", "positive"]);    // 247.50
vacation(["2", "apartment", "positive"]);    // 21.88




