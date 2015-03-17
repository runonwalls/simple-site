module.exports = function(word) {
  var wordArray = word.split("");
  var letters;
  var changedWord; //the pig-latinified word we return

  //Is the first letter a vowel?
  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1,
                   A: 1, E: 1, I: 1, O: 1, U: 1 };
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }
  //This avoids a huge switch-statement or if-checks. Just one hash, and one hash lookup!

  //If the second character is also a consonant:
  if (!vowelHash.hasOwnProperty(wordArray[1]))
  {
    var firstChar, secondChar, thirdChar, fourthChar;
    //If the third character is a vowel:
    if (vowelHash.hasOwnProperty(wordArray[2])) {
      firstChar = wordArray.shift();
      secondChar = wordArray.shift();
      thirdChar = wordArray.shift();
      return thirdChar.toUpperCase() + wordArray.join("") + "-" + firstChar.toLowerCase() + secondChar + "ay";
    } else { //the second AND third characters are consonants
      firstChar = wordArray.shift();
      secondChar = wordArray.shift();
      thirdChar = wordArray.shift();
      fourthChar = wordArray.shift();
      return fourthChar.toUpperCase() + wordArray.join("") + "-" + firstChar.toLowerCase() + secondChar + thirdChar + "ay";
    }
  }

  //otherwise, go with the default piglatin:
  letters = wordArray.shift();
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;
};
