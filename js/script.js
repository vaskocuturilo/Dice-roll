'use strict';

const sectionPlayerOne = document.querySelector('.player--0');
const sectionPlayerTwo = document.querySelector('.player--1');

const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');

const currentScorePlayerOne = document.getElementById('current--0');
const currentScorePlayerTwo = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnEditPlayerName = document.querySelector('.btn--edit');

let scores, currentScore, activePlayer, playing;

//init
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scorePlayerOne.textContent = 0; 
    scorePlayerTwo.textContent = 0;
    currentScorePlayerOne.textContent = 0;
    currentScorePlayerTwo.textContent = 0;
    
    diceElement.src = `/img/dices.gif`;
    
    sectionPlayerOne.classList.remove('player--winner');
    sectionPlayerTwo.classList.remove('player--winner');
    sectionPlayerOne.classList.add('player--active');
    scorePlayerTwo.classList.remove('player--active');
}

init();

const switcher = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer  = activePlayer === 0 ? 1 : 0;
    sectionPlayerOne.classList.toggle('player--active');
    sectionPlayerTwo.classList.toggle('player--active');
}

btnRoll.addEventListener('click', () => {
    if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    diceElement.classList.remove('hidden');
    diceElement.src = `/img/dice-${dice}.png`;

    if (dice !== 1 ) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
       switcher();
    }
  }
})

btnHold.addEventListener('click', () => {
    if (playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        diceElement.src = `/img/you-win.png`;
    } else {
        switcher();
    }
  }
})

btnNew.addEventListener('click', init);

btnEditPlayerName.addEventListener('click', ()=> {
    const names = [prompt("Please add a name for Player One"), prompt("Please add a name for Player Two")];
    document.querySelector("#name--0").innerHTML = names[0];
    document.querySelector("#name--1").innerHTML = names[1];
})
