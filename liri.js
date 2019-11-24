require("dotenv").config(); //Allows the .env file to be used by the app
const spotifySearch = require("./spotifySearch"); //Modularization for the Spotify Search Function
const movieSearch = require("./movieSearch"); //Modularization for the Movie Search Function
const doWhatItSays = require("./dwis"); //Modularzation for Do What It Says function
let command = process.argv[2]; //Checks the command put in by the user
let input = process.argv.slice(3).join("+"); // Takes in the arguement from user

//Switch case to check command input
switch (command) {
  case "concert-this":
    concertVenue(input);
    break;

  case "spotify-this-song":
    spotifySearch(input);
    break;

  case "movie-this":
    movieSearch(input);
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;

  default:
    console.log("User Error Detected. Check Command Spelling");
}
