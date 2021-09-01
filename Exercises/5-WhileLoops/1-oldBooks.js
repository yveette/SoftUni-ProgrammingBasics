function findBooks(input) {
    let favorite = input[0];
    let index = 1;
    let book = input[index];
    let bookIsFound = false;

    while (book !== "No More Books") {
        if (book === favorite) {
            bookIsFound = true;
            break;
        }

        index++;
        book = input[index];
    }

    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

findBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
// You checked 2 books and found it.

findBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
// The book you search is not here!
// You checked 4 books.

findBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
// You checked 10 books and found it.

