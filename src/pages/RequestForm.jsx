import { useState } from 'react'
import { InputField } from '../components/InputField'
import { GradientButton } from '../components/GradientButton'
import scooter from '../assets/scooter-3d.svg'
import { useAppStore } from '../state/appStore'

export function RequestForm() {
  const { setActivePage } = useAppStore()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    notes: '',
  })

  const handleChange = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="space-y-4 rounded-[30px] bg-white p-5 shadow-soft ring-1 ring-white/70 md:order-2">
          <InputField label="Name" placeholder="Your full name" value={form.name} onChange={handleChange('name')} />
          <InputField label="Phone" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange('phone')} />
          <InputField label="Pickup Location" placeholder="Dorm, Building, or Address" value={form.pickup} onChange={handleChange('pickup')} />
          <InputField label="Destination" placeholder="Campus location" value={form.destination} onChange={handleChange('destination')} />
          <InputField label="Notes" placeholder="Gate code, delivery notes" value={form.notes} onChange={handleChange('notes')} />
        </div>
        <div className="flex flex-col items-center gap-4 md:order-1">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-100 to-teal-300 shadow-soft ring-4 ring-white md:h-48 md:w-48">
            <img src={scooter} alt="3D icon" className="h-full w-full object-cover" />
          </div>
          <p className="text-center text-sm text-text-muted md:max-w-sm">
            Tell us what you need. We’ll assign the closest rider and keep you updated with timeline and live map.
          </p>
          <div className="w-full max-w-sm">
            <GradientButton
              gradient="from-violet-300 to-violet-500"
              onClick={() => setActivePage('finding')}
            >
              Submit Request
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
