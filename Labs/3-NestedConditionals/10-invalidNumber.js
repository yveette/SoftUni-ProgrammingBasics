function isNumber(input) {
    let num = Number(input[0]);
    if (!(num >= 100 && num <= 200 || num == "0")) {
        console.log("invalid");
    }
}

isNumber(["75"]);   // invalid
isNumber(["150"]);
isNumber(["220"]);   // invalid
isNumber(["199"]);
isNumber(["-1"]);   // invalid
isNumber(["100"]);
isNumber(["200"]);
isNumber(["0"]);