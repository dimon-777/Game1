let rl = require('readline-sync');
let continuePlaying = '0';
let wrongInput = false;
let Number1 = null;
let numbers = ['1', '2', '3', '4', '5'];
console.log(`The hardest & not common console game ever. Try to guess PC favorite numbers. The PC knows the following numbers: ${numbers.join(', ')}.`);
do {
	let userNumbers = [
		rl.question('Guess my first number: '),
		rl.question('Guess my second number: ')
	];
	if (numbers.includes(userNumbers[0]) && numbers.includes(userNumbers[1])){
		let opponnentNumbers = [
			numbers[Math.floor(Math.random() * numbers.length)],
			numbers[Math.floor(Math.random() * numbers.length)],
		];
		if (opponnentNumbers === userNumbers) {
			console.log('You are the Nostradamus!!!');
		} else if (opponnentNumbers.includes(userNumbers[0]) || opponnentNumbers.includes(userNumbers[1])) {
      do {
        if (wrongInput) {
          Number1 = rl.question('Wrong data. Write "0" for the first number or "1" for the second one. Enter the digit: ');
        } else {
          Number1 = rl.question('You just guess one number! For the win you need to guess the number. (first(0), second(1)): ');
        }
      } while (Number1 !== '0' && Number1 !== '1' && (wrongInput = true));
      wrongInput = false;
			if (opponnentNumbers.includes(userNumbers[Number1])) {
				console.log('You win!');
			} else {
				console.log(`You lose! My numbers was: ${opponnentNumbers.join(', ')}`);
			}
		} else {
			console.log(`You are the fool! My numbers was: ${opponnentNumbers.join(', ')}`);
    }
    // console.log(`User has ${userNumbers} points, computer has ${opponnentNumbers} points`);
    do {
      if (wrongInput) {
        continuePlaying = rl.question('Wrong data. Write "y" to play again or "n" to exit. Enter the digit: ');
      } else {
        continuePlaying = rl.question('Continue playing? (yes(y), no(n)): ');
      }
    } while (continuePlaying !== 'y' && continuePlaying !== 'n' && (wrongInput = true));
    wrongInput = false;
	} else {
		console.log('Wrong number. Try again.');
	}
} while (continuePlaying === 'y');
console.log('Goodbye! Thanks for playing!');