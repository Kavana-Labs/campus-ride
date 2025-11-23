import { ProgressBar } from '../components/ProgressBar'
import { SoftCard } from '../components/SoftCard'
import scooter from '../assets/scooter-3d.svg'
import { useAppStore } from '../state/appStore'

export function FindingRider() {
  const { findingProgress } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <SoftCard gradient="from-blue-200 to-blue-400" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.4),transparent_40%)]" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.3em]">Finding Rider</p>
                <p className="text-2xl font-bold">Matching nearby partners</p>
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full bg-white/40 ring-2 ring-white/80">
                <img src={scooter} alt="Scooter" className="h-full w-full object-cover" />
              </div>
            </div>
            <ProgressBar value={findingProgress} gradient="from-white/80 to-white/60" />
            <p className="text-sm text-white/80">Hang tight, we are confirming the closest rider for you.</p>
          </div>
        </SoftCard>
        <div className="rounded-3xl bg-white/90 p-4 shadow-soft ring-1 ring-white/70">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Live map</p>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Ghost mode</span>
          </div>
          <div className="h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner lg:h-full">
            <div className="flex h-full items-center justify-center">
              <div className="h-20 w-20 animate-bounce rounded-full bg-gradient-to-br from-violet-200 to-violet-400 shadow-soft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
