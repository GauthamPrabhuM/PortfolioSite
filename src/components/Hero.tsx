'use client'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import Image from 'next/image'
import { PERSONAL, STATS } from '@/lib/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background — subtle grid + radial gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--border-strong) 1px, transparent 1px),
                              linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        <div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          {/* ── Text content ── */}
          <motion.div
            className="flex flex-col items-start max-w-2xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Status chip */}
            <motion.div variants={item}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium mb-6"
                style={{
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
                  style={{ background: 'var(--accent)' }}
                />
                Software Engineer 2 · Cisco Systems · AI Acceleration
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-display font-bold leading-[1.08] mb-6"
              style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}
            >
              Gautham
              <br />
              <span className="text-gradient">Manuru Prabhu</span>
            </motion.h1>

            {/* Pitch */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--text-2)' }}
            >
              I build{' '}
              <span style={{ color: 'var(--text-1)' }} className="font-medium">
                agentic AI systems
              </span>{' '}
              for Cisco's supply chain and research{' '}
              <span style={{ color: 'var(--text-1)' }} className="font-medium">
                temporal graph learning
              </span>{' '}
              at SJSU.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#experience"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--accent-contrast)',
                }}
              >
                See My Work
                <FiArrowRight size={15} />
              </a>
              <a
                href={PERSONAL.resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-1)',
                }}
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3">
              {[
                { href: PERSONAL.github, icon: <FiGithub size={18} />, label: 'GitHub' },
                { href: PERSONAL.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                { href: PERSONAL.scholar, icon: <SiGooglescholar size={17} />, label: 'Google Scholar' },
                { href: `mailto:${PERSONAL.email}`, icon: <FiMail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                  }}
                  onMouseEnter={e => {
                    const t = e.currentTarget as HTMLAnchorElement
                    t.style.borderColor = 'var(--accent-border)'
                    t.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    const t = e.currentTarget as HTMLAnchorElement
                    t.style.borderColor = 'var(--border)'
                    t.style.color = 'var(--text-2)'
                  }}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
              />
              {/* Ring border */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, var(--accent) 0deg, var(--accent-2) 120deg, transparent 240deg)',
                  padding: '2px',
                  borderRadius: '9999px',
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-base)' }} />
              </div>
              {/* Photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src={PERSONAL.photo}
                  alt="Gautham Manuru Prabhu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* "Open to collabs" badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-2)',
                  boxShadow: 'var(--shadow-card-hover)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to collaborations
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--border)' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 text-center transition-colors duration-150"
              style={{ background: 'var(--bg-surface)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-elevated)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface)' }}
            >
              <span
                className="text-2xl sm:text-3xl font-display font-bold tabular-nums"
                style={{ color: 'var(--accent)' }}
              >
                {stat.value}
              </span>
              <span className="text-xs mt-1 font-mono" style={{ color: 'var(--text-3)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>scroll</span>
        <div className="w-px h-10 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <motion.div
            className="w-full h-1/2 rounded-full"
            style={{ background: 'var(--accent)' }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

