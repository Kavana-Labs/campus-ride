import { Icon } from './Icon'

export function TopBar({ location = 'New York, USA', onLocationClick, onAlerts }) {
  return (
    <div className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-soft ring-1 ring-white/60">
      <button
        onClick={onLocationClick}
        className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 shadow-inner"
      >
        <Icon name="location" className="h-4 w-4 text-violet-500" />
        <span>{location}</span>
        <Icon name="chevron-down" className="h-3 w-3" />
      </button>
      <div className="flex items-center gap-2">
        <button
          onClick={onAlerts}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 shadow-inner"
        >
          <Icon name="bell" className="h-5 w-5" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 shadow-inner">
          <Icon name="settings" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
