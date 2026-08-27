'use client'
import { FiMail, FiArrowUpRight, FiDownload, FiExternalLink } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SiGooglescholar } from 'react-icons/si'
import { Section } from './ui/Section'
import { PERSONAL } from '@/lib/data'

const CHANNELS = [
  { id: 'email', label: 'email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, Icon: FiMail },
  { id: 'github', label: 'github', value: '@GauthamPrabhuM', href: PERSONAL.github, Icon: BsGithub },
  { id: 'linkedin', label: 'linkedin', value: '/in/gautham-prabhu', href: PERSONAL.linkedin, Icon: FaLinkedinIn },
  { id: 'scholar', label: 'scholar', value: 'Google Scholar', href: PERSONAL.scholar, Icon: SiGooglescholar },
]

export function Contact() {
  return (
    <Section id="contact" label="contact">
      <p className="text-[1rem] leading-[1.7] mb-6 prose-w" style={{ color: 'var(--text-2)' }}>
        Always up for a conversation about agentic AI, graph ML, or whatever you&apos;re building.
        Email is the fastest way to reach me, and I actually read them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {CHANNELS.map(({ id, label, value, href, Icon }) => (
          <a
            key={id}
            href={href}
            target={id === 'email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-3.5 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          >
            <Icon size={15} style={{ color: 'var(--accent)' }} />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[0.65rem] font-mono" style={{ color: 'var(--text-3)' }}>{label}</span>
              <span className="text-sm truncate" style={{ color: 'var(--text-1)' }}>{value}</span>
            </div>
            <FiArrowUpRight
              size={14}
              className="shrink-0 transition-colors group-hover:text-[var(--accent)]"
              style={{ color: 'var(--text-3)' }}
            />
          </a>
        ))}
      </div>

      {/* Résumé lives here as a link, not as an 800px embed mid-page */}
      <div
        id="resume"
        className="mt-3 flex flex-wrap items-center justify-between gap-3 px-3.5 py-3 rounded-lg"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <span className="text-sm" style={{ color: 'var(--text-2)' }}>
          Prefer the formal version?
        </span>
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-2)' }}
          >
            <FiExternalLink size={12} /> open résumé
          </a>
          <a
            href={PERSONAL.resume}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors"
            style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
          >
            <FiDownload size={12} /> download
          </a>
        </div>
      </div>

      <div
        className="mt-14 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Gautham Manuru Prabhu · Bengaluru, India
        </p>
        <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          hand-built · next.js · catppuccin
        </p>
      </div>
    </Section>
  )
}
