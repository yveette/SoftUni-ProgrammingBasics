function trade(input) {
    let city = input[0];
    let sale = input[1];
    let price = 0;

    if (city == "Sofia") {
        if (sale >= 0 && sale <= 500) {
            price = (sale * 0.05).toFixed(2);
            console.log(price);
        } else if (sale > 500 && sale <= 1000) {
            price = (sale * 0.07).toFixed(2);
            console.log(price);
        } else if (sale > 1000 && sale <= 10000) {
            price = (sale * 0.08).toFixed(2);
            console.log(price);
        } else if (sale > 10000) {
            price = (sale * 0.12).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (city == "Varna") {
        if (sale >= 0 && sale <= 500) {
            price = (sale * 0.045).toFixed(2);
            console.log(price);
        } else if (sale > 500 && sale <= 1000) {
            price = (sale * 0.075).toFixed(2);
            console.log(price);
        } else if (sale > 1000 && sale <= 10000) {
            price = (sale * 0.10).toFixed(2);
            console.log(price);
        } else if (sale > 10000) {
            price = (sale * 0.13).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else if (city == "Plovdiv") {
        if (sale >= 0 && sale <= 500) {
            price = (sale * 0.055).toFixed(2);
            console.log(price);
        } else if (sale > 500 && sale <= 1000) {
            price = (sale * 0.08).toFixed(2);
            console.log(price);
        } else if (sale > 1000 && sale <= 10000) {
            price = (sale * 0.12).toFixed(2);
            console.log(price);
        } else if (sale > 10000) {
            price = (sale * 0.145).toFixed(2);
            console.log(price);
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

trade(["Sofia", "1500"]);    // 120.00
trade(["Plovdiv", "499.99"]);    // 27.50
trade(["Varna", "3874.50"]);     // 387.45
trade(["Kaspichan", "-50"]);     // error



