function bestPlayer(input) {
    let task = input[0];
    let index = 0;

    let winnerName = "";
    let winnerGoals = 0;

    while (task != "END") {
        let name = input[index];
        index++;
        let goals = Number(input[index]);
        index++;

        if (goals > winnerGoals) {
            winnerGoals = goals;
            winnerName = name;
        }
        if (goals >= 10) {
            break;
        }
        task = input[index];

    }

    console.log(`${winnerName} is the best player!`);

    if (winnerGoals >= 3) {
        console.log(`He has scored ${winnerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${winnerGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
// Messi is the best player!
// He has scored 3 goals and made a hat-trick !!!

bestPlayer(["Silva", "5", "Harry Kane", "10"]);
// Harry Kane is the best player!
// He has scored 10 goals and made a hat-trick !!!

bestPlayer(["Petrov", "2", "Drogba", "11"]);
// Drogba is the best player!
// He has scored 11 goals and made a hat-trick !!!

bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
// Junior is the best player!
// He has scored 2 goals.