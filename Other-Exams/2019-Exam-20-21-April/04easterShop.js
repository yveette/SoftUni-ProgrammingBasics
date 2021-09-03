function easterShop(input) {
    let index = 0;
    let startEggs = Number(input[index]);
    index++;
    let task = input[index];
    index++;
    let soldEggs = 0;
    let finished = false;

    while (task != "Close") {
        let command = task;
        let count = Number(input[index]);
        index++;

        if (command == "Buy") {
            if (startEggs < count) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startEggs}.`)
                finished = true;
                break;
            }
            startEggs -= count;
            soldEggs += count;
        } else {
            startEggs += count;
        }

        task = input[index];
        index++;
    }

    if (!finished) {
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`);
    }
}

easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
// Not enough eggs in store!
// You can buy only 8.

easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
// Store is closed!
// 35 eggs sold.
