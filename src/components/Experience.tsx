'use client'
import { Section } from './ui/Section'
import { WORK_EXPERIENCE, RESEARCH_EXPERIENCE } from '@/lib/data'

interface Role {
  id: number
  title: string
  org: string
  period: string
  isCurrent?: boolean
  highlights: string[]
  stack: string[]
}

function Row({ r }: { r: Role }) {
  return (
    <div className="row">
      <div className="row-head">
        <span className="row-title">
          {r.title}
          {r.isCurrent && (
            <span className="ml-2 align-middle text-[0.65rem] font-mono px-1.5 py-0.5 rounded"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
              now
            </span>
          )}
        </span>
        <span className="row-meta">{r.period}</span>
      </div>
      <p className="text-sm font-mono" style={{ color: 'var(--accent-2)' }}>{r.org}</p>
      <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-3)' }}>{r.stack.slice(0, 6).join('  ·  ')}</p>
    </div>
  )
}

export function Experience() {
  const work: Role[] = WORK_EXPERIENCE.map(w => ({ ...w, org: w.company }))
  const research: Role[] = RESEARCH_EXPERIENCE.map(r => ({ ...r, org: r.institution }))
  return (
    <Section id="experience" label="experience">
      <div className="mt-1">
        {work.map(r => <Row key={`w${r.id}`} r={r} />)}
      </div>
      <p className="sec-label mt-10">~/<b>research</b></p>
      <div>
        {research.map(r => <Row key={`r${r.id}`} r={r} />)}
      </div>
    </Section>
  )
}
