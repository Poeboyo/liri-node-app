const axios = require("axios");

function concertVenue(input) {
  if (input === "") {
    input = "Imagine Dragons";
  }
  axios
    .get(
      `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp&date=upcoming`
    )
    .then(function(response) {
      let newEvent = response[0];
      console.log(newEvent);
      // console.log(`
      //   \n Venue: ${newEvent.venue}
      //   \n Location: ${newEvent.venue}, ${newEvent.venue}
      //   \n Event Time & Date: ${newEvent.datetime}
      //   \n The concert date/time: ${moment(newEvent[0].datetime).format(
      //     "dddd, MMMM Do YYYY, h:mm:ss a"
      //   )}`);
    });
}
// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")
module.exports = concertVenue;
c;
