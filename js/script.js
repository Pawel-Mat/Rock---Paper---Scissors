function getMoveName(moveId){
	
	if(moveId == 1) {
		return 'kamień';
	} else if (moveId == 2) {
		return 'papier';
	} else if (moveId == 3) {
		return 'nożyce';
	} else {
		return 'nieznany ruch'
	}
}
function displayResult(argComputerMove, argPlayerMove){
	if(argComputerMove === argPlayerMove){
		printMessage('Remis!');
	} else if (argComputerMove === 'kamień' && argPlayerMove === 'papier'){
		printMessage('Ty wygrywasz!');	
	}	else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrałeś..');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrałeś..');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrałeś..');
	} else if (argPlayerMove == 'nieznany ruch'){
		printMessage('Wybierz liczbę 1, 2 lub 3');
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: '+ computerMove );
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove);


