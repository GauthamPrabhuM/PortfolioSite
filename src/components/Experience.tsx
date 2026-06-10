'use client'
import { Section } from './ui/Section'
import { WORK_EXPERIENCE, RESEARCH_EXPERIENCE, EDUCATION } from '@/lib/data'

interface RowProps {
  period: string
  title: string
  org: string
  meta?: string
  bullets?: string[]
  stack?: string[]
}

function Row({ period, title, org, meta, bullets, stack }: RowProps) {
  return (
    <div
      className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-6 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <span className="text-[13px] font-mono pt-0.5 whitespace-nowrap" style={{ color: 'var(--text-3)' }}>
        {period}
      </span>
      <div>
        <h3 className="text-[15px] font-semibold">{title}</h3>
        <p className="text-sm mt-0.5" style={{ color: 'var(--text-2)' }}>
          {org}
          {meta && <span style={{ color: 'var(--text-3)' }}> · {meta}</span>}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                <span aria-hidden="true" style={{ color: 'var(--text-3)' }}>–</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {stack && stack.length > 0 && (
          <p className="mt-3 text-xs font-mono leading-relaxed" style={{ color: 'var(--text-3)' }}>
            {stack.join(' · ')}
          </p>
        )}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <>
      <Section id="experience" label="Experience">
        <div>
          {WORK_EXPERIENCE.map(exp => (
            <Row
              key={exp.id}
              period={exp.period}
              title={exp.title}
              org={exp.company}
              meta={exp.location}
              bullets={exp.highlights}
              stack={exp.stack}
            />
          ))}
        </div>
      </Section>

      <Section id="research" label="Research">
        <div>
          {RESEARCH_EXPERIENCE.map(exp => (
            <Row
              key={exp.id}
              period={exp.period}
              title={exp.title}
              org={exp.institution}
              meta={exp.advisor ? `Advisor: ${exp.advisor}` : undefined}
              bullets={exp.highlights}
              stack={exp.stack}
            />
          ))}
        </div>
      </Section>

      <Section id="education" label="Education">
        <div>
          {EDUCATION.map(edu => (
            <Row
              key={edu.school}
              period={edu.period}
              title={edu.degree}
              org={edu.school}
              meta={`${edu.gradeLabel} ${edu.grade}`}
              bullets={edu.note ? [edu.note] : undefined}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
