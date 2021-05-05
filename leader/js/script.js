const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 7000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

let closePopUp = document.querySelector('.b-pop-up__close');
let openPopUp = document.querySelectorAll('.open_pop-up');
let popUp = document.querySelector('.b-pop-up');
openPopUp.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'flex';
    });
}
closePopUp.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});