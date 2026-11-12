(() => {
  'use strict';

  const WORD_RE = /(^|[\s(«"„—–-])(в|во|на|с|со|к|ко|у|о|об|обо|и|а|но|не|ни|по|из|изо|от|ото|до|за|без|для|при|про|над|под|через|между|или|что|как|так|все|всё|это|же|ли|бы|мы|вы|он|она|они|я|ты|их|им|его|ее|её|то|та|те|тот|эта|эти|этот|наш|ваш|мой|свой|там|тут|где|когда|если|уже|ещё|около|после|перед|кроме|ради|среди|вдоль|возле|мимо|сквозь)\s+/gi;
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'CODE', 'PRE', 'SVG', 'PATH', 'USE']);

  function applyTypography(root = document.body) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || SKIP.has(parent.tagName) || parent.isContentEditable) return NodeFilter.FILTER_REJECT;
        if (parent.closest('[data-no-typography]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const next = node.nodeValue.replace(WORD_RE, (match, lead, word) => lead + word + '\u00A0');
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }

  window.applyTypography = applyTypography;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyTypography());
  } else {
    applyTypography();
  }
})();
