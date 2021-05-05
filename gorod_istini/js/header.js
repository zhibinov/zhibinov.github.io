const burgerButton = document.querySelector('.b-header__burger-button');
const burgerMenu = document.querySelector('.b-burger-menu');

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('display_flex');
})