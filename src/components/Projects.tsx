'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiBookOpen } from 'react-icons/fi'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { PROJECTS } from '@/lib/data'

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-xl overflow-hidden h-full"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        const t = e.currentTarget
        t.style.borderColor = 'var(--border-strong)'
        t.style.boxShadow = '0 8px 40px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        const t = e.currentTarget
        t.style.borderColor = 'var(--border)'
        t.style.boxShadow = 'none'
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--accent) 0%, #818CF8 100%)' }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Number + links */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-3xl font-bold leading-none"
            style={{ color: 'var(--accent)', opacity: 0.25 }}
          >
            {project.num}
          </span>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 hover:scale-110"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--accent)'
                  t.style.borderColor = 'var(--accent-border)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--text-2)'
                  t.style.borderColor = 'var(--border)'
                }}
              >
                <FiGithub size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 hover:scale-110"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--accent)'
                  t.style.borderColor = 'var(--accent-border)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--text-2)'
                  t.style.borderColor = 'var(--border)'
                }}
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {project.paper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} paper`}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 hover:scale-110"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--accent)'
                  t.style.borderColor = 'var(--accent-border)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--text-2)'
                  t.style.borderColor = 'var(--border)'
                }}
              >
                <FiBookOpen size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title + tagline */}
        <h3
          className="text-lg font-display font-bold mb-1 group-hover:text-gradient transition-all duration-200"
          style={{ color: 'var(--text-1)' }}
        >
          {project.title}
        </h3>
        <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-3)' }}>
          {project.tagline}
        </p>

        {/* Problem / Approach / Outcome */}
        <div className="flex flex-col gap-3 flex-1 mb-5">
          {[
            { label: 'Problem', text: project.problem },
            { label: 'Approach', text: project.approach },
            { label: 'Outcome', text: project.outcome },
          ].map(row => (
            <div key={row.label}>
              <span
                className="text-xs font-mono font-medium uppercase tracking-wider"
                style={{ color: 'var(--accent)' }}
              >
                {row.label}
              </span>
              <p className="text-sm leading-relaxed mt-0.5" style={{ color: 'var(--text-2)' }}>
                {row.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map(s => (
            <span key={s} className="tag-base">{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="03 — Projects"
          title="Selected work and research projects."
          subtitle="Spanning agentic AI, quantum machine learning, disaster response, and data engineering."
        />

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map(project => (
            <FadeInItem key={project.id}>
              <ProjectCard project={project} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
