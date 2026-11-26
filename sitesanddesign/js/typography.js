(function () {
  "use strict";

  var SHORT = [
    "в", "во", "на", "с", "со", "к", "ко", "по", "из", "изо", "от", "ото",
    "до", "за", "для", "при", "без", "под", "подо", "над", "надо", "о", "об",
    "обо", "у", "и", "а", "но", "или", "не", "ни", "то", "же", "бы", "ли",
    "про", "перед", "через", "между", "около", "после", "ради", "среди",
    "кроме", "вокруг", "сквозь", "даже", "лишь", "уже", "ведь", "вот"
  ];

  var SHORT_SET = {};
  SHORT.forEach(function (word) {
    SHORT_SET[word] = true;
  });
  var SHORT_TAIL_RE = /([A-Za-zА-Яа-яЁё]+)$/;
  var SPACE_RE = /^[ \t\n\r\u00A0]+$/;
  var NEXT_WORD_RE = /^[A-Za-zА-Яа-яЁё0-9«"„(]/;
  var DASH_RE = /([^\s])\s+([\u2014\u2013])\s+/g;
  var UNIT_RE = /(\d)\s+(₽|руб\.?|%|км|м²|м2|px|лет|года|год|дней|день)/g;
  var EDGE_END_RE = new RegExp(
    "(^|\\s)(" + SHORT.join("|") + ")\\s+$",
    "i"
  );
  var EDGE_START_RE = /^\s*[A-Za-z\u0410-\u044F\u0401\u04510-9\u00AB\u201E(\"]/;

  var SKIP_TAGS = {
    SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, SVG: 1, NOSCRIPT: 1,
    TEXTAREA: 1, SELECT: 1, OPTION: 1, INPUT: 1, KBD: 1, SAMP: 1
  };

  function isSkipped(node) {
    var el = node.parentElement;
    while (el) {
      if (SKIP_TAGS[el.tagName]) return true;
      if (el.isContentEditable) return true;
      if (el.classList && (el.classList.contains("no-typo") || el.classList.contains("screen-reader-text"))) return true;
      el = el.parentElement;
    }
    return false;
  }

  function bindShortWords(value) {
    var parts = value.split(/([ \t\n\r\u00A0]+)/);
    for (var i = 0; i < parts.length - 2; i += 1) {
      if (!SPACE_RE.test(parts[i + 1])) continue;
      var tail = parts[i].match(SHORT_TAIL_RE);
      if (!tail || !SHORT_SET[tail[1].toLowerCase()]) continue;
      if (!parts[i + 2] || !NEXT_WORD_RE.test(parts[i + 2])) continue;
      parts[i + 1] = "\u00A0";
    }
    return parts.join("");
  }

  function tidyNode(node) {
    var value = node.nodeValue;
    if (!value || !/[А-Яа-яЁё]/.test(value)) return;
    var next = bindShortWords(value)
      .replace(DASH_RE, "$1\u00A0$2 ")
      .replace(UNIT_RE, "$1\u00A0$2");
    if (next !== value) node.nodeValue = next;
  }

  function nextTextNode(node) {
    var current = node.nextSibling;
    while (current) {
      if (current.nodeType === 3 && current.nodeValue.trim()) return current;
      if (current.nodeType === 1) {
        if (current.tagName === "BR") return null;
        var display = window.getComputedStyle(current).display;
        if (display === "block" || display === "flex" || display === "grid" || display === "list-item") return null;
        var text = current.textContent;
        if (text && text.trim()) return current;
      }
      current = current.nextSibling;
    }
    return null;
  }

  function tidyEdges(node) {
    var value = node.nodeValue;
    if (!value || !EDGE_END_RE.test(value)) return;
    var next = nextTextNode(node);
    if (!next) return;
    var text = next.nodeType === 3 ? next.nodeValue : next.textContent;
    if (!EDGE_START_RE.test(text)) return;
    node.nodeValue = value.replace(/\s+$/, "\u00A0");
  }

  function run(root) {
    var scope = root || document.body;
    if (!scope) return;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (item) {
      if (!isSkipped(item)) tidyNode(item);
    });
    nodes.forEach(function (item) {
      if (!isSkipped(item)) tidyEdges(item);
    });
  }

  window.sndTypograph = run;
  run();
  if (document.readyState !== "complete") {
    document.addEventListener("DOMContentLoaded", function () {
      run();
    });
  }
})();
