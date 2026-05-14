import { publicPath, replacementPlaceholders, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-graphite-950 py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-lg font-extrabold">{site.businessName}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
              Ремонт лобового стекла, ремонт автостёкол, тонировка автостёкол и
              бронирование лобового стекла в {site.cityPrepositional}. Данные с квадратными
              скобками нужно заменить перед публикацией.
            </p>
          </div>
          <div className="grid gap-2 text-sm font-semibold text-white/74">
            <a className="focus-ring rounded-card py-1 hover:text-white" href={publicPath("/privacy/")}>
              Политика обработки персональных данных
            </a>
            <a className="focus-ring rounded-card py-1 hover:text-white" href={publicPath("/consent/")}>
              Согласие на обработку персональных данных
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs leading-6 text-white/48">
          <p>
            © {new Date().getFullYear()} {site.businessName}. Не является публичной
            офертой. Цены указаны как ориентиры и зависят от автомобиля,
            повреждения и материалов.
          </p>
          <p className="mt-3">
            Заменить: {replacementPlaceholders.join(", ")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
