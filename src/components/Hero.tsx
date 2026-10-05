'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL, HERO } from '@/lib/data'
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
        <div className="stage_kicker">{PERSONAL.location}</div>
        <h1 className="stage_name">
          Gautham
          <br />
          Manuru Prabhu
        </h1>
        <p className="stage_standfirst">{HERO.standfirst}</p>
        <div className="stage_actions">
          <a href="#about" className="stage_btn is_primary">
            See the work
          </a>
          <a href={PERSONAL.resume} download className="stage_btn">
            Résumé (PDF)
          </a>
        </div>
      </div>

      <a href="#about" className="stage_cue" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
