'use strict';

const videoMaskMain = document.querySelector('.b-video__main-mask');
videoMaskMain.addEventListener('click', function () {
    videoMaskMain.style.zIndex = '-1';
})

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});