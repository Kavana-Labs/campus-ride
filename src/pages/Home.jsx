import { useAppStore } from '../state/appStore'
import { ServiceCard } from '../components/ServiceCard'
import { RequestCard } from '../components/RequestCard'
import { Icon } from '../components/Icon'
import truck from '../assets/truck-3d.svg'
import box from '../assets/box-3d.svg'

export function Home() {
  const { shipments, setSelectedShipment } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-white/70">
        <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 px-4 py-3 shadow-inner md:flex-row md:items-center">
          <Icon name="search" className="h-5 w-5 text-slate-500" />
          <input
            className="w-full border-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Search deliveries, riders, locations"
          />
          <button className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-soft ring-1 ring-white/70">
            <Icon name="settings" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <ServiceCard
          title="New Delivery"
          subtitle="Start"
          icon={<img src={truck} alt="" className="h-12 w-12" />}
          gradient="from-violet-200 to-violet-400"
          onClick={() => setSelectedShipment(shipments[0].id)}
        />
        <ServiceCard
          title="Track Package"
          subtitle="Live"
          icon={<img src={box} alt="" className="h-12 w-12" />}
          gradient="from-blue-200 to-blue-400"
          onClick={() => setSelectedShipment(shipments[0].id)}
        />
      </div>

      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-sm font-semibold text-slate-900">Current Requests</p>
          <p className="text-xs text-text-muted">Live updates in pastel cards</p>
        </div>
        <button className="text-xs font-semibold text-violet-600">See all</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {shipments.map((shipment) => (
          <RequestCard
            key={shipment.id}
            item={shipment.item}
            id={shipment.id}
            location={shipment.location}
            eta={shipment.eta}
            progress={shipment.progress}
            variant={shipment.variant}
            onSelect={() => setSelectedShipment(shipment.id)}
          />
        ))}
      </div>
    </div>
  )
}
