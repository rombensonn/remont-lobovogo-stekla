import { Reveal } from "@/components/ui/Reveal";
import { site, trustItems } from "@/lib/site-data";

export function Trust() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="section-label">Почему сюда обращаются</p>
            <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
              Доверие собирается из конкретных деталей
            </h2>
            <div className="mt-6 overflow-hidden rounded-card border border-graphite-800 bg-graphite-950 text-white shadow-panel">
              <div className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-white/10 p-6">
                <div>
                  <p className="text-6xl font-extrabold">{site.rating.value}</p>
                  <p className="mt-2 text-white/72">
                    {site.rating.ratings} оценки · {site.rating.reviews} отзыва
                  </p>
                </div>
                <span className="rounded-card border border-cyanbrand-300/30 px-3 py-2 text-xs font-extrabold text-cyanbrand-300">
                  Яндекс
                </span>
              </div>
              <p className="p-6 text-sm leading-6 text-white/64">
                В отзывах часто отмечают мастера Александра, скорость, аккуратность,
                объяснение нюансов и повторные обращения.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <article className="grid h-full grid-cols-[auto_1fr] gap-4 rounded-card border border-graphite-200 bg-porcelain-50 p-5 transition hover:bg-white hover:shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-card border border-graphite-200 bg-white">
                    <item.icon className="h-5 w-5 text-cyanbrand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-graphite-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-graphite-700">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
