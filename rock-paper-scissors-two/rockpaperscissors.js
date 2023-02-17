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

const game = new Game();
game.start();