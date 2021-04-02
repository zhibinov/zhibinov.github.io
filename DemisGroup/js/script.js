'use strict';

const buttonVideo = $(".b-main__video");
const containerVideo = $(".b-main__video-modal");

$(buttonVideo).click(function () {
    containerVideo.show();
});

$(document).mouseup(function (e) {
    if (containerVideo.has(e.target).length === 0) {
        containerVideo.hide();
        const leg = containerVideo.attr("src");
        containerVideo.attr("src", leg);
    }
});

const link1 = document.querySelector('#l1');
const link2 = document.querySelector('#l2');
const link3 = document.querySelector('#l3');
const link4 = document.querySelector('#l4');
const link5 = document.querySelector('#l5');

const text1 = document.querySelector('#p1');
const text2 = document.querySelector('#p2');
const text3 = document.querySelector('#p3');
const text4 = document.querySelector('#p4');
const text5 = document.querySelector('#p5');

link1.addEventListener('click', function () {
    text1.style.height = '225px';
    link1.style.display = 'none';
})
link2.addEventListener('click', function () {
    text2.style.height = '225px';
    link2.style.display = 'none';
})
link3.addEventListener('click', function () {
    text3.style.height = '225px';
    link3.style.display = 'none';
})
link4.addEventListener('click', function () {
    text4.style.height = '225px';
    link4.style.display = 'none';
})
link5.addEventListener('click', function () {
    text5.style.height = '225px';
    link5.style.display = 'none';
})

const case1 = $("#c1");
const case2 = $("#c2");
const case3 = $("#c3");
const case4 = $("#c4");

const caseBig1 = $("#cb1");
const caseBig2 = $("#cb2");
const caseBig3 = $("#cb3");
const caseBig4 = $("#cb4");

$(case1).click(function () {
    caseBig1.show();
});
$(case2).click(function () {
    caseBig2.show();
});
$(case3).click(function () {
    caseBig3.show();
});
$(case4).click(function () {
    caseBig4.show();
});

$(document).mouseup(function (e) {
    if (caseBig1.has(e.target).length === 0) {
        caseBig1.hide();
    }
});
$(document).mouseup(function (e) {
    if (caseBig2.has(e.target).length === 0) {
        caseBig2.hide();
    }
});
$(document).mouseup(function (e) {
    if (caseBig3.has(e.target).length === 0) {
        caseBig3.hide();
    }
});
$(document).mouseup(function (e) {
    if (caseBig4.has(e.target).length === 0) {
        caseBig4.hide();
    }
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1056: {
            slidesPerView: 4,
        },
        831: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        }
    },
});