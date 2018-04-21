require("dotenv").config();

var keys =require("./keys.js");

var command = process.argv[2];

var Twitter =require("twitter");
var Spotify = require('node-spotify-api');
// var request = require('request');

switch(command){
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movies();
        break;
    default:
        console.log("do what it says");
}

//twitter function
//spotify function
// movie function

function twitter (){
    console.log("twitter started");
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'SarahShelden'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

function spotify (){
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track',

        query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songInfo = data.tracks.items;
        console.log("Artist(s): " + songInfo[0].artists[0].name);
        console.log("Song Name: " + songInfo[0].name);
        console.log("Preview Link: " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name);
        console.log("songs are playing");
        console.log(data);
    });


}

//
function movies() {
    //     console.log("Movies");
    //     //same as above, test if search term entered
    //     var searchMovie;
    //     if(secondCommand === undefined){
    //         searchMovie = "Mr. Nobody";
    //     }else{
    //         searchMovie = secondCommand;
    //     };
    //     var url = 'http://www.omdbapi.com/?t=' + searchMovie +'&y=&plot=long&tomatoes=true&r=json&apikey=trilogy';
    //     request(url, function(error, response, body){
    //         if(!error && response.statusCode == 200){
    //             console.log("Title: " + JSON.parse(body)["Title"]);
    //             console.log("Year: " + JSON.parse(body)["Year"]);
    //             console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
    //             console.log("Country: " + JSON.parse(body)["Country"]);
    //             console.log("Language: " + JSON.parse(body)["Language"]);
    //             console.log("Plot: " + JSON.parse(body)["Plot"]);
    //             console.log("Actors: " + JSON.parse(body)["Actors"]);
    //             console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
    //             console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
    //         }
    //     });
    // };

//run functions

    twitter();
    spotify();
    movies();
}

// });


