'use client'
import { FiArrowUpRight } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PERSONAL } from '@/lib/data'

const LINKS = [
  { label: 'GitHub', href: PERSONAL.github },
  { label: 'LinkedIn', href: PERSONAL.linkedin },
  { label: 'Google Scholar', href: PERSONAL.scholar },
  { label: 'Resume', href: PERSONAL.resume },
]

export function Contact() {
  return (
    <>
      <Section id="contact" label="Contact">
        <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: 'var(--text-2)' }}>
          Open to collaborations on agentic AI, graph ML, and applied research. The fastest way
          to reach me is{' '}
          <a href={`mailto:${PERSONAL.email}`} className="link-underline" style={{ color: 'var(--text-1)' }}>
            {PERSONAL.email}
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-mono transition-colors duration-150 hover:text-[var(--text-1)]"
              style={{ color: 'var(--text-3)' }}
            >
              {label}
              <FiArrowUpRight size={11} />
            </a>
          ))}
        </div>
      </Section>

      <footer
        className="py-8 mt-4 flex items-center justify-between border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Gautham Manuru Prabhu
        </p>
        <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          Bengaluru, India
        </p>
      </footer>
    </>
  )
}
