function vacantion(input) {
    let month = input[0];
    let days = Number(input[1]);
    let priceS;
    let priceA;

    if (month == "May" || month == "October") {
        if (days > 7 && days <= 14){
            priceS = (days * 50.00) * 0.95;
            priceA = days * 65.00;
        } else if (days > 14) {
            priceS = (days * 50.00) * 0.70;
            priceA = (days * 65.00) * 0.90;
        } else {
            priceS = days * 50.00;
            priceA = days * 65.00;
        }
        
    } else if ( month == "June" || month == "September" ) {
        if (days > 14){
            priceS = (days * 75.20) * 0.80;
            priceA = (days * 68.70) * 0.90;
        } else {
            priceS = days * 75.20;
            priceA = days * 68.70;
        }
    } else if ( month == "July" || month == "August" ){
        if (days > 14) {
            priceS = days * 76.00;
            priceA = (days * 77.00) * 0.90;
        } else {
            priceS = days * 76.00;
            priceA = days * 77.00;
        } 
    }
    console.log(`Apartment: ${(priceA).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceS).toFixed(2)} lv.`);
}

vacantion(["May","15"]);
// Apartment: 877.50 lv.
// Studio: 525.00 lv.

vacantion(["June","14"]);
// Apartment: 961.80 lv.
// Studio: 1052.80 lv.

vacantion(["August","20"]);
// Apartment: 1386.00 lv.
// Studio: 1520.00 lv.