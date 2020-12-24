'use strict';

let burger = document.querySelector('.b-burger-box__menu-button');
let nav = document.querySelector('.b-burger__nav');
burger.addEventListener('click', function (event) {
    nav.classList.toggle('b-burger__nav_block');
});