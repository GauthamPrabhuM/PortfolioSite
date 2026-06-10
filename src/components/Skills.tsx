'use client'
import type { IconType } from 'react-icons'
import { FiCpu, FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi'
import { FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { SKILLS } from '@/lib/data'

const ICONS: Record<string, IconType> = {
  Brain: FiCpu,
  Code: FiCode,
  Server: FiServer,
  Database: FiDatabase,
  Cloud: FiCloud,
}

function SkillCategory({ cat }: { cat: typeof SKILLS[0] }) {
  const Icon = ICONS[cat.icon] ?? FiCode
  return (
    <div className="flex flex-col gap-4 p-5 rounded-xl card-base h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
          style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
        >
          <Icon size={16} />
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
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium cursor-default"
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

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="04 — Skills"
          title="Tools of the trade."
          subtitle="The stack behind production agents and published research."
        />

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map(cat => (
            <FadeInItem key={cat.id}>
              <SkillCategory cat={cat} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
