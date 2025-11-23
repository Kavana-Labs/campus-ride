export function InputField({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2 rounded-3xl bg-white px-4 py-3 shadow-soft ring-1 ring-white/60">
        <input
          className="w-full border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </label>
  )
}
