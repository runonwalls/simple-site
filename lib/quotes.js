module.exports = function() {

  var quotes = [ "You say goodbye", "I say Hello", "Hello, Hello",
              "I don't know why you say goodbye, I say Hello",
              "Paul is dead", "Paul is totally not dead, honest" ];

  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
