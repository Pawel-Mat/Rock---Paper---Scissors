{
	let computerScore = 0;
	let playerScore = 0;

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
		const playerHand = document.querySelector('.player-move');
		const computerHand = document.querySelector('.computer-move');
		
		function displayResult(argComputerMove, argPlayerMove){
			
			
			if(argComputerMove == argPlayerMove){
				winner.textContent= 'Draw!';
				return;
			} else if (argComputerMove === 'rock' && argPlayerMove === 'paper'){
				winner.textContent= 'You win!';	
				playerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-paper');
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.add('fa-hand-rock');
				return;
			}	else if (argComputerMove === 'paper' && argPlayerMove === 'scissors'){
				winner.textContent= 'You win!';
				playerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-peace');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-paper');
			} else if (argComputerMove === 'scissors' && argPlayerMove === 'rock'){
				winner.textContent= 'You win!';
				playerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.add('fa-hand-rock');
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-peace');
			} else if (argComputerMove === 'rock' && argPlayerMove === 'scissors'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-peace');
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.add('fa-hand-rock');
			} else if (argComputerMove === 'paper' && argPlayerMove === 'rock'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-paper');
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.add('fa-hand-rock');
				computerHand.classList.remove('fa-hand-peace');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-paper');
			} else if (argComputerMove === 'scissors' && argPlayerMove === 'paper'){
				winner.textContent= 'You loose!';
				computerScore++;
				updateScore();
				playerHand.classList.remove('fa-hand-peace');
				playerHand.classList.remove('fa-hand-rock');
				playerHand.classList.add('fa-hand-paper');
				computerHand.classList.remove('fa-hand-paper');
				computerHand.classList.remove('fa-hand-rock');
				computerHand.classList.add('fa-hand-peace');
			} else if (argPlayerMove === 'undefined move'){
				winner.textContent= 'Choose number 1, 2 or 3';
				return;
			}
			
		}

			const randomNumber = Math.floor(Math.random() * 3 + 1),
			computerMove = getMoveName(randomNumber),
			playerMove = getMoveName(playerInput);
			

		displayResult(computerMove, playerMove);
	}


	document.querySelector('.play-rock').addEventListener('click', function(){
		playGame(1);
		
	});
	document.querySelector('.play-paper').addEventListener('click', function(){
		playGame(2);

	});
	document.querySelector('.play-scissors').addEventListener('click', function(){
		playGame(3);
	});
}