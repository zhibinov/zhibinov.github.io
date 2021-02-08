const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1249: {
            slidesPerView: 4,
        },
        870: {
            slidesPerView: 3,
        },
        580: {
            slidesPerView: 2,
        }
    },
});