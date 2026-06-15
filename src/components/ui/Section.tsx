'use client'
import type { ReactNode } from 'react'
import { FadeIn } from './FadeIn'

export function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="section-block">
      <FadeIn>
        <p className="sec-label">~/<b>{label}</b></p>
        {children}
      </FadeIn>
    </section>
  )
}
