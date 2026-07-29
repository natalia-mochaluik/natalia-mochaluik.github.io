"use client";

import { useState } from "react";
import { CountryFlag, CountryPair, V2Footer, V2Header } from "./components";
import styles from "./v2.module.css";

const services = [
  {
    number: "01",
    kicker: "Основное направление",
    title: "Персональный подбор",
    text: "Лично знакомимся с вами, уточняем запрос и предлагаем знакомство только после согласия обоих.",
  },
  {
    number: "02",
    kicker: "Реальные встречи",
    title: "Организация свиданий",
    text: "Берём на себя деликатную подготовку первого знакомства и остаёмся на связи после встречи.",
  },
  {
    number: "03",
    kicker: "Камерный формат",
    title: "Закрытый клуб",
    text: "Небольшие события для участников, которые прошли интервью и приходят знакомиться осознанно.",
  },
  {
    number: "04",
    kicker: "Визуальная подача",
    title: "Фотосъёмка и портфолио",
    text: "Профессиональный фотограф помогает показать вас естественно — без шаблонных поз и чужого образа.",
  },
  {
    number: "05",
    kicker: "Поддержка отношений",
    title: "Психолог для пар",
    text: "Профессиональный психолог помогает партнёрам лучше слышать друг друга в конфиденциальной работе.",
  },
  {
    number: "06",
    kicker: "Женские встречи",
    title: "Игры-практики для девушек",
    text: "Вечера с профессиональным игропрактиком: бережный групповой формат, общение и новые открытия о себе.",
  },
];

const process = [
  {
    number: "01",
    title: "Знакомимся",
    text: "Начинаем с приватного разговора о вас, ваших ценностях и ожиданиях.",
  },
  {
    number: "02",
    title: "Собираем запрос",
    text: "Отделяем действительно важное от формальных критериев и договариваемся о формате.",
  },
  {
    number: "03",
    title: "Ищем взаимность",
    text: "Предлагаем знакомство только тогда, когда видим подходящую кандидатуру и интерес с обеих сторон.",
  },
  {
    number: "04",
    title: "Организуем встречу",
    text: "Помогаем перейти от первой симпатии к спокойному первому свиданию.",
  },
];

export function V2Site() {
  const [activeCountry, setActiveCountry] = useState<"russia" | "china">(
    "china",
  );
  const isChina = activeCountry === "china";

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#v2-main">
        Перейти к содержанию
      </a>
      <V2Header />

      <main id="v2-main">
        <section className={styles.hero} aria-labelledby="v2-hero-title">
          <div className={styles.heroMedia}>
            {isChina ? (
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet="/images/v2/hero-young-international-mobile.jpg"
                />
                <img
                  src="/images/v2/hero-young-international.jpg"
                  width="1536"
                  height="1024"
                  alt="Молодая русско-китайская пара разговаривает в современном интерьере"
                  fetchPriority="high"
                />
              </picture>
            ) : (
              <img
                className={styles.heroRussiaImage}
                src="/images/v2/couple-russia-young.jpg"
                width="1122"
                height="1402"
                alt="Молодая русская пара разговаривает в современном интерьере"
              />
            )}
            <span className={styles.imageLabel} aria-live="polite">
              <CountryFlag country={activeCountry} />
              {isChina ? "Китай" : "Россия"}
            </span>
          </div>

          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p className={styles.eyebrow}>
                Брачное агентство «Взаимно»
              </p>
              <div
                className={styles.countryTabs}
                role="tablist"
                aria-label="Направление знакомств"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={!isChina}
                  className={!isChina ? styles.countryTabActive : ""}
                  onClick={() => setActiveCountry("russia")}
                >
                  <CountryFlag country="russia" />
                  Россия
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isChina}
                  className={isChina ? styles.countryTabActive : ""}
                  onClick={() => setActiveCountry("china")}
                >
                  <CountryFlag country="china" />
                  Китай
                </button>
              </div>
            </div>
            <h1 id="v2-hero-title">
              Лучшие свахи
              <span>для серьёзных отношений</span>
            </h1>
            <p className={styles.heroLead}>
              Знакомим лично и ведём от первой симпатии до первого свидания.
              Без публичных анкет и бесконечной переписки.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/v2/questionnaire/">
                Заполнить анкету
              </a>
              <a className={styles.textLink} href="#services">
                Посмотреть услуги
                <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className={styles.heroProof}>
              <span>Личное сопровождение</span>
              <span>Только взаимно</span>
              <span>25–50</span>
            </div>
          </div>
        </section>

        <section className={styles.statement} id="approach">
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionNumber}>01 · Почему мы</p>
              <h2>Не листаем анкеты. Знакомимся с человеком.</h2>
            </div>
            <div className={styles.statementGrid}>
              <p className={styles.bigStatement}>
                Мы рядом на всём пути — от первого разговора до настоящей
                встречи.
              </p>
              <div className={styles.statementCopy}>
                <p>
                  «Взаимно» — это не обещание идеальной истории. Это наш
                  принцип: знакомство продолжается только тогда, когда интерес
                  есть у обоих.
                </p>
                <p>
                  Александра и Наталья лично ведут каждый запрос, слышат то, что
                  действительно важно, и помогают людям встретиться без
                  давления и неловкости.
                </p>
                <a className={styles.inlineLink} href="#about">
                  Познакомиться с нами <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className={styles.valueRow}>
              <article>
                <span>01</span>
                <h3>Сначала человек</h3>
                <p>Смотрим глубже формальных критериев и красивых фотографий.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Согласие двоих</h3>
                <p>Не передаём контакты и не назначаем встречу без взаимности.</p>
              </article>
              <article>
                <span>03</span>
                <h3>До первого свидания</h3>
                <p>Сопровождаем знакомство, а не оставляем вас один на один с перепиской.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.sectionShell}>
            <div className={styles.servicesHeading}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionNumber}>02 · Услуги</p>
                <h2>Всё, что помогает знакомству состояться</h2>
              </div>
              <p>
                Можно начать с подбора или выбрать отдельное направление.
                Формат и стоимость спокойно обсудим после первой беседы.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article key={service.number} className={styles.serviceCard}>
                  <div className={styles.cardTopline}>
                    <span>{service.number}</span>
                    <span>{service.kicker}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="/v2/questionnaire/" aria-label={`Обсудить услугу: ${service.title}`}>
                    Обсудить <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="process">
          <div className={styles.sectionShell}>
            <div className={styles.processHeading}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionNumber}>03 · Как всё устроено</p>
                <h2>Четыре понятных шага</h2>
              </div>
              <p>
                Без тестов на совместимость ради красивых цифр. Сначала
                разговариваем, затем действуем.
              </p>
            </div>
            <ol className={styles.processList}>
              {process.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <a className={styles.lightButton} href="/v2/questionnaire/">
              Начать с анкеты
            </a>
          </div>
        </section>

        <section className={styles.geography}>
          <div className={styles.geographyImage}>
            <img
              src="/images/v2/couple-china-young.jpg"
              width="1024"
              height="1536"
              alt="Молодая русско-китайская пара гуляет в городе"
              loading="lazy"
            />
          </div>
          <div className={styles.geographyCopy}>
            <p className={`${styles.sectionNumber} ${styles.sectionNumberCountries}`}>
              <CountryPair />
              <span>04 · Россия и Китай</span>
            </p>
            <p className={styles.miniLabel}>RU × CN</p>
            <h2>Расстояние — часть задачи, а не красивое обещание</h2>
            <p>
              Для международного знакомства заранее обсуждаем язык общения,
              город, готовность к поездкам и реальные планы двух людей.
            </p>
            <p>
              Работаем бережно, без стереотипов и без обещаний, которые
              невозможно подтвердить.
            </p>
            <a className={styles.darkButton} href="/v2/questionnaire/">
              Рассказать о своём запросе
            </a>
          </div>
        </section>

        <section className={styles.clubSection} id="club">
          <div className={styles.sectionShell}>
            <div className={styles.clubGrid}>
              <div className={styles.clubCopy}>
                <p className={styles.sectionNumber}>05 · Закрытый клуб</p>
                <h2>Встречи, на которые приходят не случайно</h2>
                <p>
                  Небольшие события для людей, которые уже прошли личное
                  интервью и разделяют уважительный подход к знакомству.
                </p>
                <ul>
                  <li>
                    <span>01</span>
                    Предварительное знакомство с участниками
                  </li>
                  <li>
                    <span>02</span>
                    Камерный формат без ощущения массовой вечеринки
                  </li>
                  <li>
                    <span>03</span>
                    Конфиденциальность и уважение к личным границам
                  </li>
                </ul>
                <a className={styles.primaryButton} href="/v2/questionnaire/">
                  Подать заявку в клуб
                </a>
              </div>
              <div className={styles.clubImage}>
                <img
                  src="/images/v2/couple-russia-young.jpg"
                  width="1122"
                  height="1402"
                  alt="Молодая пара разговаривает на камерной встрече"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.supportSection}>
          <div className={styles.sectionShell}>
            <div className={styles.supportHeading}>
              <div>
                <p className={styles.sectionNumber}>06 · Больше, чем знакомство</p>
                <h2>Поддержка для отношений и для себя</h2>
              </div>
              <p>
                В команду входят специалисты, к которым можно обратиться в
                подходящий момент — отдельно или в рамках сопровождения.
              </p>
            </div>
            <div className={styles.supportGrid}>
              <article>
                <span>Для пары</span>
                <h3>Профессиональный психолог</h3>
                <p>
                  Помогает партнёрам говорить о важном, слышать друг друга и
                  бережно разбирать сложные ситуации.
                </p>
              </article>
              <article className={styles.tiffanyCard}>
                <span>Для девушек</span>
                <h3>Вечера с игропрактиком</h3>
                <p>
                  Встречаемся небольшой женской компанией и играем в
                  психологические игры-практики с профессиональным ведущим.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.sectionShell}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutTitle}>
                <p className={styles.sectionNumber}>07 · О нас</p>
                <h2>Александра и Наталья</h2>
                <p className={styles.aboutRole}>Современные свахи «Взаимно»</p>
              </div>
              <div className={styles.aboutCopy}>
                <p className={styles.aboutLead}>
                  Мы соединяем опыт работы с людьми, высшее психологическое
                  образование и очень человеческий взгляд на знакомства.
                </p>
                <p>
                  Нам важно не просто подобрать подходящую анкету. Мы хотим
                  понять, рядом с каким человеком вам будет спокойно,
                  интересно и по-настоящему взаимно.
                </p>
                <p>
                  Поэтому каждый запрос ведём лично: от первой беседы и
                  деликатного подбора до взаимной симпатии и первого свидания.
                </p>
                <div className={styles.teamLine}>
                  <span>Личное сопровождение</span>
                  <span>Психологический взгляд</span>
                  <span>Конфиденциальность</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.sectionShell}>
            <p>Начнём с вас</p>
            <h2>Расскажите, кого вы хотите встретить</h2>
            <p className={styles.finalText}>
              Короткая анкета поможет подготовиться к первому разговору. Она
              никуда не публикуется.
            </p>
            <a className={styles.finalButton} href="/v2/questionnaire/">
              Заполнить анкету
            </a>
          </div>
        </section>
      </main>

      <V2Footer />
    </div>
  );
}
