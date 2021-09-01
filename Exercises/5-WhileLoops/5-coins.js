function howManyCoins(input) {
    let allMoney = Number(input[0]);
    let coins = Math.floor(allMoney * 100);
    let count = 0;

    while (coins > 0) {
        if (coins >= 200) {
            coins -= 200;
            count++;
        } else if (coins >= 100) {
            coins -= 100;
            count++;
        } else if (coins >= 50) {
            coins -= 50;
            count++;
        } else if (coins >= 20) {
            coins -= 20;
            count++;
        } else if (coins >= 10) {
            coins -= 10;
            count++;
        } else if (coins >= 5) {
            coins -= 5;
            count++;
        } else if (coins >= 2) {
            coins -= 2;
            count++;
        } else if (coins >= 1) {
            coins -= 1;
            count++;
        }
    }
    
    console.log(count);
}

howManyCoins(["1.23"]); // 4
howManyCoins(["2"]); // 1
howManyCoins(["0.56"]); // 3
howManyCoins(["2.73"]) / 5
