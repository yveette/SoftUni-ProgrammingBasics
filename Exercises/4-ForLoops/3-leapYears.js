function whichYear(input) {
    let year1 = Number(input[0]);
    let year2 = Number(input[1]);

    for ( i = year1; i <= year2; i += 4){
        console.log(i);
    }
}

whichYear(["1908","1919"]);
whichYear(["2000","2011"]);
whichYear(["1584","1597"]);
whichYear(["2020","2032"]); 