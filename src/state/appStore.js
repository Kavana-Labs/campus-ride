import { create } from 'zustand'

const shipments = [
  {
    id: 'H314315796',
    item: 'Mac Mini M4 Pro',
    location: 'Jersey City',
    eta: '1:13 Hours',
    progress: 68,
    variant: 'truck',
    sender: '247 Bedford Ave, Brooklyn, NY 11211',
    receiver: '472 Jersey Ave, Jersey City, NJ 07302',
    rider: { name: 'Elijah Ortiz', vehicle: 'Vespa Primavera', rating: '4.9', phone: '(555) 123-9876' },
  },
  {
    id: 'LB14315788',
    item: 'iPhone 16',
    location: 'Jersey City',
    eta: '53 Minutes',
    progress: 42,
    variant: 'scooter',
    sender: 'Campus Store, Washington Ave',
    receiver: 'Riverside Dorms, Room 214',
    rider: { name: 'Paige Curtis', vehicle: 'E-Scooter', rating: '4.8', phone: '(555) 456-1234' },
  },
]

const riderRequests = [
  {
    id: 'REQ-1042',
    title: 'Dorm Groceries',
    pickup: 'Campus Market',
    dropoff: 'Maple Hall B',
    price: '$12.00',
    time: '8 min ago',
    tag: 'Delivery',
  },
  {
    id: 'REQ-1043',
    title: 'Laptop Dropoff',
    pickup: 'Library Desk',
    dropoff: 'Innovation Hub',
    price: '$9.00',
    time: '12 min ago',
    tag: 'Express',
  },
  {
    id: 'REQ-1044',
    title: 'Pharmacy Pickup',
    pickup: 'Wellness Center',
    dropoff: 'Oak Dorms',
    price: '$6.50',
    time: '18 min ago',
    tag: 'Priority',
  },
]

const adminData = {
  requests: [
    { id: 'REQ-1042', student: 'Amara Jones', item: 'Groceries', status: 'Assigned', rider: 'Elijah Ortiz', eta: '12m' },
    { id: 'REQ-1043', student: 'Leo Chen', item: 'Laptop', status: 'In Progress', rider: 'Paige Curtis', eta: '7m' },
    { id: 'REQ-1044', student: 'Priya Patel', item: 'Pharmacy', status: 'Requested', rider: '-', eta: '-' },
  ],
  riders: [
    { name: 'Elijah Ortiz', vehicle: 'Vespa', active: true, trips: 123 },
    { name: 'Paige Curtis', vehicle: 'E-Scooter', active: true, trips: 88 },
    { name: 'Milo Reyes', vehicle: 'Bike', active: false, trips: 64 },
  ],
}

export const useAppStore = create((set) => ({
  activePage: 'landing',
  location: 'New York, USA',
  shipments,
  riderRequests,
  adminData,
  selectedShipmentId: shipments[0].id,
  findingProgress: 62,
  setActivePage: (page) => set({ activePage: page }),
  setSelectedShipment: (id) => set({ selectedShipmentId: id, activePage: 'assigned' }),
  updateFindingProgress: (value) => set({ findingProgress: value }),
}))
