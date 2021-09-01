function vacation(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let building;
    let where;

    if (budjet <= 100 && season == "summer") {
        building = "Camp";
        price = budjet * 0.30;
        where = "Bulgaria";
    } else if (budjet <= 100 && season == "winter") {
        building = "Hotel";
        price = budjet * 0.70;
        where = "Bulgaria";
    } else if (budjet <= 1000 && season == "summer") {
        building = "Camp";
        price = budjet * 0.40;
        where = "Balkans";
    } else if (budjet <= 1000 && season == "winter") {
        building = "Hotel";
        price = budjet * 0.80;
        where = "Balkans";
    } else if (budjet > 1000) {
        building = "Hotel";
        price = budjet * 0.90;
        where = "Europe";
    }

    console.log(`Somewhere in ${where}`);
    console.log(`${building} - ${price.toFixed(2)}`);
}

vacation(["50", "summer"]);
// Somewhere in Bulgaria
// Camp - 15.00

vacation(["75", "winter"]);
// Somewhere in Bulgaria
// Hotel - 52.50

vacation(["312", "summer"]);
// Somewhere in Balkans
// Camp - 124.80

vacation(["678.53", "winter"]);
// Somewhere in Balkans
// Hotel - 542.82

vacation(["1500", "summer"]);
// Somewhere in Europe
// Hotel - 1350.00
