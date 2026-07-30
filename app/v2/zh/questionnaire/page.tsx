import type { Metadata } from "next";
import { Questionnaire } from "../../questionnaire/questionnaire";

export const metadata: Metadata = {
  title: "资料问卷 — VZAIMNO",
  description:
    "介绍你自己和你希望遇见的人。资料不会公开，只用于准备第一次私密沟通。",
  alternates: {
    canonical: "/v2/zh/questionnaire/",
    languages: {
      ru: "/v2/questionnaire/",
      "zh-CN": "/v2/zh/questionnaire/",
    },
  },
};

export default function V2ChineseQuestionnairePage() {
  return <Questionnaire locale="zh" />;
}
