function interval(input) {
    let num = Number(input[0]);

    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

interval(["-25"]);  //Yes
interval(["0"]);    //No
interval(["25"]);  //Yes