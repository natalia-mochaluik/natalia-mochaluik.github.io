import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Взаимно V2 — лучшие свахи для серьёзных отношений",
  description:
    "Личное знакомство, бережный подбор и организация встреч в России и Китае. От первой симпатии до первого свидания.",
  alternates: {
    canonical: "/v2/",
  },
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
