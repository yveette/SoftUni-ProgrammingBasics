function convertor(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

convertor(["22"]);    // 39.50078
convertor(["100"]);    // 179.549
convertor(["12.5"]);    // 22.443625