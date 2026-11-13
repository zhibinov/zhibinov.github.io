document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".doc-lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
  const lightboxClose = document.querySelector(".doc-lightbox-close");

  document.querySelectorAll(".doc-card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      if (!img || !lightbox) return;
      lightboxImg.src = img.getAttribute("src");
      lightboxImg.alt = img.getAttribute("alt") || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  const showSuccess = () => {
    const message = document.querySelector(".send-message");
    if (!message) return;
    message.classList.add("open");
    setTimeout(() => message.classList.remove("open"), 2500);
  };

  const defaultFileText =
    'Прикрепить ТЗ или заявку<br /><b>PDF, DOC, XLS до 10 МБ</b>';

  const resetFileField = (field) => {
    if (!field) return;
    field.classList.remove("is-filled");
    const text = field.querySelector(".file-field-text");
    if (text) text.innerHTML = defaultFileText;
  };

  const orderForm = document.querySelector(".order-form form");
  if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!orderForm.reportValidity()) return;
      showSuccess();
      orderForm.reset();
      resetFileField(orderForm.querySelector(".file-field"));
    });
  }

  const modalForm = document.querySelector(".modal-form");
  if (modalForm) {
    modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!modalForm.reportValidity()) return;
      const modal = document.querySelector(".modal-wrpaper");
      if (modal) modal.classList.remove("open");
      showSuccess();
      modalForm.reset();
    });
  }

  document.querySelectorAll(".file-field input").forEach((input) => {
    input.addEventListener("change", () => {
      const field = input.closest(".file-field");
      if (!field) return;
      const text = field.querySelector(".file-field-text");
      if (input.files && input.files.length) {
        field.classList.add("is-filled");
        if (text) {
          text.innerHTML =
            "Файл прикреплён: <b>" + input.files[0].name + "</b>";
        }
      } else {
        resetFileField(field);
      }
    });
  });

  document.querySelectorAll(".doc-card").forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });

  const burgerClose = document.querySelector(".sd-burger__close");
  if (burgerClose) {
    burgerClose.addEventListener("click", () => {
      const burger = document.querySelector(".sd-burger");
      const toggle = document.querySelector("#nav-toggle");
      if (burger) burger.classList.remove("shows", "open");
      if (toggle) toggle.classList.remove("active");
    });
  }
});
