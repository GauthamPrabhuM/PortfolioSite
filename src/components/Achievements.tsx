'use client'
import { Section } from './ui/Section'
import { ACHIEVEMENTS } from '@/lib/data'

export function Achievements() {
  return (
    <Section id="achievements" label="achievements">
      <div className="space-y-8 mt-1">
        {ACHIEVEMENTS.map(group => (
          <div key={group.category}>
            <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>{group.category}</p>
            <div>
              {group.items.map(item => (
                <div key={item.title} className="row !py-2">
                  <div className="row-head">
                    <span className="row-title text-[0.9rem] leading-snug font-medium">{item.title}</span>
                    <span className="row-meta">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
