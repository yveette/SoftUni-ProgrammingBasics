function passwordHack(input) {
    let a = input[0];
    if (a == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordHack(["qwerty"]);   // Wrong password!
passwordHack(["s3cr3t!P@ssw0rd"]);  // Welcome
passwordHack(["s3cr3t!p@ss"]);  // Wrong password!