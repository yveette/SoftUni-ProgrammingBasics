function barcodeGenerator(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = "";
    let a = Math.floor(num1 / 1000);

    let b = "" + num1;
    b = b.charAt(1);
    b = Number(b);

    let c = "" + num1;
    c = c.charAt(2);
    c = Number(c);

    let d = num1 % 10;

    let a1 = Math.floor(num2 / 1000);

    let b1 = "" + num2;
    b1 = b1.charAt(1);
    b1 = Number(b1);

    let c1 = "" + num2;
    c1 = c1.charAt(2);
    c1 = Number(c1);

    let d1 = num2 % 10;

    for (let i = a; i <= a1; i++) {
        if (i % 2 != 0) {
            for (let j = b; j <= b1; j++) {
                if (j % 2 != 0) {
                    for (let k = c; k <= c1; k++) {
                        if (k % 2 != 0) {
                            for (let m = d; m <= d1; m++) {
                                if (m % 2 != 0) {
                                    result = "" + result + i + j + k + m + " ";

                                }
                            }
                        }
                    }
                }
            }

        }
    }
    console.log(result)
}

barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
barcodeGenerator(["1365", "5877"]);

