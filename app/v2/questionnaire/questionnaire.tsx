"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { V2Footer, V2Header } from "../components";
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

const steps = [
  { short: "О вас", title: "Давайте немного познакомимся" },
  { short: "Запрос", title: "Кого вы хотите встретить" },
  { short: "Формат", title: "Что вам сейчас особенно важно" },
  { short: "Контакты", title: "Как с вами связаться" },
];

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
    <label className={`${styles.choice} ${selected ? styles.choiceSelected : ""}`}>
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

export function Questionnaire() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
    return Boolean(
      data.name.trim() && data.contact.trim() && data.consent,
    );
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <V2Header />
        <main className={styles.thankYou}>
          <div className={styles.thankYouMark} aria-hidden="true">
            VO
          </div>
          <p className={styles.sectionNumber}>Анкета заполнена</p>
          <h1>Спасибо, {data.name}.</h1>
          <p>
            Это демонстрационная версия V2, поэтому данные никуда не
            отправились. Перед запуском мы подключим безопасную передачу анкеты
            Александре и Наталье.
          </p>
          <div className={styles.thankYouActions}>
            <a className={styles.primaryButton} href="tel:+79177675220">
              Позвонить нам
            </a>
            <a className={styles.textLink} href="/v2/">
              Вернуться на сайт <span aria-hidden="true">→</span>
            </a>
          </div>
        </main>
        <V2Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#questionnaire-main">
        Перейти к анкете
      </a>
      <V2Header />

      <main id="questionnaire-main" className={styles.questionnairePage}>
        <header className={styles.questionnaireIntro}>
          <p className={styles.eyebrow}>Приватная анкета «Взаимно»</p>
          <h1>Начнём с короткого знакомства</h1>
          <p>
            Ответьте на несколько вопросов. Анкета не публикуется и поможет нам
            подготовиться к первой беседе.
          </p>
        </header>

        <div className={styles.questionnaireLayout}>
          <aside className={styles.progressPanel} aria-label="Этапы анкеты">
            <p>
              Шаг {step + 1} из {steps.length}
            </p>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={steps.length}
              aria-valuenow={step + 1}
              aria-label={`Шаг ${step + 1} из ${steps.length}`}
            >
              <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
            </div>
            <ol>
              {steps.map((item, index) => (
                <li
                  key={item.short}
                  className={index === step ? styles.progressActive : ""}
                >
                  <span>0{index + 1}</span>
                  {item.short}
                </li>
              ))}
            </ol>
            <p className={styles.privacyNote}>
              Ваши ответы видят только Александра и Наталья.
            </p>
          </aside>

          <form
            ref={formRef}
            className={styles.questionnaireForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formStepHeading}>
              <span>0{step + 1}</span>
              <h2>{steps[step].title}</h2>
            </div>

            {step === 0 && (
              <div className={styles.formFields}>
                <fieldset>
                  <legend>Кто вы?</legend>
                  <div className={styles.choiceGrid}>
                    <Choice
                      name="gender"
                      value="woman"
                      selected={data.gender === "woman"}
                      onChange={(value) => setField("gender", value)}
                    >
                      Женщина
                    </Choice>
                    <Choice
                      name="gender"
                      value="man"
                      selected={data.gender === "man"}
                      onChange={(value) => setField("gender", value)}
                    >
                      Мужчина
                    </Choice>
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>Сколько вам лет?</span>
                  <input
                    type="number"
                    min="18"
                    max="99"
                    inputMode="numeric"
                    placeholder="Например, 34"
                    value={data.age}
                    onChange={(event) => setField("age", event.target.value)}
                  />
                </label>
              </div>
            )}

            {step === 1 && (
              <div className={styles.formFields}>
                <label className={styles.field}>
                  <span>В каком городе вы живёте?</span>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Ваш город"
                    value={data.city}
                    onChange={(event) => setField("city", event.target.value)}
                  />
                </label>
                <fieldset>
                  <legend>Какая география знакомства вам подходит?</legend>
                  <div className={styles.choiceGrid}>
                    {["Россия", "Китай", "Россия и Китай", "Обсудить лично"].map(
                      (option) => (
                        <Choice
                          key={option}
                          name="geography"
                          value={option}
                          selected={data.geography === option}
                          onChange={(value) => setField("geography", value)}
                        >
                          {option}
                        </Choice>
                      ),
                    )}
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>Предпочтительный возраст партнёра</span>
                  <input
                    type="text"
                    placeholder="Например, 30–42"
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
                  <legend>Каких отношений вы хотите?</legend>
                  <div className={styles.choiceGrid}>
                    {[
                      "Серьёзные отношения",
                      "Семья и брак",
                      "Хочу сначала познакомиться",
                      "Обсудить лично",
                    ].map((option) => (
                      <Choice
                        key={option}
                        name="goal"
                        value={option}
                        selected={data.goal === option}
                        onChange={(value) => setField("goal", value)}
                      >
                        {option}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Что ещё вам интересно? Можно выбрать несколько.</legend>
                  <div className={styles.checkboxGrid}>
                    {[
                      "Закрытый клуб",
                      "Фотосъёмка",
                      "Психолог для пар",
                      "Игры-практики",
                    ].map((option) => (
                      <label key={option} className={styles.checkboxChoice}>
                        <input
                          type="checkbox"
                          checked={data.interests.includes(option)}
                          onChange={() => toggleInterest(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span>Несколько слов о вашем запросе — по желанию</span>
                  <textarea
                    rows={4}
                    placeholder="Что для вас особенно важно?"
                    value={data.request}
                    onChange={(event) => setField("request", event.target.value)}
                  />
                </label>
              </div>
            )}

            {step === 3 && (
              <div className={styles.formFields}>
                <label className={styles.field}>
                  <span>Как к вам обращаться?</span>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Имя"
                    value={data.name}
                    onChange={(event) => setField("name", event.target.value)}
                  />
                </label>
                <label className={styles.field}>
                  <span>Телефон или электронная почта</span>
                  <input
                    type="text"
                    autoComplete="tel"
                    placeholder="+7 900 000-00-00"
                    value={data.contact}
                    onChange={(event) => setField("contact", event.target.value)}
                  />
                </label>
                <fieldset>
                  <legend>Где вам удобнее получить ответ?</legend>
                  <div className={styles.choiceGrid}>
                    {["Телефон", "MAX", "ВКонтакте", "Telegram"].map((option) => (
                      <Choice
                        key={option}
                        name="channel"
                        value={option}
                        selected={data.channel === option}
                        onChange={(value) => setField("channel", value)}
                      >
                        {option}
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
                  <span>
                    Соглашаюсь на обработку данных для ответа на эту анкету.
                  </span>
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
                  ← Назад
                </button>
              ) : (
                <a className={styles.backButton} href="/v2/">
                  ← На сайт
                </a>
              )}
              {step < steps.length - 1 ? (
                <button
                  className={styles.primaryButton}
                  type="button"
                  disabled={!canContinue}
                  onClick={() => setStep((current) => current + 1)}
                >
                  Продолжить
                </button>
              ) : (
                <button
                  className={styles.primaryButton}
                  type="submit"
                  disabled={!canContinue}
                >
                  Завершить анкету
                </button>
              )}
            </div>
            <p className={styles.demoNote}>
              Пока это демонстрационная версия: ответы не передаются и не
              сохраняются.
            </p>
          </form>
        </div>
      </main>

      <section className={styles.questionnaireAbout}>
        <div>
          <p className={styles.sectionNumber}>Кто прочитает вашу анкету</p>
          <h2>Александра и Наталья</h2>
        </div>
        <div>
          <p>
            Мы — современные свахи с большим опытом работы с людьми и высшим
            психологическим образованием. Каждую анкету читаем сами и отвечаем
            лично.
          </p>
          <p>
            В команде также работают профессиональный фотограф, психолог для
            пар и игропрактик, который проводит женские вечера.
          </p>
        </div>
      </section>

      <V2Footer />
    </div>
  );
}
