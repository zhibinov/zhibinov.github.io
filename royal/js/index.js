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

$(".js-range-slider").ionRangeSlider();

const detailedButton = document.querySelector('.b-search__detailed');
const detailedSearch = document.querySelector('.b-detailed-search');
const detailedSearchClose = document.querySelector('.b-detailed-search__header-close');

const toggleMenu = () => {
  detailedSearch.classList.toggle('detailedOpen');
}

detailedButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

detailedSearchClose.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_detailedSearch = target == detailedSearch || detailedSearch.contains(target);
    let its_detailedButton = target == detailedButton;
    let detailedSearch_is_open = detailedSearch.classList.contains('detailedOpen');

    if (!its_detailedSearch && !its_detailedButton && detailedSearch_is_open) {
        toggleMenu();
    }
})

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

jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});
