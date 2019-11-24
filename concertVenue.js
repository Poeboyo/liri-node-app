const axios = require("axios");
const moment = require("moment");

function concertVenue(input) {
  if (input === "") {
    input = "Imagine Dragons";
  }
  axios
    .get(
      `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp&date=upcoming`
    )
    .then(function(response) {
      let newEvent = response.data;

      if (newEvent.venue === undefined) {
        console.log(
          `We Have Found No Concerts Nearby for ${input.split("+")}  :( `
        );
      } else {
        console.log(`
        \n_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
        \n Venue: ${newEvent[0].venue.city}
        \n Location: ${newEvent[0].venue.city}, ${newEvent[0].venue.region}
        \n Event Time & Date: ${newEvent[0].datetime}
        \n Concert Date/Time: ${moment(newEvent[0].venue.datetime).format(
          "dd, MMMM Do YYYY, h:mm:ss a"
        )}\n`);
      }
    });
}
// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")
module.exports = concertVenue;
