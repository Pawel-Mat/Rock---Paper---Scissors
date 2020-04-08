function getMoveName(moveId){
	/*parseInt(moveId);
	console.log('move id to: ', moveId);*/
	if(moveId == 1) {
		return 'kamień';
	} else if (moveId == 2) {
		return 'papier';
	} else if (moveId == 3) {
		return 'nożyce';
	}
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to ' + randomNumber);
console.log(getMoveName);

let computerMove = getMoveName(randomNumber);
console.log(computerMove);

printMessage('Mój ruch to: '+ computerMove );

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: '+ playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

console.log(playerMove);

if( computerMove === 'kamień' && playerMove === 'papier'){
	printMessage('Ty wygrywasz!');
} else if ( computerMove === 'papier' && playerMove === 'nożyce'){
	printMessage('Ty wygrywasz!');
} else if ( computerMove === 'nożyce' && playerMove === 'kamień'){
	printMessage('Ty wygrywasz!');
} else if (computerMove === 'kamień' && playerMove === 'nożyce'){
	printMessage('Przegrałeś..');
} else if (computerMove === 'papier' && playerMove === 'kamień'){
	printMessage('Przegrałeś..');
} else if (computerMove === 'nożyce' && playerMove === 'papier'){
	printMessage('Przegrałeś..');
} else if (playerMove === 'nieznany ruch'){
	printMessage('Wybierz liczbę 1, 2 lub 3');
} else if (computerMove === playerMove){
	printMessage('Remis!');
}
