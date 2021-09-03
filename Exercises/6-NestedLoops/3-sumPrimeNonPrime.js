function sumSimpleOrNo(input) {
    let index = 0;
    let task = input[index];
    let simple = 0;
    let nosimple = 0;

    while (task !== "stop") {
        task = Number(task);

        if (task == 1) {
            simple = 1;
        }

        let counter = 1;

        if (task >= 0) {
            for (let i = 2; i <= task; i++) {
                if (task % i == 0) {
                    counter++;
                }
            }

            if (counter <= 2) {
                simple += task;
            } else {
                nosimple += task;
            }

        } else {
            console.log(`Number is negative.`);
        }

        index++;
        task = input[index];
    }

    console.log(`Sum of all prime numbers is: ${simple}`);
    console.log(`Sum of all non prime numbers is: ${nosimple}`);
}

sumSimpleOrNo(["3", "9", "0", "7", "19", "4", "stop"]);
// Sum of all prime numbers is: 29
// Sum of all non prime numbers is: 13

sumSimpleOrNo(["30", "83", "33", "-1", "20", "stop"]);
// Number is negative.
// Sum of all prime numbers is: 83
// Sum of all non prime numbers is: 83

sumSimpleOrNo(["0", "-9", "0", "stop"]);
// Number is negative.
// Sum of all prime numbers is: 0
// Sum of all non prime numbers is: 0

