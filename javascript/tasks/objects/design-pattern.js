const playerOneName = 'Mario';
const playerTwoName = 'Luigi';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

const playerOne = {
    name: 'Mario',
    marker: 'X'
}

const playerTwo = {
    name: 'Luigi',
    marker: 'O'
}

function printName(player) {
    console.log(player.name);
}

printName(playerOne);
printName(playerTwo);