import { useMemo } from 'react'
import { useAppStore } from '../state/appStore'
import { MapPlaceholder } from '../components/MapPlaceholder'
import { StatusTimeline } from '../components/StatusTimeline'
import { RiderInfoCard } from '../components/RiderInfoCard'
import { ProgressBar } from '../components/ProgressBar'
import { Icon } from '../components/Icon'

export function RiderAssigned() {
  const { shipments, selectedShipmentId } = useAppStore()
  const shipment = useMemo(
    () => shipments.find((s) => s.id === selectedShipmentId) || shipments[0],
    [shipments, selectedShipmentId],
  )

  const steps = [
    { label: 'Requested', description: 'Order placed', icon: 'check' },
    { label: 'Assigned', description: 'Rider confirmed', icon: 'rocket' },
    { label: 'In Progress', description: 'On the way', icon: 'map' },
    { label: 'Completed', description: 'Delivered', icon: 'check' },
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <MapPlaceholder
          height="h-72 lg:h-full"
          overlayContent={
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex items-start gap-3 rounded-3xl bg-white/90 p-4 shadow-soft ring-1 ring-white/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 shadow-inner">
                  <Icon name="location" className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{shipment.item}</p>
                  <p className="text-xs text-text-muted">ID: {shipment.id}</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white/90 p-4 shadow-soft ring-1 ring-white/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-200 to-violet-400 text-violet-800 shadow-soft">
                    <Icon name="location" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Delivery time</p>
                    <p className="text-base font-semibold text-slate-900">{shipment.eta}</p>
                  </div>
                </div>
                <ProgressBar value={shipment.progress} className="max-w-[200px]" />
              </div>
            </div>
          }
        />

        <div className="rounded-[30px] bg-white p-5 shadow-soft ring-1 ring-white/70">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 shadow-inner">
              <Icon name="flag" className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Sender</p>
              <p className="text-xs text-text-muted">{shipment.sender}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 shadow-inner">
              <Icon name="map" className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Receiver</p>
              <p className="text-xs text-text-muted">{shipment.receiver}</p>
            </div>
          </div>
          <div className="mt-6">
            <StatusTimeline steps={steps} activeIndex={2} />
          </div>
        </div>
      </div>

      <div className="lg:max-w-xl">
        <RiderInfoCard
          name={shipment.rider.name}
          vehicle={shipment.rider.vehicle}
          rating={shipment.rider.rating}
          phone={shipment.rider.phone}
        />
      </div>
    </div>
  )
}
