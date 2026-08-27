'use client'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import Image from 'next/image'
import { PERSONAL, STATS } from '@/lib/data'

const socials = [
  { href: PERSONAL.github, icon: <FiGithub size={15} />, label: 'GitHub' },
  { href: PERSONAL.linkedin, icon: <FiLinkedin size={15} />, label: 'LinkedIn' },
  { href: PERSONAL.scholar, icon: <SiGooglescholar size={14} />, label: 'Google Scholar' },
  { href: `mailto:${PERSONAL.email}`, icon: <FiMail size={15} />, label: 'Email' },
]

const ease = [0.16, 1, 0.3, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
})

export function Hero() {
  return (
    <header className="pt-24 sm:pt-28">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-10">
        <div className="min-w-0 flex-1">
          <motion.p {...rise(0)} className="eyebrow">
            AI Engineer &amp; ML Researcher
          </motion.p>

          <motion.h1 {...rise(0.06)} className="display-xl mt-3">
            <span style={{ color: 'var(--text-1)' }}>Gautham</span>
            <br />
            <span style={{ color: 'var(--accent)' }}>Manuru Prabhu</span>
          </motion.h1>

          <motion.p
            {...rise(0.13)}
            className="mt-5 text-[0.92rem] sm:text-[1rem] font-mono leading-[1.7]"
            style={{ color: 'var(--text-2)' }}
          >
            Agentic AI in production{' '}
            <span style={{ color: 'var(--text-3)' }}>@</span> Cisco
            <span className="mx-2" style={{ color: 'var(--text-3)' }}>|</span>
            Temporal graph nets{' '}
            <span style={{ color: 'var(--text-3)' }}>@</span> SJSU
            <span className="mx-2" style={{ color: 'var(--text-3)' }}>|</span>
            Bengaluru
          </motion.p>

          <motion.div {...rise(0.2)} className="mt-7 flex flex-wrap items-center gap-3">
            <a href={PERSONAL.resume} download className="btn-pill">
              VIEW CV <FiArrowRight size={14} />
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-circle"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative shrink-0 self-start sm:self-auto"
        >
          <div className="relative w-[132px] h-[132px] sm:w-[188px] sm:h-[188px]">
            <div className="ring-dashed" aria-hidden="true" />
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ border: '1px solid var(--border-strong)' }}
            >
              <Image
                src={PERSONAL.photo}
                alt={PERSONAL.name}
                fill
                sizes="188px"
                className="object-cover"
                style={{ transform: 'scale(2.1)', transformOrigin: '52.4% 2%' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div {...rise(0.3)} className="stat-strip mt-10">
        {STATS.map(s => (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">
              {s.label.split('\n').map((l, i) => (
                <span key={l} className="block">{l}</span>
              ))}
            </span>
          </div>
        ))}
      </motion.div>
    </header>
  )
}
