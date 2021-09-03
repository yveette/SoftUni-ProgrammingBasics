function oscars(input) {
    let rentHall = Number(input[0]);
    let statuette = rentHall * 0.7;
    let catering = statuette * 0.85;
    let sound = catering * 0.5;

    let total = (rentHall + statuette + catering + sound).toFixed(2);
    console.log(total);
}

oscars(["3500"]); // 9073.75
oscars(["5555"]); // 14401.34О