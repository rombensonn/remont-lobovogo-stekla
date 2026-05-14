import { CarFront, MapPin, Phone, Route, WalletCards } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site-data";

export function Contacts() {
  return (
    <section id="contacts" className="bg-porcelain-50 py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="section-label">Контакты</p>
          <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
            Запишитесь заранее и приезжайте в согласованное время
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid gap-4">
              {[
                { icon: MapPin, label: "Адрес", value: site.address },
                { icon: Phone, label: "Телефон", value: site.phone },
                { icon: WalletCards, label: "Оплата", value: site.payments.join(", ") },
                {
                  icon: CarFront,
                  label: "Доступность",
                  value:
                    "можно с животными, вход и помещение доступны для людей на инвалидной коляске, есть парковка для людей с инвалидностью",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-card border border-graphite-200 bg-white p-4 shadow-sm"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-card bg-graphite-950">
                    <item.icon className="h-5 w-5 text-cyanbrand-300" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-steel">{item.label}</p>
                    <p className="mt-1 font-semibold leading-7 text-graphite-950">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.yandexMapsUrl} variant="primary">
                <Route className="h-4 w-4" />
                Построить маршрут
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="dark">
                <Phone className="h-4 w-4" />
                Позвонить
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-card border border-graphite-200 bg-white shadow-panel">
              <div className="relative min-h-[520px] bg-graphite-950">
                <iframe
                  src={site.yandexMapEmbedUrl}
                  title="Яндекс Карта: Овражная ул., 24, стр. 8, микрорайон Сходня, Химки"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
