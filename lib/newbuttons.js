module.exports = function() {

  var buttonNames = [ { button1: "Make random string happen!", button2: "Make a random JSON display as a string!" },
              { button1: "I don't feel like telling you what this does.", button2: "This parses a JSON, though." },
              { button1: "STRING!", button2: "JSON!" } ];

  var randomIndex = Math.floor(Math.random() * buttonNames.length);
  return buttonNames[randomIndex];
};
