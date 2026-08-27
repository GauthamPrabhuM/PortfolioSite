'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiDroplet, FiMenu, FiX } from 'react-icons/fi'
import { useTheme, ACCENTS } from './ThemeProvider'
import { PERSONAL } from '@/lib/data'

const LINKS = [
  { label: 'about', href: 'about' },
  { label: 'work', href: 'experience' },
  { label: 'projects', href: 'projects' },
  { label: 'papers', href: 'publications' },
  { label: 'contact', href: 'contact' },
]

export function Navigation() {
  const { theme, accent, toggle, setAccent } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [accentOpen, setAccentOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const accentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy
  useEffect(() => {
    const ids = LINKS.map(l => l.href)
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

  useEffect(() => {
    if (!accentOpen) return
    const onClick = (e: MouseEvent) => {
      if (accentRef.current && !accentRef.current.contains(e.target as Node)) setAccentOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [accentOpen])

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: menuOpen ? 'var(--bg-base)' : scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(14px) saturate(1.4)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container-prose">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-1)' }}
            aria-label="Home"
          >
            <span style={{ color: 'var(--accent)' }}>~</span>/gautham
          </button>

          <nav className="hidden md:flex items-center gap-1 font-mono text-[0.8rem]" aria-label="Primary">
            {LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className="px-1 py-1 mx-1.5 transition-colors"
                style={{
                  color: active === l.href ? 'var(--accent)' : 'var(--text-3)',
                  borderBottom: `2px solid ${active === l.href ? 'var(--accent)' : 'transparent'}`,
                }}
              >
                {l.label}
              </button>
            ))}
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 rounded-md transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-3)' }}
            >
              resume<span style={{ color: 'var(--text-3)', opacity: 0.6 }}> ↗</span>
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Accent picker */}
            <div className="relative" ref={accentRef}>
              <button
                onClick={() => setAccentOpen(o => !o)}
                className="w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-110"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--accent)' }}
                aria-label="Change accent colour"
                aria-expanded={accentOpen}
              >
                <FiDroplet size={14} />
              </button>
              <AnimatePresence>
                {accentOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 mt-2 p-3 rounded-xl z-50"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card-hover)' }}
                  >
                    <p className="text-[0.65rem] font-mono mb-2 px-0.5" style={{ color: 'var(--text-3)' }}>$ theme --accent</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {ACCENTS.map(a => {
                        const swatch = theme === 'light' ? a.latte : a.mocha
                        const isActive = accent === a.id
                        return (
                          <button
                            key={a.id}
                            onClick={() => { setAccent(a.id); setAccentOpen(false) }}
                            className="w-7 h-7 rounded-full transition-transform duration-150 hover:scale-110"
                            style={{ background: swatch, boxShadow: isActive ? `0 0 0 2px var(--bg-surface), 0 0 0 4px ${swatch}` : 'none' }}
                            aria-label={a.id}
                            title={a.id}
                          />
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-110"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
            </button>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-md transition-all duration-200"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={15} /> : <FiMenu size={15} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile"
            >
              <div
                className="flex flex-col py-2 font-mono text-sm"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {LINKS.map(l => (
                  <button
                    key={l.href}
                    onClick={() => goto(l.href)}
                    className="text-left px-1 py-2.5 transition-colors"
                    style={{ color: active === l.href ? 'var(--accent)' : 'var(--text-2)' }}
                  >
                    <span style={{ color: 'var(--text-3)' }}>~/</span>{l.label}
                  </button>
                ))}
                <a
                  href={PERSONAL.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="px-1 py-2.5"
                  style={{ color: 'var(--text-2)' }}
                >
                  <span style={{ color: 'var(--text-3)' }}>~/</span>resume ↗
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
