'use client'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import Image from 'next/image'
import { PERSONAL, STATS } from '@/lib/data'
import { CountUp } from './ui/CountUp'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-10">
          {/* ── Text ── */}
          <motion.div
            className="flex flex-col items-start max-w-2xl flex-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-7 tag-base">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--c-green)' }} />
                Software Engineer 2 · Cisco · AI Acceleration
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-[4.4rem] font-display leading-[1.05] mb-7"
              style={{ letterSpacing: '-0.03em' }}
            >
              Building AI that
              <br />
              <span className="text-gradient">ships and scales.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl leading-relaxed mb-9 max-w-xl"
              style={{ color: 'var(--text-2)' }}
            >
              I&apos;m <span style={{ color: 'var(--text-1)' }} className="font-medium">Gautham Manuru Prabhu</span> —
              I build agentic AI for Cisco&apos;s global supply chain and research temporal graph
              learning at <span style={{ color: 'var(--text-1)' }} className="font-medium">MiCoSys Lab, SJSU</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
              <a
                href="#experience"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(110deg, var(--accent) 0%, var(--accent-2) 100%)',
                  color: 'var(--accent-contrast)',
                  boxShadow: '0 8px 28px -8px color-mix(in srgb, var(--accent) 55%, transparent)',
                }}
              >
                See my work
                <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={PERSONAL.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-1)',
                }}
              >
                <FiDownload size={14} />
                Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2.5">
              {[
                { href: PERSONAL.github, icon: <FiGithub size={17} />, label: 'GitHub' },
                { href: PERSONAL.linkedin, icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
                { href: PERSONAL.scholar, icon: <SiGooglescholar size={16} />, label: 'Google Scholar' },
                { href: `mailto:${PERSONAL.email}`, icon: <FiMail size={17} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent-border)]"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                  }}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Photo tile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative w-72 sm:w-80">
              {/* Glow */}
              <div
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-25"
                aria-hidden="true"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2) 60%, var(--accent-3))' }}
              />
              {/* Gradient-ring tile */}
              <div className="relative rounded-[1.6rem] p-[1.5px] ring-gradient overflow-hidden">
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/4.6]" style={{ background: 'var(--bg-elevated)' }}>
                  <Image
                    src={PERSONAL.photo}
                    alt="Gautham Manuru Prabhu"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.45 }}
                className="absolute -left-6 top-7 px-3 py-1.5 rounded-xl text-xs font-mono font-medium card-base"
                style={{ boxShadow: 'var(--shadow-card-hover)' }}
              >
                <span style={{ color: 'var(--accent)' }}>6</span>&nbsp;publications
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.45 }}
                className="absolute -right-4 bottom-10 px-3 py-1.5 rounded-xl text-xs font-mono font-medium card-base"
                style={{ boxShadow: 'var(--shadow-card-hover)' }}
              >
                <span style={{ color: 'var(--accent-2)' }}>2×</span>&nbsp;promoted
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {STATS.map(stat => (
            <div key={stat.label} className="card-base px-5 py-5 text-center sm:text-left">
              <div className="text-2xl sm:text-[1.9rem] font-display font-semibold text-gradient leading-none">
                <CountUp value={stat.value} />
              </div>
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text-3)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
