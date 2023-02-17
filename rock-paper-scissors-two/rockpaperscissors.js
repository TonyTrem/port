class Game {
  constructor() {
    this.startButton = document.querySelector('#playbtn');
    this.startContainer = document.querySelector('#start-container');
    this.gameContainer = document.querySelector('#container');
    this.selectionButtons = document.querySelectorAll('.selectionbtn');
    this.playerScoreDisplay = document.querySelector('#player-score');
    this.computerScoreDisplay = document.querySelector('#computer-score');
    this.resultContainer = document.querySelector('#result-container');
    this.choices = ["rock", "paper", "scissors"];
    this.winConditions = {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    };
    this.playerScore = 0;
    this.computerScore = 0;
  }

  start() {
    this.startButton.addEventListener('click', () => {
      this.startContainer.style.display = 'none';
      this.gameContainer.style.display = 'flex';
    });

    this.selectionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const result = this.playRound(button.id, this.getComputerChoice());
        this.showResult(result);
        this.updateScores(result);
      });
    });
  }

  playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (this.winConditions[playerSelection] === computerSelection) {
      return "You Won!";
    } else {
      return "You Lose!";
    }
  }

  getComputerChoice() {
    return this.choices[random(0, this.choices.length)];
  }

  showResult(str) {
    while (this.resultContainer.firstChild) {
      this.resultContainer.removeChild(this.resultContainer.firstChild);
    }

    const div = document.createElement('div');
    div.classList.add('result');
    div.textContent = str;

    this.resultContainer.appendChild(div);
  }

  updateScores(result) {
    if (result === "You Won!") {
      this.playerScore++;
      this.playerScoreDisplay.textContent = this.playerScore;
    } else if (result === "You Lose!") {
      this.computerScore++;
      this.computerScoreDisplay.textContent = this.computerScore;
    }

    if (this.playerScore === 5) {
      this.showResult("You won the game!");
      this.disableButtons();
    } else if (this.computerScore === 5) {
      this.showResult("You lost the game!");
      this.disableButtons();
    }
  }

  disableButtons() {
    this.selectionButtons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const container = document.createElement('div');
container.id = 'container';
container.style.display = 'none';

const scoreContainer = document.createElement('div');
scoreContainer.id = 'score-container';

const playerScore = document.createElement('span');
playerScore.id = 'player-score';
playerScore.textContent = '0';

const computerScore = document.createElement('span');
computerScore.id = 'computer-score';
computerScore.textContent = '0';

const scoreList = document.createElement('ul');
const playerListItem = document.createElement('li');
playerListItem.textContent = 'You "';
playerListItem.appendChild(playerScore);
playerListItem.appendChild(document.createTextNode('"'));
const computerListItem = document.createElement('li');
computerListItem.textContent = 'THEM! "';
computerListItem.appendChild(computerScore);
computerListItem.appendChild(document.createTextNode('"'));
scoreList.appendChild(playerListItem);
scoreList.appendChild(computerListItem);

scoreContainer.appendChild(scoreList);

const selectionContainer = document.createElement('div');
selectionContainer.id = 'selection-container';

const rockBtn = document.createElement('button');
rockBtn.classList.add('selectionbtn');
rockBtn.id = 'rock';
rockBtn.textContent = '🪨';

const paperBtn = document.createElement('button');
paperBtn.classList.add('selectionbtn');
paperBtn.id = 'paper';
paperBtn.textContent = '🧻';

const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('selectionbtn');
scissorsBtn.id = 'scissors';
scissorsBtn.textContent = '✂️';

selectionContainer.appendChild(rockBtn);
selectionContainer.appendChild(paperBtn);
selectionContainer.appendChild(scissorsBtn);

const resultContainer = document.createElement('div');
resultContainer.id = 'result-container';

container.appendChild(scoreContainer);
container.appendChild(selectionContainer);
container.appendChild(resultContainer);

const startContainer = document.createElement('div');
startContainer.id = 'start-container';

const startTitle = document.createElement('div');
startTitle.id = 'start-title';

const titleList = document.createElement('ul');
const rockTitle = document.createElement('li');
rockTitle.id = 'title-letter';
rockTitle.textContent = '🪨';
const paperTitle = document.createElement('li');
paperTitle.id = 'title-letter';
paperTitle.textContent = '🧻';
const scissorsTitle = document.createElement('li');
scissorsTitle.id = 'title-letter';
scissorsTitle.textContent = '✂️';
titleList.appendChild(rockTitle);
titleList.appendChild(paperTitle);
titleList.appendChild(scissorsTitle);

startTitle.appendChild(titleList);

const playBtn = document.createElement('button');
playBtn.id = 'playbtn';
playBtn.textContent = 'Play Now!';

startContainer.appendChild(startTitle);
startContainer.appendChild(playBtn);

document.body.appendChild(container);
document.body.appendChild(startContainer);

const game = new Game();
game.start();