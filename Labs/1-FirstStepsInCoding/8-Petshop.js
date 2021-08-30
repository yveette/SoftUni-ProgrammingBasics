function cost(input) {
    let dogs = parseInt(input[0]);
    let others = parseInt(input[1]);
    let price1 = dogs * 2.5;
    let price2 = others * 4;
    console.log(price1 + price2 + " lv.");
}

cost(["5", "4"]);   //28.5 lv.
cost(["13", "9"]);  //68.5 lv.