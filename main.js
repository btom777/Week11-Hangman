var correctWord = require('./word.js');
var computerGuess = require('./game.js');
var userGuess;
var correctGuesses = 0;
var guesses = 0;
var lettersGuessed = [];
var inquirer = require('inquirer');

function checkGuess() {
	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter",
			name: "letter"
		},
	]).then(function (user) {
		console.log(JSON.stringify(user, null, 2));
		if (user.input != ""){
			guesses++;
			userGuess = user.letter;
			lettersGuessed.push(user.letter);
			checkGuess();
		}
		else {
			console.log("That's okay, come again when you are more sure.");
		}
	});

	for (i = 0; i < computerGuess.length; i++) {
		if (userGuess === computerGuess[i]) {
			correctWord.splice(i, 1, userGuess);
			correctGuesses++;
			console.log(correctWord);
			console.log("Correct Guesses: " + correctGuesses);
			console.log("# of guesses made: " + guesses);
			console.log("Letters Guessed: " + lettersGuessed);
		}
		else {
			guesses++;
			console.log(correctWord);
			console.log("Correct Guesses: " + correctGuesses);
			console.log("# of guesses made: " + guesses);
			console.log("Letters Guessed: " + lettersGuessed);
		}
	}
};

function isFinished() {
	return (correctGuesses === computerGuess.length);
};

function play() {
	if (isFinished()) {
		console.log("Finished!");
		complete();
	}
	else {
		checkGuess();
	}
};

function complete() {
	console.log(correctWord);
}

play();



// Create a "Prompt" with a series of questions.
