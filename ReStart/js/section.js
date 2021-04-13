var detailsNav = document.querySelectorAll(".b-nav-740__details");

for (i = 0; i < detailsNav.length; i++) {
    detailsNav[i].addEventListener("toggle", accordion);
}

function accordion(event) {
    if (!event.target.open) return;
    var detailsNav = event.target.parentNode.children;

    for (i = 0; i < detailsNav.length; i++) {
        if (detailsNav[i].tagName != "DETAILS" || !detailsNav[i].hasAttribute('open') || event.target == detailsNav[i]) continue;
        detailsNav[i].removeAttribute("open");
    }
}

let burgerButton = document.querySelector('.b-top__burger-button');
let closeButton = document.querySelector('.b-burger-menu__close');
let burgerMenu = document.querySelector('.b-burger-menu');

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('display_block');
})

closeButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('display_block');
})

let closePopUp = document.querySelector('.b-pop-up__close');
let openPopUp = document.querySelectorAll('.open_pop-up');
let popUp = document.querySelector('.b-pop-up');
openPopUp.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'block';
    });
}
closePopUp.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});
