import clsx from 'clsx'
import { Icon } from './Icon'

const items = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'request', label: 'Request', icon: 'list' },
  { id: 'rider', label: 'Rider', icon: 'rocket' },
  { id: 'admin', label: 'Admin', icon: 'admin' },
]

export function BottomNav({ active, onSelect, className = '' }) {
  return (
    <div className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 ${className}`}>
      <div className="glass flex w-full max-w-md items-center justify-between rounded-3xl px-4 py-3 shadow-soft ring-1 ring-white/60">
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={clsx(
                'flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-xs font-semibold transition-all duration-200',
                isActive ? 'text-violet-600' : 'text-slate-500',
              )}
            >
              <span
                className={clsx(
                  'flex h-10 w-10 items-center justify-center rounded-2xl',
                  isActive ? 'bg-gradient-to-br from-violet-200 to-violet-400 text-violet-700 shadow-soft' : '',
                )}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
