import { GradientButton } from './GradientButton'
import phone from '../assets/box-3d.svg'

export function InstallBanner({ visible, onInstall }) {
  if (!visible) return null
  return (
    <div className="fixed inset-x-4 bottom-24 z-40 flex items-center gap-3 rounded-3xl bg-white p-4 shadow-soft ring-1 ring-white/70 md:hidden">
      <div className="h-12 w-12 overflow-hidden rounded-2xl bg-slate-50 shadow-inner">
        <img src={phone} alt="Install" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 text-left">
        <p className="text-sm font-semibold text-slate-900">Install CampusGo</p>
        <p className="text-xs text-text-muted">Get the app on your home screen for faster access.</p>
      </div>
      <GradientButton
        gradient="from-violet-200 to-violet-400"
        className="w-auto px-4 py-2 text-xs text-violet-800"
        onClick={onInstall}
      >
        Install
      </GradientButton>
    </div>
  )
}
