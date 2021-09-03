function zadacha(input) {
    let count = Number(input[0]);
    let index = 1;
    let task = input[index];

    let company = "";
    let passager = 0;

    let passagerCount = 0;

    let winnerName = "";
    let winnerPassager = 0;

    for (let i = 1; i <= count; i++) {
        if (task == undefined) {
            break;
        }
        company = input[index];
        index++;
        passager = input[index];

        let countFly = 0;
        let averagePassager = 0;

        while (passager !== "Finish") {
            passager = Number(input[index]);
            index++;
            passagerCount += passager;
            countFly += 1;
            passager = input[index];

        }

        averagePassager = Math.floor(passagerCount / countFly);
        console.log(`${company}: ${averagePassager} passengers.`);

        if (averagePassager > winnerPassager) {
            winnerPassager = averagePassager;
            winnerName = company;
        }
        countFly = 0;
        passagerCount = 0;
        index++;
        task = input[index];

        if (task == undefined) {
            break;
        }
    }
    console.log(`${winnerName} has most passengers per flight: ${winnerPassager}`)
}

zadacha(["3",
    "WizzAir",
    "180",
    "230",
    "100",
    "Finish",
    "BulgariaAir",
    "50",
    "60",
    "90",
    "Finish",
    "Lufthansa",
    "260",
    "320",
    "Finish"
]);

zadacha(["2",
    "Qatar Airways",
    "95",
    "231",
    "323",
    "Finish",
    "LOT",
    "76",
    "89",
    "55",
    "Finish"
]);