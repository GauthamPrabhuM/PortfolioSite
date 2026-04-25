'use client'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { SKILLS } from '@/lib/data'

const ICONS: Record<string, string> = {
  Brain: '🧠',
  Code: '⌨️',
  Server: '⚙️',
  Database: '🗄️',
  Cloud: '☁️',
}

function SkillCategory({ cat }: { cat: typeof SKILLS[0] }) {
  return (
    <div
      className="group flex flex-col gap-4 p-5 rounded-xl transition-all duration-200 hover:-translate-y-1"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        const t = e.currentTarget
        t.style.borderColor = 'var(--accent-border)'
        t.style.boxShadow = '0 0 0 1px var(--accent-border), 0 8px 32px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={e => {
        const t = e.currentTarget
        t.style.borderColor = 'var(--border)'
        t.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-lg text-lg shrink-0"
          style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}
        >
          {ICONS[cat.icon]}
        </div>
        <h3 className="text-sm font-display font-semibold" style={{ color: 'var(--text-1)' }}>
          {cat.category}
        </h3>
      </div>

      {/* Divider */}
      <div className="h-px" style={{ background: 'var(--border)' }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {cat.items.map(item => (
          <span
            key={item}
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all duration-150 cursor-default hover:scale-[1.03]"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const PROFICIENCY = [
  { label: 'Python', level: 98 },
  { label: 'FastAPI', level: 92 },
  { label: 'PyTorch', level: 88 },
  { label: 'Docker / K8s', level: 85 },
  { label: 'LangChain / LangGraph', level: 90 },
  { label: 'PostgreSQL', level: 86 },
]

function ProficiencyBar({ label, level }: { label: string; level: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-mono w-40 shrink-0 text-right" style={{ color: 'var(--text-2)' }}>
        {label}
      </span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, var(--accent) 0%, #818CF8 100%)',
          }}
        />
      </div>
      <span className="text-xs font-mono w-8 shrink-0" style={{ color: 'var(--text-3)' }}>
        {level}%
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="04 — Skills"
          title="Tools of the trade."
          subtitle="Languages, frameworks, and infrastructure I work with day-to-day — from agentic AI stacks to production microservices."
        />

        {/* Category grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {SKILLS.map(cat => (
            <FadeInItem key={cat.id}>
              <SkillCategory cat={cat} />
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Proficiency bars */}
        <FadeIn>
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          >
            <h3 className="text-sm font-mono font-medium mb-6" style={{ color: 'var(--text-3)' }}>
              CORE PROFICIENCY
            </h3>
            <div className="flex flex-col gap-4">
              {PROFICIENCY.map(p => (
                <ProficiencyBar key={p.label} {...p} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
