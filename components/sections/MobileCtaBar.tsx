import { Camera, Phone, Route } from "lucide-react";
import { site } from "@/lib/site-data";

export function MobileCtaBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite-200 bg-porcelain-50/96 px-3 pb-[calc(0.55rem+env(safe-area-inset-bottom,0px))] pt-2 shadow-[0_-16px_44px_rgba(10,16,21,0.12)] backdrop-blur md:hidden"
      aria-label="Быстрые действия"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.phoneHref}
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-card bg-graphite-950 px-2 text-xs font-extrabold text-white"
        >
          <Phone className="mb-1 h-4 w-4" />
          Позвонить
        </a>
        <a
          href={site.yandexMapsUrl}
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-card border border-graphite-200 bg-white px-2 text-xs font-extrabold text-graphite-950"
        >
          <Route className="mb-1 h-4 w-4 text-cyanbrand-600" />
          Маршрут
        </a>
        <a
          href="#lead"
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-card bg-cyanbrand-400 px-2 text-xs font-extrabold text-graphite-950 shadow-glow"
        >
          <Camera className="mb-1 h-4 w-4" />
          Стоимость
        </a>
      </div>
    </nav>
  );
}
