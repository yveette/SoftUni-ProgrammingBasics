function volleyball(input) {
    let year = input[0];
    let holidays = Number(input[1]);
    let weekends = Number(input[2]);
    let sofia;
    let sofiaW;
    let sofiaH;

    if (year == "leap") {
        sofiaW = (48 - weekends) * 3.0 / 4 + weekends;
        sofiaH = holidays * 2.0 / 3;
        sofia = sofiaW + sofiaH;
        sofia = sofia * 1.15;
        console.log(Math.trunc(sofia));
    } else {
        sofiaW = (48 - weekends) * 3.0 / 4 + weekends;
        sofiaH = holidays * 2.0 / 3;
        sofia = sofiaW + sofiaH;
        console.log(Math.trunc(sofia));
    }
}

volleyball(["leap", "5", "2"]); // 45
volleyball(["normal", "3", "2"]); // 38
volleyball(["leap", "2", "3"]); // 43
volleyball(["normal", "11", "6"]); // 44
volleyball(["leap", "0", "1"]); // 41
volleyball(["normal", "6", "13"]); // 43



