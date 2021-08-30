function figuresArea(input) {
    let figure = input[0];
    if (figure == "square") {
        let side = Number(input[1]);
        let squareArea = Math.pow(side, 2);
        console.log(squareArea.toFixed(3));
    } else if (figure == "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        let rectangleArea = side1 * side2;
        console.log(rectangleArea.toFixed(3));
    } else if (figure == "circle") {
        let radius = Number(input[1]);
        let circleArea = Math.PI * Math.pow(radius, 2);
        console.log(circleArea.toFixed(3));
    } else if (figure == "triangle") {
        let side1 = Number(input[1]);
        let height = Number(input[2]);
        let triangleArea = (side1 * height) / 2;
        console.log(triangleArea.toFixed(3));
    }
}

figuresArea(["square", "5"]);   // 25.000
figuresArea(["rectangle", "7", "2.5"]);   // 17.500
figuresArea(["circle", "6"]);    // 113.097
figuresArea(["triangle", "4.5", "20"]);   // 45.000
