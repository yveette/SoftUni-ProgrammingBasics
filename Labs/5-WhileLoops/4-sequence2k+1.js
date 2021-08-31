function numberRow(input) {
    let num = Number(input[0]);
    let start = 1;

    while (start <= num) {
        console.log(start);
        start = start * 2 + 1;

    }
}

numberRow(["3"]);
numberRow(["8"]);
numberRow(["17"]);
numberRow(["31"]);