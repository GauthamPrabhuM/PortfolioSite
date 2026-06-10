'use client'
import { Section } from './ui/Section'
import { SKILLS } from '@/lib/data'

export function Skills() {
  return (
    <Section id="skills" label="Stack">
      <div>
        {SKILLS.map(cat => (
          <div
            key={cat.id}
            className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <span className="text-[13px] font-mono pt-px" style={{ color: 'var(--text-3)' }}>
              {cat.category}
            </span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {cat.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
