const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

function createGameBoard() {
    document.getElementById("playagain").style.display = "none";
    for (let i = 0; i < gameBoard.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", i);
        card.innerHTML = gameBoard[i];
        document.getElementById("gameboard").appendChild(card);
        addEventListeners();
    }
}

function addEventListeners() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            if (document.getElementById("notifications").innerHTML === "") {
                if (this.innerHTML === "-") {
                    playerMove(this);
                }
            }
       });
    }
}

function playerMove(card) {
    let id = card.getAttribute("id");
    gameBoard[id] = "X";
    card.innerHTML = "X";
    checkWin();
    if (document.getElementById("notifications").innerHTML === "") {
        computerMove();
    }
}

function computerMove() {
    let bestScore = -Infinity;
    let move;
  
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "-") {
            gameBoard[i] = "O";
            let score = minimax(gameBoard, 0, false);
            gameBoard[i] = "-";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
  
    gameBoard[move] = "O";
    document.getElementById(move).innerHTML = "O";
    checkWin();
}
  
function minimax(board, depth, isMaximizingPlayer) {
    let result = checkGameState(board);
  
    if (result !== null) {
        return result;
    }
  
    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "-") {
                board[i] = "O";
                let score = minimax(board, depth + 1, false);
                board[i] = "-";
                bestScore = Math.max(bestScore, score);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "-") {
                board[i] = "X";
                let score = minimax(board, depth + 1, true);
                board[i] = "-";
                bestScore = Math.min(bestScore, score);
            }
        }
        return bestScore;
    }
}
  
function checkGameState(board) {
        for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === "-" || b === "-" || c === "-") {
            continue;
        }
        if (a === b && b === c) {
            if (a === "X") {
                return -1;
            } else {
                return 1;
            }
        }
    }
        let isDraw = true;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "-") {
                isDraw = false;
                break;
            }
        }
        if (isDraw) {
            return 0;
        }
            return null;
}
  

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === "-" || b === "-" || c === "-") {
            continue;
        }
        if (a === b && b === c) {
            let notifications = document.getElementById("notifications");
            notifications.innerHTML = a + " wins!";
            document.getElementById("playagain").style.display = "block";
            return;
        }
    }
    checkDraw();
}

function checkDraw() {
    let draw = true;
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "-") {
            draw = false;
        }
    }
    if (draw) {
        let notifications = document.getElementById("notifications");
        notifications.innerHTML = "Draw!";
        document.getElementById("playagain").style.display = "block";
    }
}

function coinToss() {
    let coin = Math.floor(Math.random() * 2);
    if (coin === 0) {
        return "player";
    } else {
        return "computer";
    }
}

function playAgain() {
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = "-";
        document.getElementById(i).innerHTML = "-";
    }
    document.getElementById("notifications").innerHTML = "";
    document.getElementById("playagain").style.display = "none"; 
    let firstMove = coinToss();
    if (firstMove === "computer") {
        computerMove();
    }
}

function playGame() {
    createGameBoard();
    let firstMove = coinToss();
    if (firstMove === "computer") {
        computerMove();
    }
}

playGame();