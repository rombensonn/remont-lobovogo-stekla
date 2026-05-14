import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="section-label">Ответы на вопросы</p>
          <h2 className="mt-3 text-3xl font-extrabold text-graphite-950 sm:text-4xl">
            Коротко о цене, сроках и записи
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.02}>
              <details className="group rounded-card border border-graphite-200 bg-porcelain-50 p-5 shadow-sm open:bg-white">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-extrabold text-graphite-950">
                  {item.question}
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-card border border-graphite-200 bg-white">
                    <ChevronDown className="h-5 w-5 text-cyanbrand-600 transition group-open:rotate-180" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-graphite-700">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
