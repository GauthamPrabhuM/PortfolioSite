'use client'
import type { ReactNode } from 'react'
import { FadeIn } from './FadeIn'

interface Props {
  number: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeader({ number, title, subtitle, align = 'left', children }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'items-start'
  return (
    <FadeIn className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      <span className="section-number">{number}</span>
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-1)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-2)] max-w-xl leading-relaxed text-base sm:text-lg mt-1">
          {subtitle}
        </p>
      )}
      {children}
    </FadeIn>
  )
}
