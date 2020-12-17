let products = document.querySelectorAll('[data-name="color-slider"]');

products.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-name") === "color-input") {
      let colorTitle = element.querySelector('[data-name="color-title"]');
      colorTitle.innerHTML = e.target.value;
      //colorTitle.style.color = e.target.getAttribute("data-color"); Раскоментировать, если нужно менять цвет текста
    }
  });
});
let block = document.querySelectorAll('[data-name="block"]');

block.forEach((element) => {
  element.addEventListener("click", (e) => {

    let valueElement = element.querySelector('[data-name="value"]')
    console.log(valueElement.value);
    if (e.target.getAttribute("data-name") === "plus") {
      valueElement.value = parseInt(valueElement.value) + 1;
    } else if (e.target.getAttribute("data-name") === "minus") {
      console.log(e.target);
      valueElement.value = parseInt(valueElement.value) !== 0 ? parseInt(valueElement.value) - 1 : 0;
    }
  });
});
$('#description-detailed').click(function () {
  if ($(this).is(':checked')) {
    $('#detail').show(100);
    $('#nondetail').hide(100);
  }
});
$('#description').click(function () {
  if ($(this).is(':checked')) {
    $('#nondetail').show(100);
    $('#detail').hide(100);
  }
});
$('.properties-slider').each(function (k, v) {
  $(this).slick({
    variableWidth: true,
    dots: false,
    arrows: true,
  });
  console.log(this);
});
jQuery('.slider-class').slick({
  fade: false,
  dots: false,
  lazyLoad: 'progressive',
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: true,
  swipe: true,
  asNavFor: '.preview-class'
});
jQuery('.preview-class').slick({
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-class'
});
$('.b-img__responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1264,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 741,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});
