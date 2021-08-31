function enter(input) {
    let name = input[0];
    let correctPassword = input[1];

    let index = 2;
    let trying = input[index];

    while (trying !== correctPassword) {
        trying = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}

enter(["Nakov", "1234", "Pass", "1324", "1234"]);
enter(["Gosho", "secret", "secret"]);

