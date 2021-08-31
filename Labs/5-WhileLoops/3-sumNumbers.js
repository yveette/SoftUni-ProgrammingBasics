function sumNumbers(input) {
    let topNum = Number(input[0]);
    let index = 1;

    let num = Number(input[index]);
    let sum = 0;

    while (sum < topNum) {
        sum += num;
        index++;
        num = Number(input[index]);
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]); // 100
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]); // 21
sumNumbers(["10", "2", "8", "1"]); // 10

