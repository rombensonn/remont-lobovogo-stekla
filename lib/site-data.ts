import {
  BadgeCheck,
  Banknote,
  CalendarClock,
  Car,
  CreditCard,
  HandCoins,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  text: string;
  price: string;
  cta: string;
  icon: LucideIcon;
};

export type PriceRow = {
  service: string;
  price: string;
  comment: string;
};

export type InfoCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ReviewCard = {
  quote: string;
  tag: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

function normalizeBasePath(value?: string) {
  const trimmed = (value || "").replace(/\/+$/, "");

  if (!trimmed) {
    return "";
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export const site = {
  businessName: "Ремонт и тонировка автостёкол",
  businessNameTodo: "<!-- TODO: заменить на точное название бизнеса -->",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  basePath: normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH),
  city: "Химки",
  cityPrepositional: "Химках",
  district: "микрорайон Сходня",
  address: "Овражная ул., 24, стр. 8, микрорайон Сходня, Химки",
  phone: "+7 (985) 220-15-42",
  phoneHref: "tel:+79852201542",
  email: "[EMAIL]",
  whatsapp: "",
  whatsappUrl: "",
  telegram: "",
  telegramUrl: "",
  yandexMapsUrl: "https://yandex.ru/maps/-/CPgSN28M",
  yandexMapEmbedUrl:
    "https://yandex.ru/map-widget/v1/?mode=search&text=%D0%9E%D0%B2%D1%80%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2024%2C%20%D1%81%D1%82%D1%80.%208%2C%20%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%20%D0%A1%D1%85%D0%BE%D0%B4%D0%BD%D1%8F%2C%20%D0%A5%D0%B8%D0%BC%D0%BA%D0%B8&z=17",
  hours: "Ежедневно с 10:00 до 20:00",
  rating: {
    value: "5,0",
    numeric: 5,
    ratings: 62,
    reviews: 43,
  },
  payments: ["карта", "наличные", "банковский перевод", "онлайн-оплата", "СБП"],
  nav: [
    { label: "Услуги", href: "#services" },
    { label: "Цены", href: "#prices" },
    { label: "Как проходит работа", href: "#workflow" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ],
  legal: {
    entity: "[ИП/ООО]",
    inn: "[ИНН]",
    ogrn: "[ОГРН/ОГРНИП]",
  },
};

export function publicPath(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${site.basePath}${normalizedPath}`;
}

export const services: Service[] = [
  {
    title: "Ремонт сколов",
    text: "Если скол свежий и стекло ещё можно восстановить, мастер аккуратно обработает повреждение и поможет остановить его развитие.",
    price: "от 1000 ₽",
    cta: "Показать скол мастеру",
    icon: Wrench,
  },
  {
    title: "Ремонт трещин",
    text: "Остановка и проклейка трещин на лобовом стекле. Стоимость зависит от длины трещины и состояния стекла.",
    price: "проклейка — 100 ₽/см, остановка — от 1000 ₽",
    cta: "Рассчитать по фото",
    icon: ShieldCheck,
  },
  {
    title: "Тонировка автостёкол",
    text: "Подбор плёнки, аккуратная подготовка и тонировка автомобиля с учётом пожеланий по затемнению.",
    price: "от 4000 ₽",
    cta: "Записаться на тонировку",
    icon: Sparkles,
  },
  {
    title: "Бронь лобового стекла",
    text: "Защитная плёнка помогает снизить риск повреждений от мелких камней и дорожного мусора.",
    price: "от 10 000 ₽, точная стоимость индивидуально",
    cta: "Уточнить стоимость",
    icon: BadgeCheck,
  },
  {
    title: "Растонировка",
    text: "Аккуратное снятие старой плёнки перед новой тонировкой или по необходимости.",
    price: "от 500 ₽",
    cta: "Узнать ближайшее время",
    icon: Car,
  },
];

export const priceRows: PriceRow[] = [
  {
    service: "Ремонт скола",
    price: "от 1000 ₽",
    comment: "зависит от размера и состояния повреждения",
  },
  {
    service: "Проклейка трещины",
    price: "100 ₽/см",
    comment: "цена зависит от длины трещины",
  },
  {
    service: "Остановка трещины",
    price: "от 1000 ₽",
    comment: "после осмотра стекла",
  },
  {
    service: "Тонировка заднего полукруга",
    price: "от 4000 ₽",
    comment: "зависит от автомобиля и плёнки",
  },
  {
    service: "Тонировка лобового стекла",
    price: "от 3000 ₽",
    comment: "зависит от выбранной плёнки",
  },
  {
    service: "Растонировка",
    price: "от 500 ₽",
    comment: "зависит от объёма работ",
  },
  {
    service: "Бронь лобового стекла",
    price: "от 10 000 ₽",
    comment: "рассчитывается индивидуально",
  },
];

export const trustItems: InfoCard[] = [
  {
    title: "Быстрая работа",
    text: "Многие клиенты отмечают, что ремонт и тонировка выполняются оперативно.",
    icon: Timer,
  },
  {
    title: "Опытный мастер",
    text: "В отзывах часто благодарят мастера Александра за консультацию и аккуратную работу.",
    icon: BadgeCheck,
  },
  {
    title: "Помощь с выбором",
    text: "Мастер объясняет нюансы и помогает подобрать решение под стекло и задачу.",
    icon: MessageCircle,
  },
  {
    title: "Повторные обращения",
    text: "Часть клиентов приезжает не первый раз и рекомендует сервис знакомым.",
    icon: Star,
  },
  {
    title: "Удобная оплата",
    text: "Можно оплатить наличными, картой, переводом, онлайн или через СБП.",
    icon: CreditCard,
  },
  {
    title: "Работа каждый день",
    text: "Запись доступна ежедневно с 10:00 до 20:00 по предварительному согласованию.",
    icon: CalendarClock,
  },
];

export const workflow = [
  {
    title: "Вы отправляете фото или описываете задачу",
    text: "Можно показать скол, трещину или написать, какая тонировка нужна.",
  },
  {
    title: "Мастер предварительно оценивает объём",
    text: "Подскажет ориентир по стоимости и времени.",
  },
  {
    title: "Вы согласовываете время",
    text: "Сервис работает ежедневно с 10:00 до 20:00.",
  },
  {
    title: "Автомобиль готовят к работе",
    text: "Перед тонировкой или ремонтом важно аккуратно подготовить поверхность.",
  },
  {
    title: "Вы проверяете результат",
    text: "После работы можно осмотреть стекло и задать вопросы мастеру.",
  },
];

export const reviews: ReviewCard[] = [
  {
    quote: "Быстро устранили скол и остановили трещину, работа заняла около получаса.",
    tag: "ремонт скола",
  },
  {
    quote: "Мастер подробно объяснил нюансы и дал рекомендации по дальнейшему уходу.",
    tag: "консультация",
  },
  {
    quote: "Тонировку сделали быстро и аккуратно, помогли подобрать плёнку.",
    tag: "тонировка",
  },
  {
    quote: "Обращаюсь не первый раз, специалист высокого класса.",
    tag: "повторное обращение",
  },
  {
    quote: "Понравились чистота, порядок и вежливое отношение.",
    tag: "мастерская",
  },
  {
    quote: "Скол после ремонта почти не заметен, результатом довольна.",
    tag: "результат",
  },
  {
    quote: "Стоимость объяснили заранее, без лишних разговоров и давления.",
    tag: "понятная цена",
  },
  {
    quote: "Посоветовали, что лучше сделать со стеклом, и приняли в удобное время.",
    tag: "запись",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Можно ли понять цену по фото?",
    answer:
      "Да, предварительно можно. Точная стоимость зависит от размера повреждения, типа стекла, автомобиля и выбранных материалов.",
  },
  {
    question: "Сколько занимает ремонт скола?",
    answer:
      "Небольшие повреждения часто ремонтируются быстро. Точное время мастер подскажет после осмотра.",
  },
  {
    question: "Можно ли остановить трещину?",
    answer:
      "Во многих случаях трещину можно остановить и проклеить, но всё зависит от её длины, расположения и состояния стекла.",
  },
  {
    question: "Сколько стоит тонировка?",
    answer:
      "Тонировка автомобиля — от 4000 ₽, лобового стекла — от 3000 ₽, растонировка — от 500 ₽. Точная цена зависит от автомобиля и плёнки.",
  },
  {
    question: "Работаете ли в выходные?",
    answer: "Да, сервис работает ежедневно с 10:00 до 20:00.",
  },
  {
    question: "Как можно оплатить?",
    answer: "Наличными, картой, банковским переводом, онлайн или через СБП.",
  },
  {
    question: "Можно ли приехать с животным?",
    answer: "Да, посещение с животными разрешено.",
  },
  {
    question: "Есть ли доступность для людей на инвалидной коляске?",
    answer: "Да, помещение и вход доступны для людей на инвалидной коляске.",
  },
];

export const paymentCards: InfoCard[] = [
  { title: "Карта", text: "Оплата банковской картой.", icon: CreditCard },
  { title: "Наличные", text: "Можно оплатить наличными.", icon: Banknote },
  { title: "СБП и перевод", text: "Доступны онлайн-оплата, СБП и банковский перевод.", icon: HandCoins },
];

export const replacementPlaceholders = [
  "[НАЗВАНИЕ]",
  "[EMAIL]",
  "[ИП/ООО]",
  "[ИНН]",
  "[ОГРН/ОГРНИП]",
];
