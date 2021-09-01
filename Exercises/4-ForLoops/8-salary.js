function whatSalary(input) {
    let countTabs = Number(input[0]);
    let salary = Number(input[1]);

    let index = 2;
    for (let i = 1; i <= countTabs; i++) {
        let tab = input[index];
        index++;

        switch (tab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}

whatSalary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);
//You have lost your salary.

whatSalary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]);
//500

whatSalary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);
//350