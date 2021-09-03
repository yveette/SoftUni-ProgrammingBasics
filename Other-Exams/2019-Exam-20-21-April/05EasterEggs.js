function easter(input) {
    let count = Number(input[0]);

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for (let i = 1; i <= count; i++) {
        let a = input[i];
        if (a == "red") {
            red++;
        } else if (a == "orange") {
            orange++;
        } else if (a == "blue") {
            blue++;
        } else {
            green++;
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);

    let array = [red, orange, blue, green];
    let max = Math.max(...array);
    let maxEggs = 0;

    if (red >= max) {
        max = red;
        maxEggs = "red"
    }
    if (orange >= max) {
        max = orange;
        maxEggs = "orange"
    }
    if (blue >= max) {
        max = blue;
        maxEggs = "blue"
    }
    if (green >= max) {
        max = green;
        maxEggs = "green"
    }

    console.log(`Max eggs: ${max} -> ${maxEggs}`);
}

easter(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
// Red eggs: 1
// Orange eggs: 1
// Blue eggs: 2
// Green eggs: 3
// Max eggs: 3 -> green

easter(["4", "blue", "red", "blue", "orange"]);
// Red eggs: 1
// Orange eggs: 1
// Blue eggs: 2
// Green eggs: 0
// Max eggs: 2 -> blue