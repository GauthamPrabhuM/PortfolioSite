'use client'
import { Section } from './ui/Section'
import { SKILLS } from '@/lib/data'

export function Skills() {
  return (
    <Section id="skills" label="stack">
      <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-5">
        {SKILLS.map(s => (
          <div key={s.id} className="contents">
            <p
              className="text-[0.78rem] font-mono pt-[0.15rem]"
              style={{ color: 'var(--accent)' }}
            >
              {s.category}
            </p>
            <p className="text-[0.9rem] leading-[1.75]" style={{ color: 'var(--text-2)' }}>
              {s.items.map((it, i) => (
                <span key={it}>
                  {it}
                  {i < s.items.length - 1 && (
                    <span style={{ color: 'var(--text-3)', opacity: 0.5 }}>{'  ·  '}</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
