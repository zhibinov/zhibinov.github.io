'use strict';

const burgerButton = document.querySelector('.b-header__burger');
const burgerMenu = document.querySelector('.b-header__burger-menu');
const burgerClose = document.querySelector('.b-header__close-button');

function openMenu() {
    if (burgerMenu.classList.contains("open")) {
        burgerMenu.classList.remove("open");
    } else {
        burgerMenu.classList.add("open");
        burgerMenu.classList.add("shadow");
    }
}

function closeMenu() {
    burgerMenu.classList.remove("open");
    burgerMenu.classList.remove("shadow");
}