'use client'
import { useEffect, useState } from 'react'
import { PERSONAL, NAV_ITEMS } from '@/lib/data'

export function Masthead() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3
      let current = ''
      NAV_ITEMS.forEach(n => {
        const el = document.getElementById(n.id)
        if (el && el.offsetTop <= y) current = n.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="masthead">
      <div className="masthead_inner wrap">
        <a href="#top" className="masthead_brand">
          <span className="masthead_name">{PERSONAL.name}</span>
          <span className="masthead_role">
            AI Engineer, {PERSONAL.company}
          </span>
        </a>

        <nav className="masthead_nav" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={'#' + item.id}
              className={active === item.id ? 'masthead_link is_active' : 'masthead_link'}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="masthead_toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Contents'}
        </button>
      </div>

      <nav className={open ? 'masthead_drawer is_open' : 'masthead_drawer'} aria-label="Sections">
        <div>
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={'#' + item.id}
              className="masthead_drawer_link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
