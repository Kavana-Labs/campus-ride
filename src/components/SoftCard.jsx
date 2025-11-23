import clsx from 'clsx'

export function SoftCard({
  children,
  gradient = 'from-violet-200 to-violet-400',
  isFloating = false,
  className = '',
  padded = true,
}) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-3xl bg-white',
        isFloating ? 'shadow-soft' : 'shadow-sm border border-white/50',
        className,
      )}
    >
      <div
        className={clsx(
          'absolute inset-0 opacity-90',
          'bg-gradient-to-br',
          gradient,
        )}
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className={clsx('relative', padded ? 'p-4 sm:p-6' : '')}>
        {children}
      </div>
    </div>
  )
}
