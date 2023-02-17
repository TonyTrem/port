// refactor the code

// get the elements
const sketchPad = document.querySelector('#sketch-pad')

// add event listener to the slider        
const slider = document.querySelector('input[type="range"]');
slider.addEventListener('input', function() {
    deleteGrid();
    createGrid(this.value);
    draw();
})

// delete the grid
function deleteGrid() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

// draw on the grid when mouseover 
function draw() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.addEventListener('mouseover', function() {
            sketchBox.style.backgroundColor = 'black';
        })
    })
}

// create grid
function createGrid(boxNumber) {
    for (let x = 0; x < boxNumber; x++) {
        for (let y = 0; y < boxNumber; y++){
            const sketchBox = document.createElement('div');
            sketchBox.id = `box-${x}-${y}`;
            sketchBox.className = "sketch-box"
            sketchBox.style.minHeight = `${(450 / boxNumber)}px`;
            sketchBox.style.minWidth = `${(450 / boxNumber)}px`;
            sketchPad.appendChild(sketchBox);
        }
    }
}

// iterate thru the grind and change the background color to white
function clearGrid() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.style.backgroundColor = 'white';
    })
}

// add event listener to the clear button
const clearBtn = document.querySelector('.clearbtn button');
clearBtn.addEventListener('click', function() {
    clearGrid();
})

// add event listener to the random button
const colorBtn = document.querySelector('.colorbtn button');
colorBtn.addEventListener('click', function() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.addEventListener('mouseover', function() {
            sketchBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        })
    })
})

// add event listener to the color picker and change the background color of the grid
const colorPicker = document.querySelector('#primary_color');
colorPicker.addEventListener('change', function() {
    const sketchBoxes = document.querySelectorAll



// get the elements
const sketchPad = document.querySelector('#sketch-pad')

// add event listener to the slider        
const slider = document.querySelector('input[type="range"]');
slider.addEventListener('input', function() {
    deleteGrid();
    createGrid(this.value);
    draw();
})

// delete the grid
function deleteGrid() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

// draw on the grid when mouseover 
function draw() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.addEventListener('mouseover', function() {
            sketchBox.style.backgroundColor = 'black';
        })
    })
}

// create grid
function createGrid(boxNumber) {
    for (let x = 0; x < boxNumber; x++) {
        for (let y = 0; y < boxNumber; y++){
            const sketchBox = document.createElement('div');
            sketchBox.id = `box-${x}-${y}`;
            sketchBox.className = "sketch-box"
            sketchBox.style.minHeight = `${(450 / boxNumber)}px`;
            sketchBox.style.minWidth = `${(450 / boxNumber)}px`;
            sketchPad.appendChild(sketchBox);
        }
    }
}

// iterate thru the grind and change the background color to white
function clearGrid() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.style.backgroundColor = 'white';
    })
}

// add event listener to the clear button
const clearBtn = document.querySelector('.clearbtn button');
clearBtn.addEventListener('click', function() {
    clearGrid();
})

// add event listener to the random button
const colorBtn = document.querySelector('.colorbtn button');
colorBtn.addEventListener('click', function() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.addEventListener('mouseover', function() {
            sketchBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        })
    })
})

// add event listener to the color picker and change the background color of the grid
const colorPicker = document.querySelector('#primary_color');
colorPicker.addEventListener('change', function() {
    const sketchBoxes = document.querySelectorAll('.sketch-box');
    sketchBoxes.forEach(sketchBox => {
        sketchBox.addEventListener('mouseover', function() {
            sketchBox.style.backgroundColor = colorPicker.value;
        })
    })
})


// call the function
createGrid(10);
draw();