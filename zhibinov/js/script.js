'use strict';

let burgerButton = document.querySelector('.b-header__burger');
let burgerMenu = document.querySelector('.b-header__burger-menu');

burgerButton.addEventListener('click', function (event) {
    burgerMenu.classList.toggle('display_flex');
});

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        993: {
            slidesPerView: 2,
        }
    },
});

let slide1 = document.querySelectorAll('.slide1');
let slide2 = document.querySelectorAll('.slide2');
let slide3 = document.querySelectorAll('.slide3');
let slide4 = document.querySelectorAll('.slide4');
let slide5 = document.querySelectorAll('.slide5');
let slide6 = document.querySelectorAll('.slide6');
let slide7 = document.querySelectorAll('.slide7');
let slide8 = document.querySelectorAll('.slide8');
let zoom1 = document.querySelector('.b-sertificate-zoom1');
let zoom2 = document.querySelector('.b-sertificate-zoom2');
let zoom3 = document.querySelector('.b-sertificate-zoom3');
let zoom4 = document.querySelector('.b-sertificate-zoom4');
let zoom5 = document.querySelector('.b-sertificate-zoom5');
let zoom6 = document.querySelector('.b-sertificate-zoom6');
let zoom7 = document.querySelector('.b-sertificate-zoom7');
let zoom8 = document.querySelector('.b-sertificate-zoom8');

slide1.forEach(element => zoomFunc1(element));
function zoomFunc1(item) {
    item.addEventListener('click', function (event) {
        zoom1.classList.toggle('display_block');
    });
}

slide2.forEach(element => zoomFunc2(element));
function zoomFunc2(item) {
    item.addEventListener('click', function (event) {
        zoom2.classList.toggle('display_block');
    });
}

slide3.forEach(element => zoomFunc3(element));
function zoomFunc3(item) {
    item.addEventListener('click', function (event) {
        zoom3.classList.toggle('display_block');
    });
}

slide4.forEach(element => zoomFunc4(element));
function zoomFunc4(item) {
    item.addEventListener('click', function (event) {
        zoom4.classList.toggle('display_block');
    });
}

slide5.forEach(element => zoomFunc5(element));
function zoomFunc5(item) {
    item.addEventListener('click', function (event) {
        zoom5.classList.toggle('display_block');
    });
}

slide6.forEach(element => zoomFunc6(element));
function zoomFunc6(item) {
    item.addEventListener('click', function (event) {
        zoom6.classList.toggle('display_block');
    });
}
slide7.forEach(element => zoomFunc7(element));
function zoomFunc7(item) {
    item.addEventListener('click', function (event) {
        zoom7.classList.toggle('display_block');
    });
}
slide8.forEach(element => zoomFunc8(element));
function zoomFunc8(item) {
    item.addEventListener('click', function (event) {
        zoom8.classList.toggle('display_block');
    });
}

zoom1.addEventListener('click', function (event) {
    zoom1.classList.remove('display_block');
});

zoom2.addEventListener('click', function (event) {
    zoom2.classList.remove('display_block');
});

zoom3.addEventListener('click', function (event) {
    zoom3.classList.remove('display_block');
});

zoom4.addEventListener('click', function (event) {
    zoom4.classList.remove('display_block');
});

zoom5.addEventListener('click', function (event) {
    zoom5.classList.remove('display_block');
});

zoom6.addEventListener('click', function (event) {
    zoom6.classList.remove('display_block');
});

zoom7.addEventListener('click', function (event) {
    zoom7.classList.remove('display_block');
});

zoom8.addEventListener('click', function (event) {
    zoom8.classList.remove('display_block');
});