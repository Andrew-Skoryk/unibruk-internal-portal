"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Головна" },
  { href: "/clients", label: "Контакти" },
  { href: "/discounts", label: "Система знижок" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logoUnibruk.png"
            alt="Unibruk"
            width={140}
            height={28}
            className="h-7 w-auto"
            priority
          />
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/60">
              Внутрішній портал
            </p>
            <p className="text-xs font-semibold text-brand-dark/80">
              Відділ збуту
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-brand-red text-white shadow-sm shadow-brand-red/30"
                    : "text-brand-dark/70 hover:bg-brand-red/10 hover:text-brand-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
