export default function Loading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(174,17,22,0.12),_transparent_55%),radial-gradient(circle_at_80%_10%,_rgba(80,8,0,0.15),_transparent_45%),linear-gradient(180deg,_#fff,_#fbf1ee_40%,_#fff)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(80,8,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <div className="skeleton h-4 w-28" />
              <div className="skeleton h-7 w-64" />
              <div className="skeleton h-4 w-80" />
            </div>
            <div className="skeleton skeleton-block h-14 w-44" />
          </div>
        </div>

        <div className="skeleton skeleton-block h-56 w-full" />
        <div className="skeleton skeleton-block h-72 w-full" />
      </div>
    </div>
  );
}
