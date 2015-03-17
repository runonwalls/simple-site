module.exports = function() {

  var thoughts = [ { setup: "Hmm", punchline: "hmmmmmmmm" },
               { setup: "Hmm2", punchline: "hmmmmmmmm2" },
               { setup: "Hmm3", punchline: "hmmmmmmmm3" } ];

  var randomIndex = Math.floor(Math.random() * thoughts.length);
  return thoughts[randomIndex];
};
