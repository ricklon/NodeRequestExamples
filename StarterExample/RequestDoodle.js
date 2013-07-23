var request = require('request');
var fs = require('fs');

request('http://www.google.com/logos/2013/roswell/static.jpg').pipe(fs.createWriteStream('doodle.png'));
