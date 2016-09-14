var options = ['dodgers','chargers','galaxy', 'lakers', 'clippers', 'angels', 'rams', 'kings', 'ducks', 'trojans', 'bruins'];

var computerGuess = options[Math.floor(Math.random()*options.length)];

module.exports = computerGuess;