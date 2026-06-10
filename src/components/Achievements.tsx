'use client'
import { Section } from './ui/Section'
import { ACHIEVEMENTS } from '@/lib/data'

export function Achievements() {
  const items = ACHIEVEMENTS.flatMap(group => group.items)

  return (
    <Section id="achievements" label="Honours">
      <div>
        {items.map(item => (
          <div
            key={item.title}
            className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <span className="text-[13px] font-mono pt-px" style={{ color: 'var(--text-3)' }}>
              {item.year}
            </span>
            <div>
              <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
              <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-3)' }}>
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
