function vacantion(input) {
    let pages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let bookTime = pages / pagesForHour;
    let timeForDay = bookTime / days;

    console.log(timeForDay);
}

vacantion(["212","20","2"]);  // 5.3
vacantion(["432", "15", "4"]);  // 7.2
