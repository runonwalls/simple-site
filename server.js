var express = require("express"); //require is a method that comes with node, runs the file it is given.
                                  //require returns the value assigned by the file to module.exports (if any)
var app = express(); //app is now something we can use dot notation with, to use all the methods that come with express
                     //server.js will be responsible for taking orders (incoming traffic) and dispensing things

var port = process.env.PORT || 3000; //tells Express to listen for http requests on port 3000
                                     //(unless we've set a different port in an environmental variable)

var bodyparser = require("body-parser"); //this node module will automatically parse .json for us
app.use(bodyparser.json()); //These two lines tell the express app to use the bodyparser module...
app.use(bodyparser.urlencoded({extended: true})); //...and give it some needed settings.
  //(it needs this to actually be able to decode the data coming in on a request.)


//The first parameter is the route, the second is the function. (Express, like jQuery, has language you'll need to learn.)
// app.get('/', function(req, res){ //req, res means request and response. 
//   res.send("hello, universe"); //Our response is gonna send this string.
// });

//////////////////////////COOL EXPERIMENT ZONE///////////////////////////////
var quotes = ["You say goodbye", "I say Hello", "Hello, Hello",
              "I don't know why you say goodbye, I say Hello",
              "Paul is dead", "Paul is totally not dead, honest"];

var thoughts = [{setup: "Hmm", punchline: "hmmmmmmmm"},
             {setup: "Hmm2", punchline: "hmmmmmmmm2"},
             {setup: "Hmm3", punchline: "hmmmmmmmm3"}];
//__dirname is shorthand for "whatever directory we're in, start here"
//static is a thing that comes with express! Tells it that we'll be serving files from the /app/ folder
app.use(express.static(__dirname + "/app/"));


app.get('/', function(req, res){
  res.sendFile("index.html");
});


app.get('/quote', function(req, res){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.get('/secretbox', function(req, res){
  res.sendFile(__dirname + '/secretbox.jpg'); //Since we didn't specify we were serving files from our native directory
});

app.get('/hesitantthinking', function(req, res){
  var randomIndex = Math.floor(Math.random() * thoughts.length);
  res.json(thoughts[randomIndex]);
});

//"hey app, make us a post route (expect incoming traffic on this route)""
//post routes take two params: a route name, and a function, executed when someone hits that route
//bodyparser gives us access to the req parameter. specifically, request.body, which is the name that we
//sent from the $.post in our front end!
app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstName);
  var lastname = piglatinify(req.body.lastName);
  var piglatined = {firstname: firstname, lastname:
  lastname};
  res.json(piglatined);
});

function piglatinify(word) {
  var wordArray = word.split('');
  var letters;
  var changedWord; //the pig-latinified word we return

  //Is the first letter a vowel?
  var vowelHash = {a: 1, e: 1, i: 1, o: 1, u: 1,
                   A: 1, E: 1, I: 1, O: 1, U: 1};
  //hasOwnProperty is the way you look up a property on an object! It *WILL NOT* go up the prototype chain!
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }
  //This avoids a huge switch-statement or if-checks. Just one hash, and one hash lookup!

  //otherwise, it starts with a consonant
  letters = wordArray.shift();
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;


  return "hello";
}

/////////////////////END OF COOL EXPERIMENT ZONE/////////////////////////////

//This should always be the last thing in your server file. You want to have everything set up and all your elements built
//beforehand! (just like you have everything before your script in an .html file)
app.listen(port, function(){
  console.log('server started on port ' + port);
}); //Starts a server on our local machine at port 3000. That means, to talk to the server, you use the address http://localhost:3000

//Ajax: Short for Asynchronous Javascript and XML
//$.get(url) //send a GET request to the endpoint at url, via ajax