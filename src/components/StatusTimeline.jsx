import clsx from 'clsx'
import { Icon } from './Icon'
import { ProgressBar } from './ProgressBar'

export function StatusTimeline({ steps, activeIndex = 0, compact = false }) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute left-[17px] top-3 bottom-3 w-[2px] bg-slate-200" />
        <div className="space-y-5">
          {steps.map((step, idx) => {
            const isDone = idx < activeIndex
            const isActive = idx === activeIndex
            return (
              <div key={step.label} className="relative flex items-start gap-3">
                <div
                  className={clsx(
                    'relative flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-soft',
                    isDone
                      ? 'border-green-200 bg-gradient-to-br from-green-100 to-green-300 text-green-700'
                      : isActive
                        ? 'border-violet-200 bg-gradient-to-br from-violet-100 to-violet-300 text-violet-700'
                        : 'border-slate-200 bg-white text-slate-400',
                  )}
                >
                  <Icon
                    name={step.icon || (isDone ? 'check' : 'clock')}
                    className="h-4 w-4"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-slate-800">
                      {step.label}
                    </p>
                    {step.time ? (
                      <span className="text-xs text-text-muted">{step.time}</span>
                    ) : null}
                  </div>
                  <p className="text-xs text-text-muted">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {!compact ? (
        <ProgressBar value={(activeIndex / (steps.length - 1 || 1)) * 100} />
      ) : null}
    </div>
  )
}
