function sumLetters(text) {
    let word = text[0];
    let sum = 0;

    for (i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }

    console.log(sum);
}

sumLetters(["hello"]); // 6
sumLetters(["hi"]); // 3
sumLetters(["bamboo"]); // 9
sumLetters(["beer"]);  //4