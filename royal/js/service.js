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

