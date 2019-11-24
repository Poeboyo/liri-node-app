const axios = require("axios");

function movieSearch(input) {
  if (input === "") {
    input = "Mr.Nobody";
  }
  axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=a3207054&t=" + input)
    .then(function(response) {
      let movieTitle = response.data.Title;
      let movieYear = response.data.Year;
      let movieRatingImdb = response.data.Ratings[0].Value;
      // let rottenTomaotoes = response.dataRatings[1].Value;
      let movieProduceCountry = response.data.Production; //If return underined make witty message
      let movieLang = response.data.Language;
      let plotThiccens = response.data.Plot;
      let actors = response.data.Actors;
      console.log(
        `\n---------------------------
          \nMovie Title: ${movieTitle}
          \nYear: ${movieYear}
          \nIMDB Rating: ${movieRatingImdb}
          \nCountry: ${movieProduceCountry}
          \nLanguage: ${movieLang}
          \nPlot: ${plotThiccens}
          \nActors/Actresses: ${actors}
          \n---------------------------`
      );
    });
}

module.exports = movieSearch;
