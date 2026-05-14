import { Info } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { priceRows } from "@/lib/site-data";

export function PriceTable() {
  return (
    <section id="prices" className="technical-grid bg-porcelain-100 py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="section-label">Цены</p>
          <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
            Понятные ориентиры до визита
          </h2>
          <p className="mt-4 text-lg leading-8 text-graphite-700">
            Финальная стоимость зависит от автомобиля, состояния стекла, размера
            повреждения и выбранных материалов.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 overflow-hidden rounded-card border border-graphite-200 bg-white shadow-panel">
          <div className="hidden grid-cols-[1fr_0.55fr_1.2fr] bg-graphite-950 px-5 py-4 text-sm font-extrabold text-white md:grid">
            <span>Позиция в прайсе</span>
            <span>Ориентир</span>
            <span>От чего зависит</span>
          </div>
          <div className="divide-y divide-graphite-100">
            {priceRows.map((row, index) => (
              <div
                key={row.service}
                className="grid gap-3 px-5 py-4 text-sm transition hover:bg-porcelain-50 md:grid-cols-[1fr_0.55fr_1.2fr] md:items-center"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-card bg-graphite-950 text-xs font-extrabold text-cyanbrand-300">
                    {index + 1}
                  </span>
                  <div>
                  <span className="text-xs font-bold uppercase text-steel md:hidden">
                    Услуга
                  </span>
                  <p className="font-bold text-graphite-950">{row.service}</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-steel md:hidden">
                    Цена
                  </span>
                  <p className="font-extrabold text-cyanbrand-600">{row.price}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-steel md:hidden">
                    Комментарий
                  </span>
                  <p className="text-graphite-700">{row.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-5 flex gap-3 rounded-card border border-cyanbrand-400/24 bg-white p-4 text-sm leading-6 text-graphite-700 shadow-sm">
          <Info className="mt-0.5 h-5 w-5 flex-none text-cyanbrand-600" />
          <p>
            Перед началом работы мастер объясняет объём и согласовывает цену.
            Стоимость не фиксируется “наугад”: она зависит от повреждения,
            автомобиля и материалов.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
