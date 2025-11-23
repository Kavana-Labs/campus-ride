import { useEffect, useState } from 'react'

export function useEnterAnimation(delay = 80) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return visible ? 'animate-fade-in' : 'opacity-0 translate-y-4'
}
