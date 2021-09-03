function easterBattle(input) {
    let index = 0;
    let player1 = Number(input[index]);
    index++;
    let player2 = Number(input[index]);
    index++;
    let task = input[index];
    let finish = false;

    while (task !== "End of battle") {
        if (task == "one") {
            player2 -= 1;
        } else {
            player1 -= 1;
        }

        if (player1 == 0) {
            console.log(`Player one is out of eggs. Player two has ${player2} eggs left.`);
            finish = true;
            break;
        }
        if (player2 == 0) {
            console.log(`Player two is out of eggs. Player one has ${player1} eggs left.`);
            finish = true;
            break;
        }
        index++;
        task = input[index];
    }

    if (!finish) {
        console.log(`Player one has ${player1} eggs left.`);
        console.log(`Player two has ${player2} eggs left.`);
    }
}
easterBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
// Player one has 2 eggs left.
// Player two has 2 eggs left.

easterBattle(["2", "6", "one", "two", "two"]);
// Player one is out of eggs. Player 
// two has 5 eggs left.

easterBattle(["6", "3", "one", "two", "two", "one", "one"]);
// Player two is out of eggs. Player
// one has 4 eggs left.