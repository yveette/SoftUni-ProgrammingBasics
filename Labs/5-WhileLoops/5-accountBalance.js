function balance(input) {
    let total = 0;
    let index = 0;
    let money = input[index];
    
    while (money !== "NoMoreMoney") {
        let num = Number(money);

        if (num < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            total += num;
            console.log(`Increase: ${num.toFixed(2)}`);
        }

        index++;
        money = input[index];
    }

    console.log(`Total: ${total.toFixed(2)}`)
}

balance(["5.51", "69.42", "100", "NoMoreMoney"]);
// Increase: 5.51
// Increase: 69.42
// Increase: 100.00
// Total: 174.93

balance(["120", "45.55", "-150"]);
// Increase: 120.00
// Increase: 45.55
// Invalid operation!
// Total: 165.55