'use client'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

export type Accent = 'mauve' | 'blue' | 'sky' | 'teal' | 'green' | 'peach' | 'pink' | 'red'

export const ACCENTS: { id: Accent; mocha: string; latte: string }[] = [
  { id: 'mauve', mocha: '#cba6f7', latte: '#8839ef' },
  { id: 'blue', mocha: '#89b4fa', latte: '#1e66f5' },
  { id: 'sky', mocha: '#89dceb', latte: '#04a5e5' },
  { id: 'teal', mocha: '#94e2d5', latte: '#179299' },
  { id: 'green', mocha: '#a6e3a1', latte: '#40a02b' },
  { id: 'peach', mocha: '#fab387', latte: '#fe640b' },
  { id: 'pink', mocha: '#f5c2e7', latte: '#ea76cb' },
  { id: 'red', mocha: '#f38ba8', latte: '#d20f39' },
]

const DEFAULT_ACCENT: Accent = 'mauve'

const ThemeCtx = createContext<{
  theme: Theme
  accent: Accent
  toggle: () => void
  setAccent: (a: Accent) => void
}>({
  theme: 'dark',
  accent: DEFAULT_ACCENT,
  toggle: () => {},
  setAccent: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [accent, setAccentState] = useState<Accent>(DEFAULT_ACCENT)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const initialTheme = storedTheme ?? preferred
    setTheme(initialTheme)
    document.documentElement.classList.toggle('light', initialTheme === 'light')

    const storedAccent = localStorage.getItem('accent') as Accent | null
    const initialAccent = storedAccent ?? DEFAULT_ACCENT
    setAccentState(initialAccent)
    document.documentElement.setAttribute('data-accent', initialAccent)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  const setAccent = (a: Accent) => {
    setAccentState(a)
    localStorage.setItem('accent', a)
    document.documentElement.setAttribute('data-accent', a)
  }

  return (
    <ThemeCtx.Provider value={{ theme, accent, toggle, setAccent }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => useContext(ThemeCtx)
