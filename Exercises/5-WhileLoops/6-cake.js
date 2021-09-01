function birthday(input) {
    let index = 0;
    let x = Number(input[index]);
    index++;

    let y = Number(input[index]);
    index++;

    let cake = x * y;
    let task = input[index];
    index++;

    while (task !== "STOP") {
        task = Number(task);
        cake -= task;
        if (cake <= 0) {
            break;
        }
        task = input[index];
        index++
    }

    if (cake < 0) {
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
    } else {
        console.log(`${cake} pieces are left.`);
    }
}

birthday(["10", "10", "20", "20", "20", "20", "21"]);
// No more cake left! You need 1 pieces more.

birthday(["10", "2", "2", "4", "6", "STOP"]);
// 8	pieces are left.