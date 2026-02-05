"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

type Contact = {
  name: string;
  amount: number;
  manager: string;
  type: string;
  location: string;
  status: string;
  lastContact: string;
  nextContact: string;
};

const managers = [
  "Андрій",
  "Михайло",
  "Людмила",
  "Галина",
  "Віра",
  "Мирослав",
  "Офіс",
];

const contacts: Contact[] = [
  {
    name: "Будмаркет Вигода",
    amount: 185000,
    manager: "Андрій",
    type: "B2B",
    location: "Вигода",
    status: "В роботі",
    lastContact: "2026-02-04",
    nextContact: "2026-02-06",
  },
  {
    name: "База «Карпати»",
    amount: 62400,
    manager: "Михайло",
    type: "HoReCa",
    location: "Болехів",
    status: "Очікує рішення",
    lastContact: "2026-02-02",
    nextContact: "2026-02-06",
  },
  {
    name: "ПП «Софія-Буд»",
    amount: 310000,
    manager: "Людмила",
    type: "B2B",
    location: "Івано-Франківськ",
    status: "Потрібна ціна",
    lastContact: "2026-02-03",
    nextContact: "2026-02-07",
  },
  {
    name: "ЖК «Сонячний»",
    amount: 98500,
    manager: "Галина",
    type: "Девелопер",
    location: "Калуш",
    status: "Погодження",
    lastContact: "2026-02-01",
    nextContact: "2026-02-07",
  },
  {
    name: "ФОП Чорний Андрій",
    amount: 48500,
    manager: "Віра",
    type: "B2C",
    location: "Долина",
    status: "Новий",
    lastContact: "2026-02-05",
    nextContact: "2026-02-08",
  },
  {
    name: "ТОВ «Стин-Буд»",
    amount: 214000,
    manager: "Мирослав",
    type: "B2B",
    location: "Стрий",
    status: "Рахунок",
    lastContact: "2026-02-03",
    nextContact: "2026-02-09",
  },
  {
    name: "Офісна заявка №214",
    amount: 74000,
    manager: "Офіс",
    type: "Внутрішнє",
    location: "Вигода",
    status: "Уточнення",
    lastContact: "2026-02-04",
    nextContact: "2026-02-06",
  },
];

const statuses = [
  "В роботі",
  "Очікує рішення",
  "Потрібна ціна",
  "Погодження",
  "Новий",
  "Рахунок",
  "Уточнення",
];

const formatMoney = (value: number) =>
  value.toLocaleString("uk-UA", { maximumFractionDigits: 0 });

export default function ClientsPage() {
  const [query, setQuery] = useState("");
  const [managerFilter, setManagerFilter] = useState("Всі");
  const [statusFilter, setStatusFilter] = useState("Всі");
  const [nextFrom, setNextFrom] = useState<Date | undefined>();
  const [nextTo, setNextTo] = useState<Date | undefined>();

  const normalizeDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const filtered = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesQuery =
        !query ||
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.location.toLowerCase().includes(query.toLowerCase());
      const matchesManager =
        managerFilter === "Всі" || contact.manager === managerFilter;
      const matchesStatus =
        statusFilter === "Всі" || contact.status === statusFilter;
      const contactDate = normalizeDate(new Date(contact.nextContact));
      const matchesDateFrom =
        !nextFrom || contactDate >= normalizeDate(nextFrom);
      const matchesDateTo = !nextTo || contactDate <= normalizeDate(nextTo);
      return (
        matchesQuery &&
        matchesManager &&
        matchesStatus &&
        matchesDateFrom &&
        matchesDateTo
      );
    });
  }, [query, managerFilter, statusFilter, nextFrom, nextTo]);

  const totalAmount = filtered.reduce((sum, item) => sum + item.amount, 0);
  const tableKey = `${query}-${managerFilter}-${statusFilter}-${
    nextFrom?.toISOString() ?? ""
  }-${nextTo?.toISOString() ?? ""}`;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(174,17,22,0.12),_transparent_55%),radial-gradient(circle_at_80%_10%,_rgba(80,8,0,0.15),_transparent_45%),linear-gradient(180deg,_#fff,_#fbf1ee_40%,_#fff)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[linear-gradient(120deg,_rgba(174,17,22,0.65),_rgba(80,8,0,0.55),_rgba(255,255,255,0.9))] p-[1.5px]">
          <PageHeader
            badge="Контакти"
            title="Контакти та фільтрація"
            subtitle="Пошук по назві, менеджеру, статусу та даті наступного контакту."
            right={
              <div className="animate-pop rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-xs text-neutral-600">
                <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Підказка
                </div>
                <div className="mt-2 font-semibold text-brand-dark">
                  Використовуй фільтри + пошук, щоб швидко знайти клієнта.
                </div>
              </div>
            }
          />
        </div>

        <section className="animate-float rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-brand-dark">
                Фільтри
              </h2>
              <p className="text-sm text-neutral-600">
                Знайдено{" "}
                <span key={tableKey} className="inline-block animate-pop">
                  {filtered.length}
                </span>{" "}
                контактів · Загальна сума{" "}
                <span key={`${tableKey}-sum`} className="inline-block animate-pop font-semibold text-brand-dark">
                  {formatMoney(totalAmount)} грн
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setManagerFilter("Всі");
                  setStatusFilter("Всі");
                  setNextFrom(undefined);
                  setNextTo(undefined);
                }}
              >
                Скинути все
              </Button>
              <Button className="bg-brand-red text-white shadow-lg shadow-brand-red/30 hover:bg-brand-red/90">
                Додати контакт
              </Button>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Пошук
              </label>
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Назва або місто"
                className="h-12 rounded-2xl border-brand-dark/10 bg-white px-4 text-base text-brand-dark shadow-inner transition focus-visible:ring-brand-red/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Менеджер
              </label>
              <Select value={managerFilter} onValueChange={setManagerFilter}>
                <SelectTrigger className="h-12 w-full rounded-2xl border-brand-dark/10 bg-white px-4 text-base shadow-inner transition focus:ring-brand-red/30">
                  <SelectValue placeholder="Всі" />
                </SelectTrigger>
                <SelectContent className="w-[var(--radix-select-trigger-width)] rounded-2xl border-brand-dark/10 p-1">
                  <SelectItem value="Всі" className="py-2 text-base">
                    Всі
                  </SelectItem>
                  {managers.map((manager) => (
                    <SelectItem
                      key={manager}
                      value={manager}
                      className="py-2 text-base"
                    >
                      {manager}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Статус
              </label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-12 w-full rounded-2xl border-brand-dark/10 bg-white px-4 text-base shadow-inner transition focus:ring-brand-red/30">
                  <SelectValue placeholder="Всі" />
                </SelectTrigger>
                <SelectContent className="w-[var(--radix-select-trigger-width)] rounded-2xl border-brand-dark/10 p-1">
                  <SelectItem value="Всі" className="py-2 text-base">
                    Всі
                  </SelectItem>
                  {statuses.map((status) => (
                    <SelectItem
                      key={status}
                      value={status}
                      className="py-2 text-base"
                    >
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Дата від
              </label>
              <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 justify-between rounded-2xl border-brand-dark/10 bg-white px-4 text-base text-brand-dark shadow-inner transition hover:bg-white"
                >
                  {nextFrom ? format(nextFrom, "dd.MM.yyyy") : "Виберіть дату"}
                </Button>
              </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={nextFrom}
                    onSelect={setNextFrom}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Дата до
              </label>
              <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 justify-between rounded-2xl border-brand-dark/10 bg-white px-4 text-base text-brand-dark shadow-inner transition hover:bg-white"
                >
                  {nextTo ? format(nextTo, "dd.MM.yyyy") : "Виберіть дату"}
                </Button>
              </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={nextTo}
                    onSelect={setNextTo}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
            <Button
              variant="outline"
              onClick={() => {
                setNextFrom(undefined);
                setNextTo(undefined);
              }}
              className="h-8 rounded-full border-brand-dark/10 bg-white px-3 text-xs font-semibold text-brand-dark/70 hover:border-brand-red/40 hover:text-brand-red"
            >
              Скинути дати
            </Button>
            <span>
              Фільтрація по даті змінює вибірку — це найсильніший фільтр.
            </span>
          </div>
        </section>

        <section className="animate-pop overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
          <div className="overflow-x-auto">
            <table
              key={tableKey}
              className="animate-fade w-full min-w-[860px] text-left text-sm"
            >
              <thead className="bg-brand-dark/5 text-[11px] uppercase tracking-wider text-neutral-500">
                <tr>
                  <th className="px-4 py-3">Контакт</th>
                  <th className="px-4 py-3">Менеджер</th>
                  <th className="px-4 py-3">Статус</th>
                  <th className="px-4 py-3">Сума, грн</th>
                  <th className="px-4 py-3">Дата контакту</th>
                  <th className="px-4 py-3">Наступний контакт</th>
                </tr>
              </thead>
              <tbody className="text-sm text-brand-dark">
                {filtered.map((contact, index) => (
                  <tr
                    key={`${contact.name}-${contact.manager}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f8f3f0]"}
                  >
                    <td className="px-4 py-3">
                      <div className="font-semibold">{contact.name}</div>
                      <div className="text-xs text-neutral-500">
                        {contact.type} · {contact.location}
                      </div>
                    </td>
                    <td className="px-4 py-3">{contact.manager}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                        {contact.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold">
                      {formatMoney(contact.amount)}
                    </td>
                    <td className="px-4 py-3 text-xs text-neutral-600">
                      {contact.lastContact}
                    </td>
                    <td className="px-4 py-3 text-xs text-neutral-600">
                      {contact.nextContact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
