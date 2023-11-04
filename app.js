let randomNumber = parseInt(Math.random() * 100+1);

const submit = document.querySelector("#subt");

let userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".LowOrHi");
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
 submit.addEventListener('click', function(e){
  e.preventDefault();
  const guess = parseInt(userInput.value)
   validateGuess(guess);
 })
}


function validateGuess(guess){
    //validate if value btwn 1 to 100
    if( isNaN(guess)){
      alert('please eneter a valid number')
    }else if( guess<1){
           alert('please enter a valid number')
    }else if(guess>100){
        alert('please eneter a valid number')
    }else if(guess ===""){
           alert('please eneter a valid number')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            dispalyMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //value if its equal to random or not
    if(guess === randomNumber){
        dispalyMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
                dispalyMessage(`Number is Tooo low`)
    }else if(guess > randomNumber){
                dispalyMessage(`Number is Tooo high`)
    }
}

function displayGuess(guess){
 // update array 
 userInput.value = ' ';
 guessSlot.innerHTML += `${guess}  `;
 numGuess++;
 remaning.innerHTML =`${11 - numGuess}`
}

function dispalyMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p)
    playGame =false;
    newGame();
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
   randomNumber = parseInt(Math.random() * 100+1);
   prevGuess =[];
   numGuess =1
   guessSlot.innerHTML = ''
   dispalyMessage('');
   remaning.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame= true;
 })
}

