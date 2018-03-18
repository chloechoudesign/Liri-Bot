// GLOBAL VARIABLES
// -------------------------------------------------------------------------------------
var getKeys = require('./key.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

// FUNCTIONS
// -------------------------------------------------------------------------------------

// myTweets
function myTweets(){
  var client = new Twitter({
    consumer_key: getKeys.twitterKeys.consumer_key,
    consumer_secret: getKeys.twitterKeys.consumer_secret,
    access_token_key: getKeys.twitterKeys.access_token_key,
    access_token_secret: getKeys.twitterKeys.access_token_secret
  });

  var params = { screen_name: 'chloechoudesign' };
  
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++){
        // console.log(tweets[i]);
        console.log('@' + tweets[i].created_at);
        console.log(tweets[i].text);
        console.log('----------------------------------------------------------');
      }
    }
  });
}

// spotifyThis
function getArtistNames(artist) {
 return artist.name;
}

function spotifyThis(songName){
  var spotify = new Spotify({
    id: getKeys.spotifyKeys.client_id,
    secret: getKeys.spotifyKeys.client_secret
  });

  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('Song: ' + songs[i].name); 
      console.log('Artist: ' + songs[i].artists.map(getArtistNames)); 
      console.log('Album: ' + songs[i].album.name); 
      console.log('Link: ' + songs[i].preview_url);
      console.log('----------------------------------------------------------');
    }
  });
}

// movieThis
function movieThis(movieName){
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
}

// doWhatItSays
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {
  
    if (error) {
      return console.log(error);
    }
    
    // console.log(data);
    var dataArr = data.split(",");
    
    if (dataArr.length == 2) {
      pick(dataArr[0], dataArr[1]);
    } else {
      pick(dataArr[0]);
    }
  });
};

// MAIN PROCESS
// -------------------------------------------------------------------------------------
var pick = function(caseData, functionData) {
  switch(caseData) {
    case 'my-tweets':
      myTweets();
      break;
    case 'spotify-this-song':
      spotifyThis(functionData);
      break;
    case 'movie-this':
      movieThis(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('Sorry, LIRI does not know that!');
  }
}

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
}

runThis(process.argv[2], process.argv[3]);










