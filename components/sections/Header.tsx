import { Phone } from "lucide-react";
import { publicPath, site } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const homePath = publicPath("/");

  return (
    <header className="sticky top-0 z-40 border-b border-graphite-200 bg-porcelain-50 text-graphite-950 shadow-[0_10px_32px_rgba(10,16,21,0.08)]">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a href={`${homePath}#top`} className="focus-ring flex items-center gap-3 rounded-card py-2" aria-label="На главную">
          <span className="grid h-10 w-10 place-items-center rounded-card bg-graphite-950 text-cyanbrand-300 shadow-glow">
            <span className="h-4 w-5 rounded-[2px] border border-cyanbrand-300/80 bg-cyanbrand-300/15" />
          </span>
          <span>
            <span className="block text-sm font-extrabold leading-tight sm:text-base">
              {site.businessName}
            </span>
            <span className="block text-xs font-semibold text-graphite-500">ремонт · тонировка · бронь</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-card border border-graphite-200 bg-white p-1 shadow-sm lg:flex" aria-label="Основное меню">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={`${homePath}${item.href}`}
              className="focus-ring rounded-card px-3 py-2 text-sm font-bold text-graphite-600 transition hover:bg-graphite-950 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={`${homePath}#lead`} variant="primary" className="hidden sm:inline-flex">
            Записаться
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Позвонить</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
