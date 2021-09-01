function whoGetsScholarship(input) {
    let money = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minSalary = Number(input[2]);

    let socialScolarship = Math.floor(0.35 * minSalary);
    let exellentScolarship = Math.floor(averageSuccess * 25);

    if (averageSuccess >= 5.50) {
        if (money >= minSalary) {
            console.log(`You get a scholarship for excellent results ${exellentScolarship} BGN`);
        } else if (exellentScolarship >= socialScolarship) {
            console.log(`You get a scholarship for excellent results ${exellentScolarship} BGN`);
        } else {
            console.log(`You get a Social scholarship ${socialScolarship} BGN`);
        }
    } else if (averageSuccess >= 4.50) {
        if (money < minSalary) {
            console.log(`You get a Social scholarship ${socialScolarship} BGN`);
        } else {
            console.log("You cannot get a scholarship!");
        }
    } else {
        console.log("You cannot get a scholarship!");
    }
}
whoGetsScholarship(["480.00", "4.60", "450.00"]);
//You cannot get a scholarship!
whoGetsScholarship(["300.00", "5.65", "420.00"]);
//You get a Social scholarship 147 BGN