'use client'
import type { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiBookOpen, FiTrendingUp } from 'react-icons/fi'
import { FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { PROJECTS, type Project } from '@/lib/data'

function IconLink({ href, label, Icon }: { href: string; label: string; Icon: IconType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 hover:scale-110 hover:text-[var(--accent)] hover:border-[var(--accent-border)]"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        color: 'var(--text-2)',
      }}
    >
      <Icon size={15} />
    </a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-xl overflow-hidden h-full card-base"
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
            {project.github && <IconLink href={project.github} label={`${project.title} GitHub`} Icon={FiGithub} />}
            {project.live && <IconLink href={project.live} label={`${project.title} live`} Icon={FiExternalLink} />}
            {project.paper && <IconLink href={project.paper} label={`${project.title} paper`} Icon={FiBookOpen} />}
          </div>
        </div>

        {/* Title + tagline */}
        <h3 className="text-lg font-display font-bold mb-1" style={{ color: 'var(--text-1)' }}>
          {project.title}
        </h3>
        <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-3)' }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>

        {/* Impact */}
        <div
          className="flex items-center gap-2 text-xs font-mono font-medium mb-5 px-3 py-2 rounded-lg"
          style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
        >
          <FiTrendingUp size={13} className="shrink-0" />
          {project.impact}
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
          title="Selected work."
          subtitle="Agentic AI, quantum ML, disaster response, and data systems."
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
