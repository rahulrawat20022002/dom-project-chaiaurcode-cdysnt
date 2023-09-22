let random = parseInt(Math.random() * 100 + 1);
console.log('before new game ' + random);
const subt = document.querySelector('#subt');
const lastResult = document.querySelector('.lastResult');
const guessField = document.querySelector('.guessField');
const lowOrHi = document.querySelector('.lowOrHi');
const prevInput = document.querySelector('.guesses');
const resultParas = document.querySelector('.resultParas');
const para = document.createElement('p');
const gameover = document.createElement('p');

let prev = [];
let input;
let counter = lastResult.textContent;

subt.addEventListener('click', function (e) {
  e.preventDefault();
  input = guessField.value;
  // console.log(input)

  if (isNaN(input)) {
    alert('Enter valid input');
  }
  else if((input==="" || input>100||input<1)){
    alert('Enter valid input');
  }
  else {
    prev.push(input);
    displayprevguess(prev);
    count(lastResult.textContent);
    checkguess(input);
  }
});

function count() {
  // console.log(counter)
  if (counter < 1) {
    subt.disabled = true;

    gameover.classList.add('gameoverField');
    gameover.textContent = 'Limit Reached!!Game Over';
    resultParas.appendChild(gameover);
    endgame();
  } else {
    counter--;
    lastResult.innerHTML = counter;
  }
}

function displayprevguess(guess) {
  guessField.value = '';
  prevInput.innerHTML = `<span>${guess}</span>`;
  // console.log(guest)
}
function checkguess(input) {
  if (random < input) {
    // console.log(random)
    lowOrHi.innerHTML = `<h2>Too high</h2>`;
  } else if (random > input) {
    lowOrHi.innerHTML = 'too low';
  } else {
    lowOrHi.innerHTML = 'Guessed Correctly';
    endgame();
  }
}
function endgame() {
  //
  guessField.value = '';
  guessField.setAttribute('disabled', '');

  para.classList.add('endgame');
  para.textContent = 'Click here for a New Game';
  resultParas.appendChild(para);
  console.log('endgame');
  newgame();
}
function newgame() {
  para.addEventListener('click', function () {
    lowOrHi.innerHTML=""
    console.log('clicked');
    guessField.removeAttribute('disabled');
    // subt.disabled = false;
    random = parseInt(Math.random() * 100 + 1);
    console.log('after new Game ' + random);
    prev = [];
    counter = 10;
    prevInput.innerHTML = prev;
    lastResult.innerHTML = counter;
    gameover.remove();
    para.remove();
  });
}
