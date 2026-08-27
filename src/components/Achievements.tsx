'use client'
import { useState } from 'react'
import { Section } from './ui/Section'
import { ACHIEVEMENTS } from '@/lib/data'

/* The four worth reading. Everything else stays one keystroke away. */
const FEATURED = [
  'Grand Finalist, Smart India Hackathon',
  'Grand Finalist, Global Quantum Science & Technology Hackathon',
  'Co-founder & Technical Head, Project Kalpana',
  'NTSE State Scholar',
]

type Item = { title: string; detail: string; year: string }

const ALL: (Item & { category: string })[] = ACHIEVEMENTS.flatMap(g =>
  g.items.map(i => ({ ...i, category: g.category }))
)

export function Achievements() {
  const [showAll, setShowAll] = useState(false)

  const featured = FEATURED.map(t => ALL.find(a => a.title === t)).filter(Boolean) as typeof ALL
  const rest = ALL.filter(a => !FEATURED.includes(a.title))

  return (
    <Section id="achievements" label="highlights">
      {featured.map(a => (
        <div key={a.title} className="entry">
          <div className="entry-head">
            <h3 className="entry-title">{a.title}</h3>
            <span className="entry-period">{a.year}</span>
          </div>
          <p className="entry-body">{a.detail}</p>
        </div>
      ))}

      {showAll && (
        <div className="mt-6">
          {rest.map(a => (
            <div key={a.title} className="line-item">
              <span className="line-item-main">{a.title}</span>
              <span className="line-item-sub">{a.year}</span>
            </div>
          ))}
        </div>
      )}

      <button className="disclosure" onClick={() => setShowAll(s => !s)}>
        {showAll ? '− show fewer' : `+ ${rest.length} more awards, schools & leadership`}
      </button>
    </Section>
  )
}
