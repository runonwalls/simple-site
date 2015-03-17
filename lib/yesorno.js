module.exports = function() {

  var answer = { yesorno: false };
  if (Math.floor(Math.random() * 10) > 5)
  {
    answer.yesorno = true;
  }
  return answer;
};
