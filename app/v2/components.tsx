"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./v2.module.css";

const navigation = [
  { href: "/v2/#approach", label: "Почему мы" },
  { href: "/v2/#services", label: "Услуги" },
  { href: "/v2/#process", label: "Как всё устроено" },
  { href: "/v2/#club", label: "Клуб" },
  { href: "/v2/#about", label: "О нас" },
];

function SocialMark({
  service,
  children,
}: {
  service: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={styles.socialMark}
      aria-label={`${service} — ссылка будет добавлена`}
      title={`${service}: добавим ссылку перед запуском`}
      role="img"
    >
      {children}
    </span>
  );
}

function SocialMarks() {
  return (
    <span className={styles.socials} aria-label="Мы в социальных сетях">
      <SocialMark service="MAX">
        <img
          className={styles.socialLogo}
          src="/images/v2/social/max.svg"
          alt=""
          width="20"
          height="20"
        />
      </SocialMark>
      <SocialMark service="ВКонтакте">
        <img
          className={styles.socialLogo}
          src="/images/v2/social/vk.svg"
          alt=""
          width="20"
          height="20"
        />
      </SocialMark>
      <SocialMark service="Telegram">
        <img
          className={styles.socialLogo}
          src="/images/v2/social/telegram.svg"
          alt=""
          width="20"
          height="20"
        />
      </SocialMark>
    </span>
  );
}

export function CountryPair({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span
      className={`${styles.countryPair} ${compact ? styles.countryPairCompact : ""}`}
      aria-label="Россия и Китай"
    >
      <CountryFlag country="russia" />
      <CountryFlag country="china" />
    </span>
  );
}

export function CountryFlag({
  country,
}: {
  country: "russia" | "china";
}) {
  return (
    <span
      className={`${styles.countryFlag} ${
        country === "russia"
          ? styles.countryFlagRussia
          : styles.countryFlagChina
      }`}
      aria-hidden="true"
      title={country === "russia" ? "Россия" : "Китай"}
    />
  );
}

export function V2Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

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
    <header className={styles.chrome}>
      <div className={styles.contactBar}>
        <div className={styles.contactInner}>
          <span className={styles.contactPrompt}>Связаться с нами</span>
          <div className={styles.phoneList}>
            <a href="tel:+79177675220" aria-label="Позвонить по номеру плюс семь девятьсот семнадцать семьсот шестьдесят семь пятьдесят два двадцать">
              +7 917 767-52-20
            </a>
            <a href="tel:+79219051234" aria-label="Позвонить по номеру плюс семь девятьсот двадцать один девятьсот пять двенадцать тридцать четыре">
              +7 921 905-12-34
            </a>
          </div>
          <SocialMarks />
        </div>
      </div>

      <div className={styles.navBar}>
        <a
          className={styles.wordmark}
          href="/v2/"
          aria-label="Взаимно — главная страница новой версии"
        >
          <span className={styles.logoMask} aria-hidden="true" />
          <span className={styles.srOnly}>Взаимно</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.headerCta} href="/v2/questionnaire/">
          Заполнить анкету
        </a>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="v2-mobile-navigation"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="v2-mobile-navigation"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Мобильная навигация">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            className={styles.mobileMenuCta}
            href="/v2/questionnaire/"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Заполнить анкету
          </a>
        </nav>
      </div>
    </header>
  );
}

export function V2Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <a
            className={styles.footerWordmark}
            href="/v2/"
            aria-label="Взаимно — наверх"
          >
            <span className={styles.footerLogoMask} aria-hidden="true" />
          </a>
          <p>Лучшие свахи для серьёзных отношений в России и Китае.</p>
        </div>
        <div className={styles.footerContacts}>
          <span>Позвонить нам</span>
          <a href="tel:+79177675220">+7 917 767-52-20</a>
          <a href="tel:+79219051234">+7 921 905-12-34</a>
        </div>
        <nav aria-label="Навигация в подвале">
          <a href="/v2/#services">Услуги</a>
          <a href="/v2/#about">О нас</a>
          <a href="/v2/questionnaire/">Анкета</a>
          {/* A full reload keeps the two independently designed versions isolated. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">Версия V1</a>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 · Взаимно</span>
        <span className={styles.footerCountries}>
          <CountryPair compact />
          Конфиденциально · Россия · Китай
        </span>
      </div>
    </footer>
  );
}
