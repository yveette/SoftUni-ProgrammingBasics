function whatTitle(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender == "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
}

whatTitle(["12", "f"]);  //Miss
whatTitle(["17", "m"]);  //Mr.
whatTitle(["25", "f"]);  //Ms.
whatTitle(["13.5", "m"]);    //Master


