import clsx from 'clsx'
import box from '../assets/box-3d.svg'
import truck from '../assets/truck-3d.svg'
import scooter from '../assets/scooter-3d.svg'
import { ProgressBar } from './ProgressBar'
import { Icon } from './Icon'

const art = {
  package: box,
  truck,
  scooter,
}

export function RequestCard({ item, id, location, eta, progress = 65, variant = 'package', onSelect }) {
  const image = art[variant] || box
  return (
    <button
      onClick={onSelect}
      className="group flex w-full items-center gap-4 rounded-3xl bg-white/90 p-4 shadow-soft ring-1 ring-white/70 transition hover:-translate-y-1"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 shadow-inner ring-1 ring-white/70">
        <img src={image} alt={item} className="h-12 w-12 object-contain" />
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-slate-900">{item}</p>
          <span className="text-xs font-semibold text-violet-600 bg-violet-100 px-2 py-1 rounded-full">ID: {id}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-text-muted">
          <Icon name="location" className="h-4 w-4" />
          <span>{location}</span>
          <span className="mx-1 text-slate-400">•</span>
          <Icon name="clock" className="h-4 w-4" />
          <span>{eta}</span>
        </div>
        <div className="mt-3">
          <ProgressBar value={progress} />
        </div>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 shadow-inner group-active:scale-95">
        <Icon name="map" className="h-5 w-5" />
      </div>
    </button>
  )
}
