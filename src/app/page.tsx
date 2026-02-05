import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const filters = [
  "Всі",
  "На сьогодні",
  "На завтра",
  "В роботі",
  "Нові",
  "Потребує ціни",
];

const clients = [
  {
    name: "Будмаркет Вигода",
    amount: "185 000",
    manager: "Андрій",
    type: "B2B",
    location: "Вигода",
    status: "В роботі",
    next: "06.02",
  },
  {
    name: "База «Карпати»",
    amount: "62 400",
    manager: "Михайло",
    type: "HoReCa",
    location: "Болехів",
    status: "Очікує рішення",
    next: "06.02",
  },
  {
    name: "ПП «Софія-Буд»",
    amount: "310 000",
    manager: "Людмила",
    type: "B2B",
    location: "Івано-Франківськ",
    status: "Потрібна ціна",
    next: "07.02",
  },
  {
    name: "ЖК «Сонячний»",
    amount: "98 500",
    manager: "Галина",
    type: "Девелопер",
    location: "Калуш",
    status: "Погодження",
    next: "07.02",
  },
];

const reminders = [
  {
    name: "Будмаркет Вигода",
    time: "Сьогодні, 14:30",
    note: "Уточнити обсяг по сірій бруківці.",
  },
  {
    name: "ПП «Софія-Буд»",
    time: "Завтра, 09:00",
    note: "Надіслати прайс і терміни виробництва.",
  },
  {
    name: "ЖК «Сонячний»",
    time: "Завтра, 11:15",
    note: "Погодити знижку 7% за обсяг.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(174,17,22,0.12),_transparent_55%),radial-gradient(circle_at_80%_10%,_rgba(80,8,0,0.15),_transparent_45%),linear-gradient(180deg,_#fff,_#fbf1ee_40%,_#fff)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[linear-gradient(120deg,_rgba(174,17,22,0.65),_rgba(80,8,0,0.55),_rgba(255,255,255,0.9))] p-[1.5px]">
          <PageHeader
            badge="Внутрішній портал"
            title="Головна панель"
            subtitle="Швидкий огляд клієнтів, знижок та залишків."
            right={
              <div className="animate-pop grid min-w-[220px] gap-2 rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-xs text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Контактів цього тижня</span>
                  <span className="font-semibold text-brand-dark">38</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>На сьогодні</span>
                  <span className="font-semibold text-brand-dark">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>На завтра</span>
                  <span className="font-semibold text-brand-dark">3</span>
                </div>
              </div>
            }
          />
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <div className="animate-float rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-semibold text-brand-dark">
                    Клієнти
                  </h2>
                  <p className="text-sm text-neutral-600">
                    7 менеджерів, 38 активних контактів цього тижня
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark/80">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  Останнє оновлення: сьогодні 11:40
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-brand-dark/10 bg-white px-4 py-2 text-sm font-semibold text-brand-dark/80 transition hover:border-brand-red/30 hover:text-brand-red"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4">
                {clients.map((client) => (
                  <article
                    key={client.name}
                    className="rounded-3xl border border-brand-dark/10 bg-white px-5 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-dark/10"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-brand-dark">
                          {client.name}
                        </h3>
                        <p className="text-sm text-neutral-500">
                          {client.type} · {client.location}
                        </p>
                      </div>
                      <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                        {client.status}
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                          Сума
                        </p>
                        <p className="text-base font-semibold text-brand-dark">
                          {client.amount} грн
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                          Менеджер
                        </p>
                        <p className="text-base font-semibold text-brand-dark">
                          {client.manager}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                          Наступний контакт
                        </p>
                        <p className="text-base font-semibold text-brand-dark">
                          {client.next}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="animate-pop rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-semibold text-brand-dark">
                    Система знижок
                  </h2>
                  <span className="rounded-full bg-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark/70">
                    Окрема сторінка
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Дві системи знижок в одному місці: фізичні особи та
                  укладальники/дилери.
                </p>
                <Link
                  href="/discounts"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-brand-dark/20 bg-white px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-red/40 hover:text-brand-red"
                >
                  Відкрити систему знижок
                </Link>
              </div>

              <div className="animate-float rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-semibold text-brand-dark">
                    Залишки
                  </h2>
                  <span className="rounded-full bg-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark/70">
                    Google Sheets
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Актуальні залишки по складу і кольорах, щоб швидко відповідати.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-inner">
                    <span className="font-semibold text-brand-dark">
                      Сіра 6 см
                    </span>
                    <span className="font-semibold text-brand-dark">420 м²</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-inner">
                    <span className="font-semibold text-brand-dark">
                      Червона 6 см
                    </span>
                    <span className="font-semibold text-brand-dark">210 м²</span>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full border border-brand-dark/20 px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-red/40 hover:text-brand-red">
                  Оновити дані
                </button>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="animate-pop rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                Фокус дня
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Ключові контакти на сьогодні і завтра.
              </p>
              <div className="mt-5 space-y-4">
                {reminders.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-brand-dark/10 bg-white px-4 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-brand-dark">
                        {item.name}
                      </h3>
                      <span className="text-xs font-semibold text-brand-red">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-float rounded-3xl border border-brand-dark/10 bg-brand-dark p-6 text-white shadow-[0_24px_60px_-40px_rgba(80,8,0,0.7)]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Порада
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">
                Мінімум форм — максимум дій.
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Сфокусуйтеся на наступному контакті та сумі. Решту можна
                підтягувати автоматично.
              </p>
              <button className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5">
                Швидке редагування
              </button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
