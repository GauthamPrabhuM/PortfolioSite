'use client'
import { FiMail, FiArrowUpRight } from 'react-icons/fi'
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
      <p className="text-base leading-relaxed -mt-1 mb-4 max-w-lg" style={{ color: 'var(--text-2)' }}>
        I&apos;m always up for a chat about agentic AI, graph ML, or whatever you&apos;re building.
        Email&apos;s the fastest way to reach me — I actually read them.
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
            <FiArrowUpRight size={14} className="shrink-0 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-3)' }} />
          </a>
        ))}
      </div>

      <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid var(--border)' }}>
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
