function swimRecord(input) {
    let recSec = Number(input[0]);
    let distance = Number(input[1]);
    let secForMeter = Number(input[2]);

    let needSec = distance * secForMeter;
    let time = (Math.floor(distance / 15) * 12.5);
    let totalTime = needSec + time;

    if (recSec <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recSec).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}

swimRecord(["10464", "1500", "20"]);
// No, he failed! He was 20786.00 seconds slower.

swimRecord(["55555.67", "3017", "5.03"]);
// Yes, he succeeded! The new world record is 17688.01 seconds.

