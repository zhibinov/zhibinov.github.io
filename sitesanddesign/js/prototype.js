(function () {
  "use strict";

  /*
   * Прототип главной.
   * Не отправляем формы и мягко скроллим по внутренним якорям.
   * На живом сайте этот файл не подключается.
   */

  document.documentElement.classList.add("proto-js");

  /* Внутренние якоря */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });

      if (history.pushState) {
        history.pushState(null, "", id);
      }
    });
  });

  document.querySelectorAll(".sd-new-card").forEach(function (card) {
    var title = card.querySelector(".content-back h4");
    var front = card.querySelector(".content-front");
    if (!title || !front || front.querySelector(".proto-case-title")) return;
    var caption = document.createElement("span");
    caption.className = "proto-case-title";
    caption.textContent = title.textContent.trim();
    front.appendChild(caption);
  });

  /* Форма в прототипе не отправляет данные */
  document.querySelectorAll("form.wpcf7-form").forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var out = form.querySelector(".wpcf7-response-output");
        if (out) {
          out.textContent = "Это прототип: отправка формы пока не подключена. На живом сайте здесь будет заявка.";
          out.setAttribute("aria-hidden", "false");
        }
      },
      true
    );
  });
})();
