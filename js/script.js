{
	let computerScore = 0;
	let playerScore = 0;
	const playerHand = document.querySelector('.player-move');
	const computerHand = document.querySelector('.computer-move');
	
	function playGame(playerInput){
		function getMoveName(moveId){
			switch(moveId) {
				case 1:
					return 'rock';
				case 2:
					return 'paper';
				case 3:
					return 'scissors';
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
			} else if (argComputerMove === 'rock' && argPlayerMove === 'paper'){
				winner.textContent= 'You win!';	
				playerScore++;
				updateScore();
				return;
			}	else if (argComputerMove === 'paper' && argPlayerMove === 'scissors'){
				winner.textContent= 'You win!';
				playerScore++;
				updateScore();
			} else if (argComputerMove === 'scissors' && argPlayerMove === 'rock'){
				winner.textContent= 'You win!';
				playerScore++;
				updateScore();
			} else if (argComputerMove === 'rock' && argPlayerMove === 'scissors'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
			} else if (argComputerMove === 'paper' && argPlayerMove === 'rock'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
			} else if (argComputerMove === 'scissors' && argPlayerMove === 'paper'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
			} else if (argPlayerMove === 'undefined move'){
				winner.textContent= 'Choose number 1, 2 or 3';
				return;
			}
			
		}

			const randomNumber = Math.floor(Math.random() * 3 + 1);
			if(randomNumber === 1 ) {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.add('fa-hand-rock');
			} else if ( randomNumber === 2) {
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-paper');
			} else {
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-peace');
			}
			computerMove = getMoveName(randomNumber);
			playerMove = getMoveName(playerInput);
			

		displayResult(computerMove, playerMove);
	}


	document.querySelector('.play-rock').addEventListener('click', function(){
		playGame(1);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.add('fa-hand-rock');
	});
	document.querySelector('.play-paper').addEventListener('click', function(){
		playGame(2);
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-paper');
	});
	document.querySelector('.play-scissors').addEventListener('click', function(){
		playGame(3);
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-peace');
	});
}