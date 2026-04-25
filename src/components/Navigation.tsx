'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'
import { PERSONAL } from '@/lib/data'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy
  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.href.slice(1))
    const onScroll = () => {
      const y = window.scrollY + 140
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--accent) 0%, #818CF8 100%)',
        }}
        aria-hidden="true"
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-[68px]">
            {/* Brand */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-all duration-200 group-hover:scale-105"
                style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
              >
                GP
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-sm font-semibold font-display" style={{ color: 'var(--text-1)' }}>
                  Gautham M.P.
                </span>
                <span className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                  AI Engineer · Cisco
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_ITEMS.map(item => {
                const isActive = active === item.href.slice(1)
                return (
                  <button
                    key={item.href}
                    onClick={() => handleLink(item.href)}
                    className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-2)' }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md -z-10"
                        style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Resume */}
              <a
                href={PERSONAL.resume}
                download
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                }}
                aria-label="Download Resume"
              >
                <FiDownload size={13} />
                Resume
              </a>

              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="lg:hidden w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 flex flex-col lg:hidden"
              style={{
                background: 'var(--bg-surface)',
                borderLeft: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="font-display font-semibold text-sm" style={{ color: 'var(--text-1)' }}>Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-md"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-2)' }}
                  aria-label="Close menu"
                >
                  <FiX size={16} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile">
                {NAV_ITEMS.map(item => {
                  const isActive = active === item.href.slice(1)
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleLink(item.href)}
                      className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150"
                      style={{
                        color: isActive ? 'var(--accent)' : 'var(--text-2)',
                        background: isActive ? 'var(--accent-dim)' : 'transparent',
                        border: isActive ? '1px solid var(--accent-border)' : '1px solid transparent',
                      }}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </nav>

              <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <a
                  href={PERSONAL.resume}
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-mono font-medium transition-all duration-200"
                  style={{
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-border)',
                    color: 'var(--accent)',
                  }}
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
