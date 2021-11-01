// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

//const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayContainingDirectors) {
  let allDirectors = arrayContainingDirectors.map(function (oneSingleMovie) {
    return oneSingleMovie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  // let totalScore = 0;
  // movieList.map((oneScore) => (totalScore += oneScore.score));
  // return Number((totalScore / movieList.length).toFixed(2));
  // let totalMovies = movieList.length;
  let totalScore = movieList.reduce((acc, val) => {
    console.log(acc, val.score);
    return (acc += val.score);
  }, 0);
  return parseInt((totalScore / movieList.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieList) {
  let dramaMovies = movieList.filter((movie) => movie.genre.includes('Drama'));
  return dramaMovies / dramaMovies.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function compare(a, b) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
}
function orderByYear(arr) {
  return arr.sort(compare);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function compareTitles(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
function orderAlphabetically(arr) {
  let sorted = arr.sort(compareTitles);
  let twentySorted = [];
  for (let i = 0; i < 20; i++) {
    twentySorted.push(sorted[i]);
  }
  return twentySorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
