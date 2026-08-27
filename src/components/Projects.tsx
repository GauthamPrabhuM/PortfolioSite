'use client'
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <div className="bento-grid">
        {PROJECTS.map((p, i) => (
          <article key={p.id} className={`bento ${i === 0 ? 'bento-wide' : ''}`}>
            <span className="bento-num">{p.num}</span>

            <h3
              className="mt-3 font-display font-bold leading-tight"
              style={{
                color: 'var(--text-1)',
                fontSize: i === 0 ? '1.6rem' : '1.2rem',
                letterSpacing: '-0.04em',
              }}
            >
              {p.title}
            </h3>
            <p className="mt-1 text-[0.78rem] font-mono" style={{ color: 'var(--accent-2)' }}>
              {p.tagline}
            </p>

            <p
              className="mt-3 text-[0.88rem] leading-[1.62] flex-1"
              style={{ color: 'var(--text-2)' }}
            >
              {p.description}
            </p>

            <p className="bento-impact">{p.impact}</p>

            <div className="stack-row">
              {p.stack.slice(0, i === 0 ? 5 : 3).map(s => (
                <span key={s} className="stack-pill">{s}</span>
              ))}
            </div>

            {(p.github || p.live || p.paper) && (
              <div className="meta-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="meta-link">
                    <FiGithub size={12} /> source
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="meta-link">
                    <FiExternalLink size={12} /> live
                  </a>
                )}
                {p.paper && (
                  <a href={p.paper} target="_blank" rel="noreferrer" className="meta-link">
                    <FiFileText size={12} /> paper
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
