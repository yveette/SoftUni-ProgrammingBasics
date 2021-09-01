function hall(input) {
    let rent = Number(input[0]);

    let cake = rent * 20 / 100;
    let drinks = cake - (cake * 45 / 100);
    let animator = rent / 3;

    let total = rent + cake + drinks + animator;

    console.log(total);
}

hall(["2250"]); // 3697.5
hall(["3720"]); // 6113.2