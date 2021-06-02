const swiperReviews = new Swiper('.swiper-container_partners', {
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
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    }
  });
  const burger = document.querySelector('.b-header-mobile__button');
  const burgerMenu = document.querySelector('.b-header-mobile__burger-menu');
  burger.addEventListener('click', function(){
    burgerMenu.classList.toggle('scale1');
    burger.classList.toggle('active');
  })