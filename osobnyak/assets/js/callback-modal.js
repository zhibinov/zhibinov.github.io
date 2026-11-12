(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const modal = document.getElementById('callbackModal');
  if (!modal) return;

  const title = $('#callbackTitle', modal);
  const subtitle = $('.callback__sub', modal);
  const form = $('#callbackForm', modal);
  const nameInput = $('#callbackName', modal);
  const phoneInput = $('#callbackPhone', modal);
  const consent = form ? $('input[name="consent"]', form) : null;
  const consentLabel = consent ? consent.closest('.form-consent') : null;
  const submitBtn = $('#callbackSubmit', modal);
  const success = $('#callbackSuccess', modal);
  const defaultSubtitle = subtitle ? subtitle.textContent : 'Оставьте имя и телефон — перезвоним, ответим на вопросы и поможем с выбором.';
  let lastFocused = null;

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

  if (phoneInput) {
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value) phoneInput.value = '+7 (';
    });
    phoneInput.addEventListener('input', () => {
      phoneInput.value = formatPhone(phoneInput.value);
      phoneInput.closest('.field')?.classList.remove('is-invalid');
    });
    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value === '+7 (' || phoneInput.value === '+7') phoneInput.value = '';
    });
  }
  if (nameInput) {
    nameInput.addEventListener('input', () => nameInput.closest('.field')?.classList.remove('is-invalid'));
  }
  if (consent) {
    consent.addEventListener('change', () => consentLabel?.classList.remove('is-invalid'));
  }

  function resetForm() {
    if (!form) return;
    form.reset();
    form.style.display = '';
    if (phoneInput) phoneInput.value = '';
    if (success) success.classList.remove('is-visible');
    $$('.field.is-invalid', form).forEach((field) => field.classList.remove('is-invalid'));
    if (consentLabel) consentLabel.classList.remove('is-invalid');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Отправить заявку <svg class="icon" aria-hidden="true"><use href="#i-arrow"></use></svg>';
    }
  }

  function openModal(titleText = 'Оставить заявку') {
    resetForm();
    if (title) title.textContent = titleText;
    if (subtitle) {
      subtitle.textContent = titleText.toLowerCase().includes('pdf')
        ? 'Оставьте имя и телефон — отправим PDF проекта и ответим на вопросы.'
        : defaultSubtitle;
    }
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    window.applyTypography?.(modal);
    window.setTimeout(() => $('.modal__close', modal)?.focus(), 40);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  $$('[data-open-form]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.dataset.openForm || 'Оставить заявку');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-callback]')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusable = $$('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
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

  if (form) {
    form.addEventListener('submit', (e) => {
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
      if (!consent || !consent.checked) {
        if (consentLabel) consentLabel.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) {
        $('.field.is-invalid input', form)?.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправляем...';
      }

      window.setTimeout(() => {
        form.style.display = 'none';
        if (success) success.classList.add('is-visible');
        window.applyTypography?.(modal);
      }, 900);
    });
  }
})();
