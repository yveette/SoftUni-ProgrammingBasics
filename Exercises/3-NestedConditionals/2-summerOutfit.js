function outfit(input) {
    let degree = Number(input[0]);
    let time = input[1];
    let outfit;
    let shoes;

    if (degree >= 10 && degree <= 18) {
        if (time == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (time == "Afternoon" || time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degree > 18 && degree <= 24) {
        if (time == "Morning" || time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (time == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (degree >= 25) {
        if (time == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (time == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}

outfit(["16", "Morning"]);
// It's 16 degrees, get your Sweatshirt and Sneakers.

outfit(["22", "Afternoon"]);
// It's 22 degrees, get your T-Shirt and Sandals.

outfit(["28", "Evening"]);
// It's 28 degrees, get your Shirt and Moccasins.





