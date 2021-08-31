function numbers(input) {
    // with step 3
    let n = Number(input[0]);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numbers([10]);
numbers([7]);
numbers([15]);