//  Generate random number between 1 and 20
const generateRandomNumber = function () {
     return Math.trunc(Math.random() * 20) + 1;
};

// This function display message accordingly
const displayMessage = function (message) {
     document.querySelector('.message').textContent = message;
};

// This function reset the state of game
const resetTheGame = function () {
     /* resetting the game condition:
     set the default score to 20
     generate the random secret number
     display the default message 'start guesssing'
     reset the .score class to default value of 20
     reset the .guess class back to empty
     reset the .number class back to ? mark
     reset background color of <body> back to black */
     score = 20;
     secretNumber = generateRandomNumber();
     displayMessage('Start guessing...');
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '❓';
     document.querySelector('.guess').value = '';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('body').style.backgroundColor = '#222';
};

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

// click the 'check'  button and execute the anonymous call back func
document.querySelector('.check').addEventListener('click', function () {
     //grab the value from input and cast it into Number from String
     const guess = Number(document.querySelector('input').value);

     // if variable guess < 0, guess === 0, guess > 20, then display
     if (!guess || guess < 0 || guess > 20) {
          displayMessage('🛑Invalid Input !');

          /*
      when guess wins, i.e. guess equals random generated number then:
     - display proper message
     - make <input> equals random generated number
     - change background to green
     - increase the width of the .number     
     */
     } else if (guess === secretNumber) {
          displayMessage('🎊Correct Guess!');
          document.querySelector('.number').textContent = secretNumber;
          document.querySelector('body').style.backgroundColor = 'rgb(76, 121, 76)';
          document.querySelector('.number').style.width = '25rem';

          //if the current score is greater than highscore, then highscore = currentscore
          if (score > highscore) {
               highscore = score;

               //dispay the updated highscore on page with element of class .highscore
               document.querySelector('.highscore').textContent = highscore;
          }
     }
     // if guess does not win, i.e. guess is not equal to generated number
     else if (guess !== secretNumber) {
          /* 
          if current score is greater than 1 then:
          - if guess is > generated number then print 'too high guess' else too low guess
             and decrease the score by 1
             display the score
          */
          if (score > 1) {
               displayMessage(guess > secretNumber ? '⏫Too High Guess' : '⏬Too Low Guess');
               score--;
               document.querySelector('.score').textContent = score;
          }
          //if current score is not greater than 1, then you lose
          //display score class element to 0
          else {
               displayMessage('👎 You Loose');
               document.querySelector('.score').textContent = 0;
          }
     }
});

/*  when player clicks the "Play Again !" button then reset the game
      1) select the element which has class 'again',
     2) attach eventhandler of click
     3)event handler execute the 'resetTheGame()'
*/
document.querySelector('.again').addEventListener('click', function () {
     resetTheGame();
});
