function charity(input) {
    let index = 0
    let money = Number(input[index]);
    index++;
    let task = input[index];

    let cash = 0;
    let card = 0;
    let countCash = 0;
    let countCard = 0;
    let sum = 0;
    let sumCash = 0;
    let sumCard = 0;


    while (sum <= money) {
        if (task === "End" || task === undefined || task === NaN) {
            break;
        }
        cash = Number(input[index]);
        index++;

        if (cash > 100) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            sumCash += cash;
            sum += cash;
            countCash++;
        }

        card = input[index];
        if (isNaN(card) || card === "End") {
            break;
        } else {
            card = Number(input[index]);
            index++;
        }

        if (card < 10) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            sumCard += card;
            sum += card;
            countCard++;
        }

        task = input[index];
    }
    if (sum >= money) {
        console.log(`Average CS: ${(sumCash / countCash).toFixed(2)}`);
        console.log(`Average CC: ${(sumCard / countCard).toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}

charity(["500", "120", "8", "63", "256", "78", "317"]);
/*
Error in transaction!
Error in transaction!
Product sold!
Product sold!
Product sold!
Product sold!
Average CS: 70.50
Average CC: 286.50
*/

charity(["600", "86", "150", "98", "227", "End"]);
/*
Product sold!
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
*/
charity(["110", "50", "40", "11"]);
/*
Product sold!
Product sold!
Product sold!
Failed to collect required money for charity.
*/