// Select the container where you want to add the elements
const container = document.querySelector('#container');

// Create a <p> element with red text
const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!";

// Create an <h3> element with blue text
const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3!";

// Create a <div> element with a black border and pink background color
const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.border = '1px solid black';
blackPinkDiv.style.backgroundColor = 'pink';

// Create an <h1> element that says "I'm in a div"
const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";

// Create a <p> element that says "ME TOO!"
const pInDiv = document.createElement('p');
pInDiv.textContent = 'ME TOO!';

// Append the <h1> and <p> to the <div>
blackPinkDiv.appendChild(h1InDiv);
blackPinkDiv.appendChild(pInDiv);

// Append all the elements to the container
container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(blackPinkDiv);