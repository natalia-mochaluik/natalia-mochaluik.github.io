"use client";

import { useEffect, useRef, useState } from "react";

type Market = "ru" | "cn";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как всё устроено" },
  { href: "#club", label: "Клуб" },
  { href: "#photography", label: "Фотография" },
  { href: "#principles", label: "О нас" },
];

const heroScenes: Record<
  Market,
  { src: string; alt: string; caption: string }
> = {
  ru: {
    src: "/images/hero-couple.jpg",
    alt: "Пара разговаривает в современном интерьере",
    caption: "Россия",
  },
  cn: {
    src: "/images/couple-china-city.jpg",
    alt: "Иллюстративный образ международной пары в современной городской среде",
    caption: "Китай",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Приватное интервью",
    text: "Знакомимся лично, обсуждаем ваш опыт, ценности и представление о будущих отношениях.",
  },
  {
    number: "02",
    title: "Формулируем запрос",
    text: "Отделяем действительно важное от формальных критериев и согласовываем понятный формат работы.",
  },
  {
    number: "03",
    title: "Подбираем знакомство",
    text: "Рассматриваем только подходящие кандидатуры и предлагаем встречу после взаимного согласия.",
  },
  {
    number: "04",
    title: "Организуем встречу",
    text: "Помогаем с первой встречей, остаёмся на связи и учитываем обратную связь в дальнейшей работе.",
  },
];

const faqs = [
  {
    question: "Кому подходит работа с брачным агентством?",
    answer:
      "Совершеннолетним людям, которые ищут серьёзные отношения, ценят своё время и предпочитают личный конфиденциальный сервис публичным приложениям знакомств.",
  },
  {
    question: "Будет ли моя анкета опубликована?",
    answer:
      "Нет. Мы не создаём публичный каталог участников. Возможность конкретного знакомства обсуждается индивидуально и только после взаимного интереса.",
  },
  {
    question: "Как устроено направление Россия — Китай?",
    answer:
      "На первой беседе мы уточняем географию, язык общения и готовность к поездкам. Формат и логистика каждого международного запроса согласовываются отдельно.",
  },
  {
    question: "Гарантирует ли агентство результат?",
    answer:
      "Отношения невозможно гарантировать. Наша ответственность — внимательный отбор, ясный процесс, корректная организация знакомства и честная обратная связь.",
  },
  {
    question: "Как попасть на закрытую встречу клуба?",
    answer:
      "Оставьте заявку и пройдите короткое личное интервью. Мы заранее объясним формат встречи, правила участия и принципы конфиденциальности.",
  },
  {
    question: "Можно ли заказать фотосъёмку отдельно?",
    answer:
      "Да. После короткой консультации фотограф поможет определить задачу, подготовиться к съёмке и собрать цельное персональное портфолио.",
  },
];

function CountryFlag({ country }: { country: Market }) {
  return (
    <span
      className={`country-flag country-flag-${country}`}
      aria-hidden="true"
    />
  );
}

export function MarriageAgencySite() {
  const [market, setMarket] = useState<Market>("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "demo">("idle");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Взаимно — наверх">
          <img
            className="brand-logo"
            src="/images/logo-vzaimno-primary-v5.png"
            width="1301"
            height="244"
            alt="Взаимно"
          />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#apply">
          Записаться на интервью
        </a>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Мобильная навигация">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
            <a
              className="mobile-menu-cta"
              href="#apply"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              Записаться на интервью
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div id="hero-scene" className="hero-media" aria-live="polite">
            <img
              key={market}
              className={`hero-image hero-image-${market}`}
              src={heroScenes[market].src}
              width="1536"
              height="1024"
              alt={heroScenes[market].alt}
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay" />
          <div className="hero-bottom-overlay" />

          <div className="hero-inner">
            <div className="hero-topline">
              <p className="hero-eyebrow">Знакомства в России и Китае</p>
              <div className="market-tabs" role="tablist" aria-label="География">
                <button
                  type="button"
                  role="tab"
                  aria-selected={market === "ru"}
                  aria-controls="hero-scene"
                  onClick={() => setMarket("ru")}
                >
                  <CountryFlag country="ru" />
                  <span>Россия</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={market === "cn"}
                  aria-controls="hero-scene"
                  onClick={() => setMarket("cn")}
                >
                  <CountryFlag country="cn" />
                  <span>Китай</span>
                </button>
              </div>
            </div>

            <div className="hero-copy">
              <h1 id="hero-title">
                Брачное агентство
                <br />
                для серьёзных отношений
              </h1>
              <p>
                Личный подбор, интервью и организация встреч.
                <br />
                Конфиденциально, без публичных анкет.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#apply">
                  Записаться на приватное интервью
                </a>
                <a className="text-link text-link-light" href="#services">
                  Посмотреть услуги
                  <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>

            <div className="hero-proof" aria-label="Принципы работы">
              <span>Личный отбор</span>
              <span>Конфиденциально</span>
              <span>Россия и Китай</span>
            </div>
          </div>

          <p className="image-note">
            Иллюстративный образ · {heroScenes[market].caption}
          </p>
        </section>

        <section className="intro section-shell" aria-labelledby="intro-title">
          <div className="section-index">
            <span>01</span>
            <span>Личный подход</span>
          </div>
          <div className="intro-grid">
            <h2 id="intro-title">
              Не каталог анкет.
              <br />
              Личное знакомство.
            </h2>
            <div className="intro-copy">
              <p className="lead">
                Мы создаём спокойный и понятный путь к серьёзным отношениям —
                без бесконечной переписки, случайного выбора и публичности.
              </p>
              <p>
                В основе работы — интервью, внимательный отбор и знакомство
                только при взаимном интересе. Каждое обращение ведём лично и
                обсуждаем реальные возможности до начала работы.
              </p>
              <a className="text-link" href="#process">
                Как всё устроено
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="principle-strip">
            <article>
              <span>01</span>
              <h3>Без публичных профилей</h3>
              <p>Личная информация не становится частью открытой витрины.</p>
            </article>
            <article>
              <span>02</span>
              <h3>С вниманием к намерениям</h3>
              <p>На интервью обсуждаем не образ, а ценности и готовность к отношениям.</p>
            </article>
            <article>
              <span>03</span>
              <h3>С опорой на реальные встречи</h3>
              <p>Главная цель — корректно организованное личное знакомство.</p>
            </article>
          </div>
        </section>

        <section id="process" className="process-section" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-index section-index-light">
              <span>02</span>
              <span>Как всё устроено</span>
            </div>
            <div className="process-heading">
              <h2 id="process-title">Четыре спокойных шага</h2>
              <p>
                Сначала знакомимся и проясняем задачу. Только потом обсуждаем
                формат работы — без давления и обещаний, которые невозможно
                подтвердить.
              </p>
            </div>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <a className="button button-paper" href="#apply">
              Начать с интервью
            </a>
          </div>
        </section>

        <section id="services" className="services section-shell" aria-labelledby="services-title">
          <div className="section-index">
            <span>03</span>
            <span>Услуги</span>
          </div>
          <div className="services-heading">
            <h2 id="services-title">То, что помогает знакомству состояться</h2>
            <p>
              Можно начать с основной программы или выбрать отдельное
              направление. Детали и стоимость обсуждаем после первой беседы.
            </p>
          </div>

          <div className="service-feature service-feature-main">
            <div className="service-copy">
              <p className="service-kicker">Основное направление</p>
              <h3>Персональный подбор и организация встреч</h3>
              <p>
                Личное интервью, формирование запроса, ручной подбор,
                согласование знакомства и поддержка после первой встречи.
              </p>
              <ul>
                <li>Приватная ознакомительная беседа</li>
                <li>Отбор с учётом ценностей и намерений</li>
                <li>Организация знакомства и обратная связь</li>
              </ul>
              <a className="text-link" href="#apply">
                Обсудить подбор
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <figure className="service-image service-image-main">
              <img
                src="/images/couple-russia-mature.jpg"
                width="1536"
                height="1024"
                alt="Иллюстративный образ взрослой пары во время прогулки"
                loading="lazy"
              />
              <figcaption>Иллюстративный образ</figcaption>
            </figure>
          </div>

          <div className="service-pair">
            <article className="service-card service-card-dark">
              <span className="service-card-number">02</span>
              <div>
                <p className="service-kicker">Закрытый клуб</p>
                <h3>Камерные встречи участников</h3>
                <p>
                  Спокойные события с предварительным знакомством и понятными
                  правилами участия — не массовая вечеринка и не быстрые свидания.
                </p>
                <a className="text-link text-link-light" href="#club">
                  О клубе
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
            <article className="service-card service-card-sand">
              <span className="service-card-number">03</span>
              <div>
                <p className="service-kicker">Фотография</p>
                <h3>Авторская съёмка и портфолио</h3>
                <p>
                  Подготовка, съёмка и отбор фотографий, которые выглядят
                  естественно и помогают представить человека без искусственного образа.
                </p>
                <a className="text-link" href="#photography">
                  О фотосъёмке
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="geography" aria-labelledby="geography-title">
          <div className="geography-image">
            <img
              src="/images/couple-china-city.jpg"
              width="1536"
              height="1024"
              alt="Иллюстративный образ китайского мужчины и русской женщины в городе"
              loading="lazy"
            />
            <span>Иллюстративный образ</span>
          </div>
          <div className="geography-copy">
            <div className="section-index section-index-compact">
              <span>04</span>
              <span className="section-index-label">
                Россия и Китай
                <span className="country-pair" aria-hidden="true">
                  <CountryFlag country="ru" />
                  <CountryFlag country="cn" />
                </span>
              </span>
            </div>
            <p className="geography-mark" aria-hidden="true">
              RU <span>—</span> CN
            </p>
            <h2 id="geography-title">Международный запрос — без стереотипов</h2>
            <p>
              Работаем с запросами на знакомства в России и Китае. На интервью
              обсуждаем язык общения, географию, готовность к поездкам и
              реалистичный формат знакомства.
            </p>
            <p>
              Не обещаем невозможного: международное направление начинается с
              оценки конкретной ситуации и взаимной готовности людей.
            </p>
            <a className="button button-dark" href="#apply">
              Обсудить международный запрос
            </a>
          </div>
        </section>

        <section id="club" className="club-section" aria-labelledby="club-title">
          <div className="section-shell club-grid">
            <div className="club-copy">
              <div className="section-index section-index-light">
                <span>05</span>
                <span>Закрытый клуб</span>
              </div>
              <h2 id="club-title">Встречи, на которые приходят не случайно</h2>
              <p className="lead">
                Камерный формат для людей, которые прошли предварительное
                интервью и разделяют уважительный подход к знакомству.
              </p>
              <div className="club-points">
                <p>
                  <span>01</span>
                  Вступление после короткого личного знакомства
                </p>
                <p>
                  <span>02</span>
                  Небольшое число участников и заранее понятный формат
                </p>
                <p>
                  <span>03</span>
                  Конфиденциальность и уважение к личным границам
                </p>
              </div>
              <a className="button button-paper" href="#apply">
                Подать заявку в клуб
              </a>
            </div>
            <figure className="club-image">
              <img
                src="/images/couple-china-club-no-glass.jpg"
                width="1536"
                height="1024"
                alt="Иллюстративный образ международной пары на закрытой встрече"
                loading="lazy"
              />
              <figcaption>Иллюстративный образ</figcaption>
            </figure>
          </div>
        </section>

        <section
          id="photography"
          className="photography section-shell"
          aria-labelledby="photography-title"
        >
          <div className="section-index">
            <span>06</span>
            <span>Фотография</span>
          </div>
          <div className="photography-grid">
            <div className="photography-heading">
              <p className="photography-quote">
                Хороший портрет не придумывает вас заново. Он помогает увидеть
                вас настоящего.
              </p>
              <p className="photography-signature">Фотограф в команде агентства</p>
            </div>
            <div className="photography-copy">
              <h2 id="photography-title">Персональная съёмка и цельное портфолио</h2>
              <p>
                В команде работает профессиональный фотограф с большим опытом.
                Съёмка строится вокруг характера человека, а не шаблонной позы:
                от подготовки и выбора образа до финального отбора кадров.
              </p>
              <div className="photography-stages">
                <span>Консультация</span>
                <span>Подготовка</span>
                <span>Съёмка</span>
                <span>Отбор фотографий</span>
              </div>
              <a className="text-link" href="#apply">
                Обсудить фотосъёмку
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="principles" className="principles-section" aria-labelledby="principles-title">
          <div className="section-shell">
            <div className="section-index">
              <span>07</span>
              <span>О нас</span>
            </div>
            <div className="principles-grid">
              <h2 id="principles-title">
                Личная тема требует
                <br />
                взрослого отношения
              </h2>
              <div className="principles-copy">
                <p className="lead">
                  Мы соединяем человеческое внимание, деликатную организацию и
                  сильную визуальную подачу — без игры в алгоритмы и громких обещаний.
                </p>
                <p>
                  Подбор ведётся лично. Фотограф работает внутри команды.
                  Решения о знакомстве принимаются только с уважением к обеим
                  сторонам.
                </p>
              </div>
            </div>
            <div className="principles-manifesto">
              <p>Уважение важнее скорости.</p>
              <p>Совместимость важнее количества.</p>
              <p>Честность важнее красивых обещаний.</p>
            </div>
          </div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-index">
            <span>08</span>
            <span>Вопросы и ответы</span>
          </div>
          <div className="faq-grid">
            <div className="faq-heading">
              <h2 id="faq-title">Перед первой беседой</h2>
              <p>
                Если вашего вопроса здесь нет, оставьте его в заявке — ответим
                лично и без обязательств.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item.question}>
                  <summary>
                    <span>0{index + 1}</span>
                    {item.question}
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="apply-section" aria-labelledby="apply-title">
          <div className="section-shell apply-grid">
            <div className="apply-copy">
              <div className="section-index section-index-light">
                <span>09</span>
                <span>Приватная заявка</span>
              </div>
              <h2 id="apply-title">Начнём с личного разговора</h2>
              <p>
                Расскажите, какое направление вас интересует. На первой беседе
                спокойно обсудим запрос, формат работы и следующие шаги.
              </p>
              <div className="apply-trust">
                <span>Без публикации анкеты</span>
                <span>Без обязательств до разговора</span>
                <span>С уважением к конфиденциальности</span>
              </div>
            </div>

            <form
              className="application-form"
              onSubmit={(event) => {
                event.preventDefault();
                setFormStatus("demo");
              }}
            >
              <div className="form-row">
                <label>
                  Как к вам обращаться
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Телефон или электронная почта
                  <input name="contact" type="text" autoComplete="email" required />
                </label>
              </div>
              <label>
                Что вас интересует
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>
                    Выберите направление
                  </option>
                  <option value="matchmaking">Персональный подбор</option>
                  <option value="international">Россия — Китай</option>
                  <option value="club">Закрытый клуб</option>
                  <option value="photography">Фотография и портфолио</option>
                  <option value="question">Хочу задать вопрос</option>
                </select>
              </label>
              <label>
                Несколько слов о вашем запросе
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Можно коротко — подробности обсудим лично"
                />
              </label>
              <label className="consent">
                <input name="consent" type="checkbox" required />
                <span>
                  Соглашаюсь на обработку данных для ответа на эту заявку.
                </span>
              </label>
              <button className="button button-paper form-submit" type="submit">
                Отправить приватную заявку
              </button>
              <p className="form-note">
                Демонстрационная версия: сейчас данные никуда не передаются.
                Подключение формы и юридический текст добавим перед запуском.
              </p>
              {formStatus === "demo" && (
                <p className="form-status" role="status">
                  Форма заполнена корректно. Для реального приёма заявок осталось
                  добавить ваши контакты и способ связи.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="footer-wordmark" href="#top" aria-label="Взаимно — наверх">
            <img
              className="footer-brand-logo"
              src="/images/logo-vzaimno-primary-light-v5.png"
              width="1301"
              height="244"
              alt="Взаимно"
            />
          </a>
          <p>Для серьёзных отношений в России и Китае</p>
          <nav aria-label="Навигация в подвале">
            <a href="#services">Услуги</a>
            <a href="#process">Процесс</a>
            <a href="#club">Клуб</a>
            <a href="#photography">Фотография</a>
            <a href="#apply">Оставить заявку</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 · Взаимно</span>
          <span>Конфиденциальность · Россия · Китай</span>
        </div>
      </footer>
    </>
  );
}
