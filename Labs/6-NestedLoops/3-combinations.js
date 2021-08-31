function combinations(input) {
    //x1 + x2 + x3 = n
    let count = 0;
    let n = Number(input[0]);
    
    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                if (a + b + c == n) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

combinations(["25"]); // 351
combinations(["20"]); // 231
combinations(["5"]); // 21
