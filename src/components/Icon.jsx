const icons = {
  home: (
    <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-3.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H4.9A0.9 0.9 0 0 1 4 19.1Z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m15 15 4 4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 14V9a6 6 0 1 0-12 0v5l-2 2h16Z" />
      <path d="M10 21a2 2 0 0 0 2-2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8.1 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.1 4.6 1.65 1.65 0 0 0 9.6 3h.18a2 2 0 1 1 4 0h.09a1.65 1.65 0 0 0 1.51 1 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8.1 1.65 1.65 0 0 0 21 9.6V9a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>
  ),
  map: (
    <>
      <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3Z" />
      <path d="M9 3v15m6-12v15" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5c.5-.5 2-1 2.5 0l2 4a1 1 0 0 1-.2 1.2L9.8 10c1 2.4 3 4.4 5.4 5.4l1.3-1.9a1 1 0 0 1 1.2-.2l4 2c1 .5.5 2 0 2.5l-1.6 1.6c-.4.4-1 .6-1.5.6A16 16 0 0 1 3 8c0-.6.2-1.1.6-1.5Z" />
  ),
  list: (
    <>
      <circle cx="6" cy="6" r="1.4" />
      <circle cx="6" cy="12" r="1.4" />
      <circle cx="6" cy="18" r="1.4" />
      <path d="M10 6h9m-9 6h9m-9 6h9" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  lightning: (
    <path d="M13 2 3 14h7l-1 8 10-12h-7Z" />
  ),
  check: (
    <path d="m5 13 4 4 10-10" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 3 2.5 11 0 14-2.5-3-2.5-11 0-14Z" />
    </>
  ),
  flag: (
    <>
      <path d="M6 4v16" />
      <path d="M6 4h9l-1 5h-8" />
    </>
  ),
  'chevron-down': (
    <path d="m6 9 6 6 6-6" />
  ),
  rocket: (
    <>
      <path d="M12 2c3 2 5 6 5 10 0 4-2 6-5 8-3-2-5-4-5-8 0-4 2-8 5-10Z" />
      <path d="M9 12h6M12 15v5" />
    </>
  ),
  admin: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 10h16M9 14h2" />
    </>
  ),
  star: (
    <path d="m12 3 2.4 5 5.6.8-4 4 1 5.6L12 16l-5 2.4 1-5.6-4-4 5.6-.8Z" />
  ),
  location: (
    <>
      <path d="M12 4a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5Z" />
      <circle cx="12" cy="9" r="2.2" />
    </>
  ),
}

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.6 }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || icons.home}
    </svg>
  )
}
