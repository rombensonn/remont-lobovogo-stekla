import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: `Ремонт лобового стекла, тонировка и бронь автостёкол в ${site.cityPrepositional}`,
  description:
    "Ремонт сколов и трещин лобового стекла, тонировка автостёкол, растонировка и бронь лобового стекла. Рейтинг 5,0, 62 оценки, 43 отзыва. Ежедневно 10:00–20:00.",
  keywords: [
    "ремонт лобового стекла",
    "ремонт автостёкол",
    "ремонт сколов на лобовом стекле",
    "ремонт трещин лобового стекла",
    "остановка трещины на лобовом стекле",
    "тонировка авто",
    "тонировка автостёкол",
    "тонировка автомобиля",
    "бронь лобового стекла",
    "бронирование лобового стекла",
    "атермальная тонировка",
    "растонировка авто",
    `ремонт лобового стекла в ${site.cityPrepositional}`,
    `тонировка автостёкол в ${site.district}`,
    "ремонт сколов рядом",
    "ремонт трещины на лобовом стекле рядом",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.baseUrl,
    siteName: site.businessName,
    title: `Ремонт лобового стекла, тонировка и бронь автостёкол в ${site.cityPrepositional}`,
    description:
      "Сколы, трещины, тонировка и бронь автостёкол. Предварительный расчёт по фото, согласование цены до начала работ.",
    images: [
      {
        url: `${site.baseUrl.replace(/\/$/, "")}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Ремонт и тонировка автостёкол",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
