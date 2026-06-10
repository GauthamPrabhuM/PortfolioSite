'use client'
import type { ReactNode } from 'react'
import { FadeIn } from './FadeIn'

interface Props {
  id?: string
  label: string
  children: ReactNode
}

export function Section({ id, label, children }: Props) {
  return (
    <section id={id} className="py-12 sm:py-14">
      <FadeIn y={12}>
        <h2 className="section-label mb-6">{label}</h2>
        {children}
      </FadeIn>
    </section>
  )
}
