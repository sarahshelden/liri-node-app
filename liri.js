require("dotenv").config();

var keys =require("./keys.js");

var command = process.argv[2];

var Twitter =require("twitter");
var Spotify = require('node-spotify-api');
// var request = require('request'
// );

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
//     var movie = "Mr.Nobody";
//     var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
//
// }
//
// request(queryUrl)
// {
//     if (!movie) {
//         movie = 'Mr Nobody';
//     }


//run functions

    twitter();
    spotify();
    movies();
}

// });


