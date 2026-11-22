(() => {
  'use strict';

  const DATA = window.PAMYATNAYA_DATA || {};

  const MONTHS_GEN = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const MONTHS_NOM = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const WEEKDAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const WEEKDAYS_SHORT = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const HOLIDAY_TYPES = {
    state: 'Государственный праздник',
    memorable: 'Памятная дата',
    professional: 'Профессиональный праздник',
    folk: 'Народная дата',
    religious: 'Религиозная дата',
    international: 'Международный день',
  };

  const CATEGORY = {
    history: {
      label: 'История России',
      modalLabel: '02 · История России',
      badgeClass: 'history',
    },
    wwii: {
      label: 'Великая Отечественная война',
      modalLabel: '03 · Великая Отечественная война',
      badgeClass: 'wwii',
    },
  };

  const COOKIE_KEY = 'pamyatnaya_alt_cookie_consent_v1';
  const today = startOfDay(new Date());
  const currentYear = today.getFullYear();
  let activeYear = currentYear;
  let selectedDate = today;

  /* ------------------------------------------------------------------ */
  /* Утилиты                                                            */
  /* ------------------------------------------------------------------ */

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return startOfDay(result);
  }

  function dateKey(date) {
    return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function isoDate(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function parseIso(value) {
    const parts = value.split('-').map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function formatDateLong(date) {
    return `${date.getDate()} ${MONTHS_GEN[date.getMonth()]} ${date.getFullYear()}, ${WEEKDAYS[date.getDay()]}`;
  }

  function formatDateShort(date) {
    return `${date.getDate()} ${MONTHS_GEN[date.getMonth()]} ${date.getFullYear()}`;
  }

  function formatDayMonth(key) {
    const month = Number(key.slice(0, 2)) - 1;
    const day = Number(key.slice(3, 5));
    return `${day} ${MONTHS_GEN[month]}`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getDay(date) {
    return DATA[dateKey(date)] || {
      holidays: [],
      history: { year: null, title: 'Событие уточняется', text: 'Материал по этой дате готовится к публикации.' },
      wwii: { year: null, title: 'Событие уточняется', text: 'Материал по этой дате готовится к публикации.' },
    };
  }

  /* ------------------------------------------------------------------ */
  /* Переходящие праздники                                              */
  /* ------------------------------------------------------------------ */

  const movableCache = new Map();

  function orthodoxEaster(year) {
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;
    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;
    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;
    return addDays(new Date(year, month - 1, day), 13);
  }

  function getMovableHolidays(year) {
    if (movableCache.has(year)) return movableCache.get(year);

    const easter = orthodoxEaster(year);
    const entries = [
      [addDays(easter, -56), 'Масленица (начало)', 'folk'],
      [addDays(easter, -49), 'Прощёное воскресенье', 'religious'],
      [addDays(easter, -7), 'Вербное воскресенье', 'religious'],
      [easter, 'Пасха', 'religious'],
      [addDays(easter, 9), 'Радоница', 'religious'],
      [addDays(easter, 49), 'Троица', 'religious'],
    ];

    const map = {};
    for (const [date, title, type] of entries) {
      const key = dateKey(date);
      if (!map[key]) map[key] = [];
      map[key].push({ t: title, type });
    }
    movableCache.set(year, map);
    return map;
  }

  function getHolidays(date) {
    const key = dateKey(date);
    const base = (DATA[key]?.holidays || []).slice();
    const movable = getMovableHolidays(date.getFullYear())[key] || [];
    const seen = new Set();
    const unique = [];
    for (const item of [...base, ...movable]) {
      if (seen.has(item.t)) continue;
      seen.add(item.t);
      unique.push(item);
    }
    return unique.slice(0, 3);
  }

  /* ------------------------------------------------------------------ */
  /* Сегодня                                                            */
  /* ------------------------------------------------------------------ */

  function renderToday(date = selectedDate) {
    const dateNode = document.getElementById('alt-today-date');
    const prefixNode = document.getElementById('alt-today-prefix');
    const isToday = date.getTime() === today.getTime();
    const dateLabel = `${date.getDate()} ${MONTHS_GEN[date.getMonth()]}${date.getFullYear() !== currentYear ? ' ' + date.getFullYear() : ''}`;

    if (dateNode) dateNode.textContent = dateLabel;
    if (prefixNode) prefixNode.textContent = isToday ? 'Сегодня, ' : '';

    const grid = document.getElementById('alt-today-grid');
    if (!grid) return;

    if (!Object.keys(DATA).length) {
      grid.innerHTML = '<div class="alt-fallback">Данные не загрузились. Обновите страницу.</div>';
      return;
    }

    const day = getDay(date);
    const holidays = getHolidays(date);
    const iso = isoDate(date);

    const holidayCard = `
      <button class="alt-event-card alt-event-card--holiday" type="button" data-alt-open-date="${iso}">
        <div class="alt-event-card__body">
          <span class="alt-event-card__badge alt-event-card__badge--inline">Праздники России</span>
          <h3 class="alt-event-card__title">${holidays.length ? escapeHtml(holidays[0].t) : 'Праздников нет'}</h3>
          ${holidays.length > 1
            ? `<ul class="alt-holiday-list">${holidays.slice(1).map((h) => `<li>${escapeHtml(h.t)}</li>`).join('')}</ul>`
            : ''}
          <span class="alt-event-card__more">Все даты дня →</span>
        </div>
      </button>
    `;

    const historyCard = eventCardHtml(day.history, 'history', iso, 'История России');
    const wwiiCard = eventCardHtml(day.wwii, 'wwii', iso, 'Великая Отечественная война');

    grid.innerHTML = holidayCard + historyCard + wwiiCard;
  }

  function eventCardHtml(item, type, iso, label) {
    return `
      <button class="alt-event-card alt-event-card--${type}" type="button" data-alt-open-event="${type}" data-alt-date="${iso}">
        <div class="alt-event-card__body">
          <span class="alt-event-card__badge alt-event-card__badge--inline">${escapeHtml(label)}</span>
          ${item?.year ? `<span class="alt-event-card__year">${escapeHtml(item.year)}</span>` : ''}
          <h3 class="alt-event-card__title">${escapeHtml(item?.title || 'Событие уточняется')}</h3>
          <span class="alt-event-card__more">Подробнее →</span>
        </div>
      </button>
    `;
  }

  /* ------------------------------------------------------------------ */
  /* Календарь                                                          */
  /* ------------------------------------------------------------------ */

  const monthsNode = document.getElementById('alt-months');
  const yearLabel = document.getElementById('alt-year-label');
  const yearPrev = document.getElementById('alt-year-prev');
  const yearNext = document.getElementById('alt-year-next');

  function buildCalendar(year) {
    if (!monthsNode) return;
    monthsNode.innerHTML = '';
    if (yearLabel) yearLabel.textContent = `${year} год`;

    const minYear = currentYear - 1;
    const maxYear = currentYear + 1;
    if (yearPrev) yearPrev.disabled = year <= minYear;
    if (yearNext) yearNext.disabled = year >= maxYear;

    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(year, month, 1);
      const daysCount = new Date(year, month + 1, 0).getDate();
      const offset = (firstDay.getDay() + 6) % 7;
      const cells = [];

      for (let i = 0; i < offset; i++) cells.push('<span class="alt-day is-outside" aria-hidden="true"></span>');

      for (let d = 1; d <= daysCount; d++) {
        const date = new Date(year, month, d);
        const classes = ['alt-day'];
        if (date.getDay() === 0 || date.getDay() === 6) classes.push('is-weekend');
        if (date.getTime() === today.getTime()) classes.push('is-today');

        cells.push(`<button class="${classes.join(' ')}" type="button" data-alt-date="${isoDate(date)}" aria-label="${escapeHtml(formatDateShort(date))}${date.getTime() === today.getTime() ? ', сегодня' : ''}">${d}</button>`);
      }

      const block = document.createElement('div');
      block.className = 'alt-month';
      block.innerHTML = `
        <h3>${MONTHS_NOM[month]}</h3>
        <div class="alt-weekdays" aria-hidden="true">${WEEKDAYS_SHORT.map((d) => `<span>${d}</span>`).join('')}</div>
        <div class="alt-days">${cells.join('')}</div>
      `;
      monthsNode.appendChild(block);
    }
  }

  function setYear(year) {
    activeYear = Math.min(Math.max(year, currentYear - 1), currentYear + 1);
    buildCalendar(activeYear);
  }

  /* ------------------------------------------------------------------ */
  /* Модальные окна                                                     */
  /* ------------------------------------------------------------------ */

  let lastFocused = null;
  let closeTimer = null;

  function getOpenModal() {
    return document.querySelector('.alt-modal.is-open');
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    const currentlyOpen = getOpenModal();
    if (currentlyOpen && currentlyOpen !== modal) closeModal(currentlyOpen, true);

    clearTimeout(closeTimer);
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('no-scroll');

    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      const dialog = modal.querySelector('.alt-modal__dialog');
      if (dialog) {
        dialog.setAttribute('tabindex', '-1');
        dialog.focus({ preventScroll: true });
      }
    });
  }

  function closeModal(modal, immediate = false) {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');

    const finish = () => {
      modal.hidden = true;
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
    };

    if (immediate) finish();
    else closeTimer = setTimeout(finish, 180);
  }

  function holidayChipsHtml(holidays) {
    if (!holidays.length) return '<p class="alt-modal-card__label">Праздников нет</p>';
    return holidays.map((holiday) => {
      const type = HOLIDAY_TYPES[holiday.type] || 'Праздник';
      return `<span class="alt-modal-holiday">${escapeHtml(holiday.t)}<small>${escapeHtml(type)}</small></span>`;
    }).join('');
  }

  function openDateModal(iso) {
    const date = parseIso(iso);
    const day = getDay(date);
    const holidays = getHolidays(date);
    const body = document.getElementById('alt-date-modal-body');
    if (!body) return;

    body.innerHTML = `
      <div class="alt-date-head">
        <p class="alt-kicker">Выбранная дата</p>
        <h2 id="alt-date-modal-title">${escapeHtml(formatDateLong(date))}</h2>
        <p>Праздники, событие истории России и событие Великой Отечественной войны</p>
      </div>

      <div class="alt-modal-cards">
        <section class="alt-modal-card">
          <p class="alt-modal-card__label">01 · Праздники</p>
          <div class="alt-modal-holidays">${holidayChipsHtml(holidays)}</div>
        </section>

        <section class="alt-modal-card alt-modal-card--history">
          <p class="alt-modal-card__label">${CATEGORY.history.modalLabel}</p>
          ${day.history?.year ? `<span class="alt-modal-card__year">${escapeHtml(day.history.year)}</span>` : ''}
          <h3>${escapeHtml(day.history?.title || 'Событие уточняется')}</h3>
          <p>${escapeHtml(day.history?.text || 'Материал готовится к публикации.')}</p>
          <button class="alt-modal-card__link" type="button" data-alt-open-event="history" data-alt-date="${iso}">Подробнее →</button>
        </section>

        <section class="alt-modal-card alt-modal-card--wwii">
          <p class="alt-modal-card__label">${CATEGORY.wwii.modalLabel}</p>
          ${day.wwii?.year ? `<span class="alt-modal-card__year">${escapeHtml(day.wwii.year)}</span>` : ''}
          <h3>${escapeHtml(day.wwii?.title || 'Событие уточняется')}</h3>
          <p>${escapeHtml(day.wwii?.text || 'Материал готовится к публикации.')}</p>
          <button class="alt-modal-card__link" type="button" data-alt-open-event="wwii" data-alt-date="${iso}">Подробнее →</button>
        </section>
      </div>

      <p class="alt-note alt-note--plain">Материалы носят просветительский характер и требуют редакторской проверки. Сайт не является официальным ресурсом органов власти.</p>
    `;

    openModal('alt-date-modal');
  }

  function openEventModal(iso, type) {
    const date = parseIso(iso);
    const day = getDay(date);
    const item = day[type];
    if (!item) return;

    const body = document.getElementById('alt-event-modal-body');
    if (!body) return;

    const category = type === 'history' ? CATEGORY.history : CATEGORY.wwii;
    const isStub = !item.year;

    body.innerHTML = `
      <span class="alt-event-badge alt-event-badge--${category.badgeClass}">${escapeHtml(category.label)}</span>
      ${item.year ? `<span class="alt-modal-card__year">${escapeHtml(item.year)}</span>` : ''}
      <h2 class="alt-event-title" id="alt-event-modal-title">${escapeHtml(item.title)}</h2>
      <p class="alt-event-text">${escapeHtml(item.text)}</p>
      ${isStub ? '<p class="alt-note">Полное описание этой даты готовится. Загляните позже или предложите материал на p.zhibinov@yandex.ru.</p>' : ''}
      <p class="alt-event-source">Дата: ${escapeHtml(formatDateShort(date))}. Материал подготовлен по открытым историческим данным и требует редакторской проверки. Источник уточняется.</p>
    `;

    openModal('alt-event-modal');
  }

  function initModalControls() {
    document.addEventListener('click', (event) => {
      const closeTrigger = event.target.closest('[data-alt-close]');
      if (closeTrigger) {
        closeModal(closeTrigger.closest('.alt-modal'));
        return;
      }

      const dateTrigger = event.target.closest('[data-alt-open-date]');
      if (dateTrigger) {
        openDateModal(dateTrigger.dataset.altOpenDate);
        return;
      }

      const eventTrigger = event.target.closest('[data-alt-open-event]');
      if (eventTrigger) {
        const inDateModal = eventTrigger.closest('#alt-date-modal');
        if (inDateModal) closeModal(inDateModal, true);
        openEventModal(eventTrigger.dataset.altDate, eventTrigger.dataset.altOpenEvent);
      }
    });

    document.addEventListener('keydown', (event) => {
      const modal = getOpenModal();
      if (!modal) return;

      if (event.key === 'Escape') {
        closeModal(modal);
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = Array.from(modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Поиск                                                              */
  /* ------------------------------------------------------------------ */

  const searchForm = document.getElementById('alt-search-form');
  const searchInput = document.getElementById('alt-search-input');
  const searchClear = document.getElementById('alt-search-clear');
  const searchResults = document.getElementById('alt-search-results');
  const searchIndex = [];

  function buildSearchIndex() {
    for (const key in DATA) {
      const day = DATA[key];
      const dateLabel = formatDayMonth(key);
      for (const holiday of day.holidays || []) {
        searchIndex.push({ key, type: 'holiday', title: holiday.t, label: `Праздник · ${dateLabel}` });
      }
      if (day.history?.title) searchIndex.push({ key, type: 'history', title: day.history.title, year: day.history.year, label: `История России · ${dateLabel}` });
      if (day.wwii?.title) searchIndex.push({ key, type: 'wwii', title: day.wwii.title, year: day.wwii.year, label: `ВОВ · ${dateLabel}` });
    }
  }

  function setSearchExpanded(value) {
    if (searchInput) searchInput.setAttribute('aria-expanded', String(value));
    if (searchResults) searchResults.hidden = !value;
  }

  function renderSearchResults(query) {
    if (!searchInput || !searchResults) return;
    const normalized = query.trim().toLowerCase();
    if (searchClear) searchClear.hidden = !normalized;

    if (normalized.length < 2) {
      searchResults.innerHTML = '';
      setSearchExpanded(false);
      return;
    }

    const matches = searchIndex
      .filter((item) => item.title.toLowerCase().includes(normalized))
      .slice(0, 8);

    if (!matches.length) {
      searchResults.innerHTML = '<div class="alt-search__empty">Ничего не найдено</div>';
      setSearchExpanded(true);
      return;
    }

    searchResults.innerHTML = matches.map((item) => `
      <button class="alt-search__result" type="button" data-search-key="${item.key}" data-search-type="${item.type}">
        <small>${escapeHtml(item.label)}</small>
        <span>${escapeHtml(item.title)}</span>
      </button>
    `).join('');
    setSearchExpanded(true);
  }

  function initSearch() {
    if (!searchForm || !searchInput) return;
    buildSearchIndex();

    searchForm.addEventListener('submit', (event) => event.preventDefault());
    searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2) renderSearchResults(searchInput.value);
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        renderSearchResults('');
      });
    }

    if (searchResults) {
      searchResults.addEventListener('click', (event) => {
        const button = event.target.closest('[data-search-key]');
        if (!button) return;
        const key = button.dataset.searchKey;
        const type = button.dataset.searchType;
        const month = Number(key.slice(0, 2)) - 1;
        const day = Number(key.slice(3, 5));
        const iso = isoDate(new Date(activeYear, month, day));
        setSearchExpanded(false);
        if (type === 'holiday') openDateModal(iso);
        else openEventModal(iso, type);
      });
    }

    document.addEventListener('click', (event) => {
      if (!searchForm.contains(event.target)) setSearchExpanded(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && searchInput === document.activeElement) {
        setSearchExpanded(false);
        searchInput.blur();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Подписка                                                           */
  /* ------------------------------------------------------------------ */

  function initSubscribeForm() {
    const form = document.getElementById('alt-subscribe-form');
    if (!form) return;

    const emailInput = document.getElementById('alt-subscribe-email');
    const consentInput = document.getElementById('alt-subscribe-consent');
    const errorNode = document.getElementById('alt-subscribe-error');
    const successNode = document.getElementById('alt-subscribe-success');

    function showError(message) {
      if (!errorNode) return;
      errorNode.textContent = message;
      errorNode.hidden = false;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (errorNode) errorNode.hidden = true;
      if (successNode) successNode.hidden = true;

      const email = (emailInput?.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        if (emailInput) {
          emailInput.setAttribute('aria-invalid', 'true');
          emailInput.focus();
        }
        showError('Введите корректный e-mail, например name@example.ru.');
        return;
      }
      if (emailInput) emailInput.removeAttribute('aria-invalid');

      if (!consentInput?.checked) {
        showError('Для подписки нужно согласие на обработку персональных данных.');
        consentInput?.focus();
        return;
      }

      if (successNode) {
        successNode.hidden = false;
        successNode.textContent = `Спасибо! В рабочей версии на ${email} придёт письмо для подтверждения подписки.`;
      }
      form.reset();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Cookie                                                             */
  /* ------------------------------------------------------------------ */

  function initCookies() {
    const banner = document.getElementById('alt-cookie');
    if (!banner) return;

    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(COOKIE_KEY) || 'null');
    } catch (error) {
      saved = null;
    }

    if (saved && saved.version) {
      banner.hidden = true;
      return;
    }

    setTimeout(() => { banner.hidden = false; }, 700);

    banner.querySelectorAll('[data-alt-cookie]').forEach((button) => {
      button.addEventListener('click', () => {
        const value = {
          version: '1.0',
          necessary: true,
          analytics: button.dataset.altCookie === 'all',
          date: new Date().toISOString(),
        };
        try { localStorage.setItem(COOKIE_KEY, JSON.stringify(value)); } catch (error) { /* ignore */ }
        banner.hidden = true;
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Навигация и донаты                                                 */
  /* ------------------------------------------------------------------ */

  function initHeader() {
    const toggle = document.getElementById('alt-burger');
    const nav = document.getElementById('alt-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Открыть меню');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 920) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initDonate() {
    const openButton = document.getElementById('alt-donate-open');
    if (!openButton) return;
    openButton.addEventListener('click', () => openModal('alt-donate-modal'));
  }

  function init() {
    renderToday();
    buildCalendar(activeYear);
    initModalControls();
    initSearch();
    initSubscribeForm();
    initCookies();
    initHeader();
    initDonate();

    const dayPrev = document.getElementById('alt-day-prev');
    const dayNext = document.getElementById('alt-day-next');
    if (dayPrev) dayPrev.addEventListener('click', () => { selectedDate = addDays(selectedDate, -1); renderToday(); });
    if (dayNext) dayNext.addEventListener('click', () => { selectedDate = addDays(selectedDate, 1); renderToday(); });

    if (yearPrev) yearPrev.addEventListener('click', () => setYear(activeYear - 1));
    if (yearNext) yearNext.addEventListener('click', () => setYear(activeYear + 1));

    if (monthsNode) {
      monthsNode.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-alt-date]');
        if (button) openDateModal(button.dataset.altDate);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
