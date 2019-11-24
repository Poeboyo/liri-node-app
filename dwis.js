var fs = require("fs");
var spotifySearch = require("./spotifySearch");

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      console.log("Oops ... there is an error.");
    } else {
      spotifySearch("I Want it That Way");
    }
  });
}

module.exports = doWhatItSays;
