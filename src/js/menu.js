'use strict';

const menuButton  = document.querySelector('#menuButton');
const burgerMenu  = document.querySelector('#burgerMenu');

menuButton.addEventListener('click', e => {
    burgerMenu.classList.toggle('menu_opened')
    menuButton.style.color = burgerMenu.classList.contains('menu_opened') ? '#111' : 'white';
});