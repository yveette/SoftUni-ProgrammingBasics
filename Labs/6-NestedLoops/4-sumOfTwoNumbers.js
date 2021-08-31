function sumOfTwoNumbers(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magic = Number(input[2]);

    let count = 0;
    let findMagic = false;

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            count++;

            if (i + j == magic) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magic})`);
                findMagic = true;
                break;
            }
        }

        if (findMagic) {
            break;
        }
    }

    if (!findMagic) {
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
// Combination N:4 (1 + 4 = 5)

sumOfTwoNumbers(["23", "24", "20"]);
// 4 combinations - neither equals 20

sumOfTwoNumbers(["88", "888", "1000"]);
// Combination N:20025 (112 + 888 = 1000)

sumOfTwoNumbers(["88", "888", "2000"]);
// 641601 combinations - neither equals 2000