import mapIso from '../assets/map-iso.svg'

export function MapPlaceholder({ height = 'h-64', overlayContent }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-bg-soft shadow-soft ${height}`}>
      <img src={mapIso} alt="Isometric map" className="h-full w-full object-cover" />
      {overlayContent ? (
        <div className="absolute inset-0">{overlayContent}</div>
      ) : null}
    </div>
  )
}
