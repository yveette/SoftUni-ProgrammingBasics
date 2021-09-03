function easterDecoration(input) {
    let index = 0;
    let clients = Number(input[index]);
    index++;
    let task = input[index];
    let total = 0;
    let counter = 0;
    let money = 0;

    for (let i = 1; i < input.length; i++) {

        let dayMoney = 0;

        while (task != "Finish") {
            let command = input[index];
            index++;
            switch (command) {
                case "basket":
                    counter += 1;
                    dayMoney += 1.50;
                    break;
                case "wreath":
                    counter += 1;
                    dayMoney += 3.80;
                    break;
                case "chocolate bunny":
                    counter += 1;
                    dayMoney += 7.00;
                    break;
            }

            task = input[index];
        }

        money += dayMoney;

        if (counter % 2 == 0) {
            money = money * 0.80;
        }

        console.log(`You purchased ${counter} items for ${money.toFixed(2)} leva.`);

        total += money;
        money = 0;
        counter = 0;
        index++;
        task = input[index];

        if (task == undefined) {
            break;
        }
    }

    console.log(`Average bill per client is: ${(total / clients).toFixed(2)} leva.`)
}

easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
// You purchased 3 items for 12.30 leva.
// You purchased 2 items for 8.64 leva.
// Average bill per client is: 10.47leva.

easterDecoration(["1", "basket", "wreath", "chocolate bunny", "basket", "wreath", "chocolate bunny", "Finish"]);
// You purchased 6 items for 19.68 leva.
// Average bill per client is: 19.68 leva.