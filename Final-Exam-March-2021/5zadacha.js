function zadacha(input) {
    let foodKg = Number(input[0]);
    let foodGr = foodKg * 1000;
    let index = 1;
    let task = input[index];

    let foodCount = 0;

    while (task !== "Adopted") {
        task = Number(task);
        index++;
        foodCount += task;
        task = input[index];
    }
    if (foodCount <= foodGr) {
        console.log(`Food is enough! Leftovers: ${foodGr - foodCount} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodCount - foodGr} grams more.`);
    }
}

zadacha(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);

zadacha(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"]);

zadacha(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);

