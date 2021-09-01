function doMath(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result;

    if (operator == "+" || operator == "-" || operator == "*") {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
        }

        if (result % 2 == 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        }

    } else if (operator == "/" || operator == "%") {
        if (num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else if (operator == "/") {
            result = (num1 / num2).toFixed(2);
            console.log(`${num1} / ${num2} = ${result}`);
        } else if (operator == "%") {
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
        }
    }
}

doMath(["10", "12", "+"]); // 10 + 12 = 22 - even
doMath(["10", "1", "-"]); // 10 – 1 = 9 - odd
doMath(["7", "3", "*"]); // 7 * 3 = 21 - odd
doMath(["123", "12", "/"]); // 123 / 12 = 10.25
doMath(["10", "3", "%"]); // 10 % 3 = 1
doMath(["112", "0", "/"]); // Cannot divide 112 by zero
doMath(["10", "0", "%"]); // Cannot divide 10 by zero











