'use client'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { ACHIEVEMENTS } from '@/lib/data'

const CATEGORY_ICONS: Record<string, string> = {
  'Awards & Recognition': '🏆',
  'Hackathons & Competitions': '⚡',
  'Leadership': '🚀',
  'Schools & Programmes': '📚',
}

function AchievementGroup({ group }: { group: typeof ACHIEVEMENTS[0] }) {
  const icon = CATEGORY_ICONS[group.category] ?? '✦'

  return (
    <FadeIn>
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid var(--border)' }}
      >
        {/* Category header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)' }}
        >
          <span className="text-lg" role="img" aria-label={group.category}>{icon}</span>
          <h3 className="text-sm font-display font-semibold" style={{ color: 'var(--text-1)' }}>
            {group.category}
          </h3>
        </div>

        {/* Items */}
        <div
          className="flex flex-col divide-y"
          style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
        >
          {group.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-5 py-4 transition-colors duration-150 group/item"
              style={{ borderColor: 'var(--border)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-elevated)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
            >
              {/* Leading dot */}
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: 'var(--accent)', opacity: 0.7 }}
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug" style={{ color: 'var(--text-1)' }}>
                  {item.title}
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {item.detail}
                </p>
              </div>

              {/* Year */}
              <span
                className="text-xs font-mono shrink-0 px-2 py-0.5 rounded"
                style={{ background: 'var(--bg-base)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="06 — Achievements"
          title="Recognition, leadership & honours."
          subtitle="Awards spanning national competitions, research recognition, and professional milestones."
        />

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map(group => (
            <FadeInItem key={group.category}>
              <AchievementGroup group={group} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
