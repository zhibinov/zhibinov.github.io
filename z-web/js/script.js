const swiperClients = new Swiper('.swiper-container-clients', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 1,
        }
    }
});
const swiperReviews = new Swiper('.swiper-container_reviews', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
  });