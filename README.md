# Liri

For legal reasons, NOT a Siri Clone

## How it's Made

- The mentioned are the commands that can be entered in the app

- Search For a Song

```javascript
  spotify
    .search({ type: "track", query: input, limit: 5 })

    .then(function(data) {
      let song = data.tracks.items...}
```

- Search for a Movie

```javascript
 axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=*********=" + input)
    .then(function(response) {....}
```

- Search for a Concert Venue

```javascript
  axios
    .get(
      `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp&date=upcoming`
    )
    .then(function(response) {
      let newEvent = response.data;

```

- Do Whatever It Says....

```javascript
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
 .......
    } else {
      spotifySearch("I Want it That Way");
    }
  });
}
```

- Querys API's based on commands passed into the command line

- Returns a response

```javascript
.then(return (response))
```

- That response is stored in variables and returned to the user in the form of a Console.log

- If nothing is stored in the command or input arguements, the application will throw an error, stating that the User has made an error and need to check their spelling

```javascript
   if (error) {
      console.log("Oops ... there is an error.");
```

## Technologies Used

- JavaScript
- Node.js
- Inquirer
- Spotify API
- Concert API
- MoviesDB

## Difficulties and Learning

- The difficulties and learning I had to with this project, was to get each API working and only firing when it was called, if an error was present it would break the app, but after cleaning up my code it became clear and worked smoothly as intended.
