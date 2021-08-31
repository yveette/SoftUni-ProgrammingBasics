function whatPrice(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log("12");
            break;
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break;
        case "Saturday":
        case "Sunday":
            console.log("16");
    }
}

//or 

function whatPrice1(input) {
    let day = input[0];
    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        console.log("12");
    } else if (day == "Wednesday" || day == "Thursday") {
        console.log("14");
    } else {
        console.log("16");
    }
}

whatPrice1(["Monday"]); //12
whatPrice1(["Friday"]); //12
whatPrice1(["Sunday"]); //16