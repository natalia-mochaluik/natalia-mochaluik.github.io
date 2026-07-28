import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the marriage agency identity and core promise", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Брачное агентство для серьёзных отношений<\/title>/i,
  );
  assert.match(html, /Брачное агентство — наверх/);
  assert.match(html, /Личный подбор, интервью и организация встреч/);
  assert.match(html, /Конфиденциально, без публичных анкет/);
  assert.match(html, /Россия и Китай/);
  assert.doesNotMatch(html, /VZAIMNO|logo-vzaimno|Почему «Взаимно»/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps the approved image, interaction fixes and local-only form state", async () => {
  const [site, css, clubImage, favicon] = await Promise.all([
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(
      new URL(
        "../public/images/couple-china-club-no-glass.jpg",
        import.meta.url,
      ),
    ),
    stat(new URL("../public/favicon.svg", import.meta.url)),
  ]);

  assert.ok(clubImage.size > 0);
  assert.ok(favicon.size > 0);
  assert.match(site, /country-flag country-flag-/);
  assert.match(site, /Демонстрационная версия/);
  assert.match(css, /\.process-list li:hover/);
  assert.match(css, /\.hero-image-cn\s*\{[^}]*object-position:\s*56% 18%/s);
});
