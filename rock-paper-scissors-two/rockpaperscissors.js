const playButton = document.getElementById('playbtn');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('container');
const choices = ["rock", "paper", "scissors"];      

const buttons = document.querySelectorAll('.selectionbtn');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultContainer = document.querySelector('#result-container');

let playerScore = 0;
let computerScore = 0;

playButton.addEventListener('click', () => {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
});        

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, getComputerChoice());
        showResult(result);
        updateScores(result);
    });
});
        
function showResult(str) {
    // Remove all child elements from the resultContainer
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    const div = document.createElement('div');
    div.classList.add('result');
    div.textContent = str;

    resultContainer.appendChild(div);    
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
    return choices[random(0, choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (winConditions[playerSelection] === computerSelection) {
        return "You Won!";
    } else {
        return "You Lose!";
    }
}

function updateScores(result) {
    if (result === "You Won!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You Lose!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    if (playerScore === 5) {
        showResult("You won the game!");
        disableButtons();
    } else if (computerScore === 5) {
        showResult("You lost the game!");
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}