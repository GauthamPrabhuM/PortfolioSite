'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { PERSONAL } from '@/lib/data'

const LINKS = [
  { label: 'GitHub', href: PERSONAL.github, Icon: FiGithub },
  { label: 'LinkedIn', href: PERSONAL.linkedin, Icon: FiLinkedin },
  { label: 'Scholar', href: PERSONAL.scholar, Icon: SiGooglescholar },
  { label: 'Email', href: `mailto:${PERSONAL.email}`, Icon: FiMail },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function Intro() {
  return (
    <motion.section
      className="pt-36 pb-12 sm:pt-44 sm:pb-14"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="flex items-center gap-5 mb-8">
        <div
          className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden shrink-0"
          style={{ border: '1px solid var(--border-strong)' }}
        >
          <Image src={PERSONAL.photo} alt="Gautham Manuru Prabhu" fill className="object-cover object-top" priority />
        </div>
        <div>
          <h1 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight">
            Gautham Manuru Prabhu
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-2)' }}>
            Software Engineer 2, AI Acceleration · Cisco
          </p>
        </div>
      </motion.div>

      <motion.p variants={item} className="text-[15px] leading-relaxed max-w-xl mb-4" style={{ color: 'var(--text-2)' }}>
        I build agentic AI systems for Cisco&apos;s global supply chain — 20% of incoming cases
        resolved autonomously, ~5,000 engineer-hours saved each quarter. On the research side,
        I work on efficient temporal graph learning at{' '}
        <a href="https://www.sjsu.edu" target="_blank" rel="noopener noreferrer" className="link-underline" style={{ color: 'var(--text-1)' }}>
          MiCoSys Lab, SJSU
        </a>.
      </motion.p>

      <motion.p variants={item} className="text-[13px] font-mono mb-8" style={{ color: 'var(--text-3)' }}>
        Intern → SE2 in 18 months · 6 peer-reviewed publications · 50+ citations
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap items-center gap-2">
        {LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-150 hover:bg-[var(--bg-subtle)] hover:text-[var(--text-1)]"
            style={{ color: 'var(--text-2)', border: '1px solid var(--border)' }}
          >
            <Icon size={13} />
            {label}
          </a>
        ))}
        <a
          href={PERSONAL.resume}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-opacity duration-150 hover:opacity-85"
          style={{ background: 'var(--text-1)', color: 'var(--bg)' }}
        >
          Resume
          <FiArrowUpRight size={13} />
        </a>
      </motion.div>
    </motion.section>
  )
}
