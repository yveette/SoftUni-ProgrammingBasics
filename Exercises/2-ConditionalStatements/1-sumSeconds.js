function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let totalTime = a + b + c;

    let minutesTotal = Math.floor(totalTime / 60);
    let secondsTotal = totalTime % 60;

    if (secondsTotal < 10) {
        console.log(`${minutesTotal}:0${secondsTotal}`);
    } else {
        console.log(`${minutesTotal}:${secondsTotal}`);
    }
}

sumSeconds(["35", "45", "44"]);   // 2:04
sumSeconds(["22", "7", "34"]);  // 1:03
sumSeconds(["50", "50", "49"]);  // 2:29
sumSeconds(["14", "12", "10"]);  // 0:36






