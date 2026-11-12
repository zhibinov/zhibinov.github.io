(() => {
  'use strict';

  const toTop = document.getElementById('toTop');
  if (!toTop) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onScroll = () => toTop.classList.toggle('is-visible', window.scrollY > 700);

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });
})();
