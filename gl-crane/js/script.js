'use strict';

const burgerButton = document.querySelector('.b-header__burger');
const burgerMenu = document.querySelector('.b-header__burger-menu');
const burgerClose = document.querySelector('.b-header__close-button');
const body = document.querySelector('body');

const toggleMenu = () => {
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.toggle("shadow");
    body.classList.toggle("scroll");
}

burgerClose.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

burgerButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
    let its_burgerButton = target == burgerButton;
    let burgerMenu_is_open = burgerMenu.classList.contains('open');

    if (!its_burgerMenu && !its_burgerButton && burgerMenu_is_open) {
        toggleMenu();
    }
})

var tel = document.getElementsByClassName('imaskjs__input_tel');
for (var i = 0; i < tel.length; i++) {
    new IMask(tel[i], {
        mask: '+{7} 000 - 000 - 00 - 00',
    });
}