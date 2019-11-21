const moment = require("moment");
const spotify = require("node-spotify-api");
const axios = require("axios");
const keys = require("./keys.js");
// var spotifyApi = new Spotify(keys.spotify);

let command = process.argv[2];

let input = process.argv[3];

switch (command) {
  case "concert-this":
    break;

  case "spotify-this-song":
    break;

  case "movie-this":
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
    break;

  case "do-what-it-says":
    break;

  default:
    console.log("User Error Detected. Check Command Spelling");
}
