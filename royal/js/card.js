const burgerButton = document.querySelector('.b-header__burger-button');
const burgerMenu = document.querySelector('.b-nav-1350');

const toggleBurgerMenu = () => {
    burgerMenu.classList.toggle('burgerMenuOpen');
}

burgerButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleBurgerMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
    let its_burgerButton = target == burgerButton;
    let burgerMenu_is_open = burgerMenu.classList.contains('burgerMenuOpen');

    if (!its_burgerMenu && !its_burgerButton && burgerMenu_is_open) {
      toggleBurgerMenu();
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$( '.lightzoom' ).lightzoom({
    speed:                 400,   // скорость появления
    imgPadding:            10,    // значение отступа у изображения
    overlayOpacity:        '0.5', // прозрачность фона (от 0 до 1)
    viewTitle:             false, // true, если надо показывать подпись к изобажению
    isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
    isWindowClickClosing:  false, // true, если надо закрывать окно при клике по любой области
    isEscClosing:          true, // true, если надо закрывать окно при нажатии на кнопку Esc
    boxClass:              '',    // позволяет задавать класс окну обертке (с версии 1.1.0)
    overlayColor:          '',    // позволяет задавать цвет фону (с версии 1.1.0)
    titleColor:            '',    // позволяет задавать цвет подписи (с версии 1.1.0)
});

const popAppButton = document.querySelector('.pop-app-button');
const popApp = document.querySelector('.b-pop-app');
const popAppClose = document.querySelector('.b-pop-app__close');

const togglePop = () => {
  popApp.classList.toggle('detailedOpen');
}

popAppButton.addEventListener('click', e => {
    e.stopPropagation();
    togglePop();
});

popAppClose.addEventListener('click', e => {
  e.stopPropagation();
  togglePop();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_popApp = target == popApp || popApp.contains(target);
    let its_popAppButton = target == popAppButton;
    let popApp_is_open = popApp.classList.contains('detailedOpen');

    if (!its_popApp && !its_popAppButton && popApp_is_open) {
        togglePop();
    }
})