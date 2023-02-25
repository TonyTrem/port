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

    console.log("notifications: " + document.getElementById("notifications").innerHTML);
    if (document.getElementById("notifications").innerHTML === "") {
        console.log("calling computerMove()");
        computerMove();
    }
}

function computerMove() {
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];

        if (a === "X" && b === "X" && c === "-") {
            gameBoard[winCondition[2]] = "O";
            document.getElementById(winCondition[2]).innerHTML = "O";
            checkWin();
            return;
        }
        if (a === "X" && b === "-" && c === "X") {
            gameBoard[winCondition[1]] = "O";
            document.getElementById(winCondition[1]).innerHTML = "O";
            checkWin();
            return;
        }
        if (a === "-" && b === "X" && c === "X") {
            gameBoard[winCondition[0]] = "O";
            document.getElementById(winCondition[0]).innerHTML = "O";
            checkWin();
            return;
        }

    }
    let randomMove = Math.floor(Math.random() * 9);
    while (gameBoard[randomMove] !== "-") {
        randomMove = Math.floor(Math.random() * 9);
    }
    gameBoard[randomMove] = "O";
    document.getElementById(randomMove).innerHTML = "O";
    checkWin();
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