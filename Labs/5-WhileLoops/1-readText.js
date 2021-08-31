function words(input) {
    let index = 0;
    let word = input[index];

    while (word != "Stop") {
        console.log(word);
        index++;
        word = input[index];
    }
}

words(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
words(["Sofia", "Berlin", "Moscow", "Athens", "Madrid",
    "London", "Paris", "Stop", "AfterStop"]);

