var details = document.querySelectorAll(".b-review__button");

for (i = 0; i < details.length; i++) {
    details[i].addEventListener("toggle", accordion);
}

details[0].setAttribute('open', '');

function accordion(event) {
    if (!event.target.open) return;
    var details = event.target.parentNode.children;

    for (i = 0; i < details.length; i++) {
        if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
        details[i].removeAttribute("open");
    }
}

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

let openCallBack = document.querySelector('.b-header__button');
let callBack = document.querySelector('.callback');
let closeCallBack = document.querySelector('.close_callback')

openCallBack.addEventListener('click', function (event) {
    callBack.style.display = 'block';
});

closeCallBack.addEventListener('click', function (event) {
    callBack.style.display = 'none';
});

// let select = document.querySelector('.b-top__select_1');
// let selectPhone = document.querySelector('.b-top__select-box_phone');
// let selectTablet = document.querySelector('.b-top__select-box_phone');
// let selectNotebook = document.querySelector('.b-top__select-box_phone');
// let selectPC = document.querySelector('.b-top__select-box_phone');
// let selectTech = document.querySelector('.b-top__select-box_phone');

// function changeInput1(){
// if (select.options.selectedIndex === 1){
//     selectPhone.classList.toggle('display_block');
// }else if(select.options.selectedIndex === 2){
//     selectPhone.classList.toggle('display_block');
// }

// }

// console.log(select.options.selectedIndex);

// get stuff from the DOM
// var regsel = document.getElementById("regions");
// var select = document.getElementById("countries");
// var models = document.getElementById("models");

// function countryMethod(name, region) {
//    this.name = name;
//    this.region = region;
// }

// function modelsMethod(name, country) {
//     this.name = name;
//     this.country = country;
//  }

// var africa = ["Botswana", "Cameroon", "Ghana", "Kenya"];
// var americas = ["Canada"];
// var eurasia = ["United Kingdom"];
// var pacific = ["Australia", "Fiji", "Kiribati", "Nauru", "New Zealand"];
// var all = [0, africa, americas, eurasia, pacific];



// function populateSelect(params) {

//    while (select.firstChild) {
//       select.removeChild(select.firstChild);
//    };

//    if (params > 0) {
//       /*alert(params);*/
//       var x = all[params];
//       var a = 0;
//       for (a = 0; a < x.length; a++) {
//          var country = x[a];
//          var el = document.createElement("option");
//          el.textContent = country;
//          el.value = country;
//          select.appendChild(el);
//       };
//    }
//    else {

//       var m = [];
//       m = m.concat(pacific, africa, eurasia, americas);
//       m.sort();
//       m.unshift("Выбор бренда");

//       for (i = 0; i < m.length; i++) {
//          var x = m[i];
//          var el = document.createElement("option");
//          el.textContent = x;
//          el.value = x;
//          select.appendChild(el);
//       }

//    } // end if

// }

// window.onload = populateSelect(0);