import Background from './images/background.jpg'; // background image

function loadPage() {
    const page = document.getElementById('donuts');
    page.innerHTML = `<div id="navbar">
        <div class="navbar">
            <div class="logo">
                <img src="images/logo.png" alt="Dominic's Donuts">
            </div>
            <div class="nav-links">
                <ul>
                    <li><a href="#" id="home-link">Home</a></li>
                    <li><a href="#" id="menu-link">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
        <div id="content">
        
        </div>
        </div>
        <div id="footer">
        <div class="copyright">
            <p>&copy; 2023 Dominic's Donuts</p>
        </div>
        </div>`;
}

function loadContent() {
    console.log('loadContent() called');
    const content = document.getElementById('content');
    content.innerHTML = `<div class="hero">
        <h1>Delicious Donuts</h1>
        <p>Best donuts in town</p>
        <a href="#" class="btn">Order Now</a>
        <div class="hero-image">
            <img src="images/hero-image.png" alt="Dominic's Donuts">
        </div>
        </div>`;
}

function loadMenu() {
    console.log('loadMenu() called');
    const content = document.getElementById('content');
    content.innerHTML = `<div class="menu">
        <div class="menu-item">
            <div class="menu-image">
                <img src="images/menu-item-1.png" alt="Donut">
            </div>
            <div class="menu-text">
                <h3>Donut</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p class="price">$1.99</p>
            </div>
        </div>`;
}

function loadBackground() {
    let myBackground = new Image();
    myBackground.src = Background;
    document.body.style.backgroundImage = `url(${myBackground.src})`;
}

export { loadPage };
export { loadContent };
export { loadMenu };
export { loadBackground };