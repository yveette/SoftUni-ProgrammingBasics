function charity(input) {
    let days = Number(input[0]);
    let index = 1;
    let task = input[index];
    index++;
    let winCount = 0;
    let loseCount = 0;
    let allMoney = 0

    for (let i = 1; i <= days; i++) {
        let winDay = 0;
        let loseDay = 0;
        let dayMoney = 0;

        while (task !== "Finish") {
            let sport = task;
            let match = input[index];
            index++;

            if (match == "Finish") {
                break;
            }
            if (match == "win") {
                winCount += 1;
                winDay += 1;
                dayMoney += 20;
            } else {
                loseCount += 1;
                loseDay += 1;
            }

            task = input[index];
            index++;
        }

        if (winDay > loseDay) {
            dayMoney = dayMoney * 1.10;
            allMoney = allMoney + dayMoney;
        } else {
            allMoney = allMoney + dayMoney;
        }
        dayMoney = 0;

        task = input[index];
        index++;
    }

    if (winCount > loseCount) {
        allMoney = allMoney * 1.20;
        console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    }
}

charity(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish",
    "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
// You won the tournament! Total raised money: 132.00

charity(["3",
    "darts", "lose", "handball", "lose", "judo", "win", "Finish",
    "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win",
    "Finish", "volleyball", "win", "basketball", "win", "Finish"]);
// You lost the tournament! Total raised money: 84.00
