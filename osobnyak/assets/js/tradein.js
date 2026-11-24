(() => {
  'use strict';

  const promo = document.getElementById('tradeinPromo');
  const target = document.getElementById('tradein');
  if (!promo || !target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let shown = false;
  const show = () => {
    if (shown) return;
    shown = true;
    promo.classList.add('is-visible');
  };

  const banner = document.getElementById('cookieBanner');
  const COOKIE_KEY = 'osobnyakCookieAccepted';
  let cookieAccepted = false;
  try {
    cookieAccepted = localStorage.getItem(COOKIE_KEY) === '1';
  } catch (e) {}

  function scheduleShow() {
    if (!banner || cookieAccepted) {
      window.setTimeout(show, 1800);
      return;
    }

    let armed = true;
    const reveal = () => {
      if (!armed) return;
      armed = false;
      window.setTimeout(show, 500);
    };

    banner.addEventListener('click', (e) => {
      if (e.target.closest('[data-cookie-accept]')) reveal();
    });

    const observer = new MutationObserver(() => {
      if (!document.body.contains(banner)) {
        observer.disconnect();
        reveal();
      }
    });
    observer.observe(document.body, { childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleShow);
  } else {
    scheduleShow();
  }

  promo.addEventListener('click', (e) => {
    e.preventDefault();
    promo.classList.add('is-hidden');
    window.setTimeout(() => promo.remove(), 350);
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    if (history.replaceState) history.replaceState(null, '', '#tradein');
  });
})();
