function numbersDivision(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;
    let result = "";

    for (i = a; i <= b; i++) {
        if (i % 9 == 0) {
            sum += i;
            result = result + i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(result);
}

numbersDivision(["100", "200"]);
/*
The sum: 1683
108
117
126
135
144
153
162
171 
180 
189
198
*/