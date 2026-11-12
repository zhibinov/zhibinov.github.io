(() => {
  'use strict';

  const footer = document.getElementById('siteFooter');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer__pattern" aria-hidden="true"></div>
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="index.html" aria-label="Семейный особняк — на главную"><img src="assets/img/logo-light.png" alt="Семейный особняк — строительная компания" width="220" height="43" loading="lazy"></a>
          <p>Строительная компания «Семейный особняк». Строим частные дома под ключ в Калуге и области с 2009 года.</p>
          <a class="btn btn--primary footer__cta" href="index.html#quiz">Рассчитать дом <svg class="icon" aria-hidden="true"><use href="#i-arrow"></use></svg></a>
        </div>
        <div class="footer__col">
          <h4>Проекты</h4>
          <ul>
            <li><a href="index.html#projects">Типовые проекты</a></li>
            <li><a href="projects.html">Готовые дома</a></li>
            <li><a href="index.html#foundation">Фундаменты</a></li>
            <li><a href="index.html#mortgage">Ипотека</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Компания</h4>
          <ul>
            <li><a href="index.html#send">Отправить проект</a></li>
            <li><a href="index.html#contacts">Контакты</a></li>
            <li><a href="index.html#quiz">Расчёт стоимости</a></li>
            <li><a href="projects.html">Наши работы</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Контакты</h4>
          <ul class="footer__contacts">
            <li><svg class="icon" aria-hidden="true"><use href="#i-pin"></use></svg><span>г. Калуга, ул. Ленина, д. 85, помещение 2</span></li>
            <li><svg class="icon" aria-hidden="true"><use href="#i-phone"></use></svg><a href="tel:+79109103111">8 (910) 910-31-11</a></li>
            <li><svg class="icon" aria-hidden="true"><use href="#i-phone"></use></svg><a href="tel:+74842402565">8 (4842) 40-25-65</a></li>
            <li><svg class="icon" aria-hidden="true"><use href="#i-mail"></use></svg><a href="mailto:stroim@lenta.ru">stroim@lenta.ru</a></li>
            <li><svg class="icon" aria-hidden="true"><use href="#i-clock"></use></svg><span>Пн–Пт 9:00–19:00, Сб 10:00–14:00</span></li>
          </ul>
          <div class="footer__socials">
            <a href="https://wa.me/79109103111" target="_blank" rel="noopener" aria-label="WhatsApp"><svg class="icon" aria-hidden="true"><use href="#i-whatsapp"></use></svg></a>
            <a href="https://t.me/+79109103111" target="_blank" rel="noopener" aria-label="Telegram"><svg class="icon" aria-hidden="true"><use href="#i-telegram"></use></svg></a>
            <button class="social-max" type="button" aria-label="MAX" data-max-link><svg class="icon" aria-hidden="true"><use href="#i-max"></use></svg></button>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__legal">
          <span>© 2009–2026 «Семейный особняк»</span>
          <span>ИП Кирилочкина Ирина Алексеевна · ИНН 402702363553</span>
        </div>
        <div class="footer__links">
          <a href="privacy.html">Политика конфиденциальности</a>
          <a href="consent.html">Согласие на обработку ПДн</a>
          <a href="cookies.html">Политика cookies</a>
        </div>
      </div>
      <p class="footer__dev">Разработка сайта — <a href="http://sitesanddesign.ru/" target="_blank" rel="noopener">СайтыиДизайн.рф</a></p>
      <p class="footer__disclaimer">Сайт носит исключительно информационный характер и не является публичной офертой, определяемой положениями ГК РФ. Для получения подробной информации о наличии, видах, характеристиках и стоимости домов обращайтесь в офис продаж.</p>
    </div>
  `;

  window.applyTypography?.(footer);
})();
