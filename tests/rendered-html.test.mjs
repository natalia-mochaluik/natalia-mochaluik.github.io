import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Vzaimno identity with the original agency copy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Взаимно — брачное агентство для серьёзных отношений<\/title>/i,
  );
  assert.match(html, /logo-vzaimno-primary-v5\.png/);
  assert.match(html, /Личный подбор, интервью и организация встреч/);
  assert.match(html, /Конфиденциально, без публичных анкет/);
  assert.match(html, /Россия и Китай/);
  assert.match(html, /Профессиональный психолог помогает партнёрам/);
  assert.match(html, /Женские игровые вечера/);
  assert.match(html, /профессиональным игропрактиком/i);
  assert.doesNotMatch(html, /Почему «Взаимно»|Первая и последняя буквы VZAIMNO/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps V1 at the root and serves the separate Tiffany V2", async () => {
  const [
    rootResponse,
    v2Response,
    questionnaireResponse,
    chineseResponse,
    chineseQuestionnaireResponse,
  ] = await Promise.all([
    render("/"),
    render("/v2"),
    render("/v2/questionnaire"),
    render("/v2/zh"),
    render("/v2/zh/questionnaire"),
  ]);

  assert.equal(rootResponse.status, 200);
  assert.equal(v2Response.status, 200);
  assert.equal(questionnaireResponse.status, 200);
  assert.equal(chineseResponse.status, 200);
  assert.equal(chineseQuestionnaireResponse.status, 200);

  const [
    rootHtml,
    v2Html,
    questionnaireHtml,
    chineseHtml,
    chineseQuestionnaireHtml,
  ] = await Promise.all([
    rootResponse.text(),
    v2Response.text(),
    questionnaireResponse.text(),
    chineseResponse.text(),
    chineseQuestionnaireResponse.text(),
  ]);

  assert.match(rootHtml, /Брачное агентство/i);
  assert.doesNotMatch(rootHtml, /Лучшие свахи/i);

  assert.match(v2Html, /Лучшие свахи/);
  assert.match(v2Html, /hero-young-international\.jpg/);
  assert.match(v2Html, /\+7 917 767-52-20/);
  assert.match(v2Html, /\+7 921 905-12-34/);
  assert.match(v2Html, /Психолог для пар/);
  assert.match(v2Html, /Игры-практики для девушек/);
  assert.match(v2Html, /Александра и Наталья/);

  assert.match(questionnaireHtml, /Кто вы\?/);
  assert.match(questionnaireHtml, /Сколько вам лет\?/);
  assert.match(questionnaireHtml, /Шаг 1 из 4/);
  assert.match(questionnaireHtml, /Ответы не передаются и не сохраняются/i);

  assert.match(chineseHtml, /认真为你牵线/);
  assert.match(chineseHtml, /为什么选择我们/);
  assert.match(chineseHtml, /女性心理游戏工作坊/);
  assert.match(chineseHtml, /\/v2\/zh\/questionnaire\//);
  assert.match(chineseQuestionnaireHtml, /你的性别是/);
  assert.match(chineseQuestionnaireHtml, /第1步，共4步/);
  assert.match(chineseQuestionnaireHtml, /回答不会发送，也不会被保存/);
});

test("V2 exposes a persistent RU and Chinese language choice", async () => {
  const [components, layout, css] = await Promise.all([
    readFile(new URL("../app/v2/components.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/v2/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/v2/v2.module.css", import.meta.url), "utf8"),
  ]);

  assert.match(components, /vzaimno-v2-locale/);
  assert.match(components, /\bRU\b/);
  assert.match(components, /中文/);
  assert.match(layout, /navigator\.languages/);
  assert.match(layout, /\/v2\/zh\//);
  assert.match(css, /\.languageSwitch/);
  assert.match(
    css,
    /\.heroActions \.textLink\s*\{[^}]*border-bottom:\s*1px solid var\(--bronze\)[^}]*background:\s*transparent/s,
  );
});

test("V2 assets and palette stay isolated from V1", async () => {
  const [v2Css, desktopHero, mobileHero, russianCouple, chinaCouple] =
    await Promise.all([
      readFile(new URL("../app/v2/v2.module.css", import.meta.url), "utf8"),
      stat(
        new URL(
          "../public/images/v2/hero-young-international.jpg",
          import.meta.url,
        ),
      ),
      stat(
        new URL(
          "../public/images/v2/hero-young-international-mobile.jpg",
          import.meta.url,
        ),
      ),
      stat(
        new URL("../public/images/v2/couple-russia-young.jpg", import.meta.url),
      ),
      stat(
        new URL("../public/images/v2/couple-china-young.jpg", import.meta.url),
      ),
    ]);

  assert.ok(desktopHero.size > 0);
  assert.ok(mobileHero.size > 0);
  assert.ok(russianCouple.size > 0);
  assert.ok(chinaCouple.size > 0);
  assert.match(v2Css, /--tiffany:\s*#61b8b3/i);
  assert.match(v2Css, /--ivory:\s*#f5efe3/i);
  assert.match(v2Css, /--deep:\s*#123f3e/i);
  assert.match(v2Css, /--bronze:\s*#b9975b/i);
  assert.match(
    v2Css,
    /\.heroMedia\s*\{[^}]*grid-column:\s*2/s,
  );
  assert.match(
    v2Css,
    /@media \(max-width: 760px\)[\s\S]*\.heroMedia\s*\{[^}]*aspect-ratio:\s*4 \/ 5/s,
  );
});

test("keeps the approved image, interaction fixes and local-only form state", async () => {
  const [site, css, clubImage, mobileHero, logo, lightLogo, mark] = await Promise.all([
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(
      new URL(
        "../public/images/couple-china-club-no-glass.jpg",
        import.meta.url,
      ),
    ),
    stat(new URL("../public/images/hero-couple-mobile-v3.jpg", import.meta.url)),
    stat(new URL("../public/images/logo-vzaimno-primary-v5.png", import.meta.url)),
    stat(
      new URL(
        "../public/images/logo-vzaimno-primary-light-v5.png",
        import.meta.url,
      ),
    ),
    stat(new URL("../public/images/logo-vzaimno-mark-v5.png", import.meta.url)),
  ]);

  assert.ok(clubImage.size > 0);
  assert.ok(mobileHero.size > 0);
  assert.ok(logo.size > 0);
  assert.ok(lightLogo.size > 0);
  assert.ok(mark.size > 0);
  assert.match(site, /className="brand-logo"/);
  assert.doesNotMatch(site, /className="mark-story"/);
  assert.match(site, /country-flag country-flag-/);
  assert.match(site, /hero-couple-mobile-v3\.jpg/);
  assert.match(site, /Демонстрационная версия/);
  assert.match(css, /\.brand-logo/);
  assert.match(css, /\.process-list li:hover/);
  assert.match(css, /\.hero-image-cn\s*\{[^}]*object-position:\s*56% 18%/s);
});
