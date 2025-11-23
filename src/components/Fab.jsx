import { Icon } from './Icon'

export function Fab({ onClick, label = 'New', icon = 'plus', className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-500 text-white shadow-soft ring-2 ring-white/60 transition-transform duration-200 active:scale-95 ${className}`}
      aria-label={label}
    >
      <Icon name={icon} className="h-6 w-6" />
    </button>
  )
}
