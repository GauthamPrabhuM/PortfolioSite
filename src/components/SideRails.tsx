'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiArrowUpRight } from 'react-icons/fi'
import { PERSONAL } from '@/lib/data'

const GH_USER = 'GauthamPrabhuM'
const CAREER_START = new Date('2024-01-15') // SE Intern @ Cisco

interface GhProfile { public_repos: number; followers: number }
interface GhRepo { name: string; html_url: string; stargazers_count: number; fork: boolean }
interface GhEvent { type: string; created_at: string; repo: { name: string } }

function useClock() {
  const [now, setNow] = useState<Date | null>(null)
  const [session, setSession] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const tick = () => { setNow(new Date()); setSession(Math.floor((Date.now() - start) / 1000)) }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return { now, session }
}

const fmtSession = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

function industry(now: Date) {
  let months = (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth())
  if (now.getDate() < CAREER_START.getDate()) months -= 1
  return `${Math.floor(months / 12)}y ${months % 12}m`
}

function weatherLabel(code: number): { icon: string; text: string } {
  if (code === 0) return { icon: '☀', text: 'clear' }
  if (code <= 3) return { icon: '⛅', text: 'cloudy' }
  if (code <= 48) return { icon: '🌫', text: 'fog' }
  if (code <= 67) return { icon: '🌧', text: 'rain' }
  if (code <= 77) return { icon: '❄', text: 'snow' }
  if (code <= 82) return { icon: '🌦', text: 'showers' }
  return { icon: '⛈', text: 'storm' }
}

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

function Rail({ side, children, delay }: { side: 'left' | 'right'; children: React.ReactNode; delay: number }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: side === 'left' ? -12 : 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`hidden xl:flex fixed top-1/2 -translate-y-1/2 z-30 w-[210px] max-h-[88vh] overflow-y-auto flex-col ${side === 'left' ? 'left-6' : 'right-6'}`}
      style={{
        paddingLeft: side === 'left' ? '0.9rem' : 0,
        paddingRight: side === 'right' ? '0.9rem' : 0,
        borderLeft: side === 'left' ? '1px solid var(--border)' : 'none',
        borderRight: side === 'right' ? '1px solid var(--border)' : 'none',
        textAlign: side === 'right' ? 'right' : 'left',
      }}
    >
      {children}
    </motion.aside>
  )
}

const Divider = () => <div className="my-3" style={{ borderTop: '1px solid var(--border)' }} />

export function SideRails() {
  const { now, session } = useClock()
  const [profile, setProfile] = useState<GhProfile | null>(null)
  const [repos, setRepos] = useState<GhRepo[] | null>(null)
  const [lastPush, setLastPush] = useState<{ repo: string; ago: string } | null>(null)
  const [ghFailed, setGhFailed] = useState(false)
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null)

  useEffect(() => {
    const ac = new AbortController()
    const j = (u: string) => fetch(u, { signal: ac.signal }).then(r => r.ok ? r.json() : Promise.reject())

    Promise.all([
      j(`https://api.github.com/users/${GH_USER}`),
      j(`https://api.github.com/users/${GH_USER}/repos?sort=pushed&per_page=12`),
      j(`https://api.github.com/users/${GH_USER}/events/public?per_page=20`),
    ])
      .then(([p, rs, evs]: [GhProfile, GhRepo[], GhEvent[]]) => {
        setProfile(p)
        setRepos(rs.filter(r => !r.fork).slice(0, 3))
        const push = evs.find(e => e.type === 'PushEvent')
        if (push) setLastPush({ repo: push.repo.name.split('/')[1] ?? push.repo.name, ago: timeAgo(push.created_at) })
      })
      .catch(() => { if (!ac.signal.aborted) setGhFailed(true) })

    j('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true')
      .then((d: any) => setWeather({ temp: Math.round(d.current_weather.temperature), code: d.current_weather.weathercode }))
      .catch(() => {})

    return () => ac.abort()
  }, [])

  const time = now ? now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false }) : '--:--:--'
  const wx = weather ? weatherLabel(weather.code) : null

  return (
    <>
      {/* ── Left: live status + environment ── */}
      <Rail side="left" delay={0.6}>
        <p className="text-[0.65rem] font-mono mb-2" style={{ color: 'var(--text-3)' }}>// status</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--c-green)' }} />
          <span className="text-xs font-mono" style={{ color: 'var(--text-2)' }}>open to work</span>
        </div>
        <p className="text-[0.7rem] font-mono mb-1" style={{ color: 'var(--text-3)' }}>Bengaluru · IST</p>
        <p className="text-xl font-mono tabular-nums leading-none" style={{ color: 'var(--accent)' }}>{time}</p>
        {wx && (
          <p className="text-[0.72rem] font-mono mt-2" style={{ color: 'var(--text-2)' }}>
            {wx.icon} <span className="tabular-nums">{weather!.temp}°C</span> <span style={{ color: 'var(--text-3)' }}>{wx.text}</span>
          </p>
        )}

        <Divider />
        <div className="text-[0.7rem] font-mono space-y-1" style={{ color: 'var(--text-3)' }}>
          <div>in industry <span style={{ color: 'var(--accent-2)' }}>{now ? industry(now) : '—'}</span></div>
          <div>session <span style={{ color: 'var(--accent-2)' }} className="tabular-nums">{fmtSession(session)}</span></div>
          <div>stack <span style={{ color: 'var(--accent-2)' }}>python · ts</span></div>
        </div>
      </Rail>

      {/* ── Right: live GitHub ── */}
      <Rail side="right" delay={0.7}>
        <a href={PERSONAL.github} target="_blank" rel="noreferrer"
          className="text-[0.65rem] font-mono mb-2 inline-flex items-center gap-1 justify-end hover:text-[var(--accent)] transition-colors"
          style={{ color: 'var(--text-3)' }}>
          // github <FiArrowUpRight size={11} />
        </a>
        <p className="text-sm font-mono mb-3" style={{ color: 'var(--text-1)' }}>@{GH_USER}</p>

        {profile && (
          <div className="flex justify-end gap-4 text-[0.7rem] font-mono">
            <div><span style={{ color: 'var(--accent)' }} className="tabular-nums">{profile.public_repos}</span> <span style={{ color: 'var(--text-3)' }}>repos</span></div>
            <div><span style={{ color: 'var(--accent)' }} className="tabular-nums">{profile.followers}</span> <span style={{ color: 'var(--text-3)' }}>followers</span></div>
          </div>
        )}

        {repos && repos.length > 0 && (
          <>
            <Divider />
            <p className="text-[0.65rem] font-mono mb-1.5" style={{ color: 'var(--text-3)' }}>recent</p>
            <div className="space-y-1.5">
              {repos.map(r => (
                <a key={r.name} href={r.html_url} target="_blank" rel="noreferrer" className="flex items-center justify-end gap-2 group">
                  <span className="inline-flex items-center gap-0.5 text-[0.68rem] font-mono tabular-nums" style={{ color: 'var(--text-3)' }}>
                    <FiStar size={9} /> {r.stargazers_count}
                  </span>
                  <span className="text-[0.72rem] font-mono truncate group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-2)' }}>
                    {r.name}
                  </span>
                </a>
              ))}
            </div>
          </>
        )}

        {lastPush && (
          <>
            <Divider />
            <p className="text-[0.7rem] font-mono" style={{ color: 'var(--text-3)' }}>
              last push <span style={{ color: 'var(--accent-2)' }}>{lastPush.ago}</span>
            </p>
            <p className="text-[0.68rem] font-mono truncate" style={{ color: 'var(--text-3)' }}>→ {lastPush.repo}</p>
          </>
        )}

        {ghFailed && (
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="text-[0.7rem] font-mono ulink">view on github ↗</a>
        )}
        {!profile && !ghFailed && (
          <p className="text-[0.7rem] font-mono" style={{ color: 'var(--text-3)' }}>loading…</p>
        )}
      </Rail>
    </>
  )
}
