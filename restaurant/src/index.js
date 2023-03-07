import { loadPage } from './loadPage.js';
import { loadContent } from './loadPage.js';
import { loadMenu } from './loadPage.js';
import { loadBackground } from './loadPage.js';

import './style.css'; // css



document.addEventListener('DOMContentLoaded', function() {
    console.log('index.js loaded');
    loadPage();
    loadContent();
    loadBackground();

    // add event listener to object with id 'home-link'
    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', function() {
        loadContent();
    }
    );

    // add event listener to object with id 'menu-link'
    const menuLink = document.getElementById('menu-link');
    menuLink.addEventListener('click', function() {
        loadMenu();
    }
    );
});
