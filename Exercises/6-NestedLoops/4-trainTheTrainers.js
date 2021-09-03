function trainTheTrainers(input) {
    let judge = Number(input[0]);
    let index = 1;
    let task = input[index];
    index++;
    let totalsum = 0;
    let counter = 0

    while (task !== "Finish") {
        let presentation = task;
        counter += 1;
        let degree = 0;
        let sumdegree = 0;

        for (let i = 1; i <= judge; i++) {
            degree = Number(input[index]);
            index++;
            sumdegree += degree;
            totalsum += degree;
        }

        console.log(`${presentation} - ${(sumdegree / judge).toFixed(2)}.`);
        task = input[index];
        index++;
    }

    console.log(`Student's final assessment is ${(totalsum / (judge * counter)).toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50",
    "For-Loop", "5.84", "5.66", "Finish"]);
// While-Loop - 5.75.
// For-Loop - 5.75.
// Student's final assessment is 5.75.

trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00",
    "Lists", "5.83", "6.00", "5.42", "Finish"]);
// Arrays - 4.92.
// Lists - 5.75.
// Student's final assessment is 5.34.

trainTheTrainers(["2", "Objects and Classes", "5.77",
    "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
// Objects and Classes - 5.00.
// Dictionaries" - 4.82.
// RegEx - 3.15.
// Student's final assessment is 4.32.

