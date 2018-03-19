# Meet LIRI!

## Overview
- LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data based on one of four commands:
   * `my-tweets`
   * `spotify-this-song`
   * `movie-this`
   * `do-what-it-says`

## Getting Started
- Clone down repo.
- Run command 'npm install' in Terminal or GitBash
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does
1. `node liri.js my-tweets`
  * Displays user's last 20 tweets and when they were created in terminal/bash window.
<img width="600" alt="ynrnvyuyiq" src="https://user-images.githubusercontent.com/28972721/37572819-1b4dfe92-2ace-11e8-972d-d52e99a28687.gif">

2. `node liri.js spotify-this-song <song name>`
  * Shows the following information about the song in terminal/bash window.
      * Artist(s)
      * The song's name
      * A preview link of the song from Spotify
      * The album that the song is from
<img width="600" alt="htsdms10b8" src="https://user-images.githubusercontent.com/28972721/37572818-1b3b5c06-2ace-11e8-9ac9-26e2998018a9.gif">

3. `node liri.js movie-this <movie name>`
  * Shows the following information in terminal/bash.
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
<img width="600" alt="nbq29amjve" src="https://user-images.githubusercontent.com/28972721/37572820-1b60213a-2ace-11e8-8497-f292c4e6854d.gif">

4. `node liri.js do-what-it-says`
  * Takes the text from random.txt and runs the song "I Want It That Way" through spotify-this-song command.
<img width="600" alt="t2rn7bn2cc" src="https://user-images.githubusercontent.com/28972721/37572817-1aa08bfe-2ace-11e8-8613-4502d75453b7.gif">

## Technologies Used
- Node.js
- Request NPM Package https://www.npmjs.com/package/request
- Twitter NPM Package https://www.npmjs.com/package/twitter
- Spotify NPM Package https://www.npmjs.com/package/node-spotify-api
- OMDb API http://www.omdbapi.com/











