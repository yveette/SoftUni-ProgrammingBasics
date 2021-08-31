function whatAnimal(input) {
    let animal = input[0];
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

whatAnimal(["dog"]);    //mammal
whatAnimal(["snake"]);  //reptile
whatAnimal(["cat"]);    //unknown