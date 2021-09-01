function bonusPoints(input) {
    let startNumber = Number(input[0]);
    let bonus = 0.0;

    if (startNumber <= 100) {
        bonus = 5;
    } else if (startNumber > 1000) {
        bonus = startNumber * 0.10;
    } else {
        bonus = startNumber * 0.20;
    }

    if (startNumber % 2 == 0) {
        bonus += 1;
    } else if (startNumber % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(startNumber + bonus);
}

bonusPoints(["20"]); // 6   26
bonusPoints(["175"]); // 37   212
bonusPoints(["2703"]); // 207.3   2973.3
bonusPoints(["15875"]); // 1589.5   17464.5

