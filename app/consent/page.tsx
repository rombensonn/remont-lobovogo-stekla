import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description:
    "Заглушка согласия на обработку персональных данных для формы заявки.",
};

export default function ConsentPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-14">
        <article className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-cyanbrand-600">Юридическая информация</p>
          <h1 className="mt-3 text-4xl font-extrabold text-graphite-950">
            Согласие на обработку персональных данных
          </h1>
          <p className="mt-5 text-lg leading-8 text-graphite-700">
            Это шаблонная заглушка. Перед публикацией замените реквизиты и
            проверьте текст под фактические процессы обработки данных.
          </p>

          <div className="mt-10 grid gap-8 text-base leading-8 text-graphite-700">
            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">1. Согласие</h2>
              <p className="mt-3">
                Отправляя форму на сайте, пользователь даёт согласие {site.legal.entity},
                ИНН {site.legal.inn}, ОГРН/ОГРНИП {site.legal.ogrn}, адрес: {site.address},
                на обработку персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">2. Состав данных</h2>
              <p className="mt-3">
                Обрабатываются имя, телефон, услуга, данные автомобиля,
                комментарий, фото повреждения при наличии и технические данные
                отправки заявки.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">3. Действия с данными</h2>
              <p className="mt-3">
                Сбор, запись, систематизация, хранение, уточнение, использование,
                передача в пределах обработки заявки, обезличивание, блокирование
                и удаление.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-graphite-950">4. Отзыв согласия</h2>
              <p className="mt-3">
                Согласие можно отозвать, направив запрос на email: {site.email}.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
