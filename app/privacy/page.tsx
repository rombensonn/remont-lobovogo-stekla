import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description:
    "Заглушка политики обработки персональных данных. Перед публикацией замените реквизиты и проверьте текст у юриста.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-14">
        <article className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-cyanbrand-600">Юридическая информация</p>
          <h1 className="mt-3 text-4xl font-extrabold text-graphite-950">
            Политика обработки персональных данных
          </h1>
          <p className="mt-5 text-lg leading-8 text-graphite-700">
            Это шаблонная заглушка. Перед публикацией замените реквизиты и
            согласуйте документ с юристом под фактическую модель обработки данных.
          </p>

          <div className="mt-10 grid gap-8 text-base leading-8 text-graphite-700">
            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">1. Оператор</h2>
              <p className="mt-3">
                Оператор персональных данных: {site.legal.entity}, ИНН {site.legal.inn},
                ОГРН/ОГРНИП {site.legal.ogrn}, адрес: {site.address}, email: {site.email}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">2. Какие данные обрабатываются</h2>
              <p className="mt-3">
                Имя, телефон, выбранная услуга, марка и модель автомобиля,
                комментарий, прикреплённое фото повреждения при наличии,
                технические данные отправки формы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">3. Цели обработки</h2>
              <p className="mt-3">
                Обработка заявки, связь с клиентом, предварительная оценка
                стоимости и времени работ, согласование записи.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">4. Срок хранения</h2>
              <p className="mt-3">
                Данные хранятся срок, необходимый для обработки заявки и выполнения
                обязательств, либо до отзыва согласия, если иной срок не требуется
                законодательством РФ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">5. Отзыв согласия</h2>
              <p className="mt-3">
                Для отзыва согласия направьте запрос на email: {site.email}. В
                запросе укажите данные, позволяющие найти обращение.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
