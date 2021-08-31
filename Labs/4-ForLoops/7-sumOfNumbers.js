function sumNumbers(num) {
    // sum each digit

    let number = num[0];
    let sum = 0;

    for (i = 0; i < number.length; i++) {
        let numberSum = Number(number[i]);
        sum = sum + numberSum;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumNumbers(["1234"]); // The sum of the digits is:10 
sumNumbers(["564891"]); // The sum of the digits is:33