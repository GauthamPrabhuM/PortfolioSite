'use client'
import { FiExternalLink } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PUBLICATIONS, PERSONAL } from '@/lib/data'

export function Publications() {
  return (
    <Section id="publications" label="publications">
      <a href={PERSONAL.scholar} target="_blank" rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-mono ulink -mt-2 mb-1">
        6 papers · 50+ citations · Google Scholar <FiExternalLink size={11} />
      </a>
      <div className="mt-1">
        {PUBLICATIONS.map(p => (
          <div key={p.id} className="row">
            <div className="row-head">
              <span className="row-title text-[0.95rem] leading-snug">
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">{p.title}</a>
                  : p.title}
              </span>
              <span className="row-meta">{p.citations ? `${p.citations} cites` : ''}</span>
            </div>
            <p className="text-xs font-mono" style={{ color: 'var(--accent-2)' }}>{p.venue}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
