import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Взаимно V2 — лучшие свахи для серьёзных отношений",
  description:
    "Личное знакомство, бережный подбор и организация встреч в России и Китае. От первой симпатии до первого свидания.",
  alternates: {
    canonical: "/v2/",
    languages: {
      ru: "/v2/",
      "zh-CN": "/v2/zh/",
    },
  },
};

const localeBootstrap = `
  (() => {
    try {
      const path = window.location.pathname;
      const isChineseRoute = /^\\/v2\\/zh(?:\\/|$)/.test(path);
      const saved = window.localStorage.getItem("vzaimno-v2-locale");
      const deviceLanguages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language || "ru"];
      const deviceUsesChinese = deviceLanguages.some((language) =>
        /^zh(?:-|$)/i.test(language),
      );
      const useChinese = saved === "zh" || (!saved && deviceUsesChinese);
      const useRussian = saved === "ru" || (!saved && !deviceUsesChinese);
      const isQuestionnaire = /\\/questionnaire\\/?$/.test(path);

      if (useChinese && !isChineseRoute) {
        const target = isQuestionnaire
          ? "/v2/zh/questionnaire/"
          : "/v2/zh/";
        window.location.replace(target + window.location.search + window.location.hash);
        return;
      }

      if (useRussian && isChineseRoute && saved === "ru") {
        const target = isQuestionnaire
          ? "/v2/questionnaire/"
          : "/v2/";
        window.location.replace(target + window.location.search + window.location.hash);
        return;
      }

      document.documentElement.lang = isChineseRoute ? "zh-CN" : "ru";
    } catch {
      document.documentElement.lang = "ru";
    }
  })();
`;

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: localeBootstrap }} />
      {children}
    </>
  );
}
