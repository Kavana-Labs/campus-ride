import clsx from 'clsx'

export function ProgressBar({ value = 50, gradient = 'from-violet-300 to-violet-500', className = '' }) {
  return (
    <div className={clsx('w-full overflow-hidden rounded-full bg-white/70 p-1 shadow-inner', className)}>
      <div
        className={clsx(
          'h-3 rounded-full bg-gradient-to-r shadow-soft',
          gradient,
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      >
        <div className="h-full w-1/3 animate-shimmer rounded-full bg-white/60 opacity-60" />
      </div>
    </div>
  )
}
