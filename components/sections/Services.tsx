import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="bg-porcelain-50 py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="section-label">Что можно сделать</p>
          <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
            Узкая мастерская по автостёклам, без лишних услуг
          </h2>
          <p className="mt-4 text-lg leading-8 text-graphite-700">
            Скол, трещина, тонировка или бронь стекла разбираются по месту:
            мастер объясняет объём работ и ориентир по цене до начала.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.03}
              className={
                index === 0
                  ? "lg:col-span-5"
                  : index === 1
                    ? "lg:col-span-7"
                    : "lg:col-span-4"
              }
            >
              <article
                className={[
                  "group relative flex h-full min-h-72 flex-col overflow-hidden rounded-card border p-5 transition duration-200 hover:-translate-y-1",
                  index === 0
                    ? "border-graphite-800 bg-graphite-950 text-white shadow-panel"
                    : index === 1
                      ? "border-cyanbrand-300/45 bg-white text-graphite-950 shadow-soft"
                      : "border-graphite-200 bg-white text-graphite-950 shadow-sm",
                ].join(" ")}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyanbrand-400 via-amberline-300 to-transparent" />
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-card border transition",
                      index === 0
                        ? "border-white/14 bg-white/10 text-cyanbrand-300"
                        : "border-graphite-200 bg-porcelain-50 text-cyanbrand-600 group-hover:border-cyanbrand-300",
                    ].join(" ")}
                  >
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={[
                      "rounded-card border px-2 py-1 text-xs font-extrabold",
                      index === 0
                        ? "border-white/12 text-white/56"
                        : "border-graphite-200 text-steel",
                    ].join(" ")}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className={["mt-6 text-2xl font-extrabold", index === 0 ? "text-white" : "text-graphite-950"].join(" ")}>
                  {service.title}
                </h3>
                <p className={["mt-3 flex-1 text-sm leading-6", index === 0 ? "text-white/68" : "text-graphite-700"].join(" ")}>
                  {service.text}
                </p>
                <p className={["mt-6 text-lg font-extrabold", index === 0 ? "text-cyanbrand-300" : "text-graphite-950"].join(" ")}>
                  {service.price}
                </p>
                <a
                  href="#lead"
                  className={[
                    "focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-card text-sm font-extrabold transition",
                    index === 0 ? "text-white hover:text-cyanbrand-300" : "text-cyanbrand-600 hover:text-graphite-950",
                  ].join(" ")}
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
