function greaterNum(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greaterNum(["5", "3"]);    // 5
greaterNum(["3", "5"]);    // 5
greaterNum(["10", "10"]);    // 10
greaterNum(["-5", "5"]);    // 5