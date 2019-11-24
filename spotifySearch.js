const Spotify = require("node-spotify-api");
const keys = require("./keys.js");

function spotifySearch(input) {
  const spotify = new Spotify(keys.spotify);
  if (input === "") {
    input = "I want it that way";
  }

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
}
module.exports = spotifySearch;
