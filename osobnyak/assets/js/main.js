(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const icon = (id, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"></use></svg>`;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const storage = {
    get(key) {
      try { return sessionStorage.getItem(key); } catch (e) { return null; }
    },
    set(key, value) {
      try { sessionStorage.setItem(key, value); } catch (e) {}
    }
  };

  /* =========================================================
     Data
     ========================================================= */
  const PROJECTS = window.TYPICAL_PROJECTS || [];

  const DONE = window.DONE_PROJECTS || [];

  const FOUNDATIONS = [
    { img: 'foundation-1', caption: 'Монолитная плита', alt: 'Монолитная плита фундамента на объекте' },
    { img: 'foundation-2', caption: 'Армирование плиты', alt: 'Армирование монолитной плиты фундамента' },
    { img: 'foundation-3', caption: 'Ленточный фундамент', alt: 'Ленточный фундамент частного дома' },
    { img: 'foundation-4', caption: 'Опалубка и армирование', alt: 'Опалубка и армирование фундамента' },
    { img: 'foundation-5', caption: 'Закладка коммуникаций', alt: 'Закладка коммуникаций в фундаменте' },
    { img: 'foundation-6', caption: 'Схема устройства фундамента', alt: 'Схема устройства фундамента дома' }
  ];

  /* =========================================================
     Render cards
     ========================================================= */
  const projectsGrid = $('#projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = PROJECTS.map((p) => `
      <a class="project-card reveal" href="typical-project.html?id=${p.id}" data-floors="${p.floors}" data-area="${p.area}" aria-label="Открыть проект «${p.name}»">
        <div class="project-card__media">
          <img src="assets/img/${p.img}.jpg" alt="Проект дома «${p.name}» площадью ${p.area} м²" width="900" height="470" loading="lazy">
          <div class="project-card__badges"><span class="badge">${p.area} м²</span><span class="badge">${p.floorsLabel}</span></div>
        </div>
        <div class="project-card__body">
          <h3>«${p.name}»</h3>
          <p class="project-card__meta">${p.beds} ${plural(p.beds, 'спальня', 'спальни', 'спален')} · ${p.baths} ${plural(p.baths, 'санузел', 'санузла', 'санузлов')} · ${p.extra}</p>
          <div class="project-card__price">
            <b>${p.price}</b>
            <span class="project-card__link">Подробнее ${icon('i-arrow-up-right')}</span>
          </div>
        </div>
      </a>
    `).join('') + `
      <article class="project-card project-card--cta reveal" data-static="true">
        <div class="project-card__deco" aria-hidden="true"></div>
        <div>
          <h3>Нужен свой проект?</h3>
          <p>Спроектируем дом с нуля под ваш участок, состав семьи и образ жизни.</p>
        </div>
        <button class="btn btn--dark" type="button" data-open-quiz>Обсудить проект ${icon('i-arrow')}</button>
      </article>
    `;
  }

  const doneGrid = $('#doneGrid');
  if (doneGrid) {
    doneGrid.innerHTML = DONE.map((d) => `
      <a class="done-card reveal${d.wide ? ' done-card--wide' : ''}" href="project.html?id=${d.id}" aria-label="Открыть проект: ${d.title}">
        <img src="assets/img/${d.img}.jpg" alt="${d.alt}" width="1000" height="522" loading="lazy">
        <div class="done-card__content">
          <div class="done-card__top"><span class="done-card__year">${d.year}</span><span class="done-card__area">${d.area} м²</span></div>
          <h3>${d.title}</h3>
          <p>Проект «${d.project}» · ${d.place} · сдан в срок</p>
          <span class="done-card__link">Подробнее ${icon('i-arrow-up-right')}</span>
        </div>
      </a>
    `).join('');
  }

  const foundationGallery = $('#foundationGallery');
  if (foundationGallery) {
    foundationGallery.innerHTML = FOUNDATIONS.map((f, i) => `
      <button class="gallery__item" type="button" data-index="${i}" aria-label="Открыть фото: ${f.caption}">
        <img src="assets/img/${f.img}.jpg" alt="${f.alt}" width="900" height="470" loading="lazy">
        <span class="gallery__zoom">${icon('i-expand')}</span>
        <span class="gallery__caption">${f.caption}</span>
      </button>
    `).join('');
  }

  /* =========================================================
     Header / mobile menu / scroll
     ========================================================= */
  const header = $('#header');
  const toTop = $('#toTop');
  const burger = $('.burger');
  const nav = $('#nav');
  const menuBackdrop = $('#menuBackdrop');

  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
  }

  function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('menu-open');
  }

  function openMenu() {
    if (!nav || !burger) return;
    nav.classList.add('is-open');
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    document.body.classList.add('menu-open');
  }

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.contains('is-open') ? closeMenu() : openMenu();
    });
    $$('a', nav).forEach((link) => link.addEventListener('click', closeMenu));
    if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) closeMenu();
    });
  }

  /* =========================================================
     Reveal on scroll
     ========================================================= */
  const revealEls = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* =========================================================
     Projects filter
     ========================================================= */
  const filters = $$('.filter');
  const projectCards = $$('.project-card[data-floors]');
  const projectsCount = $('#projectsCount');

  function plural(n, one, few, many) {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  }

  function updateProjectsCount() {
    if (!projectsCount) return;
    const visible = projectCards.filter((card) => !card.classList.contains('is-hidden')).length;
    projectsCount.textContent = `${visible} ${plural(visible, 'проект', 'проекта', 'проектов')}`;
  }

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.toggle('is-active', b === btn));
      const filter = btn.dataset.filter;
      projectCards.forEach((card) => {
        const floors = card.dataset.floors;
        const area = Number(card.dataset.area);
        const show = filter === 'all'
          || (filter === '1' && floors === '1')
          || (filter === '2' && floors === '2')
          || (filter === 'small' && area < 130)
          || (filter === 'large' && area >= 150);
        card.classList.toggle('is-hidden', !show);
      });
      updateProjectsCount();
    });
  });
  updateProjectsCount();

  /* =========================================================
     Lightbox
     ========================================================= */
  const lightbox = $('#lightbox');
  const lightboxImg = lightbox ? $('img', lightbox) : null;
  const lightboxCaption = lightbox ? $('.lightbox__caption', lightbox) : null;
  let lightboxIndex = 0;
  let lightboxTrigger = null;
  let lightboxItems = FOUNDATIONS;

  function showLightbox(index) {
    if (!lightbox || !lightboxImg || !lightboxItems.length) return;
    lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    const item = lightboxItems[lightboxIndex];
    lightboxImg.src = `assets/img/${item.img}.jpg`;
    lightboxImg.alt = item.alt;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
  }

  function openLightbox(index, trigger, items = FOUNDATIONS) {
    if (!lightbox) return;
    lightboxItems = items;
    lightboxTrigger = trigger || null;
    showLightbox(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $('.lightbox__close', lightbox)?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lightboxTrigger) lightboxTrigger.focus();
  }

  if (foundationGallery && lightbox) {
    foundationGallery.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery__item');
      if (!item) return;
      openLightbox(Number(item.dataset.index), item);
    });

    $('.lightbox__close', lightbox)?.addEventListener('click', closeLightbox);
    $('.lightbox__prev', lightbox)?.addEventListener('click', () => showLightbox(lightboxIndex - 1));
    $('.lightbox__next', lightbox)?.addEventListener('click', () => showLightbox(lightboxIndex + 1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightbox(lightboxIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(lightboxIndex + 1);
    });
  }

  /* =========================================================
     Phone helpers
     ========================================================= */
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

  $$('input[type="tel"]').forEach(initPhoneInput);

  /* =========================================================
     Send project form
     ========================================================= */
  const sendForm = $('#sendForm');
  if (sendForm) {
    const nameInput = $('#sendName');
    const phoneInput = $('#sendPhone');
    const fileInput = $('#projectFile');
    const dropzone = $('#dropzone');
    const fileChip = $('#fileChip');
    const fileChipName = fileChip ? $('.file-chip__name', fileChip) : null;
    const fileRemove = fileChip ? $('.file-chip__remove', fileChip) : null;
    const fileField = fileInput ? fileInput.closest('.field') : null;
    const consent = $('input[name="consent"]', sendForm);
    const consentLabel = consent ? consent.closest('.form-consent') : null;
    const submitBtn = $('#sendSubmit');
    const success = $('#sendSuccess');
    const sendAgain = $('#sendAgain');
    let selectedFile = null;

    const allowedExt = ['pdf', 'dwg', 'dxf', 'jpg', 'jpeg', 'png', 'zip', 'rar'];
    const maxSize = 20 * 1024 * 1024;

    function formatSize(bytes) {
      if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' КБ';
      return (bytes / 1024 / 1024).toFixed(1).replace('.', ',') + ' МБ';
    }

    function setFile(file) {
      if (!file) return;
      const ext = file.name.split('.').pop().toLowerCase();
      if (!allowedExt.includes(ext)) {
        alert('Можно прикрепить файл формата PDF, DWG, DXF, JPG, PNG, ZIP или RAR.');
        return;
      }
      if (file.size > maxSize) {
        alert('Файл слишком большой. Максимальный размер — 20 МБ.');
        return;
      }
      selectedFile = file;
      if (fileChipName) fileChipName.textContent = `${file.name} · ${formatSize(file.size)}`;
      if (fileChip) fileChip.classList.add('is-visible');
      if (fileField) fileField.classList.remove('is-invalid');
      if (dropzone) dropzone.classList.add('has-file');
    }

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) setFile(fileInput.files[0]);
      });
    }

    if (dropzone) {
      ['dragenter', 'dragover'].forEach((eventName) => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.add('is-dragover');
        });
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.remove('is-dragover');
        });
      });
      dropzone.addEventListener('drop', (e) => {
        const file = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files[0] : null;
        if (file) setFile(file);
      });
    }

    if (fileRemove) {
      fileRemove.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectedFile = null;
        if (fileInput) fileInput.value = '';
        if (fileChip) fileChip.classList.remove('is-visible');
        if (dropzone) dropzone.classList.remove('has-file');
      });
    }

    function clearFieldError(input) {
      if (!input) return;
      const field = input.closest('.field');
      if (field) field.classList.remove('is-invalid');
    }

    if (nameInput) nameInput.addEventListener('input', () => clearFieldError(nameInput));
    if (phoneInput) phoneInput.addEventListener('input', () => clearFieldError(phoneInput));
    if (consent) consent.addEventListener('change', () => consentLabel && consentLabel.classList.remove('is-invalid'));

    sendForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      if (!nameInput || nameInput.value.trim().length < 2) {
        if (nameInput) nameInput.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!phoneInput || phoneDigits(phoneInput.value).length !== 11) {
        if (phoneInput) phoneInput.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!selectedFile) {
        if (fileField) fileField.classList.add('is-invalid');
        valid = false;
      }
      if (!consent || !consent.checked) {
        if (consentLabel) consentLabel.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) {
        const firstInvalid = $('.field.is-invalid input, .field.is-invalid textarea', sendForm);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправляем...';
      }

      window.setTimeout(() => {
        sendForm.style.display = 'none';
        if (success) success.classList.add('is-visible');
        storage.set('leadSent', '1');
      }, 900);
    });

    if (sendAgain) {
      sendAgain.addEventListener('click', () => {
        sendForm.reset();
        selectedFile = null;
        if (fileChip) fileChip.classList.remove('is-visible');
        if (dropzone) dropzone.classList.remove('has-file');
        if (fileField) fileField.classList.remove('is-invalid');
        if (consentLabel) consentLabel.classList.remove('is-invalid');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Отправить проект ${icon('i-arrow')}`;
        }
        if (success) success.classList.remove('is-visible');
        sendForm.style.display = '';
      });
    }
  }

  /* =========================================================
     Quiz
     ========================================================= */
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

  function createQuiz(root, variant, options = {}) {
    if (!root) return null;
    const isModal = Boolean(options.modal);
    const idBase = `quiz-${variant}`;
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
              <input type="radio" name="${idBase}-${question.key}" value="${option}" ${selected === option ? 'checked' : ''}>
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
            <label for="${idBase}-name">Ваше имя *</label>
            <input id="${idBase}-name" name="name" type="text" placeholder="Как к вам обращаться" autocomplete="name">
            <span class="quiz__error">Укажите имя</span>
          </div>
          <div class="field">
            <label for="${idBase}-phone">Телефон *</label>
            <input id="${idBase}-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" autocomplete="tel" inputmode="tel">
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
            <button class="btn btn--primary" type="button" data-result-projects>Смотреть проекты ${icon('i-arrow')}</button>
            ${isModal ? '<button class="btn btn--outline" type="button" data-close-modal>Закрыть</button>' : ''}
          </div>
          <p class="quiz__note">Менеджер свяжется с вами в течение рабочего дня. Предварительный расчёт не является публичной офертой.</p>
        </div>
      `;
      window.applyTypography?.(el.body);
      const projectsBtn = $('[data-result-projects]', el.body);
      if (projectsBtn) {
        projectsBtn.addEventListener('click', () => {
          if (isModal) root.dispatchEvent(new CustomEvent('quiz:close', { bubbles: true }));
          window.setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
          }, 60);
        });
      }
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
      storage.set('quizSubmitted', '1');
      el.next.disabled = true;
      el.next.textContent = 'Считаем...';
      root.dispatchEvent(new CustomEvent('quiz:submitted', { bubbles: true }));

      window.setTimeout(showResult, 900);
    }

    function render() {
      const isResult = state.submitted;
      if (isResult) return;

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

      if (isModal) {
        const main = root.closest('.modal__main');
        if (main) main.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      }
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
    return { root, state };
  }

  /* =========================================================
     Quiz instances + modal
     ========================================================= */
  const inlineQuizRoot = $('#quizInline');
  const modalRoot = $('#quizModal');
  const modalQuizRoot = $('#quizModalQuiz');

  createQuiz(inlineQuizRoot, 'inline');
  createQuiz(modalQuizRoot, 'modal', { modal: true });

  const AUTO_OPEN_DELAY = 60000;
  let autoTimer = null;
  let inlineQuizInView = false;
  let lastFocused = null;

  if (inlineQuizRoot && 'IntersectionObserver' in window) {
    const quizObserver = new IntersectionObserver((entries) => {
      inlineQuizInView = entries[0].isIntersecting;
    }, { threshold: 0.35 });
    quizObserver.observe(inlineQuizRoot);
  }

  function openModal() {
    if (!modalRoot || modalRoot.classList.contains('is-open')) return;
    closeMenu();
    window.clearTimeout(autoTimer);
    lastFocused = document.activeElement;
    modalRoot.classList.add('is-open');
    modalRoot.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    storage.set('quizModalOpened', '1');
    window.setTimeout(() => {
      const closeBtn = $('.modal__close', modalRoot);
      if (closeBtn) closeBtn.focus();
    }, 40);
  }

  function closeModal(remember = true) {
    if (!modalRoot || !modalRoot.classList.contains('is-open')) return;
    modalRoot.classList.remove('is-open');
    modalRoot.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (remember) storage.set('quizModalClosed', '1');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  $$('[data-open-quiz]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalRoot) {
    modalRoot.addEventListener('click', (e) => {
      if (e.target.closest('[data-close-modal]')) closeModal();
    });
    modalRoot.addEventListener('quiz:close', () => closeModal());
    modalRoot.addEventListener('quiz:submitted', () => {
      window.clearTimeout(autoTimer);
      storage.set('quizSubmitted', '1');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modalRoot || !modalRoot.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key !== 'Tab') return;

    const focusable = $$('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', modalRoot)
      .filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  function scheduleAutoOpen() {
    if (!modalRoot) return;
    if (storage.get('quizSubmitted') || storage.get('quizModalClosed') || storage.get('quizModalOpened') || storage.get('callbackOpened')) return;
    autoTimer = window.setTimeout(() => {
      if (storage.get('quizSubmitted') || storage.get('quizModalClosed') || storage.get('quizModalOpened') || storage.get('callbackOpened')) return;
      if (document.visibilityState !== 'visible') {
        scheduleAutoOpen();
        return;
      }
      if (inlineQuizInView) {
        storage.set('quizModalSkipped', '1');
        return;
      }
      openModal();
    }, AUTO_OPEN_DELAY);
  }
  scheduleAutoOpen();

  let exitIntentArmed = false;
  window.setTimeout(() => { exitIntentArmed = true; }, 20000);
  document.addEventListener('mouseout', (e) => {
    if (!exitIntentArmed || window.innerWidth < 1024) return;
    if (e.relatedTarget || e.clientY > 0) return;
    if (storage.get('quizSubmitted') || storage.get('quizModalClosed') || storage.get('quizModalOpened') || storage.get('callbackOpened')) return;
    openModal();
  });

  /* =========================================================
     Callback modal
     ========================================================= */
  const callbackModal = $('#callbackModal');
  const callbackTitle = $('#callbackTitle');
  const callbackForm = $('#callbackForm');
  const callbackName = $('#callbackName');
  const callbackPhone = $('#callbackPhone');
  const callbackConsent = callbackForm ? $('input[name="consent"]', callbackForm) : null;
  const callbackConsentLabel = callbackConsent ? callbackConsent.closest('.form-consent') : null;
  const callbackSubmit = $('#callbackSubmit');
  const callbackSuccess = $('#callbackSuccess');
  let callbackLastFocused = null;

  function resetCallbackForm() {
    if (!callbackForm) return;
    callbackForm.reset();
    callbackForm.style.display = '';
    if (callbackSuccess) callbackSuccess.classList.remove('is-visible');
    $$('.field.is-invalid', callbackForm).forEach((field) => field.classList.remove('is-invalid'));
    if (callbackConsentLabel) callbackConsentLabel.classList.remove('is-invalid');
    if (callbackSubmit) {
      callbackSubmit.disabled = false;
      callbackSubmit.innerHTML = `Отправить заявку ${icon('i-arrow')}`;
    }
  }

  function openCallbackModal(title = 'Оставить заявку') {
    if (!callbackModal) return;
    window.clearTimeout(autoTimer);
    storage.set('callbackOpened', '1');
    closeMenu();
    resetCallbackForm();
    if (callbackTitle) callbackTitle.textContent = title;
    callbackLastFocused = document.activeElement;
    callbackModal.classList.add('is-open');
    callbackModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    window.setTimeout(() => {
      const closeBtn = $('.modal__close', callbackModal);
      if (closeBtn) closeBtn.focus();
    }, 40);
  }

  function closeCallbackModal() {
    if (!callbackModal) return;
    callbackModal.classList.remove('is-open');
    callbackModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (callbackLastFocused && typeof callbackLastFocused.focus === 'function') callbackLastFocused.focus();
  }

  $$('[data-open-form]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCallbackModal(btn.dataset.openForm || 'Оставить заявку');
    });
  });

  if (callbackModal) {
    callbackModal.addEventListener('click', (e) => {
      if (e.target.closest('[data-close-callback]')) closeCallbackModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!callbackModal || !callbackModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeCallbackModal();
      return;
    }
    if (e.key !== 'Tab') return;

    const focusable = $$('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', callbackModal)
      .filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  if (callbackForm) {
    if (callbackName) callbackName.addEventListener('input', () => callbackName.closest('.field')?.classList.remove('is-invalid'));
    if (callbackPhone) callbackPhone.addEventListener('input', () => callbackPhone.closest('.field')?.classList.remove('is-invalid'));
    if (callbackConsent) callbackConsent.addEventListener('change', () => callbackConsentLabel?.classList.remove('is-invalid'));

    callbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      if (!callbackName || callbackName.value.trim().length < 2) {
        if (callbackName) callbackName.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!callbackPhone || phoneDigits(callbackPhone.value).length !== 11) {
        if (callbackPhone) callbackPhone.closest('.field').classList.add('is-invalid');
        valid = false;
      }
      if (!callbackConsent || !callbackConsent.checked) {
        if (callbackConsentLabel) callbackConsentLabel.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) {
        const firstInvalid = $('.field.is-invalid input', callbackForm);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (callbackSubmit) {
        callbackSubmit.disabled = true;
        callbackSubmit.textContent = 'Отправляем...';
      }

      window.setTimeout(() => {
        callbackForm.style.display = 'none';
        if (callbackSuccess) callbackSuccess.classList.add('is-visible');
        storage.set('callbackSent', '1');
        window.applyTypography?.(callbackModal);
      }, 900);
    });
  }

  window.applyTypography?.();

  const callbackParam = new URLSearchParams(window.location.search).get('callback');
  if (callbackParam === '1' && callbackModal) {
    window.setTimeout(() => openCallbackModal('Обсудить проект'), 400);
  }
})();
