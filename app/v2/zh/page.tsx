import type { Metadata } from "next";
import { V2Site } from "../site";

export const metadata: Metadata = {
  title: "VZAIMNO — 俄罗斯与中国的认真婚恋服务",
  description:
    "一对一了解、认真匹配，并陪伴你从第一次心动走到第一次约会。面向俄罗斯与中国。",
  alternates: {
    canonical: "/v2/zh/",
    languages: {
      ru: "/v2/",
      "zh-CN": "/v2/zh/",
    },
  },
};

export default function V2ChineseHome() {
  return <V2Site locale="zh" />;
}
