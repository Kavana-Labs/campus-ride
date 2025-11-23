import clsx from 'clsx'

export function GradientButton({
  children,
  onClick,
  gradient = 'from-violet-300 to-violet-500',
  className = '',
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full rounded-3xl px-4 py-3 text-center font-semibold text-white shadow-soft',
        'bg-gradient-to-r transition-transform duration-200 active:scale-95',
        gradient,
        className,
      )}
    >
      <span className="flex items-center justify-center gap-2">
        {icon ? <span className="text-lg">{icon}</span> : null}
        {children}
      </span>
    </button>
  )
}
