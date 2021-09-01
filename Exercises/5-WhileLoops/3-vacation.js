function vacation(input) {
    let index = 0;
    let moneyTrip = Number(input[index]);
    index++;
    let moneyNow = Number(input[index]);
    index++;


    let day = 0;
    let count = 0;
    let notdone = true;

    while(moneyNow < moneyTrip ){
        day++;
        let task = input[index];
        index++;
        let moneyMistery = Number(input[index]);
        index++;

        if (task === "save"){
            moneyNow += moneyMistery;
            count = 0;
        } else {
            moneyNow -= moneyMistery;
            count++;
            if(moneyNow < 0){
                moneyNow = 0;
            }
        }
        
        if ( count === 5){
            notdone = false;
            console.log(`You can't save the money.`);
            console.log(`${day}`)
            break;
        }

    }

    if(notdone === true){
        console.log(`You saved the money for ${day} days.`)
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);
// You can't save the money.
// 5

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
// You saved the money for 2 days.


