'use client'
import { FiExternalLink } from 'react-icons/fi'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { PUBLICATIONS, PERSONAL } from '@/lib/data'

const VENUE_COLORS: Record<string, string> = {
  'Q1 Journal': 'var(--c-gold)',
  'Conference': 'var(--c-indigo)',
  'Workshop': 'var(--c-green)',
  'Peer-Reviewed': 'var(--c-sky)',
}

function VenueBadge({ type }: { type: string }) {
  const color = VENUE_COLORS[type] ?? 'var(--accent)'
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium"
      style={{
        background: `color-mix(in srgb, ${color} 10%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 28%, transparent)`,
        color,
      }}
    >
      {type}
    </span>
  )
}

function PublicationCard({ pub, index }: { pub: typeof PUBLICATIONS[0]; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group card-base flex gap-5 p-5 sm:p-6">
        {/* Number */}
        <span
          className="text-2xl font-display font-bold shrink-0 mt-0.5 select-none"
          style={{ color: 'var(--text-3)', opacity: 0.5 }}
        >
          {num}
        </span>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-center flex-wrap gap-2">
            <VenueBadge type={pub.venueType} />
            {pub.citations && (
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium"
                style={{
                  background: 'color-mix(in srgb, var(--c-gold) 10%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--c-gold) 28%, transparent)',
                  color: 'var(--c-gold)',
                }}
              >
                {pub.citations} citations
              </span>
            )}
          </div>

          <h3
            className="text-base font-display font-semibold leading-snug"
            style={{ color: 'var(--text-1)' }}
          >
            {pub.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
            {pub.authors}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
            <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
              {pub.venue} · {pub.ref}
            </p>

            <div className="flex items-center gap-2">
              {pub.doi && (
                <span className="text-xs font-mono hidden sm:inline" style={{ color: 'var(--text-3)' }}>
                  DOI: {pub.doi}
                </span>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono transition-all duration-150 hover:opacity-80"
                  style={{ color: 'var(--accent)' }}
                >
                  View
                  <FiExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export function Publications() {
  return (
    <section id="publications" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="05 — Publications"
          title="Peer-reviewed research."
          subtitle="Six publications across IEEE Access, Springer, Procedia CS, and IOP."
        >
          <a
            href={PERSONAL.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-mono mt-1 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            Google Scholar profile
            <FiExternalLink size={13} />
          </a>
        </SectionHeader>

        <FadeInStagger className="flex flex-col gap-4">
          {PUBLICATIONS.map((pub, i) => (
            <FadeInItem key={pub.id}>
              <PublicationCard pub={pub} index={i} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
