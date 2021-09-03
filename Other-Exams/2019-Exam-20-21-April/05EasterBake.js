function easterMake(input) {
    let index = 0
    let bread = Number(input[index]);
    index++;

    let countSugar = 0;
    let countFlour = 0;
    let packSugar = 0;
    let packFlour = 0;

    let winSugar = 0;
    let winFlour = 0;

    for (let i = 1; i <= bread; i++) {

        let sugar = Number(input[index]);
        index++;
        countSugar += sugar;
        if (sugar > winSugar) {
            winSugar = sugar;
        }


        let flour = Number(input[index]);
        index++;
        countFlour += flour;
        if (flour > winFlour) {
            winFlour = flour;
        }
    }

    packSugar = Math.ceil(countSugar / 950);
    packFlour = Math.ceil(countFlour / 750);

    console.log(`Sugar: ${packSugar}`);
    console.log(`Flour: ${packFlour}`);
    console.log(`Max used flour is ${winFlour} grams, max used sugar is ${winSugar} grams.`);
}

easterMake(["3", "400", "350", "250", "300", "450", "380"]);
// Sugar: 2
// Flour: 2
// Max used flour is 380 grams, max used sugar is 450 grams.

easterMake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
// Sugar: 3
// Flour: 3
// Max used flour is 543 grams, max used sugar is 600 grams.