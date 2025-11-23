import { useAppStore } from '../state/appStore'
import { GradientButton } from '../components/GradientButton'
import scooter from '../assets/scooter-3d.svg'

export function RiderDashboard({ onOpenRequest }) {
  const { riderRequests } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-soft ring-1 ring-white/70">
          <div>
            <p className="text-sm font-semibold text-slate-900">Incoming Requests</p>
            <p className="text-xs text-text-muted">Campus deliveries near you</p>
          </div>
          <div className="h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-100 to-teal-300 shadow-soft ring-2 ring-white">
            <img src={scooter} alt="Scooter" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="hidden rounded-3xl bg-gradient-to-br from-violet-200 to-blue-300 p-4 text-white shadow-soft lg:flex lg:flex-col lg:gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Today</p>
          <p className="text-3xl font-bold">Stay online</p>
          <p className="text-sm text-white/80">Accept express tasks to boost your streak.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {riderRequests.map((req) => (
          <div
            key={req.id}
            className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-white/70"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">{req.title}</p>
                <p className="text-xs text-text-muted">#{req.id} • {req.time}</p>
              </div>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                {req.tag}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-800">
              <div className="rounded-2xl bg-slate-50 px-3 py-2 shadow-inner">
                <p className="text-xs text-text-muted">Pickup</p>
                <p className="font-semibold">{req.pickup}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-2 shadow-inner">
                <p className="text-xs text-text-muted">Drop-off</p>
                <p className="font-semibold">{req.dropoff}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">{req.price}</p>
              <GradientButton
                gradient="from-violet-200 to-violet-400"
                className="w-auto px-4 py-2 text-xs text-violet-800"
                onClick={() => onOpenRequest?.(req)}
              >
                Accept Request
              </GradientButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
