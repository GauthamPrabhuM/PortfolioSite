'use client'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-sm font-semibold tracking-tight"
          style={{ color: 'var(--text-1)' }}
        >
          Gautham M.P.
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden sm:flex items-center" aria-label="Primary">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-3 py-1.5 text-sm rounded-md transition-colors duration-150 hover:text-[var(--text-1)]"
                style={{ color: 'var(--text-2)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={toggle}
            className="w-8 h-8 ml-1 flex items-center justify-center rounded-md transition-colors duration-150 hover:bg-[var(--bg-subtle)]"
            style={{ color: 'var(--text-2)', border: '1px solid var(--border)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>
        </div>
      </div>
    </header>
  )
}
