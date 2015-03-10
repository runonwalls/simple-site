module.exports = function(word) {
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
};