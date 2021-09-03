function numbers(input) {
    let num1 = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= num1; i++) {
        let index = i;
        let num = Number(input[index]);
        index++;
        sum += num;
    }
    console.log((sum / num1).toFixed(2));
}

numbers(["4", "3", "2", "4", "2"]); // 2.75
numbers(["2", "6", "4"]); // 5.00
numbers(["3", "82", "43", "22"]); // 49.00
numbers(["4", "95", "23", "76", "23"]); // 54.25