"use client";

import { useState } from "react";
import { CountryFlag, CountryPair, V2Footer, V2Header } from "./components";
import {
  localeRoutes,
  siteCopy,
  sharedCopy,
  type V2Locale,
} from "./copy";
import styles from "./v2.module.css";

export function V2Site({ locale = "ru" }: { locale?: V2Locale }) {
  const [activeCountry, setActiveCountry] = useState<"russia" | "china">(
    "china",
  );
  const isChina = activeCountry === "china";
  const copy = siteCopy[locale];
  const common = sharedCopy[locale];
  const questionnaireHref = localeRoutes[locale].questionnaire;

  return (
    <div className={styles.page} lang={locale === "zh" ? "zh-CN" : "ru"}>
      <a className={styles.skipLink} href="#v2-main">
        {copy.skip}
      </a>
      <V2Header locale={locale} />

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
                  alt={copy.hero.altChina}
                  fetchPriority="high"
                />
              </picture>
            ) : (
              <img
                className={styles.heroRussiaImage}
                src="/images/v2/couple-russia-young.jpg"
                width="1122"
                height="1402"
                alt={copy.hero.altRussia}
              />
            )}
            <span className={styles.imageLabel} aria-live="polite">
              <CountryFlag country={activeCountry} locale={locale} />
              {common.countryNames[activeCountry]}
            </span>
          </div>

          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
              <div
                className={styles.countryTabs}
                role="tablist"
                aria-label={copy.hero.directionLabel}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={!isChina}
                  className={!isChina ? styles.countryTabActive : ""}
                  onClick={() => setActiveCountry("russia")}
                >
                  <CountryFlag country="russia" locale={locale} />
                  {common.countryNames.russia}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isChina}
                  className={isChina ? styles.countryTabActive : ""}
                  onClick={() => setActiveCountry("china")}
                >
                  <CountryFlag country="china" locale={locale} />
                  {common.countryNames.china}
                </button>
              </div>
            </div>
            <h1 id="v2-hero-title">
              {copy.hero.title}
              <span>{copy.hero.subtitle}</span>
            </h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={questionnaireHref}>
                {copy.hero.primary}
              </a>
              <a className={styles.textLink} href="#services">
                {copy.hero.secondary}
                <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className={styles.heroProof}>
              {copy.hero.proof.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statement} id="approach">
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionNumber}>{copy.approach.number}</p>
              <h2>{copy.approach.title}</h2>
            </div>
            <div className={styles.statementGrid}>
              <p className={styles.bigStatement}>{copy.approach.statement}</p>
              <div className={styles.statementCopy}>
                {copy.approach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a className={styles.inlineLink} href="#about">
                  {copy.approach.link} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className={styles.valueRow}>
              {copy.approach.values.map((value) => (
                <article key={value.number}>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.sectionShell}>
            <div className={styles.servicesHeading}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionNumber}>{copy.services.number}</p>
                <h2>{copy.services.title}</h2>
              </div>
              <p>{copy.services.intro}</p>
            </div>

            <div className={styles.serviceGrid}>
              {copy.services.items.map((service) => (
                <article key={service.number} className={styles.serviceCard}>
                  <div className={styles.cardTopline}>
                    <span>{service.number}</span>
                    <span>{service.kicker}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href={questionnaireHref}
                    aria-label={`${copy.services.discussLabel}: ${service.title}`}
                  >
                    {copy.services.discuss} <span aria-hidden="true">↗</span>
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
                <p className={styles.sectionNumber}>{copy.process.number}</p>
                <h2>{copy.process.title}</h2>
              </div>
              <p>{copy.process.intro}</p>
            </div>
            <ol className={styles.processList}>
              {copy.process.items.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <a className={styles.lightButton} href={questionnaireHref}>
              {copy.process.cta}
            </a>
          </div>
        </section>

        <section className={styles.geography}>
          <div className={styles.geographyImage}>
            <img
              src="/images/v2/couple-china-young.jpg"
              width="1024"
              height="1536"
              alt={copy.geography.alt}
              loading="lazy"
            />
          </div>
          <div className={styles.geographyCopy}>
            <p
              className={`${styles.sectionNumber} ${styles.sectionNumberCountries}`}
            >
              <CountryPair locale={locale} />
              <span>{copy.geography.number}</span>
            </p>
            <p className={styles.miniLabel}>{copy.geography.mini}</p>
            <h2>{copy.geography.title}</h2>
            {copy.geography.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className={styles.darkButton} href={questionnaireHref}>
              {copy.geography.cta}
            </a>
          </div>
        </section>

        <section className={styles.clubSection} id="club">
          <div className={styles.sectionShell}>
            <div className={styles.clubGrid}>
              <div className={styles.clubCopy}>
                <p className={styles.sectionNumber}>{copy.club.number}</p>
                <h2>{copy.club.title}</h2>
                <p>{copy.club.intro}</p>
                <ul>
                  {copy.club.points.map((point, index) => (
                    <li key={point}>
                      <span>0{index + 1}</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a className={styles.primaryButton} href={questionnaireHref}>
                  {copy.club.cta}
                </a>
              </div>
              <div className={styles.clubImage}>
                <img
                  src="/images/v2/couple-russia-young.jpg"
                  width="1122"
                  height="1402"
                  alt={copy.club.alt}
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
                <p className={styles.sectionNumber}>{copy.support.number}</p>
                <h2>{copy.support.title}</h2>
              </div>
              <p>{copy.support.intro}</p>
            </div>
            <div className={styles.supportGrid}>
              {copy.support.items.map((item, index) => (
                <article
                  key={item.title}
                  className={index === 1 ? styles.tiffanyCard : undefined}
                >
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.sectionShell}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutTitle}>
                <p className={styles.sectionNumber}>{copy.about.number}</p>
                <h2>{copy.about.title}</h2>
                <p className={styles.aboutRole}>{copy.about.role}</p>
              </div>
              <div className={styles.aboutCopy}>
                {copy.about.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? styles.aboutLead : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className={styles.teamLine}>
                  {copy.about.qualities.map((quality) => (
                    <span key={quality}>{quality}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.sectionShell}>
            <p>{copy.final.label}</p>
            <h2>{copy.final.title}</h2>
            <p className={styles.finalText}>{copy.final.text}</p>
            <a className={styles.finalButton} href={questionnaireHref}>
              {copy.final.cta}
            </a>
          </div>
        </section>
      </main>

      <V2Footer locale={locale} />
    </div>
  );
}
