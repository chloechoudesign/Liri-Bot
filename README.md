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
  ![ynrnvyuyiq](https://user-images.githubusercontent.com/28972721/37572736-b5802b36-2acc-11e8-8574-1d5509945c63.gif)

2. `node liri.js spotify-this-song <song name>`
  * Shows the following information about the song in terminal/bash window.
  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  ![htsdms10b8](https://user-images.githubusercontent.com/28972721/37572738-bb80551a-2acc-11e8-8d4c-2339d413b736.gif)

3. `node liri.js movie-this <movie name>`
  * Shows the following information in terminal/bash.
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  * Rotten Tomatoes Rating.
  * Rotten Tomatoes URL.
  ![nbq29amjve](https://user-images.githubusercontent.com/28972721/37572734-b0239a10-2acc-11e8-930c-950631f13eca.gif)

4. `node liri.js do-what-it-says`
  * Takes the text from random.txt and runs the song "I Want It That Way" through spotify-this-song command.
  ![t2rn7bn2cc](https://user-images.githubusercontent.com/28972721/37572741-c232445e-2acc-11e8-8df4-9e79c6b7ffde.gif)

## Technologies Used
- Node.js
- Request NPM Package https://www.npmjs.com/package/request
- Twitter NPM Package https://www.npmjs.com/package/twitter
- Spotify NPM Package https://www.npmjs.com/package/node-spotify-api
- OMDb API http://www.omdbapi.com/







