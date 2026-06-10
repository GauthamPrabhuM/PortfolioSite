'use client'
import { FiArrowUpRight } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PUBLICATIONS, PERSONAL } from '@/lib/data'

function PublicationRow({ pub }: { pub: typeof PUBLICATIONS[0] }) {
  const year = pub.ref.match(/\b20\d{2}\b/g)?.at(-1) ?? ''

  const body = (
    <>
      <div className="text-[13px] font-mono pt-0.5" style={{ color: 'var(--text-3)' }}>
        <p>{year}</p>
        <p className="mt-0.5">{pub.venue}</p>
      </div>
      <div>
        <h3 className="text-[15px] font-medium leading-snug flex items-start gap-2">
          <span className="flex-1">{pub.title}</span>
          {pub.link && (
            <FiArrowUpRight
              size={14}
              className="shrink-0 mt-1 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: 'var(--text-3)' }}
            />
          )}
        </h3>
        <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>
          {pub.authors}
          {pub.citations && (
            <span style={{ color: 'var(--text-2)' }}> · {pub.citations} citations</span>
          )}
        </p>
      </div>
    </>
  )

  const className = 'group grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-5 border-t'
  const style = { borderColor: 'var(--border)' }

  return pub.link ? (
    <a href={pub.link} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {body}
    </a>
  ) : (
    <div className={className} style={style}>
      {body}
    </div>
  )
}

export function Publications() {
  return (
    <Section id="publications" label="Publications">
      <div>
        {PUBLICATIONS.map(pub => (
          <PublicationRow key={pub.id} pub={pub} />
        ))}
      </div>
      <a
        href={PERSONAL.scholar}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-6 text-[13px] font-mono link-accent"
      >
        Google Scholar
        <FiArrowUpRight size={12} />
      </a>
    </Section>
  )
}
