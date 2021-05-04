let errorMessageSubmit = document.querySelector('.b-main__error');
let selectTypeMain = document.querySelector('.b-main__select');
let selectTypeMainStyle = document.querySelector('.ui-selectmenu-button');
// let checkboxMain = document.querySelectorAll('.b-main__checkbox-input');
// let checkboxBox = document.querySelector('.b-main__checkbox-Box');
let calendarMain = document.querySelector('.b-main__calendar');



const validateParams = {
    name: {
        pattern: /^[a-zа-яё]+\s{1}[a-zа-яё]+\s{1}[a-zа-яё]+$/i,
        error: 'Ошибка ввода!'
    },
    enterprise: {
        pattern: /^[\w\sа-яё]+$/i,
        error: 'Ошибка ввода!'
    },
    phone: {
        pattern: /^\+7\s{1}[1-9]{1}\d{2}\s{1}-\s{1}\d{3}\s{1}-\s{1}\d{2}\s{1}-\s{1}\d{2}$/,
        error: 'Ошибка ввода!'
    },
    mail: {
        pattern: /^[\w\.-]+@\w+\.[a-z]{2,4}$/i,
        error: 'Ошибка ввода!'
    },
    inn: {
        pattern: /^\d{10,12}$/,
        error: 'Обязательное поле!'
    },
    ogrn: {
        pattern: /^\d{13}$/,
        error: 'Обязательное поле!'
    },
    sum: {
        pattern: /^\d+$/,
        error: 'Обязательное поле!'
    },
    date: {
        pattern: /^\d{2}\.\d{2}\.\d{4}$/,
        error: 'Обязательное поле!'
    }
};

class Validator {
    static errorClass = 'error-msg';
    form = null;
    params = null;
    valid = false;

    constructor(form, params) {
        this.form = document.querySelector(form);
        this.params = params;
        this._init();
    }

    _init() {
        this.form.addEventListener('submit', e => {
            this._validateForm();
            if (!this.valid) {
                e.preventDefault();
            }
        });
    }

    _validateForm() {
        this.valid = false;
        const errors = [...this.form.querySelectorAll(`.${Validator.errorClass}`)];

        for (let error of errors) {
            error.remove();
        }

        const formFields = [...this.form.querySelectorAll('input')];

        for (let field of formFields) {
            this._validate(field);
        }

        this._validateBox();


        // if (selectTypeMain.options[0].selected = true) {
        //     selectTypeMainStyle.style.borderColor = '#CF543C';
        // }

        // checkboxMain.forEach(element => {
        //     if (!element.checked) {
        //         checkboxBox.style.border = '3px solid #FF2A00';
        //     } else {
        //         checkboxBox.style.border = 'none';
        //     }

        // });
        // if (!calendarMain.value) {
        //     calendarMain.style.border = '1px solid #FF2A00';
        //     const errorBlock = `<div class="${Validator.errorClass}">Обязательное поле!</div>`;
        //     calendarMain.insertAdjacentHTML('afterend', errorBlock);
        // }

        if (![...this.form.querySelectorAll('.invalid')].length) {
            this.valid = true;
        }
    }

    _validate(field) {
        if (!this.params[field.name]) {
            return;
        }

        const { pattern, error } = this.params[field.name];

        if (!pattern.test(field.value)) {
            field.classList.add('invalid');
            this._addErrorMsg(field, error);
            this._watchField(field, pattern, error);
            errorMessageSubmit.style.visibility = 'visible'; // тут поменял на visible , тк в стилях он скрыт hidden
        }
    }


    // Добавил проверку чекбоксов если  они все не checked то должно красной рамкой обводиться поле
    _validateBox() {
        const checkboxBox = document.querySelector('.b-main__checkbox-box');
        const checkboxMain = [...document.querySelectorAll('.b-main__checkbox-input')];
        const condition_1 = document.getElementById('condition-1');
        const condition_2 = document.getElementById('condition-2');
        const condition_3 = document.getElementById('condition-3');

        if (!condition_1.checked && !condition_2.checked && !condition_3.checked) {
            checkboxBox.classList.add('invalid');
            this._watchCheckbox(checkboxMain);
        }
    }

    _addErrorMsg(field, error) {
        const errorBlock = `<div class="${Validator.errorClass}">${error}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', errorBlock);
    }

    _watchField(field, pattern, error) {
        field.addEventListener('input', () => {
            const errorBlock = field.parentNode.querySelector(`.${Validator.errorClass}`);
            if (pattern.test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (errorBlock) {
                    errorBlock.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!errorBlock) {
                    this._addErrorMsg(field, error);
                }
            }
        });
    }


    // Этот метод должен проверять чекбоксы и если хотя бы один чекбокс checked тогда рамка убирается, если ни один снова добавляется ну и класс присваивается удаляется
    _watchCheckbox(field) {
        field.forEach(element => {
            if (element.checked) {
                field.parentNode.classList.remove('invalid');
                field.parentNode.classList.add('valid');
            } else {
                field.parentNode.classList.remove('valid');
                field.parentNode.classList.add('invalid');
            }
        });
    }
}

window.onload = () => {
    new Validator('#myform', validateParams);
};








