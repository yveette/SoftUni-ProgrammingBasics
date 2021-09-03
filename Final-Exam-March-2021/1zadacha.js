function zadacha1(input) {
    let paintCount = Number(input[0]);
    let papersCount = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintPrice = (paintCount * 21.50).toFixed(2);
    let papersPrice = (papersCount * 5.20).toFixed(2);

    let glovesCount = Math.ceil(papersCount * 0.35);
    let glovesAll = 0;
    glovesAll = (glovesPrice * glovesCount).toFixed(2);

    let brushCount = Math.floor(0.48 * paintCount);
    let brushAll = 0;
    brushAll = (brushPrice * brushCount).toFixed(2);

    let total = 0;
    total = 0 + paintPrice + papersPrice + glovesAll + brushAll;


    console.log(`This delivery will cost ${(total/15).toFixed(2)} lv.`)
}



function zadacha(input) {
    let paintsCount = Number(input[0]);
    let wallpapersCount = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let glovesCount = wallpapersCount * 0.35;
    glovesCount = Math.ceil(glovesCount);

    let brushCount = paintsCount * 0.48;
    brushCount = Math.floor(brushCount);

    let glovesTotal = glovesCount * glovesPrice;
    let brushTotal = brushCount * brushPrice;
    let paintTotal = paintsCount * 21.50;
    let wallpaperTotal = wallpapersCount * 5.20;

    let total = wallpaperTotal+paintTotal+brushTotal+glovesTotal;

    let delivery = total/15;
    delivery = delivery.toFixed(2);
    console.log(`This delivery will cost ${delivery} lv.`)
}

zadacha(["10","8","2.2","5"])