function factoriel(input) {
    // example a=4 => factoriel = 1*2*3*4
    
    let a = Number(input[0]);
    let result = 1;

    for (let i = 2; i <= a; i++) {
        result = result * i;
    }

    console.log(result);
}

factoriel(["4"]);
factoriel(["8"]);