/*
 - player must guess a number between a min and max
 - player gets a certain amount of guesses
 - notify player of guesses remaining 
 - notify player of the correct answer if loose
 - let player choose to play again
*/

// game values -- comment on branch test 3

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#main'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'), 
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', rest);

function rest(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
}

// Listen for guess 

guessBtn.addEventListener('click', Add);


function Add(){
    let guess = parseInt(guessInput.value);

    // Check if won 
    if(guess === winningNum ){
        
        gameOver(true, `${winningNum} is correct, YOU WIN :) `);

        } else {
            // Wrong number 
            guessesLeft -= 1;

            if(guessesLeft === 0){
            // Game over - lost
           
            gameOver(false, `YOU LOST :( The corrcet number was ${winningNum}`);
 
            } else {
            // Game continues - answe wrong
                // Tell user it's the wrong number
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

                // Change border color
                guessInput.style.borderColor = 'red';

                // Clear the input
                guessInput.value = '';

            }
        }
    
    // Game over 

    function gameOver(won, msg) {
        let color;
        won === true ? color = 'green' : color ='red';
        
        // Disable input
         guessInput.disabled = true;
        // Change border color 
        guessInput.style.borderColor = color;
        // Color of the message   
        message.style.color = color;
        // Set message 
        setMessage(msg);
        // Play again
        guessBtn.textContent = 'Play Again';
        guessBtn.className = 'play-again';    

    }
    // Set message 
    function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;
    }

}

// Get Winning Number 
 function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}


