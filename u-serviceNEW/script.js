'use strict';

let navLink1 = document.querySelector('.b-nav__link_1');
let navOptions1 = document.querySelector('.b-nav__options_1');
let navLink2 = document.querySelector('.b-nav__link_2');
let navOptions2 = document.querySelector('.b-nav__options_2');
let navLink3 = document.querySelector('.b-nav__link_3');
let navOptions3 = document.querySelector('.b-nav__options_3');
let navLink4 = document.querySelector('.b-nav__link_4');
let navOptions4 = document.querySelector('.b-nav__options_4');

navLink1.addEventListener('click', function (event) {
    navOptions1.classList.toggle('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink2.addEventListener('click', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.toggle('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink3.addEventListener('click', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.toggle('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink4.addEventListener('click', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.toggle('b-nav__options_block');
});


let raitingY = document.querySelector('.b-review__raiting-card_y');
let sliderY = document.querySelector('.b-review__slider_y');
let raitingG = document.querySelector('.b-review__raiting-card_g');
let sliderG = document.querySelector('.b-review__slider_g');
let raiting2 = document.querySelector('.b-review__raiting-card_2');
let slider2 = document.querySelector('.b-review__slider_2');
let raitingI = document.querySelector('.b-review__raiting-card_i');
let sliderI = document.querySelector('.b-review__slider_i');

raitingY.addEventListener('click', function (event) {
    sliderY.classList.add('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
});

raitingG.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.add('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
});

raiting2.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.add('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
});

raitingI.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.add('b-review__slider_b');
});

let burger = document.querySelector('.b-header__burger');
let navbar = document.querySelector('.b-nav-box')
burger.addEventListener('click', function (event) {
    navbar.classList.toggle('b-nav__options_block');
});

let close = document.querySelector('.b-pop-up__header-button');
let link = document.querySelectorAll('.link');
let popUp = document.querySelector('.b-pop-up');
link.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'block';
    });
}
close.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});

let lotteryButton = document.querySelector('.b-garanty__lottery-button');
let lotteryPop = document.querySelector('.b-loterry-pop');
let lotteryClose = document.querySelector('.b-loterry-pop__header-button')
lotteryButton.addEventListener('click', function (event) {
    lotteryPop.style.display = 'block';
});
lotteryClose.addEventListener('click', function (event) {
    lotteryPop.style.display = 'none';
});