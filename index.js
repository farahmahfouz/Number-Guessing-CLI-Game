const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log('Welcome to the Number Guessing Game!');
console.log("I'm thinking of a number between 1 and 100.");
console.log('Please select the difficulty level:');
console.log('1. Easy (10 chances)');
console.log('2. Medium (5 chances)');
console.log('3. Hard (3 chances)');

rl.question('Enter your choice: ', (choice) => {
  let message = '';
  let chances = 0;

  switch (choice) {
    case '1':
      chances = 10,
      message = 'Great! You have selected the Easy difficulty level.';
      break;
    case '2':
      chances = 5,
      message = 'Great! You have selected the Medium difficulty level.';
      break;
    case '3':
      chances = 3;
      message = message = 'Great! You have selected the Hard difficulty level.';
      break;
    default:
      console.log('Invalic choice');
      rl.close();
      return;
  }

  console.log(message);
  console.log("Let's start the game!");

  let attempts = 0;
  const guessNumber = () => {
    if (attempts < chances) {
      rl.question('Enter your guess: ', (guess) => {
        attempts++;
        if (parseInt(guess) === randomNumber) {
          console.log(
            `Congratulations! You guessed the correct number in ${attempts} attempts.`
          );
          rl.close();
        } else {
          if (parseInt(guess) > randomNumber) {
            console.log('Incorrect! The number is less than ' + guess + '.');
          } else {
            console.log('Incorrect! The number is greater than ' + guess + '.');
          }
          guessNumber();
        }
      });
    } else {
      console.log(
        `Sorry! You've run out of chances. The correct number was ${randomNumber}.`
      );
      rl.close();
    }
  };
  guessNumber();
});
