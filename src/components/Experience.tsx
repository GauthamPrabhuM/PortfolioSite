'use client'
import { useState } from 'react'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { WORK_EXPERIENCE, RESEARCH_EXPERIENCE, EDUCATION } from '@/lib/data'

type Tab = 'industry' | 'research' | 'education'

function StackTag({ label }: { label: string }) {
  return <span className="chip-neutral">{label}</span>
}

function TimelineDot({ active }: { active: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-3 h-3 rounded-full border-2 mt-1 shrink-0 transition-colors duration-200 z-10"
        style={{
          background: active ? 'var(--accent)' : 'var(--bg-elevated)',
          borderColor: active ? 'var(--accent)' : 'var(--border-strong)',
          boxShadow: active ? '0 0 10px var(--accent-glow)' : 'none',
        }}
      />
    </div>
  )
}

function WorkCard({ exp, isLast }: { exp: typeof WORK_EXPERIENCE[0]; isLast: boolean }) {
  return (
    <FadeIn>
      <div className="flex gap-5">
        {/* Timeline */}
        <div className="flex flex-col items-center shrink-0 pt-0.5">
          <TimelineDot active={exp.isCurrent} />
          {!isLast && <div className="w-px flex-1 mt-2" style={{ background: 'var(--border)' }} />}
        </div>

        {/* Card */}
        <div
          className={`flex-1 mb-8 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 ${
            exp.isCurrent ? 'ring-gradient' : 'card-base'
          }`}
          style={exp.isCurrent ? { boxShadow: 'var(--shadow-card-hover)' } : undefined}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-base font-display font-semibold" style={{ color: 'var(--text-1)' }}>
                  {exp.title}
                </h3>
                {exp.isCurrent && (
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-medium"
                    style={{
                      background: 'color-mix(in srgb, var(--c-green) 10%, transparent)',
                      border: '1px solid color-mix(in srgb, var(--c-green) 30%, transparent)',
                      color: 'var(--c-green)',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{exp.company}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
              <span
                className="text-xs font-mono px-2 py-1 rounded-md"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-3)' }}
              >
                {exp.period}
              </span>
              <span className="text-xs" style={{ color: 'var(--text-3)' }}>{exp.location}</span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="flex flex-col gap-2 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map(s => <StackTag key={s} label={s} />)}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function ResearchCard({ exp, isLast }: { exp: typeof RESEARCH_EXPERIENCE[0]; isLast: boolean }) {
  return (
    <FadeIn>
      <div className="flex gap-5">
        <div className="flex flex-col items-center shrink-0 pt-0.5">
          <TimelineDot active={exp.isCurrent} />
          {!isLast && <div className="w-px flex-1 mt-2" style={{ background: 'var(--border)' }} />}
        </div>

        <div className="flex-1 mb-8 rounded-2xl p-5 sm:p-6 card-base hover:-translate-y-0.5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-display font-semibold mb-1" style={{ color: 'var(--text-1)' }}>
                {exp.title}
              </h3>
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{exp.institution}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
              <span
                className="text-xs font-mono px-2 py-1 rounded-md"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-3)' }}
              >
                {exp.period}
              </span>
              <span className="text-xs" style={{ color: 'var(--text-3)' }}>{exp.location}</span>
            </div>
          </div>

          {exp.advisor && (
            <p className="text-xs font-mono mb-3" style={{ color: 'var(--text-3)' }}>
              Advisor: {exp.advisor}
            </p>
          )}

          <ul className="flex flex-col gap-2 mb-3">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)', opacity: 0.7 }} />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map(s => <StackTag key={s} label={s} />)}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function EducationCard({ edu }: { edu: typeof EDUCATION[0] }) {
  return (
    <FadeIn>
      <div
        className="rounded-xl p-5 sm:p-6 mb-4 card-base"
        style={{ background: 'var(--bg-surface)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-base font-display font-semibold mb-1" style={{ color: 'var(--text-1)' }}>
              {edu.degree}
            </h3>
            <p className="text-sm font-medium mb-0.5" style={{ color: 'var(--accent)' }}>{edu.school}</p>
            <p className="text-xs mb-2" style={{ color: 'var(--text-3)' }}>{edu.location} · {edu.period}</p>
            <p className="text-sm" style={{ color: 'var(--text-2)' }}>{edu.note}</p>
          </div>
          <div
            className="flex flex-col items-center justify-center px-4 py-3 rounded-xl shrink-0 text-center"
            style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}
          >
            <span className="text-xl font-display font-bold" style={{ color: 'var(--accent)' }}>{edu.grade}</span>
            <span className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-3)' }}>{edu.gradeLabel}</span>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

const TAB_LABELS: Record<Tab, string> = {
  industry: 'Industry',
  research: 'Research',
  education: 'Education',
}

export function Experience() {
  const [tab, setTab] = useState<Tab>('industry')

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="02 — Experience"
          title="Track record."
          subtitle="Intern to SE2 at Cisco in 18 months · research across four institutions."
        />

        {/* Tab switcher */}
        <FadeIn className="mb-10">
          <div
            className="inline-flex p-1 rounded-xl gap-1"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            role="tablist"
          >
            {(Object.keys(TAB_LABELS) as Tab[]).map(t => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: tab === t ? 'var(--accent-dim)' : 'transparent',
                  border: tab === t ? '1px solid var(--accent-border)' : '1px solid transparent',
                  color: tab === t ? 'var(--accent)' : 'var(--text-2)',
                }}
              >
                {TAB_LABELS[t]}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tab content */}
        {tab === 'industry' && (
          <div>
            {WORK_EXPERIENCE.map((exp, i) => (
              <WorkCard key={exp.id} exp={exp} isLast={i === WORK_EXPERIENCE.length - 1} />
            ))}
          </div>
        )}

        {tab === 'research' && (
          <div>
            {RESEARCH_EXPERIENCE.map((exp, i) => (
              <ResearchCard key={exp.id} exp={exp} isLast={i === RESEARCH_EXPERIENCE.length - 1} />
            ))}
          </div>
        )}

        {tab === 'education' && (
          <div className="flex flex-col">
            {EDUCATION.map(edu => (
              <EducationCard key={edu.school} edu={edu} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
