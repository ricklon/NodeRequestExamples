var request = require('request');
var key = "your key";

/*
request('http://api.rottentomatoes.com/api/public/v1.0.json?apikey='+key, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});


request('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='+key, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
*/

request('http://api.rottentomatoes.com/api/public/v1.0/movies/769959054/similar.json?apikey='+key+'&q=night', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    console.log(body.movies[0].title);
    //console.log(body);
  }
});


