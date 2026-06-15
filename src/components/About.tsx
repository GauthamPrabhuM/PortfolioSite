'use client'
import { Section } from './ui/Section'
import { EDUCATION } from '@/lib/data'

const FOCUS = ['Agentic AI', 'LLMs & RAG', 'Temporal GNNs', 'Quantum ML', 'Microservices', 'MLOps']

export function About() {
  const edu = EDUCATION[0]
  return (
    <Section id="about" label="about">
      <p className="text-[0.95rem] sm:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
        Intern → <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>SE2 in 18 months</strong> at Cisco, shipping
        agentic AI that saves <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>~5,000 eng-hours / quarter</strong>.
        Researching temporal GNNs at SJSU. 6 peer-reviewed papers.
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
