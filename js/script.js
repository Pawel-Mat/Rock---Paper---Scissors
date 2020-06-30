{
	function playGame(playerInput){
		clearMessages();
		function getMoveName(moveId){
			switch(moveId) {
				case 1:
					return 'kamień';
				case 2:
					return 'papier';
				case 3:
					return 'nożyce';
				default:
					return 'nieznany ruch';
			}
		}
		function displayResult(argComputerMove, argPlayerMove){
			if(argComputerMove == argPlayerMove){
				printMessage('Remis!');
			} else if (argComputerMove === 'kamień' && argPlayerMove === 'papier'){
				printMessage('Ty wygrywasz!');	
			}	else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce'){
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce'){
				printMessage('Przegrałeś..');
			} else if (argComputerMove === 'papier' && argPlayerMove === 'kamień'){
				printMessage('Przegrałeś..');
			} else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier'){
				printMessage('Przegrałeś..');
			} else if (argPlayerMove === 'nieznany ruch'){
				printMessage('Wybierz liczbę 1, 2 lub 3');
			}
		}

		const randomNumber = Math.floor(Math.random() * 3 + 1),
			computerMove = getMoveName(randomNumber),
			playerMove = getMoveName(playerInput);
		printMessage('Mój ruch to: '+ computerMove );
		printMessage('Twój ruch to: ' + playerMove);
		displayResult(computerMove, playerMove);
	}
	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1)
	});
	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2)
	});
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3)
	});
}