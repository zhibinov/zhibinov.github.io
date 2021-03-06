'use strick';

const swiper1 = new Swiper('.slider1', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.pag1',
    },
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 1,
        }
    }
});

const swiper2 = new Swiper('.slider2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.pag2',
    },
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 1,
        }
    }
});

let link = document.querySelectorAll('.link');
let popUp = document.querySelector('.b-pop-up');
let close = document.querySelector('.b-pop-up__close');
link.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'flex';
    });
}
close.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});

const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const answer5 = document.querySelector('.answer5');

const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');

const plus2 = document.querySelector('.plus2');
const plus3 = document.querySelector('.plus3');
const plus4 = document.querySelector('.plus4');
const plus5 = document.querySelector('.plus5');

const minus2 = document.querySelector('.minus2');
const minus3 = document.querySelector('.minus3');
const minus4 = document.querySelector('.minus4');
const minus5 = document.querySelector('.minus5');

button2.addEventListener('click', function (event) {
    answer2.classList.toggle('display_block');
    plus2.classList.toggle('display_block');
    minus2.classList.toggle('display_block');
});

button3.addEventListener('click', function (event) {
    answer3.classList.toggle('display_block');
    plus3.classList.toggle('display_block');
    minus3.classList.toggle('display_block');
});

button4.addEventListener('click', function (event) {
    answer4.classList.toggle('display_block');
    plus4.classList.toggle('display_block');
    minus4.classList.toggle('display_block');
});

button5.addEventListener('click', function (event) {
    answer5.classList.toggle('display_block');
    plus5.classList.toggle('display_block');
    minus5.classList.toggle('display_block');
});

const address1 = document.querySelector('.address1');
const address2 = document.querySelector('.address2');
const address3 = document.querySelector('.address3');
const address4 = document.querySelector('.address4');

const cityButton1 = document.querySelector('.cityButton1');
const cityButton2 = document.querySelector('.cityButton2');
const cityButton3 = document.querySelector('.cityButton3');
const cityButton4 = document.querySelector('.cityButton4');

cityButton1.addEventListener('click', function (event) {
    address1.classList.toggle('display_block');
    address2.classList.remove('display_block');
    address3.classList.remove('display_block');
    address4.classList.remove('display_block');
    cityButton1.classList.toggle('b-city__button_active');
    cityButton2.classList.remove('b-city__button_active');
    cityButton3.classList.remove('b-city__button_active');
    cityButton4.classList.remove('b-city__button_active');
});

cityButton2.addEventListener('click', function (event) {
    address1.classList.remove('display_block');
    address2.classList.toggle('display_block');
    address3.classList.remove('display_block');
    address4.classList.remove('display_block');
    cityButton1.classList.remove('b-city__button_active');
    cityButton2.classList.toggle('b-city__button_active');
    cityButton3.classList.remove('b-city__button_active');
    cityButton4.classList.remove('b-city__button_active');
});

cityButton3.addEventListener('click', function (event) {
    address1.classList.remove('display_block');
    address2.classList.remove('display_block');
    address3.classList.toggle('display_block');
    address4.classList.remove('display_block');
    cityButton1.classList.remove('b-city__button_active');
    cityButton2.classList.remove('b-city__button_active');
    cityButton3.classList.toggle('b-city__button_active');
    cityButton4.classList.remove('b-city__button_active');
});

cityButton4.addEventListener('click', function (event) {
    address1.classList.remove('display_block');
    address2.classList.remove('display_block');
    address3.classList.remove('display_block');
    address4.classList.toggle('display_block');
    cityButton1.classList.remove('b-city__button_active');
    cityButton2.classList.remove('b-city__button_active');
    cityButton3.classList.remove('b-city__button_active');
    cityButton4.classList.toggle('b-city__button_active');
});

const burgerMenu = document.querySelector('.b-header__burger-menu');
const burgerButton = document.querySelector('.b-header__button-burger');

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('display_block');
})