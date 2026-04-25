'use client'
import { FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SiGooglescholar } from 'react-icons/si'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { PERSONAL } from '@/lib/data'

const CHANNELS = [
  {
    id: 'email',
    label: 'Email',
    value: 'gauthamprabhu9@gmail.com',
    href: `mailto:${PERSONAL.email}`,
    Icon: FiMail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/gautham-prabhu-5b2342192',
    href: PERSONAL.linkedin,
    Icon: FaLinkedinIn,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@GauthamPrabhuM',
    href: PERSONAL.github,
    Icon: BsGithub,
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    value: '6 publications · 50+ citations',
    href: PERSONAL.scholar,
    Icon: SiGooglescholar,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--accent) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10">
        <FadeIn className="flex flex-col items-center text-center mb-12">
          <span className="section-number mb-3">07 — Contact</span>
          <h2
            className="text-4xl sm:text-5xl font-display font-bold mb-4 leading-tight"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            Let's build something
            <br />
            <span className="text-gradient">together.</span>
          </h2>
          <p className="text-lg max-w-lg leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
            Open to collaborations on agentic AI, graph ML, systems research, and applied ML.
            The fastest way to reach me is email.
          </p>

          {/* Primary CTA */}
          <motion.a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-200"
            style={{
              background: 'var(--accent)',
              color: '#050D1C',
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail size={18} />
            Say hello
            <FiArrowUpRight size={16} />
          </motion.a>
        </FadeIn>

        {/* Channel cards */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {CHANNELS.map(({ id, label, value, href, Icon }) => (
            <FadeInItem key={id}>
              <a
                href={href}
                target={id === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.borderColor = 'var(--accent-border)'
                  t.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.borderColor = 'var(--border)'
                  t.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0 transition-colors duration-150"
                  style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>{label}</span>
                  <span className="text-sm font-medium truncate" style={{ color: 'var(--text-1)' }}>{value}</span>
                </div>
                <FiArrowUpRight
                  size={15}
                  className="shrink-0 transition-all duration-150 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--text-3)' }}
                />
              </a>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Footer */}
        <FadeIn delay={0.3} className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm font-mono" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Gautham Manuru Prabhu
          </p>
          <p className="text-sm font-mono" style={{ color: 'var(--text-3)' }}>
            Bengaluru, India
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
