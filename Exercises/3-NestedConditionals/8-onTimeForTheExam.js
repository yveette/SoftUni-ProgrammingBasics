function whatTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTimeMin = examHour * 60 + examMin;
    let arriveTimeMin = arriveHour * 60 + arriveMin;
    let time;
    let hours;
    let mins;


    if (examTimeMin < arriveTimeMin) {
        console.log("Late");

        if ((arriveTimeMin - examTimeMin) < 60) {
            console.log(`${arriveTimeMin - examTimeMin} minutes after the start`);
        } else {
            time = arriveTimeMin - examTimeMin;
            hours = Math.trunc(time / 60);
            mins = (arriveTimeMin - examTimeMin) % 60;

            if (mins == "0") {
                console.log(`${hours}:${mins}0 hours after the start`);
            } else if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        }
    } else if (examTimeMin > arriveTimeMin) {
        if ((examTimeMin - arriveTimeMin) < 60) {
            if ((examTimeMin - arriveTimeMin) <= 30) {
                console.log("On time");
            } else {
                console.log("Early");
            }
            console.log(`${examTimeMin - arriveTimeMin} minutes before the start`);
        } else {
            console.log("Early");
            time = examTimeMin - arriveTimeMin;
            hours = Math.trunc(time / 60);
            mins = (examTimeMin - arriveTimeMin) % 60;

            if (mins == "0") {
                console.log(`${hours}:${mins}0 hours before the start`);
            } else if (mins < 10) {
                console.log(`${hours}:0${mins} hours before the start`);
            } else {
                console.log(`${hours}:${mins} hours before the start`);
            }
        }
    } else {
        console.log("On time");
        console.log(`${examTimeMin - arriveTimeMin} minutes before the start`);
    }
}

whatTime(["9", "30", "9", "50"]);
// Late
// 20 minutes after the start

whatTime(["9", "00", "8", "30"]);
// On time
// 30 minutes before the start

whatTime(["16", "00", "15", "00"]);
// Early
// 1:00 hours before the start

whatTime(["9", "00", "10", "30"]);
// Late
// 1:30 hours after the start

whatTime(["14", "00", "13", "55"]);
// On time
// 5 minutes before the start

whatTime(["11", "30", "8", "12"]);
// Early
// 3:18 hours before the start

whatTime(["10", "00", "10", "00"]);
// On time

whatTime(["11", "30", "10", "55"]);
// Early
// 35 minutes before the start

whatTime(["11", "30", "12", "29"]);
// Late
// 59 minutes after the start