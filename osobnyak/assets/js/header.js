(() => {
  'use strict';

  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const burger = document.querySelector('.burger');
  const backdrop = document.getElementById('menuBackdrop');

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    backdrop?.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) closeMenu();
    });
  }
})();
