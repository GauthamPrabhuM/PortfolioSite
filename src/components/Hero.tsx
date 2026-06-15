'use client'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import Image from 'next/image'
import { PERSONAL } from '@/lib/data'

const socials = [
  { href: PERSONAL.github, icon: <FiGithub size={17} />, label: 'GitHub' },
  { href: PERSONAL.linkedin, icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
  { href: PERSONAL.scholar, icon: <SiGooglescholar size={16} />, label: 'Google Scholar' },
  { href: `mailto:${PERSONAL.email}`, icon: <FiMail size={17} />, label: 'Email' },
]

export function Hero() {
  return (
    <header className="pt-24 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-5"
      >
        <div className="relative shrink-0">
          <div
            className="absolute -inset-1 rounded-full blur-md opacity-40"
            aria-hidden="true"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
          />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden" style={{ border: '1px solid var(--border-strong)' }}>
            <Image src={PERSONAL.photo} alt={PERSONAL.name} fill className="object-cover object-top" priority />
          </div>
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-display font-bold leading-tight" style={{ color: 'var(--text-1)' }}>
            {PERSONAL.name}
          </h1>
          <p className="text-sm sm:text-base mt-1" style={{ color: 'var(--text-2)' }}>
            Software Engineer 2 <span style={{ color: 'var(--text-3)' }}>@ Cisco</span> · ML Researcher <span style={{ color: 'var(--text-3)' }}>@ SJSU</span>
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl"
        style={{ color: 'var(--text-2)' }}
      >
        I build agentic AI at Cisco and research temporal graph nets at SJSU. This whole page is
        keyboard-drivable — there&apos;s a real terminal right below if you&apos;d rather type than scroll.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <a
          href={PERSONAL.resume}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
        >
          <FiDownload size={14} /> Résumé
        </a>
        <div className="flex items-center gap-1.5">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)]"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  )
}
