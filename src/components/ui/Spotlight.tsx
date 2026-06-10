'use client'
import { useRef, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

/** Card wrapper whose ::before paints a radial glow that follows the cursor. */
export function Spotlight({ children, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={`spotlight ${className}`}
      style={style}
      onMouseMove={e => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}
