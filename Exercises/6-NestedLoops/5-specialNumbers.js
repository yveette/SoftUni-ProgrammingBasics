function specialNums(input) {
    let num = Number(input[0]);
    let special = "";

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (num % a == 0 && num % b == 0 && num % c == 0 && num % d == 0) {
                        special += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }

    console.log(special);
}

specialNums(["3"]);
// 1111 1113 1131 1133 1311 1313 1331 1333 3111 3113 3131 3133 3311 3313 3331 3333

specialNums(["11"]);
// 1111