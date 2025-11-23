import clsx from 'clsx'

export function ServiceCard({ title, subtitle, icon, gradient, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex flex-1 flex-col items-start justify-between rounded-3xl p-4 text-left shadow-soft transition-transform duration-200 active:scale-95',
        'bg-gradient-to-br text-slate-800',
        gradient,
      )}
    >
      <div className="flex items-center justify-between w-full">
        <span className="rounded-2xl bg-white/70 px-3 py-1 text-xs font-semibold text-violet-700 shadow-inner">
          {subtitle}
        </span>
        {icon ? <span className="text-3xl">{icon}</span> : null}
      </div>
      <p className="mt-5 text-lg font-semibold text-slate-900">{title}</p>
    </button>
  )
}
