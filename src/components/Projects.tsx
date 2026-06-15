'use client'
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <div className="mt-1">
        {PROJECTS.map(p => (
          <div key={p.id} className="row">
            <div className="row-head">
              <span className="row-title">{p.title} <span className="font-normal text-sm font-mono" style={{ color: 'var(--text-3)' }}>· {p.tagline}</span></span>
              <span className="row-meta" style={{ color: 'var(--accent)' }}>{p.impact}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>{p.stack.slice(0, 5).join('  ·  ')}</span>
              <div className="flex items-center gap-3">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs ulink"><FiGithub size={12} /> src</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs ulink"><FiExternalLink size={12} /> live</a>}
                {p.paper && <a href={p.paper} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs ulink"><FiFileText size={12} /> paper</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
