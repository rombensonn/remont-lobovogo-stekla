import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { reviews, site } from "@/lib/site-data";

export function Reviews() {
  return (
    <section id="reviews" className="bg-porcelain-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="section-label">Отзывы</p>
            <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
              Что чаще всего отмечают клиенты
            </h2>
            <div className="mt-6 rounded-card border border-graphite-800 bg-graphite-950 p-6 text-white shadow-panel">
              <div className="flex items-center gap-1 text-cyanbrand-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-cyanbrand-300" />
                ))}
              </div>
              <p className="mt-4 text-5xl font-extrabold">{site.rating.value} / 5</p>
              <p className="mt-2 text-white/72">
                {site.rating.ratings} оценки · {site.rating.reviews} отзыва
              </p>
              <p className="mt-5 text-sm leading-6 text-white/64">
                Ниже короткие переработанные формулировки по основным смыслам из
                отзывов, без длинного копирования.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review, index) => (
              <Reveal key={review.quote} delay={index * 0.03}>
                <article className="relative h-full overflow-hidden rounded-card border border-graphite-200 bg-white p-5 shadow-sm">
                  <div className="absolute right-4 top-4 text-xs font-extrabold text-graphite-200">
                    R-{String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base font-semibold leading-7 text-graphite-950">
                    «{review.quote}»
                  </p>
                  <p className="mt-5 inline-flex rounded-card border border-cyanbrand-300/35 bg-cyanbrand-300/10 px-3 py-1 text-xs font-extrabold uppercase text-cyanbrand-600">
                    {review.tag}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
