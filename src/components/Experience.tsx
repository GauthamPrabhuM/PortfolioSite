'use client'
import { useState } from 'react'
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

/* Full entry: used for the roles that carry the story */
function Entry({ r, bullets }: { r: Role; bullets: number }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <div className="min-w-0">
          <h3 className="entry-title">
            {r.title}
            {r.isCurrent && (
              <span className="badge-now ml-2">
                <span className="dot-live" /> now
              </span>
            )}
          </h3>
          <p className="entry-org">{r.org}</p>
        </div>
        <span className="entry-period">{r.period}</span>
      </div>

      <ul className="entry-list">
        {r.highlights.slice(0, bullets).map(h => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="stack-row">
        {r.stack.slice(0, 6).map(s => (
          <span key={s} className="stack-pill">{s}</span>
        ))}
      </div>
    </div>
  )
}

/* One-liner: used for older roles so they stay visible without stealing weight */
function LineItem({ r }: { r: Role }) {
  return (
    <div className="line-item">
      <span className="line-item-main">
        {r.title} <span style={{ color: 'var(--text-3)' }}>· {r.org}</span>
      </span>
      <span className="line-item-sub">{r.period}</span>
    </div>
  )
}

export function Experience() {
  const [openWork, setOpenWork] = useState(false)
  const [openResearch, setOpenResearch] = useState(false)

  const work: Role[] = WORK_EXPERIENCE.map(w => ({ ...w, org: w.company }))
  const research: Role[] = RESEARCH_EXPERIENCE.map(r => ({ ...r, org: r.institution }))

  // Lead with the current role at full weight; the rest stay compact until asked for.
  const [currentWork, ...pastWork] = work
  const [currentResearch, ...pastResearch] = research

  return (
    <>
      <Section id="experience" label="work">
        <Entry r={currentWork} bullets={3} />
        {openWork
          ? pastWork.map(r => <Entry key={r.id} r={r} bullets={2} />)
          : pastWork.map(r => <LineItem key={r.id} r={r} />)}
        {pastWork.length > 0 && (
          <button className="disclosure" onClick={() => setOpenWork(o => !o)}>
            {openWork ? '− collapse earlier roles' : `+ expand ${pastWork.length} earlier roles`}
          </button>
        )}
      </Section>

      <Section id="research" label="research">
        <Entry r={currentResearch} bullets={2} />
        {openResearch
          ? pastResearch.map(r => <Entry key={r.id} r={r} bullets={2} />)
          : pastResearch.map(r => <LineItem key={r.id} r={r} />)}
        {pastResearch.length > 0 && (
          <button className="disclosure" onClick={() => setOpenResearch(o => !o)}>
            {openResearch ? '− collapse earlier positions' : `+ expand ${pastResearch.length} earlier positions`}
          </button>
        )}
      </Section>
    </>
  )
}
