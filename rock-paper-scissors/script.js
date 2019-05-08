// UI ELEMENTS
const playerDisplay = document.getElementById('player-play');
const randomDisplay = document.getElementById('random-play');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const playerScoreDisplay = document.getElementById('player-score');
const randomScoreDisplay = document.getElementById('random-score');

const resultDisplay = document.getElementById('result-display');

const rockHandLeft = document.getElementById('rock-hand-left');
const paperHandLeft = document.getElementById('paper-hand-left');
const scissorsHandLeft = document.getElementById('scissors-hand-left');
const rockHandRight = document.getElementById('rock-hand-right');
const paperHandRight = document.getElementById('paper-hand-right');
const scissorsHandRight = document.getElementById('scissors-hand-right');

// DECLARATIONS

let playerScore = 0;
let randomScore = 0;

// EVENT LISTENERS

rockButton.addEventListener('click', selected);
paperButton.addEventListener('click', selected);
scissorsButton.addEventListener('click', selected);

// EVENT HANDLERS

function selected(e) {
	let userPlay = e.currentTarget.id;
	playWith(userPlay);
}

// FUNCTIONS

function playWith(playerOption) {
  let randomOption = getRandomPlay();

	showPlay(playerOption, randomOption);

	if (randomOption == playerOption) {

		showWinner('tie');
		showScore();
	} else if ( (randomOption == 'rock' && playerOption == 'paper') ||
						  (randomOption == 'paper' && playerOption == 'scissors') ||
						  (randomOption == 'scissors' && playerOption == 'rock') ) {

		showWinner('player');
		playerScore++;
		showScore();
	} else {

		showWinner('random');
		randomScore++;
		showScore();
	}
}

function getRandomPlay() {
	const options = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);

	return options[random];
}

function showPlay(playerOption, randomOption) {
	rockHandLeft.classList.remove('hide');
	rockHandRight.classList.remove('hide');

	paperHandLeft.classList.add('hide');
	scissorsHandLeft.classList.add('hide');
	paperHandRight.classList.add('hide');
	scissorsHandRight.classList.add('hide');

	// rockHandLeft.classList.add('bounce');
	// rockHandRight.classList.add('bounce');
	//
	// rockHandLeft.addEventListener('animationend', function() {
	// 	rockHandLeft.classList.remove('bounce');
	// });
	//
	// rockHandRight.addEventListener('animationend', function() {
	// 	rockHandRight.classList.remove('bounce');
	// });

	switch (playerOption) {
		case 'rock':
			break;
		case 'paper':
			rockHandLeft.classList.add('hide');
			paperHandLeft.classList.remove('hide');
			break;
		case 'scissors':
			rockHandLeft.classList.add('hide');
			scissorsHandLeft.classList.remove('hide');
			break;
	}

	switch (randomOption) {
		case 'rock':
			break;
		case 'paper':
			rockHandRight.classList.add('hide');
			paperHandRight.classList.remove('hide');
			break;
		case 'scissors':
			rockHandRight.classList.add('hide');
			scissorsHandRight.classList.remove('hide');
			break;
	}

}

function showScore() {
	playerScoreDisplay.textContent = playerScore;
	randomScoreDisplay.textContent = randomScore;
}

function showWinner(winner) {
	if (winner == 'player') {
		resultDisplay.textContent = 'YOU WIN!';
	} else if (winner == 'tie') {
		resultDisplay.textContent = 'Oh... a tie';
	} else {
		resultDisplay.textContent = '... not a win';
	}
}
