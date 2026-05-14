import { Reveal } from "@/components/ui/Reveal";
import { workflow } from "@/lib/site-data";

export function Workflow() {
  return (
    <section id="workflow" className="bg-graphite-950 py-16 text-white sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="section-label dark-section-label">Как проходит работа</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Сначала понятный объём, потом работа
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Этот порядок помогает заранее понять цену, время и результат, а после
            работ спокойно проверить автомобиль.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {workflow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="relative h-full rounded-card border border-white/10 bg-white/[0.055] p-5 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]">
                <span className="grid h-10 w-10 place-items-center rounded-card border border-cyanbrand-300/40 bg-cyanbrand-300/12 text-sm font-extrabold text-cyanbrand-300">
                  0{index + 1}
                </span>
                <div className="my-5 h-px bg-gradient-to-r from-cyanbrand-300/70 via-white/10 to-transparent" />
                <h3 className="text-lg font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
