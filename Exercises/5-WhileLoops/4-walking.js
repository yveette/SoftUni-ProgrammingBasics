function walking(input) {
    let steps = 0;
    let index = 0;
    let task = input[index];
    index++;

    while (steps <= 10000) {
        if (task === "Going home") {
            steps += Number(input[index]);
            index++;
            break;
        }

        let step1 = Number(task);
        steps += step1;

        task = input[index];
        index++;
    }

    if (steps >= 10000) {
        let diff = steps - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        let diff = 10000 - steps;
        console.log(`${diff} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
// Goal reached! Good job!
// 1000 steps over the goal!

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// Goal reached! Good job!
// 298 steps over the goal!

walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// 2500 more steps to reach goal.

walking(["125", "250", "4000", "30", "2678", "4682"]);
// Goal reached! Good job!
// 1765 steps over the goal!