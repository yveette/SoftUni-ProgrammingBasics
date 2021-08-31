function minNumber(input) {
    let index = 0;
    let num = input[index];
    let minNum = Number(num);

    while (num !== "Stop") {
        let num1 = Number(num);
        if (minNum > num1) {
            minNum = num1;
        }

        index++;
        num = input[index];
    }
    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]); // 70
minNumber(["-10", "20", "-30", "Stop"]); // -30
minNumber(["45", "-20", "7", "99", "Stop"]); // -20
minNumber(["999", "Stop"]); // 999
minNumber(["-1", "-2", "Stop"]) // -2




