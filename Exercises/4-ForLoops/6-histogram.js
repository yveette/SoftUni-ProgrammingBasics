function histogram(input) {
    let allCount = Number(input[0]);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= allCount; i++){
        let a = Number(input[i]);
        if ( a < 200) {
            p1++;
        } else if ( a >= 200 && a <= 399) {
            p2++;
        } else if ( a >= 400 && a <= 599) {
            p3++;
        } else if ( a >= 600 && a <= 799) {
            p4++;
        } else {
            p5++;
        }
    }

    let result1 = p1 / allCount * 100 ;
    let result2 = p2 / allCount * 100 ;
    let result3 = p3 / allCount * 100 ;
    let result4 = p4 / allCount * 100 ;
    let result5 = p5 / allCount * 100 ;

    console.log( result1.toFixed(2) + "%");
    console.log(result2.toFixed(2) + "%");
    console.log(result3.toFixed(2) + "%");
    console.log(result4.toFixed(2) + "%");
    console.log(result5.toFixed(2) + "%");
}

histogram([20,53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
histogram(["3","1","2","999"])
histogram(["7","800","801","250","199","399","599","799"])
histogram(["9","367", "99", "200", "799","999","333","555","111","9"])
histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])



