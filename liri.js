require("dotenv").config();

var keys =require("./keys.js");

var command = process.argv[2];

var Twitter =require("twitter");
var Spotify = require('node-spotify-api');

switch(command){
    case "twitter":
        twitter();
        break;
    case "spotify":
        spotify();
        break;
    case "movies":
        movies();
        break;
    default:
        console.log("do what it says");
}

//twitter function
//spotify function
// movie function

function spotify (){
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

    console.log("songs are playing");
}

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

function movies () {
    console.log( "movies are playing")
}


//run functions

twitter()
spotify()


