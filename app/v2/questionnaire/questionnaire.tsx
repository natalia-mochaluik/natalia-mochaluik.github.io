"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { V2Footer, V2Header } from "../components";
import {
  localeRoutes,
  questionnaireCopy,
  type V2Locale,
} from "../copy";
import styles from "../v2.module.css";

type FormData = {
  gender: string;
  age: string;
  city: string;
  geography: string;
  partnerAge: string;
  goal: string;
  interests: string[];
  request: string;
  name: string;
  contact: string;
  channel: string;
  consent: boolean;
};

const initialData: FormData = {
  gender: "",
  age: "",
  city: "",
  geography: "",
  partnerAge: "",
  goal: "",
  interests: [],
  request: "",
  name: "",
  contact: "",
  channel: "",
  consent: false,
};

function Choice({
  name,
  value,
  selected,
  onChange,
  children,
}: {
  name: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`${styles.choice} ${selected ? styles.choiceSelected : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
      />
      <span>{children}</span>
    </label>
  );
}

export function Questionnaire({ locale = "ru" }: { locale?: V2Locale }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const copy = questionnaireCopy[locale];
  const homeHref = localeRoutes[locale].home;

  useEffect(() => {
    if (step === 0) return;
    formRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [step]);

  const canContinue = useMemo(() => {
    if (step === 0) {
      const age = Number(data.age);
      return Boolean(data.gender) && age >= 18 && age <= 99;
    }
    if (step === 1) {
      return Boolean(
        data.city.trim() && data.geography && data.partnerAge.trim(),
      );
    }
    if (step === 2) {
      return Boolean(data.goal);
    }
    return Boolean(data.name.trim() && data.contact.trim() && data.consent);
  }, [data, step]);

  const setField = <Key extends keyof FormData>(
    key: Key,
    value: FormData[Key],
  ) => {
    setData((current) => ({ ...current, [key]: value }));
  };

  const toggleInterest = (interest: string) => {
    setData((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canContinue) return;
    setSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  if (submitted) {
    return (
      <div className={styles.page} lang={locale === "zh" ? "zh-CN" : "ru"}>
        <V2Header locale={locale} route="questionnaire" />
        <main className={styles.thankYou}>
          <div className={styles.thankYouMark} aria-hidden="true">
            VO
          </div>
          <p className={styles.sectionNumber}>{copy.thankYou.label}</p>
          <h1>
            {copy.thankYou.titlePrefix}
            {data.name}
            {copy.thankYou.titleSuffix}
          </h1>
          <p>{copy.thankYou.text}</p>
          <div className={styles.thankYouActions}>
            <a className={styles.primaryButton} href="tel:+79177675220">
              {copy.thankYou.call}
            </a>
            <a className={styles.textLink} href={homeHref}>
              {copy.thankYou.back} <span aria-hidden="true">→</span>
            </a>
          </div>
        </main>
        <V2Footer locale={locale} />
      </div>
    );
  }

  return (
    <div className={styles.page} lang={locale === "zh" ? "zh-CN" : "ru"}>
      <a className={styles.skipLink} href="#questionnaire-main">
        {copy.skip}
      </a>
      <V2Header locale={locale} route="questionnaire" />

      <main id="questionnaire-main" className={styles.questionnairePage}>
        <header className={styles.questionnaireIntro}>
          <p className={styles.eyebrow}>{copy.intro.eyebrow}</p>
          <h1>{copy.intro.title}</h1>
          <p>{copy.intro.text}</p>
        </header>

        <div className={styles.questionnaireLayout}>
          <aside className={styles.progressPanel} aria-label={copy.progress.label}>
            <p>
              {locale === "zh"
                ? `${copy.progress.step}${step + 1}${copy.progress.of}${copy.steps.length}步`
                : `${copy.progress.step} ${step + 1} ${copy.progress.of} ${copy.steps.length}`}
            </p>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={copy.steps.length}
              aria-valuenow={step + 1}
              aria-label={
                locale === "zh"
                  ? `${copy.progress.step}${step + 1}${copy.progress.of}${copy.steps.length}步`
                  : `${copy.progress.step} ${step + 1} ${copy.progress.of} ${copy.steps.length}`
              }
            >
              <span
                style={{ width: `${((step + 1) / copy.steps.length) * 100}%` }}
              />
            </div>
            <ol>
              {copy.steps.map((item, index) => (
                <li
                  key={item.short}
                  className={index === step ? styles.progressActive : ""}
                >
                  <span>0{index + 1}</span>
                  {item.short}
                </li>
              ))}
            </ol>
            <p className={styles.privacyNote}>{copy.progress.privacy}</p>
          </aside>

          <form
            ref={formRef}
            className={styles.questionnaireForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formStepHeading}>
              <span>0{step + 1}</span>
              <h2>{copy.steps[step].title}</h2>
            </div>

            {step === 0 && (
              <div className={styles.formFields}>
                <fieldset>
                  <legend>{copy.fields.who}</legend>
                  <div className={styles.choiceGrid}>
                    <Choice
                      name="gender"
                      value="woman"
                      selected={data.gender === "woman"}
                      onChange={(value) => setField("gender", value)}
                    >
                      {copy.fields.woman}
                    </Choice>
                    <Choice
                      name="gender"
                      value="man"
                      selected={data.gender === "man"}
                      onChange={(value) => setField("gender", value)}
                    >
                      {copy.fields.man}
                    </Choice>
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>{copy.fields.age}</span>
                  <input
                    type="number"
                    min="18"
                    max="99"
                    inputMode="numeric"
                    placeholder={copy.fields.agePlaceholder}
                    value={data.age}
                    onChange={(event) => setField("age", event.target.value)}
                  />
                </label>
              </div>
            )}

            {step === 1 && (
              <div className={styles.formFields}>
                <label className={styles.field}>
                  <span>{copy.fields.city}</span>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    placeholder={copy.fields.cityPlaceholder}
                    value={data.city}
                    onChange={(event) => setField("city", event.target.value)}
                  />
                </label>
                <fieldset>
                  <legend>{copy.fields.geography}</legend>
                  <div className={styles.choiceGrid}>
                    {copy.fields.geographyOptions.map((option) => (
                      <Choice
                        key={option.value}
                        name="geography"
                        value={option.value}
                        selected={data.geography === option.value}
                        onChange={(value) => setField("geography", value)}
                      >
                        {option.label}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>{copy.fields.partnerAge}</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={copy.fields.partnerAgePlaceholder}
                    value={data.partnerAge}
                    onChange={(event) =>
                      setField("partnerAge", event.target.value)
                    }
                  />
                </label>
              </div>
            )}

            {step === 2 && (
              <div className={styles.formFields}>
                <fieldset>
                  <legend>{copy.fields.goal}</legend>
                  <div className={styles.choiceGrid}>
                    {copy.fields.goalOptions.map((option) => (
                      <Choice
                        key={option.value}
                        name="goal"
                        value={option.value}
                        selected={data.goal === option.value}
                        onChange={(value) => setField("goal", value)}
                      >
                        {option.label}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend>{copy.fields.interests}</legend>
                  <div className={styles.checkboxGrid}>
                    {copy.fields.interestOptions.map((option) => (
                      <label
                        key={option.value}
                        className={styles.checkboxChoice}
                      >
                        <input
                          type="checkbox"
                          checked={data.interests.includes(option.value)}
                          onChange={() => toggleInterest(option.value)}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>{copy.fields.request}</span>
                  <textarea
                    rows={4}
                    placeholder={copy.fields.requestPlaceholder}
                    value={data.request}
                    onChange={(event) => setField("request", event.target.value)}
                  />
                </label>
              </div>
            )}

            {step === 3 && (
              <div className={styles.formFields}>
                <label className={styles.field}>
                  <span>{copy.fields.name}</span>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder={copy.fields.namePlaceholder}
                    value={data.name}
                    onChange={(event) => setField("name", event.target.value)}
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fields.contact}</span>
                  <input
                    type="text"
                    autoComplete="tel"
                    placeholder={copy.fields.contactPlaceholder}
                    value={data.contact}
                    onChange={(event) => setField("contact", event.target.value)}
                  />
                </label>
                <fieldset>
                  <legend>{copy.fields.channel}</legend>
                  <div className={styles.choiceGrid}>
                    {copy.fields.channelOptions.map((option) => (
                      <Choice
                        key={option.value}
                        name="channel"
                        value={option.value}
                        selected={data.channel === option.value}
                        onChange={(value) => setField("channel", value)}
                      >
                        {option.label}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(event) =>
                      setField("consent", event.target.checked)
                    }
                  />
                  <span>{copy.fields.consent}</span>
                </label>
              </div>
            )}

            <div className={styles.formActions}>
              {step > 0 ? (
                <button
                  className={styles.backButton}
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                >
                  {copy.actions.back}
                </button>
              ) : (
                <a className={styles.backButton} href={homeHref}>
                  {copy.actions.site}
                </a>
              )}
              {step < copy.steps.length - 1 ? (
                <button
                  className={styles.primaryButton}
                  type="button"
                  disabled={!canContinue}
                  onClick={() => setStep((current) => current + 1)}
                >
                  {copy.actions.continue}
                </button>
              ) : (
                <button
                  className={styles.primaryButton}
                  type="submit"
                  disabled={!canContinue}
                >
                  {copy.actions.submit}
                </button>
              )}
            </div>
            <p className={styles.demoNote}>{copy.demo}</p>
          </form>
        </div>
      </main>

      <section className={styles.questionnaireAbout}>
        <div>
          <p className={styles.sectionNumber}>{copy.about.label}</p>
          <h2>{copy.about.title}</h2>
        </div>
        <div>
          {copy.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <V2Footer locale={locale} />
    </div>
  );
}
