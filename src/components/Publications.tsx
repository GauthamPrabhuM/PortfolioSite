'use client'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PUBLICATIONS, PERSONAL } from '@/lib/data'

const FEATURED = 3

export function Publications() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, FEATURED)

  return (
    <Section
      id="publications"
      label="papers"
      action={
        <a href={PERSONAL.scholar} target="_blank" rel="noreferrer" className="sec-action">
          6 papers · 50+ citations ↗
        </a>
      }
    >
      {shown.map(p => {
        const Title = p.link ? 'a' : 'span'
        return (
          <div key={p.id} className="entry">
            <h3 className="entry-title">
              <Title
                {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
                className={p.link ? 'transition-colors hover:text-[var(--accent)]' : undefined}
                style={{ color: 'inherit' }}
              >
                {p.title}
              </Title>
            </h3>
            <p className="entry-org">
              {p.venue}
              {p.citations && (
                <>
                  <span style={{ color: 'var(--text-3)' }}>{'  ·  '}</span>
                  <span style={{ color: 'var(--accent)' }}>{p.citations} cites</span>
                </>
              )}
            </p>
            <p className="text-[0.8rem] mt-1.5" style={{ color: 'var(--text-3)' }}>
              {p.authors}
            </p>
          </div>
        )
      })}

      <button className="disclosure" onClick={() => setShowAll(s => !s)}>
        {showAll ? '− show fewer' : `+ show all ${PUBLICATIONS.length} papers`}
      </button>
    </Section>
  )
}
