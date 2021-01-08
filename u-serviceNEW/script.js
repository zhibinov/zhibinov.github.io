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

let slot1 = document.querySelector('#slot1');
let slot2 = document.querySelector('#slot2');
let slot3 = document.querySelector('#slot3');
let lotteryPopCase = document.querySelector('.b-loterry-pop__case');
let lotteryPopGlass = document.querySelector('.b-loterry-pop__glass');
let lotteryPopFilm = document.querySelector('.b-loterry-pop__film');

$('#btn-example6').click(function () {
    $('#example6 ul').playSpin();
    setTimeout(zopa, 6000);
    function zopa() {
        if (slot1.style.top == '-200px' && slot2.style.top == '0px' && slot3.style.top == '-400px') {
            lotteryPopGlass.style.display = 'block';
        }
        else if (slot1.style.top == '-400px' && slot2.style.top == '-200px' && slot3.style.top == '0px') {
            lotteryPopCase.style.display = 'block';
        }
        else if (slot1.style.top == '0px' && slot2.style.top == '-400px' && slot3.style.top == '-200px') {
            lotteryPopFilm.style.display = 'block';
        }
    }
});

let lotteryClose = document.querySelectorAll('.b-loterry-pop__header-button')
lotteryClose.forEach(element => funcLotteryClose(element));
function funcLotteryClose(item) {
    item.addEventListener('click', function (event) {
        lotteryPopGlass.style.display = 'none';
        lotteryPopCase.style.display = 'none';
        lotteryPopFilm.style.display = 'none';
    });
}


