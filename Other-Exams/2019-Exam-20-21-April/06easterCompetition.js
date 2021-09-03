function competition(input) {
    let index = 0;
    let easterBread = Number(input[index]);
    index++;
    let winner = 0;
    let winnerName = "";

    for (let i = 1; i < input.length; i++) {
        let task = input[index];
        let name = input[index];
        index++;
        let count = 0;

        while (task != "Stop") {
            let points = Number(input[index]);
            index++;
            count += points;
            task = input[index];

        }

        console.log(`${name} has ${count} points.`)

        if (count > winner) {
            winner = count;
            winnerName = name;
            console.log(`${winnerName} is the new number 1!`);
        }

        index++;
        task = input[index];

        if (task == undefined) {
            break;
        }
    }
    console.log(`${winnerName} won competition with ${winner} points!`);
}

competition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop",
    "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"])
// Chef Manchev has 40 points.
// Chef Manchev is the new number 1!
// Natalie has 19 points.
// George has 17 points.
// Chef Manchev won competition with 40 points!

competition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe",
    "10", "10", "10", "10", "Stop",]);
// Chef Angelov has 27 points.
// Chef Angelov is the new number 1!
// Chef Rowe has 40 points.
// Chef Rowe is the new number 1!
// Chef Rowe won competition with 40 points!