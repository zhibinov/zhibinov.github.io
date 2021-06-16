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
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
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
        992: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const siteBox1 = document.querySelector('.b-site__box1');
const siteBox2 = document.querySelector('.b-site__box2');
const siteBox3 = document.querySelector('.b-site__box3');
const siteLink2 = document.querySelector('.b-site__link2');
const siteLink3 = document.querySelector('.b-site__link3');
const siteLinkContacts = document.querySelector('.b-site__link-contacts');

siteLink2.addEventListener('click', function (){
    siteBox2.classList.add('display_grid_flex')
    siteLink2.style.display = 'none';
    siteLink3.style.display = 'flex';
    siteBox1.classList.toggle('b-site__box_mb90')
    siteBox2.classList.toggle('b-site__box_mb90')
})

siteLink3.addEventListener('click', function (){
    siteBox3.classList.add('display_grid_flex')
    siteLink3.style.display = 'none';
    siteLinkContacts.style.display = 'flex';
    siteBox2.classList.toggle('b-site__box_mb90')
    siteBox3.classList.toggle('b-site__box_mb90')
})

const burgerButton = document.querySelector('.b-nav__burger-button');
const burgerMenu = document.querySelector('.b-nav__burger-menu');
const burgerClose = document.querySelector('.b-nav__burger-close');

burgerButton.addEventListener('click', function (){
    burgerMenu.style.display = 'block';
    burgerMenu.classList.add('animate__rotateInDownRight');
    burgerMenu.classList.remove('animate__rotateOutUpRight');
})

burgerClose.addEventListener('click', function (){
    burgerMenu.classList.remove('animate__rotateInDownRight');
    burgerMenu.classList.add('animate__rotateOutUpRight');
    // burgerMenu.style.display = 'none';
})