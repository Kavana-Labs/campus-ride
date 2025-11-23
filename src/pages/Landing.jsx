import hero from '../assets/hero-figure.svg'
import { GradientButton } from '../components/GradientButton'
import { useEnterAnimation } from '../hooks/useEnterAnimation'

export function Landing({ onGetStarted }) {
  const cardAnimation = useEnterAnimation()

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div
        className={`relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-b from-sky-100 via-white to-white shadow-soft ${cardAnimation}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,106,240,0.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.16),transparent_40%)]" />
        <div className="relative grid gap-6 px-6 pb-10 pt-8 text-center md:grid-cols-2 md:text-left md:px-10 md:pb-12 md:pt-12">
          <div className="flex flex-col justify-center">
            <div className="flex h-12 w-32 items-center justify-center rounded-full bg-white/80 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-inner ring-1 ring-white/70">
              Fast Delivery
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Receive The World at Your Doorstep
            </p>
            <p className="mt-3 text-sm text-text-muted md:text-base">
              The world&apos;s best experiences now arrive easily at your doorstep.
            </p>
            <div className="mt-6 w-full max-w-xs md:max-w-sm">
              <GradientButton onClick={onGetStarted}>Get Started</GradientButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white/70 shadow-soft">
              <img src={hero} alt="Delivery hero" className="h-[340px] w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
