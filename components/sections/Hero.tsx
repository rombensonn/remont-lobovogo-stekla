import { Camera, Clock, CreditCard, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { publicPath, site } from "@/lib/site-data";

function BusinessNameTodoComment() {
  return (
    <span
      className="hidden"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: site.businessNameTodo }}
    />
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-graphite-950 text-white">
      <BusinessNameTodoComment />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="section-shell relative grid gap-8 py-8 md:grid-cols-[0.88fr_1.12fr] md:items-stretch md:py-12 lg:py-16">
        <Reveal className="flex flex-col justify-between rounded-card border border-white/12 bg-white/[0.055] p-5 shadow-[0_1px_0_rgba(255,255,255,0.16)_inset] sm:p-7 lg:p-8">
          <div>
            <div className="inline-flex min-h-9 items-center gap-2 rounded-card border border-cyanbrand-300/24 bg-cyanbrand-300/10 px-3 text-xs font-extrabold uppercase text-cyanbrand-300">
            <Star className="h-4 w-4 fill-cyanbrand-300" />
            {site.rating.value} на Яндекс Картах · {site.rating.ratings} оценки
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl">
              Ремонт лобового стекла, тонировка и бронь автостёкол
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
              Ремонтируем сколы и трещины, подбираем тонировку и защищаем
              лобовое стекло. Работаем ежедневно с 10:00 до 20:00, стоимость
              можно предварительно рассчитать по фото.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#lead" variant="primary">
              <Camera className="h-4 w-4" />
              Рассчитать стоимость
            </ButtonLink>
            <ButtonLink href="#lead" variant="secondary" className="border-white/14 bg-white/8 text-white hover:bg-white hover:text-graphite-950">
              Записаться на сегодня
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost" className="text-white hover:bg-white/10">
              <Phone className="h-4 w-4" />
              Позвонить
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-2">
            {[
              { icon: Star, title: "5,0", text: "43 отзыва" },
              { icon: Clock, title: "10:00–20:00", text: "каждый день" },
              { icon: CreditCard, title: "5 способов", text: "карта, СБП, наличные" },
              { icon: MapPin, title: "Сходня, Химки", text: "Овражная ул., 24, стр. 8" },
            ].map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-3 rounded-card border border-white/10 bg-graphite-950/48 p-3 backdrop-blur"
              >
                <item.icon className="mt-1 h-5 w-5 text-cyanbrand-300" />
                <div>
                  <p className="text-base font-extrabold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/62">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative grid">
          <div className="relative min-h-[390px] overflow-hidden rounded-card border border-white/12 bg-graphite-900 shadow-panel md:min-h-[520px]">
            <Image
              src={publicPath("/hero-workshop.png")}
              alt="Осмотр лобового стекла в мастерской по автостёклам"
              fill
              priority
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/22 to-transparent" />
            <div className="absolute left-4 top-4 rounded-card border border-white/15 bg-graphite-950/70 p-4 text-white backdrop-blur-md sm:left-6 sm:top-6">
              <p className="text-xs font-extrabold uppercase text-cyanbrand-300">
                осмотр по стеклу
              </p>
              <p className="mt-2 max-w-64 text-sm leading-6 text-white/76">
                Фото используется как тематический визуал, не как пример конкретной выполненной работы.
              </p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 text-sm sm:absolute sm:-bottom-5 sm:left-6 sm:right-6 sm:mt-0 sm:grid-cols-3">
            <div className="rounded-card border border-white/14 bg-white p-4 text-graphite-950 shadow-soft">
              <p className="text-xs font-bold uppercase text-steel">ремонт сколов</p>
              <p className="mt-2 text-xl font-extrabold">от 1000 ₽</p>
            </div>
            <div className="rounded-card border border-white/14 bg-white p-4 text-graphite-950 shadow-soft">
              <p className="text-xs font-bold uppercase text-steel">трещины</p>
              <p className="mt-2 text-xl font-extrabold">100 ₽/см</p>
            </div>
            <div className="rounded-card border border-amberline-300/40 bg-amberline-300 p-4 text-graphite-950 shadow-soft">
              <p className="text-xs font-bold uppercase text-graphite-700">тонировка</p>
              <p className="mt-2 text-xl font-extrabold">от 4000 ₽</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
