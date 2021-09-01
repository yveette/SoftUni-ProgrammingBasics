function numbers(input) {
    let a = Number(input[0]);

    for (i = 1; i <= 10; i++) {
        result = a * i;
        console.log(`${i} * ${a} = ${result}`);
    }
}

numbers(["5"]);