// Dependencies
var express = require('express')
var bodyParser = require('body-parser');

// get a child process
var execFile = require('child_process').execFile;

// EXPRESS framework for this web app
var app = express();
app.use(bodyParser.json());

// display a static webpage from public/index.html
app.use(express.static('public'))

// function to POST a response
app.post('/', function(request, response){

    // parse JSON object request
    // {
    //    "n" : Integer,
    //    "u" : [Integer,Integer,Integer]
    // }
    var obj = request.body;

    // echo something on the log immediately to show we are processing
    console.log( "processing request n="+obj.n );

    // execFile will return immediately but the sleep here simulates
    // something that takes a little while
    execFile("sleep", ["8s"], function (error, stdout, stderr) {

        // This function is still executed once the program terminates...
        var primes = stdout.split("\n").slice(0, -3)
                       .map(function (line) {
                           return parseInt(line);
                       });

        // send response (only when finished)
        response.setHeader('Content-Type', 'application/json');
        response.send('{ "samples": '+obj.n+', "u": "'+obj.u+'" }');
    });
});

// listen on port 3000
app.listen(3000)
