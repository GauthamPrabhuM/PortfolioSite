'use client'
import { Section } from './ui/Section'
import { SKILLS } from '@/lib/data'

export function Skills() {
  return (
    <Section id="skills" label="skills">
      <div className="mt-1">
        {SKILLS.map(s => (
          <div key={s.id} className="row">
            <div className="row-head">
              <span className="text-sm font-mono font-medium" style={{ color: 'var(--accent)' }}>{s.category}</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm" style={{ color: 'var(--text-2)' }}>
              {s.items.map((it, i) => (
                <span key={it}>
                  {it}{i < s.items.length - 1 && <span style={{ color: 'var(--text-3)' }}> ·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
