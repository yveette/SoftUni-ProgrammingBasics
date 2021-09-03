function easter(input) {
    let flourPriceKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggs = Number(input[3]);
    let yeast = Number(input[4]);

    let sugarPriceKg = flourPriceKg * 0.75;
    let eggsPrice = flourPriceKg * 1.10;
    let yeastPrice = sugarPriceKg * 0.2;

    let sumFlour = flourPriceKg * flourKg;
    let sumSugar = sugarPriceKg * sugarKg;
    let sumEggs = eggsPrice * eggs;
    let sumYeast = yeastPrice * yeast;

    let total = (sumFlour + sumSugar + sumEggs + sumYeast).toFixed(2);
    console.log(total);

}

easter([50, 10, 3.5, 6, 1]);
// 968.75

easter([63.44, 3.57, 6.35, 8, 2]);
// 1105.92