{
	let computerScore = 0;
	let playerScore = 0;
	const playerHand = document.querySelector('.player-move');
	const computerHand = document.querySelector('.computer-move');
	let game = 3; 

	const chooseGame = () => {
		const normalMode = document.querySelector('.normal');
		const nerdMode = document.querySelector('.nerd');
		const spock = document.querySelector('.play-spock');
		const lizard = document.querySelector('.play-lizard');

		normalMode.addEventListener('click', function () {
			spock.classList.add('hide');
			lizard.classList.add('hide');
			normalMode.classList.add('active');
			nerdMode.classList.remove('active');
			game = 3;
		});
		
		nerdMode.addEventListener('click', function() {
			spock.classList.remove('hide');
			lizard.classList.remove('hide');
			normalMode.classList.remove('active');
			nerdMode.classList.add('active');
			game = 5;
		});
		
		return game;
	}

	chooseGame();

	function playGame(playerInput){
		function getMoveName(moveId){
			switch(moveId) {
				case 1:
					return 'rock';
				case 2:
					return 'paper';
				case 3:
					return 'scissors';
				case 4:
					return 'spock';
				case 5:
					return 'lizard';
				default:
					return 'undefined move';
			}
		}
		
		const updateScore = () => {
			const playerWin = document.querySelector('.player-score p');
			const computerWin = document.querySelector('.computer-score p');
			playerWin.textContent = playerScore;
			computerWin.textContent = computerScore;
		}

		const winner = document.querySelector('.winner');
		
		function displayResult(argComputerMove, argPlayerMove){
			
			
			if(argComputerMove == argPlayerMove){
				winner.textContent= 'Draw!';
				return;
			} else if (
				argPlayerMove === 'rock' && argComputerMove === 'lizard' || 
				argPlayerMove === 'rock' && argComputerMove === 'scissors' || 
				argPlayerMove === 'spock' && argComputerMove === 'scissors' ||
				argPlayerMove === 'spock' && argComputerMove === 'rock' ||
				argPlayerMove === 'paper' && argComputerMove === 'rock' ||
				argPlayerMove === 'paper' && argComputerMove === 'spock' ||
				argPlayerMove === 'lizard' && argComputerMove === 'paper' ||
				argPlayerMove === 'lizard' && argComputerMove === 'spock' ||
				argPlayerMove === 'scissors' && argComputerMove === 'lizard' ||
				argPlayerMove === 'scissors' && argComputerMove === 'paper'
				){
				winner.textContent= 'You win!';	
				playerScore++;
				updateScore();
				return;
			} else if (
				argComputerMove === 'rock' && argPlayerMove === 'lizard' || 
				argComputerMove === 'rock' && argPlayerMove === 'scissors' || 
				argComputerMove === 'spock' && argPlayerMove === 'scissors' ||
				argComputerMove === 'spock' && argPlayerMove === 'rock' ||
				argComputerMove === 'paper' && argPlayerMove === 'rock' ||
				argComputerMove === 'paper' && argPlayerMove === 'spock' ||
				argComputerMove === 'lizard' && argPlayerMove === 'paper' ||
				argComputerMove === 'lizard' && argPlayerMove === 'spock' ||
				argComputerMove === 'scissors' && argPlayerMove === 'lizard' ||
				argComputerMove === 'scissors' && argPlayerMove === 'paper'
			){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
				return;
			} else if (argPlayerMove === 'undefined move'){
				winner.textContent= 'Choose number 1, 2 or 3';
				return;
			}
			
		}
			
			

			const randomNumber = Math.floor(Math.random() * `${chooseGame()}` + 1);
			if(randomNumber === 1 ) {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-spock');
				computerHand.classList.remove('fa-hand-lizard');
				computerHand.classList.add('fa-hand-rock');
			} else if ( randomNumber === 2) {
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.remove('fa-hand-spock');
				computerHand.classList.remove('fa-hand-lizard');
				computerHand.classList.add('fa-hand-paper');
			} else if (randomNumber === 3) {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.remove('fa-hand-spock');
				computerHand.classList.remove('fa-hand-lizard');
				computerHand.classList.add('fa-hand-peace');
			} else if (randomNumber === 4) {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-lizard');
				computerHand.classList.add('fa-hand-spock');
			} else {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-spock');
				computerHand.classList.add('fa-hand-lizard');
			}
			computerMove = getMoveName(randomNumber);
			playerMove = getMoveName(playerInput);
			

		displayResult(computerMove, playerMove);
	}


	document.querySelector('.play-rock').addEventListener('click', function(){
		playGame(1);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-spock');
				playerHand.classList.remove('fa-hand-lizard');
				playerHand.classList.add('fa-hand-rock');
	});
	document.querySelector('.play-paper').addEventListener('click', function(){
		playGame(2);
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.remove('fa-hand-spock');
				playerHand.classList.remove('fa-hand-lizard');
				playerHand.classList.add('fa-hand-paper');
	});
	document.querySelector('.play-scissors').addEventListener('click', function(){
		playGame(3);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.remove('fa-hand-spock');
				playerHand.classList.remove('fa-hand-lizard');
				playerHand.classList.add('fa-hand-peace');
	});
	document.querySelector('.play-spock').addEventListener('click', function(){
		playGame(4);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-lizard');
				playerHand.classList.add('fa-hand-spock');
	});
	document.querySelector('.play-lizard').addEventListener('click', function(){
		playGame(5);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.remove('fa-hand-spock');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.add('fa-hand-lizard');
	});
}