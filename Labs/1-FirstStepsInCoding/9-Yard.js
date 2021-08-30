function yard(input) {
    let sqrm = input[0];
    let price = sqrm * 7.61;
    let discount = 0.18 * price;
    let pricefinal = price - discount;
    
    console.log(`The finale price is: ${pricefinal} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yard(["550"]);  
//The final price is: 3432.11 lv.
// The discount is: 753.39 lv.

yard(["150"]);
// The final price is: 936.03 lv.
// The discount is: 205.47 lv.

