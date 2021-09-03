function zadacha(input) {
    let index = 0;
    let cats = Number(input[index]);
    index++;
    let food = Number(input[index]);

    let small = 0;
    let medium = 0;
    let large = 0;

    let foodCount = 0

    for (let i = 1; i < input.length; i++) { 
        food = Number(input[i]);
        if (food >= 100 && food < 200) {
            small += 1;
            foodCount += food;
        } else if (food >= 200 && food < 300) {
            medium += 1;
            foodCount += food;
        } else if (food >= 300 && food < 400) {
            large += 1;
            foodCount += food;
        }
    }

    console.log(`Group 1: ${small} cats.`);
    console.log(`Group 2: ${medium} cats.`);
    console.log(`Group 3: ${large} cats.`);
    let total = foodCount / 1000;
    total = 12.45 * total;
    console.log(`Price for food per day: ${total.toFixed(2)} lv.`);
}

zadacha(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])
    // zadacha(["10",
    // "256",
    // "348",
    // "198",
    // "322",
    // "186",
    // "294",
    // "321",
    // "100",
    // "200",
    // "300"])
    // zadacha(["7",
    // "100",
    // "200",
    // "342",
    // "300",
    // "234",
    // "123",
    // "212"])


