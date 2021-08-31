function traveling(input) {
    let place = "";
    let money = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] == "End") {
            break;
        }

        place = input[i];
        i++;
        money = Number(input[i]);

        let sum = 0
        while (sum < money) {
            i++;
            sum += Number(input[i]);
        }

        console.log(`Going to ${place}!`);
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240",
    "Spain", "1200", "300", "500", "193", "423", "End"]);
// Going to Greece!
// Going to Spain!

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360",
    "Portugal", "1450", "400", "400", "200", "300", "300",
    "Egypt", "1900", "1000", "280", "300", "500", "End"]);
// Going to France!
// Going to Portugal!
// Going to Egypt!