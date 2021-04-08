// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 2;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput= document.querySelector('#guess-input'),
      message= document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max; 

// Play again event listner
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }

});

// Listen for guess-btn
guessBtn.addEventListener('click',function(){

  let guess = parseInt(guessInput.value);

  // Vallidate
  if( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Won
  if(guess === winningNum){
    // Game Over - Won
    gameOver(true,`${winningNum} is correct!`)

  } else {

    if(guessesLeft === 0){
      // Game Over - Lost
      gameOver(false,`Game Over , you lost the correct number was ${winningNum}`)

    } else {

      // Wrong Number / Guess Fails
      guessesLeft -=1 //  -> guessesLeft = guessesLeft - 1

      // Game Continues - answer wrong
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`);
      guessInput.style.borderColor = 'red';
      message.style.color = 'red';
      guessInput.value = '';
    }
  }
});

// Game Over
  function gameOver(won,msg){

    let color;

    won === true ? color = 'green' : color ='red';
    
     // disable the input
     guessInput.disabled = true;
     // Change the color
     guessInput.style.borderColor = color;
    // change the text-color
    message.style.color = color;
     // Set Message
     setMessage(msg);
    
     guessBtn.value = 'Play again';

     guessBtn.className += 'play-again'

  }

  // Get Winning number

  function  getRandomNum(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
  }

// Set Message

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}