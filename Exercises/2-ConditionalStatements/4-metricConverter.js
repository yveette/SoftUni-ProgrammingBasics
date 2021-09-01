function unitConverter(input) {
    let number1 = Number(input[0]);
    let text1 = input[1];
    let text2 = input[2];
    
    if (text1 == "mm" && text2 == "m") {
        result = number1 / 1000;
    } else if (text1 == "mm" && text2 == "cm") {
        result = number1 / 10;
    } else if (text1 == "cm" && text2 == "mm"){
        result = number1 * 10;
    } else if (text1 == "cm" && text2 == "m") {
        result = number1 / 100;
    } else if (text1 == "m" && text2 == "cm") {
        result = number1 * 100;
    } else if (text1 == "m" && text2 == "mm") {
        result = number1 * 1000;
    }
    console.log(result.toFixed(3));
}

unitConverter(["12","mm","m"]);     // 0.012
unitConverter(["150","m","cm"]);     // 15000.000
unitConverter(["45","cm","mm"]);     // 450.000