'use strict';

let navBox = document.querySelector('.b-nav')
let navOptions = document.querySelectorAll('.b-nav__options')
let navLink1 = document.querySelector('.b-nav__link_1');
let navOptions1 = document.querySelector('.b-nav__options_1');
let navLink2 = document.querySelector('.b-nav__link_2');
let navOptions2 = document.querySelector('.b-nav__options_2');
let navLink3 = document.querySelector('.b-nav__link_3');
let navOptions3 = document.querySelector('.b-nav__options_3');
let navLink4 = document.querySelector('.b-nav__link_4');
let navOptions4 = document.querySelector('.b-nav__options_4');

navBox.addEventListener('mouseout', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink1.addEventListener('mouseover', function (event) {
    navOptions1.classList.add('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink2.addEventListener('mouseover', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.add('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink3.addEventListener('mouseover', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.add('b-nav__options_block');
    navOptions4.classList.remove('b-nav__options_block');
});

navLink4.addEventListener('mouseover', function (event) {
    navOptions1.classList.remove('b-nav__options_block');
    navOptions2.classList.remove('b-nav__options_block');
    navOptions3.classList.remove('b-nav__options_block');
    navOptions4.classList.add('b-nav__options_block');
});

//2 level
let linkApple1 = document.querySelector('.link_apple1');
let linkApple2 = document.querySelector('.link_apple2');
let linkApple3 = document.querySelector('.link_apple3');
let linkApple4 = document.querySelector('.link_apple4');
let linkApple5 = document.querySelector('.link_apple5');

let linkPhone1 = document.querySelector('.link_phone1');
let linkPhone2 = document.querySelector('.link_phone2');
let linkPhone3 = document.querySelector('.link_phone3');
let linkPhone4 = document.querySelector('.link_phone4');
let linkPhone5 = document.querySelector('.link_phone5');

let linkNote1 = document.querySelector('.link_note1');
let linkNote2 = document.querySelector('.link_note2');
let linkNote3 = document.querySelector('.link_note3');
let linkNote4 = document.querySelector('.link_note4');
let linkNote5 = document.querySelector('.link_note5');

let linkTable1 = document.querySelector('.link_table1');
let linkTable2 = document.querySelector('.link_table2');
let linkTable3 = document.querySelector('.link_table3');
let linkTable4 = document.querySelector('.link_table4');
let linkTable5 = document.querySelector('.link_table5');

let navLinkApple1 = document.querySelector('.b-nav__2level-apple1');
let navLinkApple2 = document.querySelector('.b-nav__2level-apple2');
let navLinkApple3 = document.querySelector('.b-nav__2level-apple3');
let navLinkApple4 = document.querySelector('.b-nav__2level-apple4');
let navLinkApple5 = document.querySelector('.b-nav__2level-apple5');

let navLinkPhone1 = document.querySelector('.b-nav__2level-phone1');
let navLinkPhone2 = document.querySelector('.b-nav__2level-phone2');
let navLinkPhone3 = document.querySelector('.b-nav__2level-phone3');
let navLinkPhone4 = document.querySelector('.b-nav__2level-phone4');
let navLinkPhone5 = document.querySelector('.b-nav__2level-phone5');

let navLinkNote1 = document.querySelector('.b-nav__2level-note1');
let navLinkNote2 = document.querySelector('.b-nav__2level-note2');
let navLinkNote3 = document.querySelector('.b-nav__2level-note3');
let navLinkNote4 = document.querySelector('.b-nav__2level-note4');
let navLinkNote5 = document.querySelector('.b-nav__2level-note5');

let navLinkTable1 = document.querySelector('.b-nav__2level-table1');
let navLinkTable2 = document.querySelector('.b-nav__2level-table2');
let navLinkTable3 = document.querySelector('.b-nav__2level-table3');
let navLinkTable4 = document.querySelector('.b-nav__2level-table4');
let navLinkTable5 = document.querySelector('.b-nav__2level-table5');

linkApple1.addEventListener('mouseover', function (event) {
    navLinkApple1.classList.add('display_flex');
    navLinkApple2.classList.remove('display_flex');
    navLinkApple3.classList.remove('display_flex');
    navLinkApple4.classList.remove('display_flex');
    navLinkApple5.classList.remove('display_flex');
});

linkApple2.addEventListener('mouseover', function (event) {
    navLinkApple1.classList.remove('display_flex');
    navLinkApple2.classList.add('display_flex');
    navLinkApple3.classList.remove('display_flex');
    navLinkApple4.classList.remove('display_flex');
    navLinkApple5.classList.remove('display_flex');
});

linkApple3.addEventListener('mouseover', function (event) {
    navLinkApple1.classList.remove('display_flex');
    navLinkApple2.classList.remove('display_flex');
    navLinkApple3.classList.add('display_flex');
    navLinkApple4.classList.remove('display_flex');
    navLinkApple5.classList.remove('display_flex');
});

linkApple4.addEventListener('mouseover', function (event) {
    navLinkApple1.classList.remove('display_flex');
    navLinkApple2.classList.remove('display_flex');
    navLinkApple3.classList.remove('display_flex');
    navLinkApple4.classList.add('display_flex');
    navLinkApple5.classList.remove('display_flex');
});

linkApple5.addEventListener('mouseover', function (event) {
    navLinkApple1.classList.remove('display_flex');
    navLinkApple2.classList.remove('display_flex');
    navLinkApple3.classList.remove('display_flex');
    navLinkApple4.classList.remove('display_flex');
    navLinkApple5.classList.add('display_flex');
});

navOptions1.addEventListener('mouseout', function (event) {
    navLinkApple1.classList.remove('display_flex');
    navLinkApple2.classList.remove('display_flex');
    navLinkApple3.classList.remove('display_flex');
    navLinkApple4.classList.remove('display_flex');
    navLinkApple5.classList.remove('display_flex');
});

//Phone

linkPhone1.addEventListener('mouseover', function (event) {
    navLinkPhone1.classList.add('display_flex');
    navLinkPhone2.classList.remove('display_flex');
    navLinkPhone3.classList.remove('display_flex');
    navLinkPhone4.classList.remove('display_flex');
    navLinkPhone5.classList.remove('display_flex');
});

linkPhone2.addEventListener('mouseover', function (event) {
    navLinkPhone1.classList.remove('display_flex');
    navLinkPhone2.classList.add('display_flex');
    navLinkPhone3.classList.remove('display_flex');
    navLinkPhone4.classList.remove('display_flex');
    navLinkPhone5.classList.remove('display_flex');
});

linkPhone3.addEventListener('mouseover', function (event) {
    navLinkPhone1.classList.remove('display_flex');
    navLinkPhone2.classList.remove('display_flex');
    navLinkPhone3.classList.add('display_flex');
    navLinkPhone4.classList.remove('display_flex');
    navLinkPhone5.classList.remove('display_flex');
});

linkPhone4.addEventListener('mouseover', function (event) {
    navLinkPhone1.classList.remove('display_flex');
    navLinkPhone2.classList.remove('display_flex');
    navLinkPhone3.classList.remove('display_flex');
    navLinkPhone4.classList.add('display_flex');
    navLinkPhone5.classList.remove('display_flex');
});

linkPhone5.addEventListener('mouseover', function (event) {
    navLinkPhone1.classList.remove('display_flex');
    navLinkPhone2.classList.remove('display_flex');
    navLinkPhone3.classList.remove('display_flex');
    navLinkPhone4.classList.remove('display_flex');
    navLinkPhone5.classList.add('display_flex');
});

navOptions2.addEventListener('mouseout', function (event) {
    navLinkPhone1.classList.remove('display_flex');
    navLinkPhone2.classList.remove('display_flex');
    navLinkPhone3.classList.remove('display_flex');
    navLinkPhone4.classList.remove('display_flex');
    navLinkPhone5.classList.remove('display_flex');
});

//Note

linkNote1.addEventListener('mouseover', function (event) {
    navLinkNote1.classList.add('display_flex');
    navLinkNote2.classList.remove('display_flex');
    navLinkNote3.classList.remove('display_flex');
    navLinkNote4.classList.remove('display_flex');
    navLinkNote5.classList.remove('display_flex');
});

linkNote2.addEventListener('mouseover', function (event) {
    navLinkNote1.classList.remove('display_flex');
    navLinkNote2.classList.add('display_flex');
    navLinkNote3.classList.remove('display_flex');
    navLinkNote4.classList.remove('display_flex');
    navLinkNote5.classList.remove('display_flex');
});

linkNote3.addEventListener('mouseover', function (event) {
    navLinkNote1.classList.remove('display_flex');
    navLinkNote2.classList.remove('display_flex');
    navLinkNote3.classList.add('display_flex');
    navLinkNote4.classList.remove('display_flex');
    navLinkNote5.classList.remove('display_flex');
});

linkNote4.addEventListener('mouseover', function (event) {
    navLinkNote1.classList.remove('display_flex');
    navLinkNote2.classList.remove('display_flex');
    navLinkNote3.classList.remove('display_flex');
    navLinkNote4.classList.add('display_flex');
    navLinkNote5.classList.remove('display_flex');
});

linkNote5.addEventListener('mouseover', function (event) {
    navLinkNote1.classList.remove('display_flex');
    navLinkNote2.classList.remove('display_flex');
    navLinkNote3.classList.remove('display_flex');
    navLinkNote4.classList.remove('display_flex');
    navLinkNote5.classList.add('display_flex');
});

navOptions3.addEventListener('mouseout', function (event) {
    navLinkNote1.classList.remove('display_flex');
    navLinkNote2.classList.remove('display_flex');
    navLinkNote3.classList.remove('display_flex');
    navLinkNote4.classList.remove('display_flex');
    navLinkNote5.classList.remove('display_flex');
});

//Table

linkTable1.addEventListener('mouseover', function (event) {
    navLinkTable1.classList.add('display_flex');
    navLinkTable2.classList.remove('display_flex');
    navLinkTable3.classList.remove('display_flex');
    navLinkTable4.classList.remove('display_flex');
    navLinkTable5.classList.remove('display_flex');
});

linkTable2.addEventListener('mouseover', function (event) {
    navLinkTable1.classList.remove('display_flex');
    navLinkTable2.classList.add('display_flex');
    navLinkTable3.classList.remove('display_flex');
    navLinkTable4.classList.remove('display_flex');
    navLinkTable5.classList.remove('display_flex');
});

linkTable3.addEventListener('mouseover', function (event) {
    navLinkTable1.classList.remove('display_flex');
    navLinkTable2.classList.remove('display_flex');
    navLinkTable3.classList.add('display_flex');
    navLinkTable4.classList.remove('display_flex');
    navLinkTable5.classList.remove('display_flex');
});

linkTable4.addEventListener('mouseover', function (event) {
    navLinkTable1.classList.remove('display_flex');
    navLinkTable2.classList.remove('display_flex');
    navLinkTable3.classList.remove('display_flex');
    navLinkTable4.classList.add('display_flex');
    navLinkTable5.classList.remove('display_flex');
});

linkTable5.addEventListener('mouseover', function (event) {
    navLinkTable1.classList.remove('display_flex');
    navLinkTable2.classList.remove('display_flex');
    navLinkTable3.classList.remove('display_flex');
    navLinkTable4.classList.remove('display_flex');
    navLinkTable5.classList.add('display_flex');
});

navOptions4.addEventListener('mouseout', function (event) {
    navLinkTable1.classList.remove('display_flex');
    navLinkTable2.classList.remove('display_flex');
    navLinkTable3.classList.remove('display_flex');
    navLinkTable4.classList.remove('display_flex');
    navLinkTable5.classList.remove('display_flex');
});

//Burger
let burger = document.querySelector('.b-header__burger');
let navbar = document.querySelector('.b-nav-740')
burger.addEventListener('click', function (event) {
    navbar.classList.toggle('display_block');
});

let buttonApple = document.querySelector('.b-nav-740__button_apple');
let buttonPhone = document.querySelector('.b-nav-740__button_phone');
let buttonNote = document.querySelector('.b-nav-740__button_note');
let buttonTable = document.querySelector('.b-nav-740__button_table');

let level2Apple = document.querySelector('.b-nav-740__2level-apple');
let level2Phone = document.querySelector('.b-nav-740__2level-phone');
let level2Note = document.querySelector('.b-nav-740__2level-note');
let level2Table = document.querySelector('.b-nav-740__2level-table');

buttonApple.addEventListener('click', function (event) {
    level2Apple.classList.toggle('display_block');
    level2Phone.classList.remove('display_block');
    level2Note.classList.remove('display_block');
    level2Table.classList.remove('display_block');
});

buttonPhone.addEventListener('click', function (event) {
    level2Apple.classList.remove('display_block');
    level2Phone.classList.toggle('display_block');
    level2Note.classList.remove('display_block');
    level2Table.classList.remove('display_block');
});

buttonNote.addEventListener('click', function (event) {
    level2Apple.classList.remove('display_block');
    level2Phone.classList.remove('display_block');
    level2Note.classList.toggle('display_block');
    level2Table.classList.remove('display_block');
});

buttonTable.addEventListener('click', function (event) {
    level2Apple.classList.remove('display_block');
    level2Phone.classList.remove('display_block');
    level2Note.classList.remove('display_block');
    level2Table.classList.toggle('display_block');
});


let button2Apple1 = document.querySelector('.b-nav-740__button-apple1');
let button2Apple2 = document.querySelector('.b-nav-740__button-apple2');
let button2Apple3 = document.querySelector('.b-nav-740__button-apple3');
let button2Apple4 = document.querySelector('.b-nav-740__button-apple4');
let button2Apple5 = document.querySelector('.b-nav-740__button-apple5');

let button2Phone1 = document.querySelector('.b-nav-740__button-phone1');
let button2Phone2 = document.querySelector('.b-nav-740__button-phone2');
let button2Phone3 = document.querySelector('.b-nav-740__button-phone3');
let button2Phone4 = document.querySelector('.b-nav-740__button-phone4');
let button2Phone5 = document.querySelector('.b-nav-740__button-phone5');

let button2Note1 = document.querySelector('.b-nav-740__button-note1');
let button2Note2 = document.querySelector('.b-nav-740__button-note2');
let button2Note3 = document.querySelector('.b-nav-740__button-note3');
let button2Note4 = document.querySelector('.b-nav-740__button-note4');
let button2Note5 = document.querySelector('.b-nav-740__button-note5');

let button2Table1 = document.querySelector('.b-nav-740__button-table1');
let button2Table2 = document.querySelector('.b-nav-740__button-table2');
let button2Table3 = document.querySelector('.b-nav-740__button-table3');
let button2Table4 = document.querySelector('.b-nav-740__button-table4');
let button2Table5 = document.querySelector('.b-nav-740__button-table5');


let nav3Apple1 = document.querySelector('.b-nav-740__3level-apple1');
let nav3Apple2 = document.querySelector('.b-nav-740__3level-apple2');
let nav3Apple3 = document.querySelector('.b-nav-740__3level-apple3');
let nav3Apple4 = document.querySelector('.b-nav-740__3level-apple4');
let nav3Apple5 = document.querySelector('.b-nav-740__3level-apple5');

let nav3Phone1 = document.querySelector('.b-nav-740__3level-phone1');
let nav3Phone2 = document.querySelector('.b-nav-740__3level-phone2');
let nav3Phone3 = document.querySelector('.b-nav-740__3level-phone3');
let nav3Phone4 = document.querySelector('.b-nav-740__3level-phone4');
let nav3Phone5 = document.querySelector('.b-nav-740__3level-phone5');

let nav3Note1 = document.querySelector('.b-nav-740__3level-note1');
let nav3Note2 = document.querySelector('.b-nav-740__3level-note2');
let nav3Note3 = document.querySelector('.b-nav-740__3level-note3');
let nav3Note4 = document.querySelector('.b-nav-740__3level-note4');
let nav3Note5 = document.querySelector('.b-nav-740__3level-note5');

let nav3Table1 = document.querySelector('.b-nav-740__3level-table1');
let nav3Table2 = document.querySelector('.b-nav-740__3level-table2');
let nav3Table3 = document.querySelector('.b-nav-740__3level-table3');
let nav3Table4 = document.querySelector('.b-nav-740__3level-table4');
let nav3Table5 = document.querySelector('.b-nav-740__3level-table5');

button2Apple1.addEventListener('click', function (event) {
    nav3Apple1.classList.toggle('display_block');
    nav3Apple2.classList.remove('display_block');
    nav3Apple3.classList.remove('display_block');
    nav3Apple4.classList.remove('display_block');
    nav3Apple5.classList.remove('display_block');
});

button2Apple2.addEventListener('click', function (event) {
    nav3Apple1.classList.remove('display_block');
    nav3Apple2.classList.toggle('display_block');
    nav3Apple3.classList.remove('display_block');
    nav3Apple4.classList.remove('display_block');
    nav3Apple5.classList.remove('display_block');
});

button2Apple3.addEventListener('click', function (event) {
    nav3Apple1.classList.remove('display_block');
    nav3Apple2.classList.remove('display_block');
    nav3Apple3.classList.toggle('display_block');
    nav3Apple4.classList.remove('display_block');
    nav3Apple5.classList.remove('display_block');
});

button2Apple4.addEventListener('click', function (event) {
    nav3Apple1.classList.remove('display_block');
    nav3Apple2.classList.remove('display_block');
    nav3Apple3.classList.remove('display_block');
    nav3Apple4.classList.toggle('display_block');
    nav3Apple5.classList.remove('display_block');
});

button2Apple5.addEventListener('click', function (event) {
    nav3Apple1.classList.remove('display_block');
    nav3Apple2.classList.remove('display_block');
    nav3Apple3.classList.remove('display_block');
    nav3Apple4.classList.remove('display_block');
    nav3Apple5.classList.toggle('display_block');
});

//phone

button2Phone1.addEventListener('click', function (event) {
    nav3Phone1.classList.toggle('display_block');
    nav3Phone2.classList.remove('display_block');
    nav3Phone3.classList.remove('display_block');
    nav3Phone4.classList.remove('display_block');
    nav3Phone5.classList.remove('display_block');
});

button2Phone2.addEventListener('click', function (event) {
    nav3Phone1.classList.remove('display_block');
    nav3Phone2.classList.toggle('display_block');
    nav3Phone3.classList.remove('display_block');
    nav3Phone4.classList.remove('display_block');
    nav3Phone5.classList.remove('display_block');
});

button2Phone3.addEventListener('click', function (event) {
    nav3Phone1.classList.remove('display_block');
    nav3Phone2.classList.remove('display_block');
    nav3Phone3.classList.toggle('display_block');
    nav3Phone4.classList.remove('display_block');
    nav3Phone5.classList.remove('display_block');
});

button2Phone4.addEventListener('click', function (event) {
    nav3Phone1.classList.remove('display_block');
    nav3Phone2.classList.remove('display_block');
    nav3Phone3.classList.remove('display_block');
    nav3Phone4.classList.toggle('display_block');
    nav3Phone5.classList.remove('display_block');
});

button2Phone5.addEventListener('click', function (event) {
    nav3Phone1.classList.remove('display_block');
    nav3Phone2.classList.remove('display_block');
    nav3Phone3.classList.remove('display_block');
    nav3Phone4.classList.remove('display_block');
    nav3Phone5.classList.toggle('display_block');
});

//note

button2Note1.addEventListener('click', function (event) {
    nav3Note1.classList.toggle('display_block');
    nav3Note2.classList.remove('display_block');
    nav3Note3.classList.remove('display_block');
    nav3Note4.classList.remove('display_block');
    nav3Note5.classList.remove('display_block');
});

button2Note2.addEventListener('click', function (event) {
    nav3Note1.classList.remove('display_block');
    nav3Note2.classList.toggle('display_block');
    nav3Note3.classList.remove('display_block');
    nav3Note4.classList.remove('display_block');
    nav3Note5.classList.remove('display_block');
});

button2Note3.addEventListener('click', function (event) {
    nav3Note1.classList.remove('display_block');
    nav3Note2.classList.remove('display_block');
    nav3Note3.classList.toggle('display_block');
    nav3Note4.classList.remove('display_block');
    nav3Note5.classList.remove('display_block');
});

button2Note4.addEventListener('click', function (event) {
    nav3Note1.classList.remove('display_block');
    nav3Note2.classList.remove('display_block');
    nav3Note3.classList.remove('display_block');
    nav3Note4.classList.toggle('display_block');
    nav3Note5.classList.remove('display_block');
});

button2Note5.addEventListener('click', function (event) {
    nav3Note1.classList.remove('display_block');
    nav3Note2.classList.remove('display_block');
    nav3Note3.classList.remove('display_block');
    nav3Note4.classList.remove('display_block');
    nav3Note5.classList.toggle('display_block');
});

//table

button2Table1.addEventListener('click', function (event) {
    nav3Table1.classList.toggle('display_block');
    nav3Table2.classList.remove('display_block');
    nav3Table3.classList.remove('display_block');
    nav3Table4.classList.remove('display_block');
    nav3Table5.classList.remove('display_block');
});

button2Table2.addEventListener('click', function (event) {
    nav3Table1.classList.remove('display_block');
    nav3Table2.classList.toggle('display_block');
    nav3Table3.classList.remove('display_block');
    nav3Table4.classList.remove('display_block');
    nav3Table5.classList.remove('display_block');
});

button2Table3.addEventListener('click', function (event) {
    nav3Table1.classList.remove('display_block');
    nav3Table2.classList.remove('display_block');
    nav3Table3.classList.toggle('display_block');
    nav3Table4.classList.remove('display_block');
    nav3Table5.classList.remove('display_block');
});

button2Table4.addEventListener('click', function (event) {
    nav3Table1.classList.remove('display_block');
    nav3Table2.classList.remove('display_block');
    nav3Table3.classList.remove('display_block');
    nav3Table4.classList.toggle('display_block');
    nav3Table5.classList.remove('display_block');
});

button2Table5.addEventListener('click', function (event) {
    nav3Table1.classList.remove('display_block');
    nav3Table2.classList.remove('display_block');
    nav3Table3.classList.remove('display_block');
    nav3Table4.classList.remove('display_block');
    nav3Table5.classList.toggle('display_block');
});

let raitingY = document.querySelector('.b-review__raiting-card_y');
let sliderY = document.querySelector('.b-review__slider_y');
let raitingG = document.querySelector('.b-review__raiting-card_g');
let sliderG = document.querySelector('.b-review__slider_g');
let raiting2 = document.querySelector('.b-review__raiting-card_2');
let slider2 = document.querySelector('.b-review__slider_2');
let raitingI = document.querySelector('.b-review__raiting-card_i');
let sliderI = document.querySelector('.b-review__slider_i');

raitingY.addEventListener('click', function (event) {
    sliderY.classList.add('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
    raitingY.classList.add('b-price__button-activ');
    raitingG.classList.remove('b-price__button-activ');
    raiting2.classList.remove('b-price__button-activ');
    raitingI.classList.remove('b-price__button-activ');
});

raitingG.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.add('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
    raitingY.classList.remove('b-price__button-activ');
    raitingG.classList.add('b-price__button-activ');
    raiting2.classList.remove('b-price__button-activ');
    raitingI.classList.remove('b-price__button-activ');
});

raiting2.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.add('b-review__slider_b');
    sliderI.classList.remove('b-review__slider_b');
    raitingY.classList.remove('b-price__button-activ');
    raitingG.classList.remove('b-price__button-activ');
    raiting2.classList.add('b-price__button-activ');
    raitingI.classList.remove('b-price__button-activ');
});

raitingI.addEventListener('click', function (event) {
    sliderY.classList.remove('b-review__slider_b');
    sliderG.classList.remove('b-review__slider_b');
    slider2.classList.remove('b-review__slider_b');
    sliderI.classList.add('b-review__slider_b');
    raitingY.classList.remove('b-price__button-activ');
    raitingG.classList.remove('b-price__button-activ');
    raiting2.classList.remove('b-price__button-activ');
    raitingI.classList.add('b-price__button-activ');
});

let close = document.querySelector('.b-pop-up__header-button');
let link = document.querySelectorAll('.link');
let popUp = document.querySelector('.b-pop-up');
link.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'block';
    });
}
close.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});

let slot1 = document.querySelector('#slot1');
let slot2 = document.querySelector('#slot2');
let slot3 = document.querySelector('#slot3');
let lotteryPopCase = document.querySelector('.b-loterry-pop__case');
let lotteryPopGlass = document.querySelector('.b-loterry-pop__glass');
let lotteryPopFilm = document.querySelector('.b-loterry-pop__film');
let lotteryPopStatus = document.querySelector('.b-loterry-pop__status');

$('#btn-example6').click(function () {
    $('#example6 ul').playSpin();
    setTimeout(zopa, 6000);
    function zopa() {
        if (slot1.style.top == '-200px' && slot2.style.top == '0px' && slot3.style.top == '-400px') {
            lotteryPopGlass.style.display = 'block';
        }
        else if (slot1.style.top == '-400px' && slot2.style.top == '-200px' && slot3.style.top == '0px') {
            lotteryPopCase.style.display = 'block';
        }
        else if (slot1.style.top == '0px' && slot2.style.top == '-400px' && slot3.style.top == '-200px') {
            lotteryPopFilm.style.display = 'block';
        }
    }
});

let lotteryClose = document.querySelectorAll('.b-loterry-pop__header-button')
lotteryClose.forEach(element => funcLotteryClose(element));
function funcLotteryClose(item) {
    item.addEventListener('click', function (event) {
        lotteryPopGlass.style.display = 'none';
        lotteryPopCase.style.display = 'none';
        lotteryPopFilm.style.display = 'none';
        lotteryPopStatus.style.display = 'none';
    });
}

let status = document.querySelector('.b-header__statues');
status.addEventListener('click', function (event) {
    lotteryPopStatus.style.display = 'block';
});

let buttonIphone = document.querySelector('.b-price__button-iphone');
let buttonIpad = document.querySelector('.b-price__button-ipad');
let buttonImac = document.querySelector('.b-price__button-imac');
let buttonIpod = document.querySelector('.b-price__button-ipod');
let buttonMacbook = document.querySelector('.b-price__button-macbook');
let buttonApplewatch = document.querySelector('.b-price__button-applewatch');

let boxIphone = document.querySelector('.b-price__iphone-box');
let boxIpad = document.querySelector('.b-price__ipad-box');
let boxImac = document.querySelector('.b-price__imac-box');
let boxIpod = document.querySelector('.b-price__ipod-box');
let boxMacbook = document.querySelector('.b-price__macbook-box');
let boxApplewatch = document.querySelector('.b-price__applewatch-box');

let buttonAll = document.querySelector('.b-price__button-all');
let buttonMore = document.querySelectorAll('.b-price__button-more');
buttonAll.addEventListener('click', function (event) {
    buttonMore.forEach(element => ButtonFlex(element));
    function ButtonFlex(item) {
        item.classList.add('display_flex');
    }
})

let container = document.querySelector('.b-price__iphone-box');
let priceBoard = document.querySelector('.b-price__board');

container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('b-price__button-small')) return;

    let last = container.querySelector('.b-price__button-activ_small');
    last && last.classList.remove('b-price__button-activ_small');
    e.target.classList.add('b-price__button-activ_small');
    priceBoard.classList.toggle('display_block');
})
