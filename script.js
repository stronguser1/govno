/*jshint esversion: 9 */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt("How many movies did you watch?");

        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
        isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies did you watch?");
        }
    },
    showMyDB: () => {
        if(!personalMovieDB.privat) {
            console.log("Object is privat");
        } else {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: (showMyDB) => {
        if (personalMovieDB.privat) {
            privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        personalMovieDB.showMyDB();
    },
    writeYourGenres: () => {
        for (let i = 0; i <= 2; i++) {
            let genre = prompt("Paste");
        }
    personalMovieDB.genres.forEach((a, i) => {
        console.log(`Favourite genre #${i+1} is ${a}`);
    });
    }
};


personalMovieDB.writeYourGenres();





