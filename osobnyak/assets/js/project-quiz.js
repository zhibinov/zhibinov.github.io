(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const icon = (id, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"></use></svg>`;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const QUIZ_STEPS = [
    { key: 'type', title: 'Какой дом планируете строить?', options: ['Одноэтажный', 'Одноэтажный с мансардой', 'Двухэтажный', 'Двухэтажный с мансардой', 'Пока не определился'] },
    { key: 'area', title: 'Какая площадь дома вам нужна?', options: ['До 100 м²', '100–150 м²', '150–200 м²', 'Более 200 м²'] },
    { key: 'floors', title: 'Сколько этажей?', options: ['1 этаж', '1 этаж + мансарда', '2 этажа', 'Пока не определился'] },
    { key: 'material', title: 'Из чего планируете строить?', options: ['Газоблок', 'Кирпич', 'Дерево / брус', 'Пока не определился'] },
    { key: 'foundation', title: 'Какой фундамент рассматриваете?', options: ['Ленточный', 'Монолитная плита', 'Свайно-ростверковый', 'Нужна консультация'] },
    { key: 'roof', title: 'Какую кровлю хотите?', options: ['Металлочерепица', 'Мягкая кровля', 'Натуральная черепица', 'Нужна консультация'] },
    { key: 'when', title: 'Когда планируете начать строительство?', options: ['В ближайший месяц', 'Через 2–3 месяца', 'В этом году', 'Пока планирую'] }
  ];
  const TOTAL_STEPS = QUIZ_STEPS.length + 1;

  function calcPrice(answers) {
    const areaMap = { 'До 100 м²': 85, '100–150 м²': 125, '150–200 м²': 175, 'Более 200 м²': 230 };
    const floorsMap = { '1 этаж': 1, '1 этаж + мансарда': 1.04, '2 этажа': 1.08, 'Пока не определился': 1.04 };
    const materialMap = { 'Газоблок': 1, 'Кирпич': 1.12, 'Дерево / брус': 1.08, 'Пока не определился': 1.05 };
    const foundationMap = { 'Ленточный': 1, 'Монолитная плита': 1.07, 'Свайно-ростверковый': 1.05, 'Нужна консультация': 1.04 };
    const roofMap = { 'Металлочерепица': 1, 'Мягкая кровля': 1.03, 'Натуральная черепица': 1.1, 'Нужна консультация': 1.03 };

    const area = areaMap[answers.area] || 120;
    const floors = floorsMap[answers.floors] || 1.04;
    const material = materialMap[answers.material] || 1.05;
    const foundation = foundationMap[answers.foundation] || 1.04;
    const roof = roofMap[answers.roof] || 1.03;
    const base = 52000 * area * floors * material * foundation * roof;
    return { low: base * 0.94, high: base * 1.08 };
  }

  function formatMln(value) {
    return (value / 1000000).toFixed(1).replace('.', ',') + ' млн ₽';
  }

  function formatPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('8')) digits = '7' + digits.slice(1);
    if (!digits.startsWith('7')) digits = '7' + digits;
    digits = digits.slice(0, 11);
    let out = '+7';
    if (digits.length > 1) out += ' (' + digits.slice(1, 4);
    if (digits.length >= 5) out += ') ' + digits.slice(4, 7);
    if (digits.length >= 8) out += '-' + digits.slice(7, 9);
    if (digits.length >= 10) out += '-' + digits.slice(9, 11);
    return out;
  }

  function phoneDigits(value) {
    return value.replace(/\D/g, '');
  }

  function initPhoneInput(input) {
    if (!input) return;
    input.addEventListener('focus', () => {
      if (!input.value) input.value = '+7 (';
    });
    input.addEventListener('input', () => {
      input.value = formatPhone(input.value);
    });
    input.addEventListener('blur', () => {
      if (input.value === '+7 (' || input.value === '+7') input.value = '';
    });
  }

  function createQuiz(root) {
    if (!root) return;
    const state = { step: 0, answers: {}, submitted: false };

    root.innerHTML = `
      <div class="quiz">
        <div class="quiz__progress"><span style="width:0%"></span></div>
        <div class="quiz__meta"><span class="quiz__step"></span><span class="quiz__time">≈ 1 минута</span></div>
        <div class="quiz__body" aria-live="polite"></div>
        <div class="quiz__nav">
          <button class="btn btn--ghost quiz__back" type="button">${icon('i-chevron-left')} Назад</button>
          <button class="btn btn--primary quiz__next" type="button">Далее ${icon('i-arrow')}</button>
        </div>
        <p class="quiz__note">Расчёт бесплатный и ни к чему не обязывает. Мы не передаём данные третьим лицам.</p>
      </div>
    `;

    const el = {
      progress: $('.quiz__progress span', root),
      step: $('.quiz__step', root),
      body: $('.quiz__body', root),
      nav: $('.quiz__nav', root),
      back: $('.quiz__back', root),
      next: $('.quiz__next', root),
      note: $('.quiz__note', root)
    };

    function chipsFromAnswers(limit) {
      const values = Object.values(state.answers).filter(Boolean);
      const list = typeof limit === 'number' ? values.slice(0, limit) : values;
      return list.map((value) => `<span class="quiz__chip">${value}</span>`).join('');
    }

    function renderQuestion() {
      const question = QUIZ_STEPS[state.step];
      const selected = state.answers[question.key];
      el.body.innerHTML = `
        <h3 class="quiz__question" tabindex="-1">${question.title}</h3>
        <div class="quiz__options" role="radiogroup" aria-label="${question.title}">
          ${question.options.map((option) => `
            <label class="quiz-option">
              <input type="radio" name="project-quiz-${question.key}" value="${option}" ${selected === option ? 'checked' : ''}>
              <span class="quiz-option__dot"></span>
              <span class="quiz-option__label">${option}</span>
            </label>
          `).join('')}
        </div>
      `;
      window.applyTypography?.(el.body);
      $$('input[type="radio"]', el.body).forEach((input) => {
        input.addEventListener('change', () => {
          state.answers[question.key] = input.value;
          el.next.disabled = false;
        });
      });
      el.next.disabled = !selected;
    }

    function renderContact() {
      el.body.innerHTML = `
        <h3 class="quiz__question" tabindex="-1">Куда отправить расчёт?</h3>
        <div class="quiz__summary">${chipsFromAnswers(4)}</div>
        <div class="quiz-contact">
          <div class="field">
            <label for="project-quiz-name">Ваше имя *</label>
            <input id="project-quiz-name" name="name" type="text" placeholder="Как к вам обращаться" autocomplete="name">
            <span class="quiz__error">Укажите имя</span>
          </div>
          <div class="field">
            <label for="project-quiz-phone">Телефон *</label>
            <input id="project-quiz-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" autocomplete="tel" inputmode="tel">
            <span class="quiz__error">Введите номер телефона</span>
          </div>
          <label class="form-consent">
            <input type="checkbox" name="consent">
            <span>Даю согласие на <a href="consent.html">обработку персональных данных</a>.</span>
          </label>
          <span class="quiz__error quiz__error--block" data-consent-error>Подтвердите согласие на обработку данных</span>
        </div>
      `;
      window.applyTypography?.(el.body);
      initPhoneInput($('input[type="tel"]', el.body));
      el.next.disabled = false;
      el.next.innerHTML = `Получить расчёт ${icon('i-arrow')}`;
    }

    function showResult() {
      const price = calcPrice(state.answers);
      el.progress.style.width = '100%';
      el.step.textContent = 'Готово';
      if (el.nav) el.nav.style.display = 'none';
      if (el.note) el.note.style.display = 'none';
      el.body.innerHTML = `
        <div class="quiz-result">
          <div class="quiz-result__icon">${icon('i-check')}</div>
          <span class="quiz-result__label">Предварительная стоимость</span>
          <strong class="quiz-result__price">от ${formatMln(price.low)} до ${formatMln(price.high)}</strong>
          <p>Расчёт основан на ваших ответах. Точную смету подготовим после консультации — с учётом участка, материалов и комплектации.</p>
          <div class="quiz__summary">${chipsFromAnswers()}</div>
          <div class="quiz-result__actions">
            <a class="btn btn--primary" href="index.html#projects">Смотреть типовые проекты ${icon('i-arrow')}</a>
            <a class="btn btn--outline" href="#contacts">Связаться с нами</a>
          </div>
          <p class="quiz__note">Менеджер свяжется с вами в течение рабочего дня. Предварительный расчёт не является публичной офертой.</p>
        </div>
      `;
      window.applyTypography?.(el.body);
    }

    function submitContact() {
      const nameInput = $('input[name="name"]', el.body);
      const phoneInput = $('input[name="phone"]', el.body);
      const consent = $('input[name="consent"]', el.body);
      const consentError = $('[data-consent-error]', el.body);
      let valid = true;

      if (!nameInput || nameInput.value.trim().length < 2) {
        if (nameInput) nameInput.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!phoneInput || phoneDigits(phoneInput.value).length !== 11) {
        if (phoneInput) phoneInput.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!consent || !consent.checked) {
        if (consentError) consentError.classList.add('is-visible');
        valid = false;
      }
      if (!valid) {
        const firstInvalid = $('.field.is-invalid input', el.body);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      state.submitted = true;
      el.next.disabled = true;
      el.next.textContent = 'Считаем...';
      window.setTimeout(showResult, 900);
    }

    function render() {
      if (state.submitted) return;
      const isContact = state.step === QUIZ_STEPS.length;
      const progress = isContact ? 100 : ((state.step + 1) / TOTAL_STEPS) * 100;

      if (el.progress) el.progress.style.width = `${progress}%`;
      if (el.step) el.step.textContent = `Шаг ${Math.min(state.step + 1, TOTAL_STEPS)} из ${TOTAL_STEPS}`;
      if (el.back) el.back.classList.toggle('is-visible', state.step > 0);
      if (el.next) {
        el.next.disabled = !isContact && !state.answers[QUIZ_STEPS[state.step].key];
        el.next.innerHTML = isContact ? `Получить расчёт ${icon('i-arrow')}` : `Далее ${icon('i-arrow')}`;
      }

      if (isContact) {
        renderContact();
      } else {
        renderQuestion();
      }

      window.requestAnimationFrame(() => {
        const focusTarget = isContact ? $('input', el.body) : $('.quiz__question', el.body);
        if (focusTarget) focusTarget.focus({ preventScroll: true });
      });
    }

    function goNext() {
      if (state.step < QUIZ_STEPS.length) {
        if (!state.answers[QUIZ_STEPS[state.step].key]) return;
        state.step += 1;
        render();
        return;
      }
      if (state.step === QUIZ_STEPS.length) submitContact();
    }

    function goBack() {
      if (state.step <= 0) return;
      state.step -= 1;
      render();
    }

    if (el.next) el.next.addEventListener('click', goNext);
    if (el.back) el.back.addEventListener('click', goBack);

    render();
  }

  const root = document.getElementById('projectQuiz');
  if (root) createQuiz(root);
})();
