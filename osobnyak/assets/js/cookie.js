(() => {
  'use strict';

  const KEY = 'osobnyakCookieAccepted';
  const banner = document.getElementById('cookieBanner');

  if (!banner) return;

  let accepted = false;
  try {
    accepted = localStorage.getItem(KEY) === '1';
  } catch (e) {}

  if (accepted) return;

  const show = () => banner.classList.add('is-visible');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.setTimeout(show, 1200));
  } else {
    window.setTimeout(show, 1200);
  }

  banner.addEventListener('click', (e) => {
    if (!e.target.closest('[data-cookie-accept]')) return;
    try {
      localStorage.setItem(KEY, '1');
    } catch (e) {}
    banner.classList.remove('is-visible');
    window.setTimeout(() => banner.remove(), 400);
  });
})();
