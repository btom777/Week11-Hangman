var computerGuess = require('./game.js');

var correctWord = [];
	
for (i = 0; i < computerGuess.length; i++) {
	correctWord.push('_');
};

module.exports = correctWord;