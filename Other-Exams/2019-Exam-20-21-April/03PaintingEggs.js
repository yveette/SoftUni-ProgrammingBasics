function easter(input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);

    let price = 0;

    switch (size) {
        case "Large":
            switch (color) {
                case "Red":
                    price = count * 16.00;
                    break;
                case "Green":
                    price = count * 12.00;
                    break;
                case "Yellow":
                    price = count * 9.00;
                    break;
            }
            console.log(`${(price * 0.65).toFixed(2)} leva.`);
            break;
        case "Medium":
            switch (color) {
                case "Red":
                    price = count * 13.00;
                    break;
                case "Green":
                    price = count * 9.00;
                    break;
                case "Yellow":
                    price = count * 7.00;
                    break;
            }
            console.log(`${(price * 0.65).toFixed(2)} leva.`);
            break;
        case "Small":
            switch (color) {
                case "Red":
                    price = count * 9.00;
                    break;
                case "Green":
                    price = count * 8.00;
                    break;
                case "Yellow":
                    price = count * 5.00;
                    break;
            }
            console.log(`${(price * 0.65).toFixed(2)} leva.`);
            break;
    }
}
easter(["Large", "Red", "7"]);
//72.80 leva. 
easter(["Medium", "Green", "5"]);
//29.25 leva.
easter(["Small", "Yellow", "3"]);
//9.75 leva.