import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = (forwardedHost ?? requestHeaders.get("host") ?? "localhost:3000")
    .split(",")[0]
    .trim();
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = (
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https")
  )
    .split(",")[0]
    .trim();
  const origin = `${protocol}://${host}`;
  const title = "Взаимно — брачное агентство для серьёзных отношений";
  const description =
    "Личный подбор, интервью и организация встреч в России и Китае. Конфиденциально, без публичных анкет.";
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    applicationName: "Взаимно",
    icons: {
      icon: "/images/logo-vzaimno-mark-v5.png",
      apple: "/images/logo-vzaimno-mark-v5.png",
    },
    alternates: {
      canonical: origin,
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: origin,
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 628,
          alt: "Взаимно — брачное агентство в России и Китае",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
