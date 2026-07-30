"use client";

import { useEffect, useRef, useState } from "react";
import {
  localeRoutes,
  sharedCopy,
  type V2Locale,
  type V2Route,
} from "./copy";
import styles from "./v2.module.css";

function SocialMark({
  service,
  locale,
  children,
}: {
  service: string;
  locale: V2Locale;
  children: React.ReactNode;
}) {
  const copy = sharedCopy[locale];

  return (
    <span
      className={styles.socialMark}
      aria-label={`${service} — ${copy.socialPending}`}
      title={`${service}: ${copy.socialTitle}`}
      role="img"
    >
      {children}
    </span>
  );
}

function SocialMarks({ locale }: { locale: V2Locale }) {
  const copy = sharedCopy[locale];

  return (
    <span className={styles.socials} aria-label={copy.socialLabel}>
      <SocialMark service="MAX" locale={locale}>
        <img
          className={styles.socialLogo}
          src="/images/v2/social/max.svg"
          alt=""
          width="20"
          height="20"
        />
      </SocialMark>
      <SocialMark
        service={locale === "zh" ? "VK" : "ВКонтакте"}
        locale={locale}
      >
        <img
          className={styles.socialLogo}
          src="/images/v2/social/vk.svg"
          alt=""
          width="20"
          height="20"
        />
      </SocialMark>
      <SocialMark service="Telegram" locale={locale}>
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
  locale = "ru",
}: {
  compact?: boolean;
  locale?: V2Locale;
}) {
  return (
    <span
      className={`${styles.countryPair} ${compact ? styles.countryPairCompact : ""}`}
      aria-label={sharedCopy[locale].countriesLabel}
    >
      <CountryFlag country="russia" locale={locale} />
      <CountryFlag country="china" locale={locale} />
    </span>
  );
}

export function CountryFlag({
  country,
  locale = "ru",
}: {
  country: "russia" | "china";
  locale?: V2Locale;
}) {
  return (
    <span
      className={`${styles.countryFlag} ${
        country === "russia"
          ? styles.countryFlagRussia
          : styles.countryFlagChina
      }`}
      aria-hidden="true"
      title={sharedCopy[locale].countryNames[country]}
    />
  );
}

function LanguageSwitch({
  locale,
  route,
}: {
  locale: V2Locale;
  route: V2Route;
}) {
  const copy = sharedCopy[locale];
  const remember = (nextLocale: V2Locale) => {
    try {
      window.localStorage.setItem("vzaimno-v2-locale", nextLocale);
    } catch {
      // The links still work when browser storage is unavailable.
    }
  };

  return (
    <nav className={styles.languageSwitch} aria-label={copy.languageLabel}>
      <a
        href={localeRoutes.ru[route]}
        lang="ru"
        aria-current={locale === "ru" ? "page" : undefined}
        aria-label={copy.localeNames.ru}
        onClick={() => remember("ru")}
      >
        RU
      </a>
      <span aria-hidden="true">·</span>
      <a
        href={localeRoutes.zh[route]}
        lang="zh-CN"
        aria-current={locale === "zh" ? "page" : undefined}
        aria-label={copy.localeNames.zh}
        onClick={() => remember("zh")}
      >
        中文
      </a>
    </nav>
  );
}

export function V2Header({
  locale = "ru",
  route = "home",
}: {
  locale?: V2Locale;
  route?: V2Route;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const copy = sharedCopy[locale];
  const homeHref = localeRoutes[locale].home;
  const questionnaireHref = localeRoutes[locale].questionnaire;

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "ru";
  }, [locale]);

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
          <span className={styles.contactPrompt}>{copy.contactPrompt}</span>
          <div className={styles.phoneList}>
            <a href="tel:+79177675220" aria-label={copy.callFirst}>
              +7 917 767-52-20
            </a>
            <a href="tel:+79219051234" aria-label={copy.callSecond}>
              +7 921 905-12-34
            </a>
          </div>
          <div className={styles.contactTools}>
            <LanguageSwitch locale={locale} route={route} />
            <SocialMarks locale={locale} />
          </div>
        </div>
      </div>

      <div className={styles.navBar}>
        <a
          className={styles.wordmark}
          href={homeHref}
          aria-label={copy.homeLabel}
        >
          <span className={styles.logoMask} aria-hidden="true" />
          <span className={styles.srOnly}>VZAIMNO</span>
        </a>

        <nav className={styles.desktopNav} aria-label={copy.mainNavigation}>
          {copy.navigation.map((item) => (
            <a key={item.hash} href={`${homeHref}#${item.hash}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.headerCta} href={questionnaireHref}>
            {copy.questionnaireCta}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="v2-mobile-navigation"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
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
        <nav aria-label={copy.mobileNavigation}>
          {copy.navigation.map((item, index) => (
            <a
              key={item.hash}
              ref={index === 0 ? firstLinkRef : undefined}
              href={`${homeHref}#${item.hash}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            className={styles.mobileMenuCta}
            href={questionnaireHref}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            {copy.questionnaireCta}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function V2Footer({ locale = "ru" }: { locale?: V2Locale }) {
  const copy = sharedCopy[locale];
  const homeHref = localeRoutes[locale].home;
  const questionnaireHref = localeRoutes[locale].questionnaire;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <a
            className={styles.footerWordmark}
            href={homeHref}
            aria-label={copy.footer.top}
          >
            <span className={styles.footerLogoMask} aria-hidden="true" />
          </a>
          <p>{copy.footer.tagline}</p>
        </div>
        <div className={styles.footerContacts}>
          <span>{copy.footer.callUs}</span>
          <a href="tel:+79177675220">+7 917 767-52-20</a>
          <a href="tel:+79219051234">+7 921 905-12-34</a>
        </div>
        <nav aria-label={copy.footer.navigation}>
          <a href={`${homeHref}#services`}>{copy.footer.services}</a>
          <a href={`${homeHref}#about`}>{copy.footer.about}</a>
          <a href={questionnaireHref}>{copy.footer.questionnaire}</a>
          {/* A full reload keeps the two independently designed versions isolated. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">{copy.footer.v1}</a>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <span>{copy.footer.brand}</span>
        <span className={styles.footerCountries}>
          <CountryPair compact locale={locale} />
          {copy.footer.privacy}
        </span>
      </div>
    </footer>
  );
}
