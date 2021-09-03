function zadacha1(input) {
    let raketaPrice = Number(input[0]);
    let raketaCount = Number(input[1]);
    let sneakers = Number(input[2]);

    let sneakersPrice = raketaPrice / 6;
    let total = raketaPrice * raketaCount + sneakers * sneakersPrice;
    total += total * 0.2;

    let finalDjokovic = total / 8;
    let finalSponsors = finalDjokovic * 7;

    console.log(`Price to be paid by Djokovic ${Math.floor(finalDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finalSponsors)}`)
}

zadacha1(["850", "4", "2"]);
// Price to be paid by Djokovic 552
// Price to be paid by sponsors 3868

zadacha1(["1000", "3", "1"]);
// Price to be paid by Djokovic 475
// Price to be paid by sponsors 3325

zadacha1(["386", "7", "4"]);
// Price to be paid by Djokovic 443
// Price to be paid by sponsors 3108
