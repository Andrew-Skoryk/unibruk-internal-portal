import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const discountPhysical = [
  {
    qty: "до 150 м² (до 50 000 грн)",
    type: "сіра",
    price: "прайс",
  },
  {
    qty: "до 150 м² (більше 50 000 грн)",
    type: "сіра, кольорова, колормікс",
    price: "5%",
  },
  {
    qty: "від 150 м² до 300 м²",
    type: "сіра",
    price: "5%",
  },
  {
    qty: "від 150 м² до 300 м²",
    type: "кольорова",
    price: "6–7%",
  },
  {
    qty: "від 150 м² до 300 м²",
    type: "колормікс",
    price: "8–10%",
  },
  {
    qty: "від 300 м² до 500 м²",
    type: "сіра",
    price: "10%",
  },
  {
    qty: "від 300 м² до 500 м²",
    type: "кольорова",
    price: "11–12%",
  },
  {
    qty: "від 300 м² до 500 м²",
    type: "колормікс",
    price: "13–15%",
  },
  {
    qty: "більше 500 м²",
    type: "сіра",
    price: "15%",
  },
  {
    qty: "більше 500 м²",
    type: "кольорова",
    price: "16–17%",
  },
  {
    qty: "більше 500 м²",
    type: "колормікс",
    price: "18–20%",
  },
];

const discountDealers = [
  {
    type: "сіра",
    distance: "20–30 км",
    discount: "14–20%",
  },
  {
    type: "кольорова, колормікс",
    distance: "20–30 км",
    discount: "16–22%",
  },
  {
    type: "сіра",
    distance: "40–60 км",
    discount: "19–22%",
  },
  {
    type: "кольорова, колормікс",
    distance: "40–60 км",
    discount: "20–24%",
  },
  {
    type: "сіра",
    distance: "70–90 км",
    discount: "22–24%",
  },
  {
    type: "кольорова, колормікс",
    distance: "70–90 км",
    discount: "23–25%",
  },
  {
    type: "сіра",
    distance: "100+ км",
    discount: "24–30%",
  },
  {
    type: "кольорова, колормікс",
    distance: "100+ км",
    discount: "25–30%",
  },
];

export default function DiscountsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(174,17,22,0.12),_transparent_55%),radial-gradient(circle_at_80%_10%,_rgba(80,8,0,0.15),_transparent_45%),linear-gradient(180deg,_#fff,_#fbf1ee_40%,_#fff)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[linear-gradient(120deg,_rgba(174,17,22,0.65),_rgba(80,8,0,0.55),_rgba(255,255,255,0.9))] p-[1.5px]">
          <PageHeader
            badge="Система знижок"
            title="Правила знижок"
            subtitle="Фізичні особи та укладальники/дилери в одному місці."
            right={
              <div className="animate-pop rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-xs text-neutral-600">
                <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Нотатка
                </div>
                <div className="mt-2 font-semibold text-brand-dark">
                  Доставка транспортом ТОВ «Унібрук» за домовленістю: 80 грн/км.
                </div>
              </div>
            }
          />
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="animate-rise flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                Фізичні особи
              </h2>
              <span className="rounded-full bg-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark/70">
                Реалізація продукції
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Алгоритм розрахунку знижки при реалізації продукції фізичним
              особам.
            </p>
            <div className="mt-5 flex-1 overflow-hidden rounded-3xl border border-brand-dark/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-dark/5 text-[11px] uppercase tracking-wider text-neutral-500">
                  <tr>
                    <th className="px-4 py-3">Кількість</th>
                    <th className="px-4 py-3">Тип продукції</th>
                    <th className="px-4 py-3">Знижка/ціна</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-brand-dark">
                  {discountPhysical.map((row, index) => (
                    <tr
                      key={`${row.qty}-${row.type}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#f8f3f0]"}
                    >
                      <td className="px-4 py-3 text-xs text-neutral-600">
                        {row.qty}
                      </td>
                      <td className="px-4 py-3 font-semibold">{row.type}</td>
                      <td className="px-4 py-3 font-semibold text-brand-red">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs text-neutral-500">
              Доставка транспортом ТОВ «Унібрук» за домовленістю: 80 грн/км.
            </p>
          </div>

          <div className="animate-rise flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                Укладальники / дилери
              </h2>
              <span className="rounded-full bg-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark/70">
                Відстань від ТОВ «Унібрук»
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Знижки розраховуються відповідно до обсягів купленої продукції і
              змінюються залежно від купівельної активності.
            </p>
            <div className="mt-5 flex-1 overflow-hidden rounded-3xl border border-brand-dark/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-dark/5 text-[11px] uppercase tracking-wider text-neutral-500">
                  <tr>
                    <th className="px-4 py-3">Тип продукції</th>
                    <th className="px-4 py-3">Відстань</th>
                    <th className="px-4 py-3">Знижка</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-brand-dark">
                  {discountDealers.map((row, index) => (
                    <tr
                      key={`${row.type}-${row.distance}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#f8f3f0]"}
                    >
                      <td className="px-4 py-3 font-semibold">{row.type}</td>
                      <td className="px-4 py-3 text-xs text-neutral-600">
                        {row.distance}
                      </td>
                      <td className="px-4 py-3 font-semibold text-brand-red">
                        {row.discount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs text-neutral-500">
              Доставка транспортом ТОВ «Унібрук» за домовленістю: 80 грн/км.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
