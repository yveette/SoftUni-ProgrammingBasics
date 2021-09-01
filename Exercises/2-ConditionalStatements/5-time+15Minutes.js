function calculateTime(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = hours * 60 + minutes + 15;
    let newHours = Math.floor(totalMin / 60);

    if (newHours == "24") {
        newHours = 0;
    }

    let newMinutes = totalMin % 60;

    if (newMinutes < 10) {
        newMinutes = `0${newMinutes}`;
    }
    console.log(`${newHours}:${newMinutes}`);
}

calculateTime(["1", "46"]);     // 2:01
calculateTime(["0", "01"]);     // 0:16
calculateTime(["23", "59"]);     // 0:14
calculateTime(["11", "08"]);     // 11:23
calculateTime(["12", "49"]);     // 13:04 
