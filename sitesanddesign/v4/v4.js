(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  var track = document.getElementById("rev-track");
  if (track) {
    var step = function () {
      var card = track.querySelector(".review-note");
      if (!card) return 340;
      var gap = parseInt(window.getComputedStyle(track).columnGap || "24", 10);
      return card.getBoundingClientRect().width + (isNaN(gap) ? 24 : gap);
    };
    var move = function (direction) {
      track.scrollBy({ left: step() * direction, behavior: reduceMotion ? "auto" : "smooth" });
    };
    var prev = document.querySelector("[data-prev]");
    var next = document.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", function () { move(-1); });
    if (next) next.addEventListener("click", function () { move(1); });
  }

  var dockLinks = Array.prototype.slice.call(document.querySelectorAll(".dock a[href^='#']"));
  if (dockLinks.length && "IntersectionObserver" in window) {
    var sections = dockLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    });
    var dockObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        dockLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (section) {
      if (section) dockObserver.observe(section);
    });
  }

  var totem = document.querySelector(".hero__totem");
  var hero = document.querySelector(".hero");
  if (totem && hero && !reduceMotion) {
    var raf = null;
    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    hero.addEventListener("mousemove", function (event) {
      var rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - .5) * 18;
      targetY = ((event.clientY - rect.top) / rect.height - .5) * 12;
      if (!raf) raf = window.requestAnimationFrame(updateTotem);
    });
    hero.addEventListener("mouseleave", function () {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = window.requestAnimationFrame(updateTotem);
    });
    var updateTotem = function () {
      currentX += (targetX - currentX) * .08;
      currentY += (targetY - currentY) * .08;
      totem.style.transform = "translateX(-50%) translate(" + currentX.toFixed(2) + "px," + currentY.toFixed(2) + "px)";
      if (Math.abs(targetX - currentX) > .1 || Math.abs(targetY - currentY) > .1) {
        raf = window.requestAnimationFrame(updateTotem);
      } else {
        raf = null;
      }
    };
    updateTotem();
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
