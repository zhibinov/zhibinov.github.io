const copyLink = (e) => {
    e.preventDefault();
    let aux = document.createElement('input');
    let url = e.target.getAttribute('href');
    aux.setAttribute('value', url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
};

let link = document.querySelector('.b-link__link');
link.addEventListener('click', copyLink);

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});