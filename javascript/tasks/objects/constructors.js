// example of a object constructor
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
    }
}

// example of calling a constructor
const playerOne = new Player('Mario', 'X');
const playerTwo = new Player('Luigi', 'O');

playerOne.sayName(); // Mario
playerTwo.sayName(); // Luigi
