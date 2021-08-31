function graduation(input) {
    let name = input[0];
    let index = 1;
    let gradeCount = 1;
    let sum = 0
    let fails = 0;

    while (gradeCount <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade >= 4) {
            gradeCount++;
            sum += grade;
        } else {
            fails++;
            
            if (fails >= 1) {
                console.log(`${name} has been excluded at ${gradeCount} grade`);
                break;
            }
        }
    }

    if (gradeCount >= 12) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
// Gosho graduated. Average grade: 5.53

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
// Mimi has been excluded at 8 grade

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "2", "3", "6", "6", "6", "6"]);
// Mimi has been excluded at 7 grade