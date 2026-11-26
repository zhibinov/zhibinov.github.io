(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var dropdown = document.querySelector("[data-dropdown]");
  if (dropdown) {
    var toggle = dropdown.querySelector(".nav__toggle");
    var close = function () {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var open = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    dropdown.addEventListener("click", function (event) {
      if (event.target.closest("a")) close();
    });
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) close();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  var menu = document.getElementById("mmenu");
  var burger = document.querySelector(".burger");
  var menuClose = document.querySelector(".mmenu__close");
  var openMenu = function () {
    if (!menu) return;
    menu.hidden = false;
    document.body.classList.add("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "true");
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

  document.querySelectorAll(".svc__row").forEach(function (row) {
    var button = row.querySelector(".svc__btn");
    if (!button) return;
    button.addEventListener("click", function () {
      var open = row.classList.contains("is-open");
      document.querySelectorAll(".svc__row").forEach(function (other) {
        other.classList.remove("is-open");
        var otherButton = other.querySelector(".svc__btn");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        row.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  var track = document.getElementById("rev-track");
  if (track) {
    var step = function () {
      var card = track.querySelector(".rev");
      if (!card) return 340;
      var gap = parseInt(window.getComputedStyle(track).columnGap || "16", 10);
      return card.getBoundingClientRect().width + (isNaN(gap) ? 16 : gap);
    };
    var move = function (direction) {
      track.scrollBy({ left: step() * direction, behavior: reduceMotion ? "auto" : "smooth" });
    };
    var prev = document.querySelector("[data-prev]");
    var next = document.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", function () { move(-1); });
    if (next) next.addEventListener("click", function () { move(1); });
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
