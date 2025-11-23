import { useAppStore } from '../state/appStore'
import { Icon } from '../components/Icon'

export function AdminDashboard() {
  const { adminData } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-gradient-to-br from-violet-200 to-violet-400 p-4 text-white shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em]">Active requests</p>
          <p className="mt-2 text-3xl font-bold">{adminData.requests.length}</p>
          <p className="text-sm text-white/80">Monitoring campus deliveries</p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-200 to-blue-400 p-4 text-white shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em]">Riders online</p>
          <p className="mt-2 text-3xl font-bold">
            {adminData.riders.filter((r) => r.active).length}
          </p>
          <p className="text-sm text-white/80">Live availability</p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-teal-100 to-teal-300 p-4 text-slate-900 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-700">Avg ETA</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">11m</p>
          <p className="text-sm text-slate-700">Campus-wide average</p>
        </div>
      </div>

      <div className="rounded-[28px] bg-white p-4 shadow-soft ring-1 ring-white/70">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Requests</p>
            <p className="text-xs text-text-muted">Admin overview</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 shadow-inner">
            <Icon name="search" className="h-4 w-4 text-slate-500" />
            <input
              className="border-none bg-transparent text-xs focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50 text-left text-xs font-semibold text-slate-600">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Rider</th>
                <th className="px-4 py-3">ETA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {adminData.requests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/80">
                  <td className="px-4 py-3 font-semibold text-slate-900">{req.id}</td>
                  <td className="px-4 py-3">{req.student}</td>
                  <td className="px-4 py-3">{req.item}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                      {req.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{req.rider}</td>
                  <td className="px-4 py-3">{req.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] bg-white p-4 shadow-soft ring-1 ring-white/70">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Riders</p>
            <p className="text-xs text-text-muted">Toggle availability</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {adminData.riders.map((rider) => (
            <div
              key={rider.name}
              className="flex items-center justify-between rounded-3xl bg-slate-50 p-4 shadow-inner"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{rider.name}</p>
                <p className="text-xs text-text-muted">{rider.vehicle}</p>
                <p className="text-xs text-slate-500">{rider.trips} trips</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked={rider.active} />
                <div className="peer h-8 w-14 rounded-full bg-slate-200 px-1 transition peer-checked:bg-violet-400">
                  <div className="h-6 w-6 translate-x-0 rounded-full bg-white shadow-soft transition peer-checked:translate-x-6" />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
