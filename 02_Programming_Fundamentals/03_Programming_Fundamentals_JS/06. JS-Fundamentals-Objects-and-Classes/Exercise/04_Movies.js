function solve(args) {

  let moviesList = [];

  for (let i = 0; i < args.length; i++) {
    let input = args[i];
    let movie = {};

    if (input.includes("addMovie")) {
      input = input.replace("addMovie ", "|");
      input = input.split("|");

      let movieName = input[1];
      movie.name = movieName;
      //movie.date = "";
      //movie.director = "";
      moviesList.push(movie);

    } else if (input.includes("directedBy")) {
      input = input.replace(" directedBy ", "|").split("|");

      let movieName = input[0];
      let movieDirector = input[1];

      let index = moviesList.findIndex(m => m.name == movieName);
      if (index >= 0) {
        moviesList[index].director = movieDirector;
      }

    } else if (input.includes("onDate")) {
      input = input.replace(" onDate ", "|").split("|");

      let movieName = input[0];
      let movieDate = input[1];

      let index = moviesList.findIndex(m => m.name == movieName);
      if (index >= 0) {
        moviesList[index].date = movieDate;
      }

    }

  } // END For...loop

  moviesList = moviesList.filter(m => m.director != null && m.date != null);

  for (let movie of moviesList) {
    console.log(JSON.stringify(movie));
    //console.log(`{"name":"${movie.name}","date":"${movie.date}","director":"${movie.director}"}`);
  }

}

// solve([
//   'addMovie Fast and Furious',
//   'addMovie Godfather',
//   'Inception directedBy Christopher Nolan',
//   'Godfather directedBy Francis Ford Coppola',
//   'Godfather onDate 29.07.2018',
//   'Fast and Furious onDate 30.07.2018',
//   'Batman onDate 01.08.2018',
//   'Fast and Furious directedBy Rob Cohen'
//   ]
// );