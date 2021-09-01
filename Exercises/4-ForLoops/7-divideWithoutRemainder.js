function divisionNumbers(input) {
    let allNumbers = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (let i = 1; i <= allNumbers; i++) {
        let num = Number(input[i]);
        if (num % 2 == 0) {
            count1++;
            if (num % 4 == 0) {
                count3++;
            }
            if (num % 3 == 0) {
                count2++;
            }
        } else if (num % 3 == 0) {
            count2++;
        }
    }

    let result1 = (count1 / allNumbers * 100).toFixed(2);
    let result2 = (count2 / allNumbers * 100).toFixed(2);
    let result3 = (count3 / allNumbers * 100).toFixed(2);

    console.log(result1 + "%");
    console.log(result2 + "%");
    console.log(result3 + "%");
}

divisionNumbers(["1","600"])
divisionNumbers(["10","680","2","600","200","800","799","199","46","128","65"])
divisionNumbers(["3", "3", "6", "9"])
