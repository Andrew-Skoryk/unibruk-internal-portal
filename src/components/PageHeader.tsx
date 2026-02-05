type PageHeaderProps = {
  badge: string;
  title: string;
  subtitle: string;
  right?: React.ReactNode;
};

export default function PageHeader({
  badge,
  title,
  subtitle,
  right,
}: PageHeaderProps) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-red">
            {badge}
          </div>
          <h1 className="mt-3 font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-neutral-700">{subtitle}</p>
        </div>
        {right}
      </div>
    </div>
  );
}
