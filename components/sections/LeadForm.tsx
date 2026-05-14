"use client";

import { FormEvent, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Upload } from "lucide-react";
import { publicPath } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "ремонт скола",
  "ремонт трещины",
  "тонировка",
  "бронь лобового стекла",
  "растонировка",
  "другое",
];

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") || "").replace(/\D/g, "");

    if (phone.length < 10) {
      setState({
        status: "error",
        message: "Укажите телефон, чтобы мастер мог связаться с вами.",
      });
      return;
    }

    setState({ status: "loading", message: "Отправляем заявку..." });

    try {
      const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "/api/lead.php";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Не удалось отправить заявку.");
      }

      form.reset();
      setState({
        status: "success",
        message:
          data.message ||
          "Спасибо! Заявка отправлена. Мы свяжемся с вами, чтобы уточнить детали и время записи.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Не удалось отправить заявку. Попробуйте позвонить или написать в мессенджер.",
      });
    }
  }

  return (
    <section id="lead" className="bg-graphite-950 py-16 text-white sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="section-label dark-section-label">Заявка</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Пришлите фото или коротко опишите задачу
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Мастер предварительно оценит повреждение, подскажет, можно ли
            отремонтировать стекло без замены, и согласует удобное время.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-white/74">
            {[
              "Фото скола или трещины помогает быстрее назвать ориентир цены.",
              "Перед началом работы объясняем объём и стоимость.",
              "После выполнения можно проверить результат и задать вопросы.",
            ].map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[auto_1fr] gap-3 rounded-card border border-white/10 bg-white/[0.06] p-4"
              >
                <span className="grid h-7 w-7 place-items-center rounded-card bg-cyanbrand-300/12 text-xs font-extrabold text-cyanbrand-300">
                  0{index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-card border border-white/12 bg-white p-5 text-graphite-950 shadow-panel sm:p-6"
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Имя *
              <input
                required
                name="name"
                autoComplete="name"
                className="focus-ring min-h-12 rounded-card border border-graphite-200 bg-porcelain-50 px-4 text-base font-medium outline-none transition hover:border-cyanbrand-300 focus:bg-white"
                placeholder="Как к вам обращаться"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Телефон *
              <input
                required
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="focus-ring min-h-12 rounded-card border border-graphite-200 bg-porcelain-50 px-4 text-base font-medium outline-none transition hover:border-cyanbrand-300 focus:bg-white"
                placeholder="+7..."
              />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Услуга *
              <select
                required
                name="service"
                defaultValue=""
                className="focus-ring min-h-12 rounded-card border border-graphite-200 bg-porcelain-50 px-4 text-base font-medium outline-none transition hover:border-cyanbrand-300 focus:bg-white"
              >
                <option value="" disabled>
                  Выберите услугу
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Марка и модель автомобиля
              <input
                name="car"
                autoComplete="off"
                className="focus-ring min-h-12 rounded-card border border-graphite-200 bg-porcelain-50 px-4 text-base font-medium outline-none transition hover:border-cyanbrand-300 focus:bg-white"
                placeholder="Например, Kia Rio"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-bold">
            Комментарий
            <textarea
              name="message"
              rows={4}
              className="focus-ring resize-y rounded-card border border-graphite-200 bg-porcelain-50 px-4 py-3 text-base font-medium outline-none transition hover:border-cyanbrand-300 focus:bg-white"
              placeholder="Опишите скол, трещину, желаемую тонировку или удобное время"
            />
          </label>

          <label className="mt-4 grid gap-2 text-sm font-bold">
            Фото повреждения
            <span className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-cyanbrand-400 flex min-h-12 cursor-pointer items-center gap-3 rounded-card border border-dashed border-graphite-300 bg-porcelain-50 px-4 text-sm text-graphite-700 transition hover:border-cyanbrand-300">
              <Upload className="h-5 w-5 text-cyanbrand-600" />
              <input
                name="photo"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                className="w-full text-sm file:mr-3 file:rounded-card file:border-0 file:bg-graphite-950 file:px-3 file:py-2 file:text-sm file:font-bold file:text-white"
              />
            </span>
          </label>

          <div className="mt-5 grid gap-3 text-sm leading-6 text-graphite-700">
            <label className="flex gap-3">
              <input
                required
                type="checkbox"
                name="personalDataConsent"
                value="1"
                className="mt-1 h-5 w-5 rounded border-graphite-300 text-cyanbrand-600 focus:ring-cyanbrand-400"
              />
              <span>Я даю согласие на обработку персональных данных *</span>
            </label>
            <label className="flex gap-3">
              <input
                required
                type="checkbox"
                name="privacyPolicyConsent"
                value="1"
                className="mt-1 h-5 w-5 rounded border-graphite-300 text-cyanbrand-600 focus:ring-cyanbrand-400"
              />
              <span>
                Я ознакомлен(а) с{" "}
                <a className="font-bold text-cyanbrand-600 underline" href={publicPath("/privacy/")}>
                  Политикой обработки персональных данных
                </a>{" "}
                *
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={state.status === "loading"}
            className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-card bg-cyanbrand-400 px-5 py-3 text-base font-extrabold text-graphite-950 transition hover:bg-cyanbrand-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Отправляем
              </>
            ) : (
              "Отправить заявку"
            )}
          </button>

          <div
            className={cn(
              "mt-4 flex gap-2 rounded-card p-3 text-sm leading-6",
              state.status === "success" && "bg-emerald-50 text-emerald-800",
              state.status === "error" && "bg-amber-50 text-amber-900",
              (state.status === "idle" || state.status === "loading") && "hidden",
            )}
            role="status"
            aria-live="polite"
          >
            {state.status === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />
            )}
            <span>{state.message}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
