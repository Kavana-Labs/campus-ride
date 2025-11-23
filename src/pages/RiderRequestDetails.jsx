import { MapPlaceholder } from '../components/MapPlaceholder'
import { StatusTimeline } from '../components/StatusTimeline'
import { GradientButton } from '../components/GradientButton'
import { Icon } from '../components/Icon'
import { useAppStore } from '../state/appStore'

export function RiderRequestDetails() {
  const { riderRequests } = useAppStore()
  const current = riderRequests[0]

  const steps = [
    { label: 'Requested', description: 'Student created a delivery', icon: 'check' },
    { label: 'Assigned', description: 'You accepted this task', icon: 'rocket' },
    { label: 'In Progress', description: 'Heading to pickup', icon: 'map' },
    { label: 'Completed', description: 'Delivered successfully', icon: 'check' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <MapPlaceholder height="h-60 lg:h-full" />
        <div className="space-y-4 rounded-[30px] bg-white p-5 shadow-soft ring-1 ring-white/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">{current.title}</p>
              <p className="text-xs text-text-muted">#{current.id}</p>
            </div>
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-200 to-violet-400 text-violet-800 shadow-soft">
              <Icon name="phone" className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-slate-50 px-3 py-2 shadow-inner">
              <p className="text-xs text-text-muted">Pickup</p>
              <p className="font-semibold text-slate-900">{current.pickup}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-2 shadow-inner">
              <p className="text-xs text-text-muted">Drop-off</p>
              <p className="font-semibold text-slate-900">{current.dropoff}</p>
            </div>
          </div>
          <StatusTimeline steps={steps} activeIndex={1} />
          <div className="grid grid-cols-3 gap-3">
            <GradientButton
              gradient="from-teal-100 to-teal-300"
              className="text-teal-800"
            >
              Accept
            </GradientButton>
            <GradientButton
              gradient="from-blue-200 to-blue-400"
              className="text-blue-800"
            >
              In Progress
            </GradientButton>
            <GradientButton
              gradient="from-violet-200 to-violet-400"
              className="text-violet-800"
            >
              Completed
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
