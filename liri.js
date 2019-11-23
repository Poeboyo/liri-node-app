require("dotenv").config();
var fs = require("fs");
const keys = require("./keys.js");
const axios = require("axios");
const Spotify = require("node-spotify-api");

let command = process.argv[2];

let input = process.argv.slice(3).join("+");

switch (command) {
  case "concert-this":
    // axios
    //   .get(
    //     `https://rest.bandsintown.com/artists/${input}/events?app_id=123456789&date=upcoming`
    //   )
    //   .then(function(response) {
    //     console.log(response);
    //   });
    // * Name of the venue

    // * Venue location

    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
    break;

  case "spotify-this-song":
    const spotify = new Spotify(keys.spotify);

    spotify
      .search({ type: "track", query: input, limit: 5 })

      .then(function(data) {
        let song = data.tracks.items;
        for (let i = 0; i < song.length; i++) {
          let tracks = song[i];

          console.log(`                 
          \n Artist: ${tracks.artists[0].name}
          \n Track: ${tracks.name}
          \n Album: ${tracks.album.name}
          \n Preview Link: ${tracks.preview_url}
          \n-=-=-=-==-=-=-=-=-=-=-=-=-=-=-==-=- `);
        }
      });
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
