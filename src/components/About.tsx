'use client'
import { Section } from './ui/Section'
import { EDUCATION } from '@/lib/data'

const FOCUS = ['Agentic AI', 'LLMs & RAG', 'Temporal GNNs', 'Quantum ML', 'Microservices', 'MLOps']

export function About() {
  const edu = EDUCATION[0]
  return (
    <Section id="about" label="about">
      <p className="text-[0.95rem] sm:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
        I like building things people actually use. Joined Cisco as an intern and made{' '}
        <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>SE2 in 18 months</strong> — these days I build agentic
        AI for the supply-chain org, the kind that quietly saves{' '}
        <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>a few thousand engineer-hours a quarter</strong>. Nights
        and weekends, I research temporal graph neural nets at SJSU — where most of my{' '}
        <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>6 papers</strong> came from.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {FOCUS.map(f => <span key={f} className="chip-neutral">{f}</span>)}
      </div>

      <p className="mt-4 text-sm font-mono" style={{ color: 'var(--text-3)' }}>
        <span style={{ color: 'var(--accent)' }}>edu</span> — B.Tech CSE, MIT Manipal · {edu.grade} · top 15%
      </p>
    </Section>
  )
}
