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

var tel = document.getElementsByClassName('imaskjs__input_tel');
for (var i = 0; i < tel.length; i++) {
    new IMask(tel[i], {
        mask: '+{7} 000 - 000 - 00 - 00',
    });
}

var tel1 = document.getElementsByClassName('imaskjs__input_tel1');
for (var i = 0; i < tel1.length; i++) {
    new IMask(tel1[i], {
        mask: '+{7} 000 - 000 - 00 - 00',
    });
}