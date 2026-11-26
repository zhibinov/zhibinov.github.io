(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var dropdown = document.querySelector("[data-dropdown]");
  if (dropdown) {
    var toggle = dropdown.querySelector(".nav__toggle");
    var closeDropdown = function () {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var open = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    dropdown.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeDropdown();
    });
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) closeDropdown();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeDropdown();
    });
  }

  var menu = document.getElementById("mobile-menu");
  var burger = document.querySelector(".burger");
  var menuClose = document.querySelector(".mobile-menu__close");
  var openMenu = function () {
    if (!menu) return;
    menu.hidden = false;
    document.body.classList.add("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "true");
    if (menuClose) menuClose.focus();
  };
  var closeMenu = function () {
    if (!menu) return;
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "false");
      burger.focus();
    }
  };
  if (burger) burger.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && !menu.hidden) closeMenu();
  });

  document.querySelectorAll(".svc").forEach(function (card) {
    var head = card.querySelector(".svc__head");
    if (!head) return;
    head.addEventListener("click", function () {
      var isOpen = card.classList.contains("is-open");
      document.querySelectorAll(".svc").forEach(function (other) {
        other.classList.remove("is-open");
        var otherHead = other.querySelector(".svc__head");
        if (otherHead) otherHead.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        card.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
      }
    });
  });

  var track = document.getElementById("reviews-track");
  if (track) {
    var step = function () {
      var card = track.querySelector(".review");
      if (!card) return 360;
      var gap = parseInt(window.getComputedStyle(track).columnGap || "16", 10);
      return card.getBoundingClientRect().width + (isNaN(gap) ? 16 : gap);
    };
    var scrollByCard = function (direction) {
      track.scrollBy({ left: step() * direction, behavior: reduceMotion ? "auto" : "smooth" });
    };
    var prev = document.querySelector("[data-reviews-prev]");
    var next = document.querySelector("[data-reviews-next]");
    if (prev) prev.addEventListener("click", function () { scrollByCard(-1); });
    if (next) next.addEventListener("click", function () { scrollByCard(1); });
  }

  var revealTargets = document.querySelectorAll(
    ".section-head, .svc-note, .complex__card, .task, .case, .step, .why__item, .member, .post, .faq details, .banner__card, .geo__panel, .review"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-in"); });
  }

  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = form.querySelector(".form__message");
      if (message) {
        message.textContent = "Это концепт: отправка формы пока не подключена. На живом сайте здесь будет заявка.";
      }
    });
  });
})();
