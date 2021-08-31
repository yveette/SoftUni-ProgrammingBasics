function moving(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);

    let total = x * y * z;
    let index = 3;

    while (input[index] != "Done") {
        total = total - Number(input[index]);
        if (total < 0) {
            console.log(`No more free space! You need ${Math.abs(total)} Cubic meters more.`);
            break;
        }
        index++;
    }

    if (total >= 0) {
        console.log(`${total} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
// No more free space! You need 2 Cubic meters more.

moving(["10", "1", "2", "4", "6", "Done"]);
// 10 Cubic meters left.
