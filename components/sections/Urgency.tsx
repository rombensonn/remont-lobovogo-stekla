import { Camera, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  "маленький скол может пойти трещиной от перепада температуры;",
  "трещина может увеличиться после мойки, ямы или морозов;",
  "не каждое повреждение требует замены стекла;",
  "мастер подскажет, можно ли восстановить стекло или лучше рассмотреть замену;",
  "фото повреждения можно отправить заранее.",
];

export function Urgency() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-graphite-950 lg:block" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <Reveal>
          <p className="section-label">Когда лучше не тянуть</p>
          <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
            Скол на стекле лучше показать мастеру как можно раньше
          </h2>
          <p className="mt-4 text-lg leading-8 text-graphite-700">
            Срочность здесь не про давление, а про понятное решение: иногда
            ремонт проще и дешевле, пока повреждение не выросло.
          </p>
          <ButtonLink href="#lead" variant="primary" className="mt-7">
            <Camera className="h-4 w-4" />
            Отправить фото повреждения
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-card border border-white/12 bg-graphite-950 p-4 shadow-panel sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <p className="text-sm font-extrabold uppercase text-cyanbrand-300">damage board</p>
              <span className="rounded-card border border-amberline-300/30 px-2 py-1 text-xs font-extrabold text-amberline-300">
                фото заранее
              </span>
            </div>
            <ul className="grid gap-3">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-card border border-white/15 bg-white/[0.12] p-4 text-white"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyanbrand-300" />
                  <span className="font-medium leading-6 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
