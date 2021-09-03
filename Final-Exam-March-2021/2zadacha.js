function zadacha(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let high = Number(input[2]);
    let astronovt = Number(input[3]);

    let astronovtNeed = 2 * 2 * (astronovt + 0.4);

    let space = width * length * high;
    let allowed = Math.floor(space / astronovtNeed);

    if (allowed >= 3 && allowed < 10) {
        console.log(`The spacecraft holds ${allowed} astronauts.`);
    } else if (allowed < 3) {
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}

zadacha(["3.5", "4", "5", "1.70"]);
zadacha(["4.5", "4.8", "5", "1.75"]);

