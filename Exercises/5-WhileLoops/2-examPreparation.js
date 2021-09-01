function examPrepare(input) {
    let index = 0;
    let badGradeAll = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let gradeTask = Number(input[index]);
    index++;

    let avgScoreCount = 0;
    let all = 0;
    let badGrades = 0;
    let word

    let ready = true;
    while(command !== "Enough"){
        avgScoreCount++;
        all += gradeTask;
        word = command;

        if(gradeTask <= 4){
            badGrades++;
            if(badGrades >= badGradeAll){
                ready = false;
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        } 

        command = input[index];
        index++;
        gradeTask = Number(input[index]);
        index++;
    }

    if (ready === true) {
        console.log(`Average score: ${(all/avgScoreCount).toFixed(2)}`);
        console.log(`Number of problems: ${avgScoreCount}`);
        console.log(`Last problem: ${word}`);
    }   
}

examPrepare(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);
// You need a break, 2 poor grades.

examPrepare(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
// Average score: 5.25
// Number of problems: 4
// Last problem: Bus


