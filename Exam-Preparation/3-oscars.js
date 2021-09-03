function oscars(input) {
    let movie = input[0];
    let hall = input[1];
    let tickets = Number(input[2]);
    let price = 0;

    switch (movie) {
        case "A Star Is Born":
            switch (hall) {
                case "normal":
                    price = (tickets * 7.50).toFixed(2);
                    break;
                case "luxury":
                    price = (tickets * 10.50).toFixed(2);
                    break;
                case "ultra luxury":
                    price = (tickets * 13.50).toFixed(2);
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (hall) {
                case "normal":
                    price = (tickets * 7.35).toFixed(2);
                    break;
                case "luxury":
                    price = (tickets * 9.45).toFixed(2);
                    break;
                case "ultra luxury":
                    price = (tickets * 12.75).toFixed(2);
                    break;
            }
            break;
        case "Green Book":
            switch (hall) {
                case "normal":
                    price = (tickets * 8.15).toFixed(2);
                    break;
                case "luxury":
                    price = (tickets * 10.25).toFixed(2);
                    break;
                case "ultra luxury":
                    price = (tickets * 13.25).toFixed(2);
                    break;
            }
            break;
        case "The Favourite":
            switch (hall) {
                case "normal":
                    price = (tickets * 8.75).toFixed(2);
                    break;
                case "luxury":
                    price = (tickets * 11.55).toFixed(2);
                    break;
                case "ultra luxury":
                    price = (tickets * 13.95).toFixed(2);
                    break;
            }
            break;
    }

    console.log(`${movie} -> ${price} lv.`);
}

oscars(["A Star Is Born", "luxury", "42"]);
// A Star Is Born -> 441.00 lv.

oscars(["Green Book", "normal", "63"]);
// Green Book -> 513.45 lv.

oscars(["The Favourite", "ultra luxury", "34"]);
// The Favourite -> 474.30 lv.