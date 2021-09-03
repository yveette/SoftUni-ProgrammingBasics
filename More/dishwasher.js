function dishwasher(input) {
    let index = 0;
    let liquid = Number(input[index]);
    index++;
    let allLiquid = liquid * 750;
    let task = input[index];
    index++;
    let count = 0;
    let minus = 0;
    let dish1 = 0;
    let dish2 = 0;

    while (task != "End") {
        count++;
        if (count % 3 == 0) {
            task = Number(task);
            minus = task * 15;
            allLiquid -= minus;
            dish2 += task;
        } else {
            task = Number(task);
            minus = task * 5;
            allLiquid -= minus;
            dish1 += task;
        }

        if (allLiquid < 0) {
            break;
        }
        task = input[index];
        index++;

    }

    if (allLiquid >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dish1} dishes and ${dish2} pots were washed.`);
        console.log(`Leftover detergent ${allLiquid} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(allLiquid)} ml. more necessary!`);
    }
}

dishwasher(["2", "53", "65", "55", "End"]);
// Detergent was enough!
// 118 dishes and 55 pots were washed.
// Leftover detergent 85 ml.

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
// Not enough detergent, 100 ml. more necessary!
