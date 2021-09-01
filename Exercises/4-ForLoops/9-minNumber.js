function smallestNum(input) {
    let count = Number(input[0]);
    let result = Number(input[1]);

    for (let i = 1; i <= count; i++) {
        a = Number(input[i]);
        if (a < result) {
            result = input[i];
        }
    }
    console.log(result);

}

smallestNum(["2", "100", "99"]); // 99
smallestNum(["3", "-10", "20", "-30"]); // -30
smallestNum(["4", "45", "-20", "7", "99"]); // -20
smallestNum(["1", "999"]); // 999
smallestNum(["2", "-1", "-2"]); // -2
smallestNum(["5", "45", "-20", "-30", "99", "-40"]) // -40