'use client'
import { Section } from './ui/Section'
import { EDUCATION } from '@/lib/data'

export function About() {
  const edu = EDUCATION[0]
  return (
    <Section id="about" label="about">
      <div className="prose-w space-y-4">
        <p className="text-[0.98rem] leading-[1.72]" style={{ color: 'var(--text-2)' }}>
          I like building things people actually use. I joined Cisco as an intern and made{' '}
          <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>SE2 in 18 months</strong>. These days I
          build agentic AI for the supply-chain org, the unglamorous kind that quietly saves{' '}
          <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>a few thousand engineer-hours a quarter</strong>.
        </p>
        <p className="text-[0.98rem] leading-[1.72]" style={{ color: 'var(--text-2)' }}>
          Nights and weekends I research temporal graph neural networks at SJSU, which is where most of my{' '}
          <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>six papers</strong> came from. I care
          about the part where research survives contact with production.
        </p>
      </div>

      <p className="mt-6 text-[0.8rem] font-mono" style={{ color: 'var(--text-3)' }}>
        <span style={{ color: 'var(--accent)' }}>edu</span>
        {'  '}B.Tech CSE, MIT Manipal · {edu.grade} · top 15% of cohort
      </p>
    </Section>
  )
}
