function grade(mark) {
    let test = Number(mark[0]);
    if (test >= 5.50) {
        console.log("Excellent!");
    }
}

grade(["5.50"]);  // Excellent!
grade(["6"]);  // Excellent!
grade(["5"]);  // no output
grade(["5.49"]);  // no output