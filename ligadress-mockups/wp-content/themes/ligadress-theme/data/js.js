document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let c = 0;

  let foundActive = false;
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      c = index;
      foundActive = true;
    }
  });

  if (!foundActive && slides.length > 0) {
    slides[0].classList.add("active");
    c = 0;
  }

  function next() {
    if (!slides.length || !slides[c]) {
      console.error("Ошибка: слайд не найден", c);
      return;
    }

    slides[c].classList.remove("active");

    c = (c + 1) % slides.length;

    slides[c].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(next, 5000);
  } else {
    console.error("Слайды не найдены! Проверьте селектор .hero-slide");
  }

  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement,
        a = q.nextElementSibling,
        open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  const obs = new IntersectionObserver(
    (e) => {
      e.forEach((en, i) => {
        if (en.isIntersecting) {
          setTimeout(() => en.target.classList.add("visible"), i * 100);
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));

  const modalWrpaper = document.querySelector(".modal-wrpaper");
  const closeMdl = document.querySelector(".close-mdl");

  const mdl = document.querySelectorAll(".mdl-btn");

  mdl.forEach((el) => {
    el.addEventListener("click", () => {
      modalWrpaper.classList.add("open");
    });
  });

  closeMdl.addEventListener("click", () => {
    modalWrpaper.classList.remove("open");
  });

  document.querySelector("#nav-toggle").addEventListener("click", function () {
    this.classList.toggle("active");

    document.querySelector(".sd-burger").classList.toggle("shows");
  });

  try {
    let forms = document.querySelector(".form-modal");

    forms.addEventListener("submit", (event) => {
      event.preventDefault();

      const formDatas = new FormData(forms);

      fetch("/wp-content/themes/ligadress-theme/send.php", {
        method: "POST",
        body: formDatas,
      })
        .then((response) => {
          if (response.ok) {
            document.querySelector(".send-message").classList.add("open");
            setTimeout(() => {
              document.querySelector(".send-message").classList.remove("open");
            }, 2000);
            forms.reset();
          } else {
            console.log("Ошибка");
          }
        })
        .catch((error) => {
          console.error("Ошибка сети:", error);
          console.log("Ошибка");
        });
    });
  } catch {}

  setTimeout(() => {
    const element = document.querySelector(".phone");
    const maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    const mask = IMask(element, maskOptions);
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".sd-burger") &&
    document.querySelectorAll(".sd-burger").forEach((e) => {
      e.querySelector(".menu-item-has-children") &&
        e.querySelectorAll(".menu-item-has-children").forEach((e) => {
          e.addEventListener("click", (t) => {
            (t.stopPropagation(),
              e.querySelector(".sub-menu").classList.toggle("open"),
              e.classList.toggle("open"));
          });
        });
    });
});
