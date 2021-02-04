
var elements = document.getElementsByClassName('imaskjs__input_tel');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7} 000 - 000 - 00 - 00',
  });
}

var elements = document.getElementsByClassName('imaskjs__input_inn');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '0000000000',
  });
}

var elements = document.getElementsByClassName('imaskjs__input_ogrn');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '0000000000000',
  });
}

var elements = document.getElementsByClassName('imaskjs__input_sum');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '000000000',
  });
}
var elements = document.getElementsByClassName('b-main__calendar');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '00.00.0000',
  });
}

$("#demo_0").ionRangeSlider({
    min: 30000,
    max: 500000,
    from: 30000,
    step: 500,
    skin: "round"
});

let handle = document.querySelector('.irs-handle');
let single = document.querySelector('.irs-single');

handle.addEventListener('mouseover', function(){
    single.style.color = '#000000';
})

let download = document.querySelector('.b-main__download-box');
let buttonDownload = document.querySelector('.b-main__button-download');
let description = document.querySelector('.b-main__description');
let downloadText = document.querySelector('.b-main__download-text');
let del = document.querySelector('.b-main__del');

download.addEventListener('click', function(){
  buttonDownload.classList.add('display_none');
  description.classList.add('display_none');
  downloadText.classList.add('display_flex');
})

del.addEventListener('click', function(){
  buttonDownload.classList.remove('display_none');
  description.classList.remove('display_none');
  downloadText.classList.remove('display_flex');
})

const selectSingle = document.querySelector('.b-main__select');
const selectSingle_title = selectSingle.querySelector('.b-main__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.b-main__select-label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle_title.style.color = '#000000';
    selectSingle.setAttribute('data-state', '');
  });
}

let errorMessage = document.querySelector('.b-main__error');
let innInput = document.querySelector('.imaskjs__input_inn');
let sumInput = document.querySelector('.imaskjs__input_sum');
let phoneInput = document.querySelector('.imaskjs__input_tel');
let mailInput = document.querySelector('.b-main__input-mail')
let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

function validate_form (){
  valid = true;
  if (document.contact_form.inn.value == ""){
    innInput.classList.add('placeholder_error');
    let placeholderError = document.querySelector('.placeholder_error');
    innInput.placeholder = 'Обязательное поле!';
    innInput.style.border = '2px solid #CF543C';
    errorMessage.style.visibility = 'visible';
    valid = false;

  }else if (document.contact_form.sum.value == ""){
    sumInput.classList.add('placeholder_error');
    let placeholderError = document.querySelector('.placeholder_error');
    sumInput.placeholder = 'Обязательное поле!';
    sumInput.style.border = '2px solid #CF543C';
    errorMessage.style.visibility = 'visible';
    valid = false;

  /*}else if (single.style.color !== 'rgb(0, 0, 0)'){
    errorMessage.style.visibility = 'visible';
    valid = false;
    закоментил, так как в дизайне нет стиля сообщения, в случае ошибки, а поле помеченно, как обязательное
    */

  }else if  ( ( document.contact_form.singleSelect[0].checked == false ) && ( document.contact_form.singleSelect[1].checked == false ) && ( document.contact_form.singleSelect[2].checked == false ) &&( document.contact_form.singleSelect[3].checked == false )){
    selectSingle_title.style.border = '2px solid #CF543C';
    errorMessage.style.visibility = 'visible';
    valid = false;
  }

  return valid;      
}

