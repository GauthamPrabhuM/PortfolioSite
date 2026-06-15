'use client'
import { useState, useRef, useEffect, type ReactNode } from 'react'
import { useTheme, ACCENTS, type Accent } from './ThemeProvider'
import { PERSONAL, WORK_EXPERIENCE, RESEARCH_EXPERIENCE, PROJECTS, SKILLS, PUBLICATIONS } from '@/lib/data'

interface Line {
  cmd?: string
  out: ReactNode
}

const COMMANDS = [
  'help', 'whoami', 'about', 'experience', 'projects', 'skills',
  'papers', 'education', 'contact', 'resume', 'neofetch', 'theme',
  'social', 'goto', 'clear', 'sudo',
]

const P = (label: string) => (
  <span style={{ color: 'var(--accent)' }} className="font-medium">{label}</span>
)

export function InteractiveTerminal() {
  const { theme, accent, toggle, setAccent } = useTheme()
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [hist, setHist] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Banner on mount
  useEffect(() => {
    setLines([{ out: banner() }])
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [lines])

  function banner(): ReactNode {
    return (
      <div style={{ color: 'var(--text-2)' }}>
        <span style={{ color: 'var(--accent)' }}>gautham@portfolio</span>
        <span style={{ color: 'var(--text-3)' }}> · interactive shell</span>
        <div className="mt-1">
          Type {P('help')} to see what I can do, or just poke around.
        </div>
      </div>
    )
  }

  function goto(section: string) {
    const el = document.getElementById(section)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); return `↓ scrolling to ~/${section}` }
    return `no such section: ${section}`
  }

  function run(raw: string): ReactNode | 'CLEAR' | null {
    const [cmd, ...args] = raw.trim().split(/\s+/)
    const arg = args.join(' ')
    switch (cmd.toLowerCase()) {
      case '':
        return null
      case 'help':
        return (
          <div style={{ color: 'var(--text-2)' }}>
            available commands:
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0.5 mt-1.5">
              {[
                ['whoami', 'one-liner'],
                ['about', 'who I am'],
                ['experience', 'work + research'],
                ['projects', 'selected work'],
                ['skills', 'the stack'],
                ['papers', 'publications'],
                ['education', 'degrees'],
                ['contact', 'reach me'],
                ['resume', 'view résumé'],
                ['social', 'links'],
                ['neofetch', 'system info'],
                ['theme <x>', 'recolor'],
                ['goto <sec>', 'jump to section'],
                ['clear', 'wipe screen'],
              ].map(([c, d]) => (
                <div key={c}>{P(c)} <span style={{ color: 'var(--text-3)' }}>— {d}</span></div>
              ))}
            </div>
          </div>
        )
      case 'whoami':
        return (
          <span style={{ color: 'var(--text-2)' }}>
            {PERSONAL.name} — Software Engineer 2 @ Cisco (AI Acceleration) · ML researcher @ MiCoSys Lab, SJSU.
          </span>
        )
      case 'about':
        return (
          <span style={{ color: 'var(--text-2)' }}>
            Intern → SE2 in 18 months on Cisco&apos;s AI Acceleration team, shipping agentic systems that
            save ~5,000 engineer-hours a quarter. In parallel I research efficient temporal graph neural
            networks at SJSU — 6 peer-reviewed papers across IEEE, Springer &amp; IOP.
          </span>
        )
      case 'experience':
        return (
          <div style={{ color: 'var(--text-2)' }} className="space-y-1">
            {[...WORK_EXPERIENCE, ...RESEARCH_EXPERIENCE].map((e: any) => (
              <div key={e.id + (e.company || e.institution)}>
                <span style={{ color: 'var(--text-1)' }}>{e.title}</span>{' '}
                <span style={{ color: 'var(--text-3)' }}>— {e.company || e.institution} · {e.period}</span>
              </div>
            ))}
            <div style={{ color: 'var(--text-3)' }} className="pt-1">run {P('goto experience')} for detail.</div>
          </div>
        )
      case 'projects':
        return (
          <div style={{ color: 'var(--text-2)' }} className="space-y-1">
            {PROJECTS.map(p => (
              <div key={p.id}>
                <span style={{ color: 'var(--text-1)' }}>{p.title}</span>
                <span style={{ color: 'var(--text-3)' }}> — {p.tagline}</span>
                {p.github && <> · <a href={p.github} target="_blank" rel="noreferrer" className="ulink">src</a></>}
                {p.live && <> · <a href={p.live} target="_blank" rel="noreferrer" className="ulink">live</a></>}
                {p.paper && <> · <a href={p.paper} target="_blank" rel="noreferrer" className="ulink">paper</a></>}
              </div>
            ))}
          </div>
        )
      case 'skills':
        return (
          <div style={{ color: 'var(--text-2)' }} className="space-y-0.5">
            {SKILLS.map(s => (
              <div key={s.id}>
                <span style={{ color: 'var(--accent)' }}>{s.category.padEnd(16)}</span>{' '}
                <span style={{ color: 'var(--text-3)' }}>{s.items.slice(0, 8).join(' · ')}</span>
              </div>
            ))}
          </div>
        )
      case 'papers':
      case 'publications':
        return (
          <div style={{ color: 'var(--text-2)' }} className="space-y-1">
            {PUBLICATIONS.map(pub => (
              <div key={pub.id}>
                <span style={{ color: 'var(--text-3)' }}>[{pub.venue}]</span>{' '}
                {pub.link
                  ? <a href={pub.link} target="_blank" rel="noreferrer" className="ulink">{pub.title}</a>
                  : <span style={{ color: 'var(--text-1)' }}>{pub.title}</span>}
              </div>
            ))}
          </div>
        )
      case 'education':
        return (
          <span style={{ color: 'var(--text-2)' }}>
            B.Tech CSE, Manipal Institute of Technology (2020–2024) — 8.91/10 CGPA, top 15%, minor in Big Data Analytics.
          </span>
        )
      case 'contact':
        return (
          <div style={{ color: 'var(--text-2)' }} className="space-y-0.5">
            <div>email    <a href={`mailto:${PERSONAL.email}`} className="ulink">{PERSONAL.email}</a></div>
            <div>github   <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="ulink">@GauthamPrabhuM</a></div>
            <div>linkedin <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="ulink">/in/gautham-prabhu</a></div>
            <div>scholar  <a href={PERSONAL.scholar} target="_blank" rel="noreferrer" className="ulink">Google Scholar</a></div>
          </div>
        )
      case 'social':
        return run('contact')
      case 'resume':
        return (
          <span style={{ color: 'var(--text-2)' }}>
            {goto('resume')} · or <a href={PERSONAL.resume} target="_blank" rel="noreferrer" className="ulink">open the PDF ↗</a>
          </span>
        )
      case 'goto':
        return <span style={{ color: 'var(--text-2)' }}>{goto(arg.toLowerCase())}</span>
      case 'theme': {
        const a = arg.toLowerCase() as string
        if (!a || a === 'list')
          return <span style={{ color: 'var(--text-2)' }}>accents: {ACCENTS.map(x => x.id).join(' · ')} · or {P('dark')}/{P('light')}</span>
        if (a === 'dark' || a === 'light') {
          if ((a === 'light') !== (theme === 'light')) toggle()
          return <span style={{ color: 'var(--text-2)' }}>theme → {a}</span>
        }
        if (ACCENTS.some(x => x.id === a)) {
          setAccent(a as Accent)
          return <span style={{ color: 'var(--text-2)' }}>accent → {a}</span>
        }
        return <span style={{ color: 'var(--c-gold)' }}>unknown accent &apos;{a}&apos;. try: {ACCENTS.map(x => x.id).join(', ')}</span>
      }
      case 'neofetch':
        return (
          <div style={{ color: 'var(--text-2)' }} className="flex gap-4">
            <pre style={{ color: 'var(--accent)' }} className="leading-tight hidden sm:block">{`   ╭───────╮
   │  G M P │
   ╰───────╯`}</pre>
            <div className="space-y-0.5">
              <div><span style={{ color: 'var(--accent)' }}>host</span>     gautham@portfolio</div>
              <div><span style={{ color: 'var(--accent)' }}>role</span>     SE2 · AI Acceleration · Cisco</div>
              <div><span style={{ color: 'var(--accent)' }}>research</span> Temporal GNNs · MiCoSys Lab, SJSU</div>
              <div><span style={{ color: 'var(--accent)' }}>papers</span>   6 peer-reviewed</div>
              <div><span style={{ color: 'var(--accent)' }}>uptime</span>   intern → SE2 in 18 months</div>
              <div><span style={{ color: 'var(--accent)' }}>theme</span>    catppuccin {theme === 'light' ? 'latte' : 'mocha'} · {accent}</div>
            </div>
          </div>
        )
      case 'clear':
        return 'CLEAR'
      case 'sudo':
        return <span style={{ color: 'var(--c-gold)' }}>nice try 😄 — this incident will be reported.</span>
      case 'ls':
        return <span style={{ color: 'var(--text-2)' }}>about  experience  projects  skills  publications  achievements  resume  contact</span>
      default:
        return <span style={{ color: 'var(--c-gold)' }}>command not found: {cmd} — type {P('help')}</span>
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const raw = input
    const result = run(raw)
    if (result === 'CLEAR') {
      setLines([])
    } else if (result !== null) {
      setLines(prev => [...prev, { cmd: raw, out: result }])
    } else {
      setLines(prev => [...prev, { cmd: raw, out: null }])
    }
    if (raw.trim()) setHist(prev => [raw, ...prev])
    setHistIdx(-1)
    setInput('')
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, hist.length - 1)
      if (hist[next] !== undefined) { setHistIdx(next); setInput(hist[next]) }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInput('') }
      else { setHistIdx(next); setInput(hist[next]) }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = COMMANDS.find(c => c.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    }
  }

  return (
    <div className="terminal text-[0.82rem] leading-relaxed" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: '#f38ba8' }} />
        <span className="terminal-dot" style={{ background: '#f9e2af' }} />
        <span className="terminal-dot" style={{ background: '#a6e3a1' }} />
        <span className="terminal-title">gautham@portfolio:~ — try &apos;help&apos;</span>
      </div>
      <div ref={bodyRef} className="px-4 py-3.5 h-[210px] overflow-y-auto">
        {lines.map((l, i) => (
          <div key={i} className="mb-1.5">
            {l.cmd !== undefined && (
              <div>
                <span className="term-prompt">➜</span>{' '}
                <span style={{ color: 'var(--accent-2)' }}>~</span>{' '}
                <span style={{ color: 'var(--text-1)' }}>{l.cmd}</span>
              </div>
            )}
            {l.out && <div className="mt-0.5">{l.out}</div>}
          </div>
        ))}
        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="term-prompt">➜</span>
          <span style={{ color: 'var(--accent-2)' }}>~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
            className="flex-1 bg-transparent outline-none font-mono"
            style={{ color: 'var(--text-1)' }}
          />
        </form>
      </div>
    </div>
  )
}
