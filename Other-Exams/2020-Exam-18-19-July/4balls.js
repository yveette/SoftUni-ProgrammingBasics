function colorBalls(input) {
    let count = Number(input[0]);
    let index = 1;
    let ball = input[index];
    let points = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    for (i = 0; i < count; i++) {
        ball = input[index];
        index++;

        switch (ball) {
            case "red":
                points += 5;
                redCount += 1;
                break;
            case "orange":
                points += 10;
                orangeCount += 1;
                break;
            case "yellow":
                points += 15;
                yellowCount += 1;
                break;
            case "white":
                points += 20;
                whiteCount += 1;
                break;
            case "black":
                points = points / 2;
                blackCount += 1;
                break;
            default:
                otherCount += 1;
                break;

        }
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${redCount}`);
    console.log(`Points from orange balls: ${orangeCount}`);
    console.log(`Points from yellow balls: ${yellowCount}`);
    console.log(`Points from white balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
}

colorBalls(["3", "white", "black", "pink"]);
// Total points: 10
// Points from red balls: 0
// Points from orange balls: 0
// Points from yellow balls: 0
// Points from white balls: 1
// Other colors picked: 1
// Divides from black balls: 1

colorBalls(["5", "red", "red", "ddd", "ddd", "ddd"]);
// Total points: 10
// Points from red balls: 2
// Points from orange balls: 0
// Points from yellow balls: 0
// Points from white balls: 0
// Other colors picked: 3
// Divides from black balls: 0

