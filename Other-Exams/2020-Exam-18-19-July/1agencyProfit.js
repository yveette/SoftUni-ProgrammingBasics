function agency(input) {
    let name = input[0];
    let adults = Number(input[1]);
    let kids = Number(input[2]);
    let netoPrice = Number(input[3]);
    let chargePrice = Number(input[4]);

    let kidsTickets = netoPrice * 0.3;

    let sumAdult = (netoPrice + chargePrice) * adults;
    let kidsSum = (kidsTickets + chargePrice) * kids;
    let total = ((sumAdult + kidsSum) * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${name} tickets is ${total} lv.`);
}

agency(["WizzAir", "15", "5", "120", "40"]);
// The profit of your agency from WizzAir tickets is 556.00 lv.

agency(["Ryanair", "60", "23", "158.96", "39.12"]);
//The profit of your agency from Ryanair tickets is 2776.28 lv.