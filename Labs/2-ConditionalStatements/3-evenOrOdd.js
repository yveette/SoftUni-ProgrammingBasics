function evenOrOdd(input) {
    let number = Number(input[0]);
    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd(["2"]);   // even
evenOrOdd(["3"]);   // odd
evenOrOdd(["25"]);   // odd
evenOrOdd(["1024"]);   // even
