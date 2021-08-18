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

const d1 = $( ".b-main__input-cal" ).datepicker({
	dateFormat: 'mm/dd/yy', 
	onSelect: function(dateText){
  	console.log(dateText)
    const setRes = new Date(dateText);
    setRes.setDate(setRes.getDate()+2)
    
    
    console.log(setRes);
    $( ".b-main__input-cal2" ).datepicker("setDate", setRes);
  }
})
const d2 = $( ".b-main__input-cal2" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", 2);

d1.datepicker("setDate", new Date()); 

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

tabletButton.forEach(element => tubletShow(element));
function tubletShow(item) {
    item.addEventListener('click', function (event) {
        tabletNone.forEach(element => tubletShow2(element));
        function tubletShow2(item) {
            item.classList.add('tablet_block')
        }
    });
}

const popApp = document.querySelector('.b-pop-app');
const stepsLink = document.querySelector('.b-steps__link');
const popAppClose = document.querySelector('.b-pop-app__close');
const popAppCancel = document.querySelector('.b-pop-app__button-cancel');
const popAppOk = document.querySelector('.b-pop-app__button-ok');

const toggleMenuPopApp = () => {
    popApp.classList.toggle('display_flex');
}

stepsLink.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenuPopApp();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_popApp = target == popApp || popApp.contains(target);
    let its_stepsLink = target == stepsLink;
    let popApp_is_open = popApp.classList.contains('display_flex');

    if (!its_popApp && !its_stepsLink && popApp_is_open) {
        toggleMenuPopApp();
    }
})

popAppClose.addEventListener('click', function(){
    popApp.classList.toggle('display_flex')
});
popAppCancel.addEventListener('click', function(){
    popApp.classList.toggle('display_flex')
});
popAppOk.addEventListener('click', function(){
    popApp.classList.toggle('display_flex')
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });