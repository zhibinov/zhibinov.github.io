const currency = document.querySelector('.b-header__currency');
const currencyMenu = document.querySelector('.b-header__currency-menu');
const currencyNow = document.querySelector('.b-header__currency-now');
const currencyType = document.querySelectorAll('.b-header__currency-type');

currency.addEventListener('click', function(){
    currencyMenu.classList.toggle('display_flex')
});

currencyType.forEach(element => currencyChoice(element));
function currencyChoice(item) {
    item.addEventListener('click', function (event) {
       let currencyTypeContent = event.target.textContent;
       currencyNow.textContent = currencyTypeContent;
    });
}

const language = document.querySelector('.b-header__language');
const languageMenu = document.querySelector('.b-header__language-menu');
const languageNow = document.querySelector('.b-header__language-now');
const languageImg = document.querySelector('.b-header__language-img')
const languageEng = document.querySelector('.b-header__language-eng');
const languageRus = document.querySelector('.b-header__language-rus');

language.addEventListener('click', function(){
    languageMenu.classList.toggle('display_flex')
});

languageRus.addEventListener('click', function (event) {
    languageImg.src = 'img/rus.svg'
});

languageEng.addEventListener('click', function (event) {
    languageImg.src = 'img/eng.svg'
});

$( function() {
    $( ".b-main__input-cal" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", new Date()); 
} );

$( function() {
    $( ".b-main__input-cal2" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", 2); 
} );

var elements = document.getElementsByClassName('b-main__time');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '00:00',
  });
}

const burgerButton = document.querySelector('.b-header__burger-button');
const burgerMenu = document.querySelector('.b-header__burger-menu');

const toggleMenu = () => {
    burgerMenu.classList.toggle('burgerMenuOpen');
}

burgerButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
    let its_burgerButton = target == burgerButton;
    let burgerMenu_is_open = burgerMenu.classList.contains('burgerMenuOpen');

    if (!its_burgerMenu && !its_burgerButton && burgerMenu_is_open) {
        toggleMenu();
    }
})

const tabletNone = document.querySelectorAll('.tablet_none');
const tabletButton = document.querySelectorAll('.tablet_button');

// language.addEventListener('click', function(){
//     languageMenu.classList.toggle('display_flex')
// });

tabletButton.forEach(element => tubletShow(element));
function tubletShow(item) {
    item.addEventListener('click', function (event) {
        tabletNone.forEach(element => tubletShow2(element));
        function tubletShow2(item) {
            item.classList.add('tablet_block')
            item.classList.add('animate__animated')
            item.classList.add('animate__fadeInUp')
        }
    });
}