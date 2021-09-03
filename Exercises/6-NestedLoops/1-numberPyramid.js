function pyramid(input) {
    let num = Number(input[0]);
    let result = "";
    let bigger = false;
    let end = 1;

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (end > num) {
                bigger = true;
                break;
            }
            result += end + " ";
            end++;
        }

        console.log(result);
        result = "";

        if (bigger) {
            break;
        }
    }
}

pyramid(["7"]);
// 1
// 2 3
// 4 5 6 
// 7

pyramid(["12"]);
// 1
// 2 3
// 4 5 6
// 7 8 9 10 
// 11 12

pyramid(["15"]);
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

