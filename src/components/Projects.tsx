'use client'
import { FiGithub, FiExternalLink, FiBookOpen } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PROJECTS, type Project } from '@/lib/data'

function ProjectRow({ project }: { project: Project }) {
  const links = [
    project.github && { href: project.github, label: 'Code', Icon: FiGithub },
    project.live && { href: project.live, label: 'Live', Icon: FiExternalLink },
    project.paper && { href: project.paper, label: 'Paper', Icon: FiBookOpen },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof FiGithub }[]

  return (
    <div
      className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-6 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <span className="text-[13px] font-mono pt-0.5" style={{ color: 'var(--text-3)' }}>
        {project.tagline}
      </span>
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[15px] font-semibold">{project.title}</h3>
          <div className="flex items-center gap-3 shrink-0">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${label}`}
                className="inline-flex items-center gap-1 text-xs font-mono transition-colors duration-150 hover:text-[var(--text-1)]"
                style={{ color: 'var(--text-3)' }}
              >
                <Icon size={12} />
                {label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-sm leading-relaxed mt-1.5" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>
        <p className="text-xs font-mono mt-2.5" style={{ color: 'var(--accent)' }}>
          {project.impact}
        </p>
        <p className="text-xs font-mono mt-1.5" style={{ color: 'var(--text-3)' }}>
          {project.stack.join(' · ')}
        </p>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div>
        {PROJECTS.map(project => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
