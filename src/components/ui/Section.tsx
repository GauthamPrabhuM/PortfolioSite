'use client'
import type { ReactNode } from 'react'
import { FadeIn } from './FadeIn'

export function Section({
  id,
  label,
  action,
  children,
}: {
  id: string
  label: string
  action?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} className="section-block">
      <FadeIn>
        <div className="sec-head">
          <p className="sec-label"><span>~/<b>{label}</b></span></p>
          {action}
        </div>
        {children}
      </FadeIn>
    </section>
  )
}
