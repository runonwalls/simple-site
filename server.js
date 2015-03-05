var express = require("express"); //require is a method that comes with node, runs the file it is given.
                                  //require returns the value assigned by the file to module.exports (if any)
var app = express(); //app is now something we can use dot notation with, to use all the methods that come with express
                     //server.js will be responsible for taking orders (incoming traffic) and dispensing things

var port = process.env.PORT || 3000; //tells Express to listen for http requests on port 3000
                                     //(unless we've set a different port in an environmental variable)

//The first parameter is the route, the second is the function. (Express, like jQuery, has language you'll need to learn.)
app.get('/', function(req, res){ //req, res means request and response. 
  res.send("hello, universe"); //Our response is gonna send this string.
});

//////////////////////////COOL EXPERIMENT ZONE///////////////////////////////
var quotes = ["You say goodbye", "I say Hello", "Hello, Hello",
              "I don't know why you say goodbye, I say Hello",
              "Paul is dead", "Paul is totally not dead, honest"];
app.get('/quote', function(req, res){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

//app.get('/secretbox', function(req, res){
//  res.sendfle('./secretbox.jpg');
//});

var thoughts = [{setup: "Hmm", punchline: "hmmmmmmmm"},
             {setup: "Hmm2", punchline: "hmmmmmmmm2"},
             {setup: "Hmm3", punchline: "hmmmmmmmm3"}];
app.get('/hesitantthinking', function(req, res){
  var randomIndex = Math.floor(Math.random() * thoughts.length);
  res.json(thoughts[randomIndex]);
});
/////////////////////END OF COOL EXPERIMENT ZONE/////////////////////////////

//This should always be the last thing in your server file. You want to have everything set up and all your elements built
//beforehand! (just like you have everything before your script in an .html file)
app.listen(port, function(){
  console.log('server started on port ' + port);
}); //Starts a server on our local machine at port 3000. That means, to talk to the server, you use the address http://localhost:3000

