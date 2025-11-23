import avatar from '../assets/rider-avatar.svg'
import { Icon } from './Icon'
import { GradientButton } from './GradientButton'

export function RiderInfoCard({ name, vehicle, rating, phone }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white/90 p-4 shadow-soft ring-1 ring-white/70">
      <div className="h-14 w-14 overflow-hidden rounded-2xl bg-slate-50 shadow-inner">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-text-muted">{vehicle}</p>
        <div className="mt-1 flex items-center gap-2 text-xs text-amber-500">
          <Icon name="star" className="h-4 w-4" />
          <span>{rating}</span>
        </div>
      </div>
      <GradientButton
        gradient="from-violet-200 to-violet-400"
        className="w-auto px-3 py-2 text-xs shadow-none"
      >
        <div className="flex items-center gap-2 text-violet-700">
          <Icon name="phone" className="h-4 w-4" />
          <span className="text-xs font-semibold">Call</span>
        </div>
      </GradientButton>
    </div>
  )
}
