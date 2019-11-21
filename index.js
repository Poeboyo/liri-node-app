const moment = require("moment");
const spotify = require("node-spotify-api");
const axios = require("axios");
const keys = require("./keys.js");
// var spotifyApi = new Spotify(keys.spotify);

let command = process.argv[2];

let input = process.argv[(3, process.argv.length)];
console.log(input);

switch (command) {
  case "concert-this":
    break;

  case "spotify-this-song":
    break;

  case "movie-this":
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=a3207054&t=" + input)
      .then(function(response) {
        console.log(`${response.title}`);
      });
    break;

  case "do-what-it-says":
    break;

  default:
    console.log("User Error Detected. Check Command Spelling");
}
