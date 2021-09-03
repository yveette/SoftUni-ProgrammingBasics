function easter(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let price = 0;

    switch (destination) {
        case "France":
            switch (dates) {
                case "21-23":
                    price = nights * 30.00;
                    break;
                case "24-27":
                    price = nights * 35.00;
                    break;
                case "28-31":
                    price = nights * 40.00;
                    break;
            }

            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;
        case "Italy":
            switch (dates) {
                case "21-23":
                    price = nights * 28.00;
                    break;
                case "24-27":
                    price = nights * 32.00;
                    break;
                case "28-31":
                    price = nights * 39.00;
                    break;
            }

            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;
        case "Germany":
            switch (dates) {
                case "21-23":
                    price = nights * 32.00;
                    break;
                case "24-27":
                    price = nights * 37.00;
                    break;
                case "28-31":
                    price = nights * 43.00;
                    break;
            }

            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;
    }
}

easter(["Germany", "24-27", 5]);
// Easter trip to Germany : 185.00 leva.

easter(["Italy", "21-23", 7]);
// Easter trip to Italy : 196.00 leva.

easter(["France", "28-31", 8]);
// Easter trip to France : 320.00 leva.