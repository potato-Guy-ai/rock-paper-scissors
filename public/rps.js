let rock, paper, scissors;
rock = document.querySelector('.rock');
rock_0 = rock.textContent;

paper = document.querySelector('.paper');
paper_0 = paper.textContent;

scissors = document.querySelector('.scissors');
scissors_0 = scissors.textContent;

let player_move = document.querySelector('#player-result');
let comp_move = document.querySelector('#comp-result');
let final_result = document.querySelector('#final_result');
let finalScore = document.querySelector('#score');
const resetBtn = document.querySelector('#resetBtn');
let autoplay = document.querySelector('.autoPlayBtn');
//victory message
const win = 'You won!!';
const winBgcolor = '#9FEA76'
const lose = 'You lose';
const loseBgcolor = '#f96060';
const tie = 'Tie';
const tieBgcolor= ' #ffff66';


let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    Ties:0
};
localStorage.setItem('score', JSON.stringify(score));

function changeTheme(){
    const bodyElement = document.body; // Prefer `document.body` for direct access
    if (bodyElement) {
      bodyElement.classList.toggle("dark-theme"); // Apply the theme class
    };
    const container =document.querySelector('.gameContainer')?.classList;
    if (container){
        container.toggle("new-container")
    };
    
    const nav= document.querySelector('#score')?.classList;
    if (nav){
        nav.toggle('scores')
    };
    const nbtn1= document.querySelector('.move')?.classList;
    if (nbtn1){
        nbtn1.toggle('new-move');
    };
    const nbtn2= document.querySelector('.paper')?.classList;
    if (nbtn2){
        nbtn2.toggle('new-move');
    };
    const nbtn3= document.querySelector('.scissors')?.classList;
    if (nbtn3){
        nbtn3.toggle('new-move');
    };
    const result = document.querySelector('#results')?.classList;
    if(result){
        result.toggle('result')
    }
    if (resetBtn){
        resetBtn.classList.toggle('resetbn');
    }
    if (autoplay){
        autoplay.classList.toggle('autoPlaybn');
    }
    const playerBox = document.querySelector('.player').classList;
     if (playerBox){
        playerBox.toggle('changed-player');
    }
    const compBox = document.querySelector('.comp').classList;
    if(compBox){
        compBox.toggle('changed-comp')
    }
    const playerResult = document.querySelector('#player-result').classList;
    if (playerResult){
        playerResult.toggle('dark-result');
    }
    const compResult = document.querySelector('#comp-result').classList;
    if(compResult){
        compResult.toggle('dark-result')
    }
}
function reset() {

    score.wins = 0;
    score.loses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    finalScore.innerHTML = "wins : " + score.wins + " , " + 'Loses : ' + score.loses + ' , ' + 'Ties : ' + score.Ties;
    return score
};

finalScore.innerHTML = "wins : " + score.wins + " , " + 'Loses : ' + score.loses + ' , ' + 'Ties : ' + score.Ties;

function compMove() {
    const randomNumber = Math.floor(Math.random() * 3);
    computerMove = '';
    if (randomNumber === 0) {
        //rock
        computerMove = 'Rock';
    } else if (randomNumber === 1) {
        //paper
        computerMove = 'Paper';
    } else {
        //scissors
        computerMove = 'scissors';
    }
    return computerMove;
};

let isAutoplaying = false;
let intervalId;
 function AutoPlay(){
    if (!isAutoplaying){
        intervalId= setInterval(()=>{
            const playerMove = compMove();
            gameRun(playerMove);
        },1000);
        isAutoplaying = true;

    }    else{
        clearInterval(intervalId);
        isAutoplaying = false;
    }
 }

function gameRun(playerMove) {
    if (playerMove === 'scissors') {
        compMove();
        player_move.innerHTML = 'Scissors';
        comp_move.innerHTML = computerMove;

        if (computerMove === 'Paper') {
            final_result.innerHTML = win;
            final_result.style.color = 'green';
            final_result.style.backgroundColor = winBgcolor;
        } else if (computerMove === 'Rock') {
            final_result.innerHTML = lose;
            final_result.style.color = 'red';
            final_result.style.backgroundColor = loseBgcolor;
        } else {
            final_result.innerHTML = tie;
            final_result.style.color = 'black';
            final_result.style.backgroundColor= tieBgcolor; 
        }
    } else if (playerMove === 'paper') {
        compMove();

        player_move.innerHTML = 'Paper';
        comp_move.innerHTML = computerMove;

        if (computerMove === 'Rock') {
            final_result.innerHTML = win;
            final_result.style.color = 'green';
            final_result.style.backgroundColor = winBgcolor;
        } else if (computerMove === 'Paper') {
            final_result.innerHTML = tie;
            final_result.style.color = 'black';
            final_result.style.backgroundColor= tieBgcolor; 
        } else {
            final_result.innerHTML = lose;
            final_result.style.color = 'red';
            final_result.style.backgroundColor = loseBgcolor;
        }
    } else {
        compMove();
        player_move.innerHTML = 'Rock';
        comp_move.innerHTML = computerMove;


        if (computerMove === 'Rock') {
            final_result.innerHTML = tie;
            final_result.style.color = 'black';
            final_result.style.backgroundColor= tieBgcolor; 
        } else if (computerMove === 'scissors') {
            final_result.innerHTML = win;
            final_result.style.color = 'green';
            final_result.style.backgroundColor = winBgcolor;
        } else {
            final_result.innerHTML = lose;
            final_result.style.color = 'red';
            final_result.style.backgroundColor = loseBgcolor;
        }
    }; if (final_result.textContent === win) {
        score.wins = score.wins + 1;
    } else if (final_result.textContent === lose) {
        score.loses = score.loses + 1;
    } else {
        score.Ties = score.Ties + 1;
    }; 
    
    localStorage.setItem('score', JSON.stringify(score));
    finalScore.innerHTML = "wins : " + score.wins + " , " + 'Loses : ' + score.loses + ' , ' + 'Ties : ' + score.Ties;
}
