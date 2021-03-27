var detailsMap = document.querySelectorAll(".b-map__details");

for (i = 0; i < detailsMap.length; i++) {
    detailsMap[i].addEventListener("toggle", accordion);
}

detailsMap[0].setAttribute('open', '');

function accordion(event) {
    if (!event.target.open) return;
    var detailsMap = event.target.parentNode.children;

    for (i = 0; i < detailsMap.length; i++) {
        if (detailsMap[i].tagName != "DETAILS" || !detailsMap[i].hasAttribute('open') || event.target == detailsMap[i]) continue;
        detailsMap[i].removeAttribute("open");
    }
}

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