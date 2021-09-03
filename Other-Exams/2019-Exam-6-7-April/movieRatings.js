function ratingMovies(input) {
    let index = 0;
    let movies = Number(input[index]);
    index++;

    let movie = "";
    let rating = 0;

    let bestMovie = "";
    let bestRating = 0;

    let lowestMovie = "";
    let lowestRating = 0;

    let couterRating = 0;


    for (i = 1; i <= movies; i++) {
        movie = input[index];
        index++;
        rating = Number(input[index]);
        index++;
        couterRating = couterRating + rating;

        if (index == 3) {
            lowestRating = rating;
            lowestMovie = movie;
        }
        if (rating >= bestRating) {
            bestMovie = movie;
            bestRating = rating;
        }

        if (rating < lowestRating) {
            lowestMovie = movie;
            lowestRating = rating;
        }
    }

    let averageRating = (couterRating / movies).toFixed(1);

    console.log(`${bestMovie} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating}`);
}


ratingMovies(["5", "A Star is Born",
    "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
// A Star is Born is with highest 
// rating: 7.8
// Captain Marvel is with lowest rating: 
// 7.1
// Average rating: 7.3

ratingMovies(["3", "Interstellar", "6.0", "Dangal", "8.3", "Green Book", "8.2"]);
// Interstellar is with highest rating:
// 8.5
// Green Book is with lowest rating: 8.2
// Average rating: 8.3