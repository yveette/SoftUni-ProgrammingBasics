function total(input) {
    let sum1 = Number(input[0]);
    let period = Number(input[1]);
    let percent1 = Number(input[2]);

    let percent2 = sum1 * (percent1 * 0.01);
    let oneMonth = percent2 / 12;
    let all = sum1 + (period * oneMonth);

    console.log(all);
}

total(["200", "3", "5.7"]); // 202.85
total(["2350","6","7"]);    // 2432.25



