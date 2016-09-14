var correctWord = require('./word.js');
var computerGuess = require('./game.js');
var userGuess;
var correctGuesses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var inquirer = require('inquirer');

console.log(lettersGuessed);

function chooseLetter() {
	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter",
			name: "letter"
		},
	]).then(function (user) {
		console.log(JSON.stringify(user, null, 2));
		if (user.letter != ""){
			userGuess = user.letter;
			validateGuess();
		}
		else {
			console.log("That's okay, come again when you are more sure.");
		}
	});
};

function validateGuess() {
	for (i = 0; i < lettersGuessed.length; i++) {
		if (userGuess === lettersGuessed[i]) {
			play();
		}
	}
	if (userGuess.length > 1) {
		play();
	}
	else {
		checkGuess();
	}
};

function checkGuess() {
	for (i = 0; i < computerGuess.length; i++) {
		if (userGuess === computerGuess[i]) {
			correctWord.splice(i, 1, userGuess);
			correctGuesses++;
		}
	}
	guessesLeft--;
	lettersGuessed.push(userGuess);
	console.log(correctWord);
	console.log("Guesses Left: " + guessesLeft);
	console.log("Letters Guessed: " + lettersGuessed);

	play();
};

function isFinished() {
	return (correctGuesses === computerGuess.length);
};

function play() {
	if (isFinished()) {
		console.log("Finished!");
		complete();
	}
	else if (guessesLeft <= 0) {
		console.log("You lose");
		complete();
	}
	else {
		chooseLetter();
	}
};

function complete() {
	console.log(correctWord);
};

play();