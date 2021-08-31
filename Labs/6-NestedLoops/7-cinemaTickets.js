function cinemaTickets(input) {
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let allTickets = 0;

    for (i = 0; i <= input.length; i++) {

        if (input[i] == "Finish" || input[i] == "End") {
            break;
        }

        let movie = input[i];
        i++;
        let freeSeats = Number(input[i]);
        i++;
        let nowTickets = 0

        while (input[i] != "End" && input[i] != "Finish") {
            nowTickets++;
            allTickets++;
            switch (input[i]) {
                case "student":
                    studentTickets += 1;
                    break;
                case "standard":
                    standartTickets += 1;
                    break;
                case "kid":
                    kidsTickets += 1;
                    break;
            }

            if (nowTickets == freeSeats) {
                break;
            }
            i++;
        }
        console.log(`${movie} - ${((nowTickets / freeSeats) * 100).toFixed(2)}% full.`);
    }

    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((studentTickets / allTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / allTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / allTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
// Taxi - 60.00% full.
// Scary Movie - 100.00% full.
// Total tickets: 12
// 66.67% student tickets.
// 25.00% standard tickets.
// 8.33% kids tickets.

cinemaTickets(["The Matrix", "20", "student", "standard",
    "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile",
    "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus",
    "3", "standard", "standard", "standard", "Finish"]);
// The Matrix - 40.00% full.
// The Green Mile - 35.29% full.
// Amadeus - 100.00% full.
// Total tickets: 17
// 41.18% student tickets.
// 47.06% standard tickets.
// 11.76% kids tickets.