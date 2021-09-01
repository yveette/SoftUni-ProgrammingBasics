function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let waterPr = Number(input[3]);

    let volume = length * width * height;
    let waterAll = volume * 0.001;
    let waterTotal = waterAll * (1 - (waterPr * 0.01));

    console.log(waterTotal);
}

fishTank(["85", "75", "47", "17"]);    // 248.68875
fishTank(["105", "77", "89", "18.5"]);   // 586.445475

