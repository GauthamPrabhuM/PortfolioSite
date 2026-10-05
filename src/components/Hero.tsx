'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL } from '@/lib/data'
import { startFluid } from '@/lib/fluid'

export function Hero() {
  const host = useRef<HTMLElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    if (!canvas.current || !host.current) return
    const stop = startFluid(canvas.current, host.current)
    setLive(!!stop)
    return () => stop?.()
  }, [])

  return (
    <section className={live ? 'stage is_live' : 'stage'} id="top" ref={host}>
      <canvas className="stage_canvas" ref={canvas} aria-hidden="true" />

      <div className="stage_inner wrap">
        <h1 className="stage_name">
          Gautham
          <span>Manuru Prabhu</span>
        </h1>
        <div className="stage_place">{PERSONAL.location}</div>
      </div>

      <a href="#about" className="stage_cue" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
