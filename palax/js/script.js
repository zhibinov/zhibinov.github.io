
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

$(".js-range-slider").ionRangeSlider({
  min: 30000,
  max: 500000,
  from: 30000,
  step: 500,
  skin: "round"
});

let handle = document.querySelector('.irs-handle');
let single = document.querySelector('.irs-single');

handle.addEventListener('mouseover', function () {
  single.style.color = '#000000';
})

const downloadBlock = document.querySelector('.b-main__download-block');

downloadBlock.addEventListener('click', (event) => {
  event.currentTarget.childNodes.forEach(el => console.log(el));
  const delDownload = event.currentTarget.childNodes.forEach(el => el.querySelector(".b-main__del"));
  // const delDownload = document.querySelector('.b-main__del');
  const downloadBox = document.querySelector('.b-main__download-box');
  const forms = document.querySelectorAll('form');
  const inputFile = document.querySelectorAll('.b-main__input-file');

  inputFile.forEach(function (el) {

    let textSelector = document.querySelector('.b-main__download-text');
    let fileList;

    // Событие выбора файла(ов) 
    el.addEventListener('change', function (e) {

      downloadBox.style.display = 'none';
      delDownload.style.display = 'block';

      // создаём массив файлов 
      fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        fileList.push(el.files[i]);
      }

      // вызов функции для каждого файла 
      fileList.forEach(file => {
        uploadFile(file);

      });

      console.log(fileList);

      delDownload.addEventListener('click', function () {
        fileList.splice(0, 1);
        console.log(fileList);
        downloadBox.style.display = 'flex';
        delDownload.style.display = 'none';
        textSelector.textContent = ' ';
      });
    });

    // Проверяем размер файлов и выводим название 
    const uploadFile = (file) => {

      // файла <5 Мб 
      if (file.size > 10 * 1024 * 1024) {
        alert('Файл должен быть не более 10 МБ.');
        return;

      }

      // Показ загружаемых файлов 
      if (file && file.length > 1) {
        if (file.length <= 4) {
          textSelector.textContent = `Выбрано ${file.length} файла`;
        }
        if (file.length > 4) {
          textSelector.textContent = `Выбрано ${file.length} файлов`;
        }
      } else {
        textSelector.textContent = file.name + ' ' + Math.round((file.size / 1024)) + ' kb';
      }

    }
  });

  // Отправка формы на сервер 
  // const postData = async (url, fData) => { // имеет асинхронные операции 

  // начало отправки 
  // здесь можно оповестить пользователя о начале отправки 

  // ждём ответ, только тогда наш код пойдёт дальше 
  //   let fetchResponse = await fetch(url, {
  //     method: 'POST',
  //     body: fData
  //   });

  // ждём окончания операции 
  //   return await fetchResponse.text();
  // };

  // if (forms) {
  //   forms.forEach(el => {
  //     el.addEventListener('submit', function (e) {
  //       e.preventDefault();

  // создание объекта FormData 
  //       let fData = new FormData();

  // Добавление всех input, кроме type="file" 
  //       el.querySelectorAll('input:not([type="file"])').forEach(input => {
  //         fData.append(input.name, input.value);
  //       });

  // Добавление файлов input type file 
  //       let file = el.querySelector('.b-main__input-file');
  //       for (let i = 0; i < (file.files.length); i++) {
  //         fData.append('files[]', file.files[i]); // добавляем файлы в объект FormData() 
  //       }

  // Отправка на сервер 
  //       postData('./mail.php', fData)
  //         .then(fetchResponse => {
  //           console.log('Данные успешно отправлены!');
  //           console.log(fetchResponse);
  //         })
  //         .catch(function (error) {
  //           console.log('Ошибка!');
  //           console.log(error);
  //         });
  //     });
  //   });
  // };

});





let errorMessage = document.querySelector('.b-main__error');
let innInput = document.querySelector('.imaskjs__input_inn');
let sumInput = document.querySelector('.imaskjs__input_sum');
let phoneInput = document.querySelector('.imaskjs__input_tel');
let mailInput = document.querySelector('.b-main__input-mail');
let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
let choice = document.querySelector('.b-main__choice');

// function validate_form() {
//   valid = true;
//   if (document.contact_form.inn.value == "") {
//     innInput.classList.add('placeholder_error');
//     let placeholderError = document.querySelector('.placeholder_error');
//     innInput.placeholder = 'Обязательное поле!';
//     innInput.style.border = '2px solid #CF543C';
//     errorMessage.style.visibility = 'visible';
//     valid = false;

//   } else if (document.contact_form.sum.value == "") {
//     sumInput.classList.add('placeholder_error');
//     let placeholderError = document.querySelector('.placeholder_error');
//     sumInput.placeholder = 'Обязательное поле!';
//     sumInput.style.border = '2px solid #CF543C';
//     errorMessage.style.visibility = 'visible';
//     valid = false;

//     /*}else if (single.style.color !== 'rgb(0, 0, 0)'){
//       errorMessage.style.visibility = 'visible';
//       valid = false;
//       закоментил, так как в дизайне нет стиля сообщения, в случае ошибки, а поле помеченно, как обязательное
//       */

//   } else if ((document.contact_form.singleSelect[0].checked == false) && (document.contact_form.singleSelect[1].checked == false) && (document.contact_form.singleSelect[2].checked == false) && (document.contact_form.singleSelect[3].checked == false)) {
//     selectSingle_title.style.border = '2px solid #CF543C';
//     errorMessage.style.visibility = 'visible';
//     valid = false;
//   }

//   return valid;
// };
$(function () {
  $("#number")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");
});

