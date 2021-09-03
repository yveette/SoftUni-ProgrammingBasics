function twoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = "";

    for (let i = num1; i <= num2; i++) {
        let current = "" + i;
        let evens = 0;
        let odds = 0;

        for (let j = 0; j < current.length; j++) {
            let digit = Number(current.charAt(j));
            if (j % 2 == 0) {
                evens += digit;
            } else {
                odds += digit;
            }
        }

        if (evens === odds) {
            result += `${i} `;
        }
    }

    console.log(result);
}

twoNumbers(["100000", "100050"]);
// 100001 100012 100023 100034 100045

twoNumbers(["299900", "300000"]);
// 299970 299981 299992

twoNumbers(["100115", "100120"])
// no output