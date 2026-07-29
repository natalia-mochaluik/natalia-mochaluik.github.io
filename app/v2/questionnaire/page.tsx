import type { Metadata } from "next";
import { Questionnaire } from "./questionnaire";

export const metadata: Metadata = {
  title: "Анкета — Взаимно V2",
  description:
    "Расскажите немного о себе и о человеке, которого хотите встретить. Анкета брачного агентства «Взаимно».",
  alternates: {
    canonical: "/v2/questionnaire/",
  },
};

export default function QuestionnairePage() {
  return <Questionnaire />;
}
