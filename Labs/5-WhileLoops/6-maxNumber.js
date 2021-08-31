function maxNumber(input) {
    let index = 0;
    let num = input[index];
    let maxNum = Number(num);

    while (num !== "Stop") {
        let num1 = Number(num);

        if (maxNum < num1) {
            maxNum = num1;
        }

        index++;
        num = input[index];
    }

    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]); // 100
maxNumber(["-10", "20", "-30", "Stop"]); // 20
maxNumber(["45", "-20", "7", "99", "Stop"]); // 99
maxNumber(["999", "Stop"]); // 999
maxNumber(["-1", "-2", "Stop"]); // -1


