
var command = process.argv[2];
var getKeys = require('./key.js');
// console.log(getKeys);

if (command === 'my-tweets'){
  myTweets();
} else if (command === 'spotify-this-song'){
  spotifyThis();
} else if (command === 'movie-this'){
  movieThis();
} else if (command === 'do-what-it-says'){
  doWhatItSays();
} else {
  console.log('Not a valid command')
};

function myTweets(){
  
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: getKeys.twitterKeys.consumer_key,
    consumer_secret: getKeys.twitterKeys.consumer_secret,
    access_token_key: getKeys.twitterKeys.access_token_key,
    access_token_secret: getKeys.twitterKeys.access_token_secret
  });

  var params = { count: 20 };
  
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++){
        console.log('* ' + tweets[i].created_at);
        console.log(tweets[i].text);
        console.log('-----------------------------');
      }
    }
  });
} // END FUNCTION MYTWEETS

function spotifyThis(){

  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
    id: getKeys.spotifyKeys.client_id,
    secret: getKeys.spotifyKeys.client_secret
  });

  var nodeArgs = process.argv;
  var songName = '';

  for (var i = 3; i < nodeArgs.length; i++) {
    
    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    } else {
      songName += nodeArgs[i];
    }
  }
  // console.log(songName);

  spotify.search({ type: 'track', limit: 3, query: songName, }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // console.log(data.tracks);
    console.log('Song: ' + data.tracks.items[0].name); 
    console.log('Artist: ' + data.tracks.items[0].artists[0].name); 
    console.log('Album: ' + data.tracks.items[0].album.name); 
    console.log('Link: ' + data.tracks.items[0].external_urls.spotify); 
  });
} // END FUNCTION SPOTIFYTHIS

function movieThis(){

  var request = require('request');

  var nodeArgs = process.argv;
  var movieName = "";

  for (var i = 3; i < nodeArgs.length; i++) {
    
    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    } else {
      movieName += nodeArgs[i];
    }
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  // console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // console.log(JSON.parse(body));
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
} // END FUNCTION MOVIETHIS


function doWhatItSays(){

  var fs = require('fs');

  fs.readFile("random.txt", "utf8", function(error, data) {
  
    if (error) {
      return console.log(error);
    }

    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr);
    console.log(dataArr[0]);
    console.log(dataArr[1]);
  });

}; // END FUNCTION DOWHATITSAYS



// // LIRI, MY-TWEETS
// if (command === 'my-tweets'){

//   var Twitter = require('twitter');

//   var getKeys = require('./key.js');
//   // console.log(getKeys);
  
//   var client = new Twitter({
//     consumer_key: getKeys.twitterKeys.consumer_key,
//     consumer_secret: getKeys.twitterKeys.consumer_secret,
//     access_token_key: getKeys.twitterKeys.access_token_key,
//     access_token_secret: getKeys.twitterKeys.access_token_secret
//   });

//   var params = {
//     count: 20,
//   };
  
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
    
//     if (!error) {

//      for (var i = 0; i < tweets.length; i++){
//         console.log('* ' + tweets[i].created_at);
//         console.log(tweets[i].text);
//         console.log('-----------------------------');
//       }
//     }

//   });
// }; // END TWITTER


// // LIRI, SPOTIFY-THIS-SONG
// if (command === 'spotify-this-song'){

//   var Spotify = require('node-spotify-api');

//   var getKeys = require('./key.js');

//   var spotify = new Spotify({
//     id: getKeys.spotifyKeys.client_id,
//     secret: getKeys.spotifyKeys.client_secret
//   });

  
//   var nodeArgs = process.argv;
  
//   var songName = '';

//   for (var i = 3; i < nodeArgs.length; i++) {
    
//     if (i > 3 && i < nodeArgs.length) {
//       songName = songName + "+" + nodeArgs[i];
//     } else {
//       songName += nodeArgs[i];
//     }
//   }

//   // console.log(songName);

//   spotify.search({ type: 'track', limit: 3, query: songName, }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     // console.log(data.tracks);
//     console.log('Song: ' + data.tracks.items[0].name); 
//     console.log('Artist: ' + data.tracks.items[0].artists[0].name); 
//     console.log('Album: ' + data.tracks.items[0].album.name); 
//     console.log('Link: ' + data.tracks.items[0].external_urls.spotify); 
//   });

// }; // END SPOTIFY


// // LIRI, MOVIE-THIS
// if (command === 'movie-this'){

//   var request = require('request');

//   var nodeArgs = process.argv;
//   // console.log(nodeArgs);
//   var movieName = "";

//   for (var i = 3; i < nodeArgs.length; i++) {
    
//     if (i > 3 && i < nodeArgs.length) {
//       movieName = movieName + "+" + nodeArgs[i];
//     } else {
//       movieName += nodeArgs[i];
//     }
//   }

//   var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
//   // console.log(queryUrl);

//   request(queryUrl, function(error, response, body) {

//     if (!error && response.statusCode === 200) {
//       // console.log(JSON.parse(body));
//       console.log("Title: " + JSON.parse(body).Title);
//       console.log("Release Year: " + JSON.parse(body).Year);
//       console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//       console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//       console.log("Country: " + JSON.parse(body).Country);
//       console.log("Language: " + JSON.parse(body).Language);
//       console.log("Plot: " + JSON.parse(body).Plot);
//       console.log("Actors: " + JSON.parse(body).Actors);
//     }
//   });
// }; // END OMDB








