'use client'
import { FiBriefcase, FiBookOpen, FiAward, FiMapPin } from 'react-icons/fi'
import { FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { Spotlight } from './ui/Spotlight'
import { EDUCATION } from '@/lib/data'

const FOCUS = [
  'Agentic AI',
  'LLMs & RAG',
  'Temporal GNNs',
  'Quantum ML',
  'Microservices',
  'MLOps',
]

const TILES = [
  {
    icon: <FiBriefcase size={16} />,
    label: 'Currently',
    value: 'SE2, AI Acceleration — Cisco Systems',
    detail: 'Agentic AI for global supply chain ops',
  },
  {
    icon: <FiBookOpen size={16} />,
    label: 'Research',
    value: 'MiCoSys Lab, SJSU',
    detail: 'Efficient temporal graph neural networks',
  },
  {
    icon: <FiAward size={16} />,
    label: 'Recognition',
    value: '2× promoted in 18 months',
    detail: 'Intern → SE1 → SE2 on the same team',
  },
  {
    icon: <FiMapPin size={16} />,
    label: 'Based in',
    value: 'Bengaluru, India',
    detail: 'Open to global collaboration',
  },
]

export function About() {
  const edu = EDUCATION[0]

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="01 — About"
          title="Engineer. Researcher. Builder."
          subtitle="I ship AI systems that move operational metrics — and publish the science behind them."
        />

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Bio — spans 2 */}
          <FadeInItem className="lg:col-span-2">
            <Spotlight className="card-base p-7 sm:p-8 h-full">
              <p className="text-base sm:text-[1.05rem] leading-relaxed" style={{ color: 'var(--text-2)' }}>
                I went from intern to <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>SE2 in
                18 months</strong> on Cisco&apos;s AI Acceleration team, shipping agentic systems that
                save <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>~5,000 engineer-hours a
                quarter</strong>. In parallel, I research efficient temporal graph learning at{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>MiCoSys Lab, SJSU</strong> —
                with six peer-reviewed publications across IEEE, Springer, and IOP.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {FOCUS.map(f => (
                  <span key={f} className="tag-base">{f}</span>
                ))}
              </div>
            </Spotlight>
          </FadeInItem>

          {/* Education */}
          <FadeInItem>
            <Spotlight className="card-base p-7 h-full flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-3)' }}>EDUCATION</p>
                <h3 className="text-base font-display font-semibold leading-snug">{edu.degree}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-2)' }}>{edu.school}</p>
                <p className="text-xs mt-1 font-mono" style={{ color: 'var(--text-3)' }}>{edu.period} · {edu.note}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-display font-semibold text-gradient">{edu.grade}</span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>{edu.gradeLabel}</span>
              </div>
            </Spotlight>
          </FadeInItem>

          {/* Fact tiles */}
          {TILES.map(tile => (
            <FadeInItem key={tile.label}>
              <Spotlight className="card-base p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-tile w-9 h-9">{tile.icon}</span>
                  <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>{tile.label.toUpperCase()}</p>
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>{tile.value}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>{tile.detail}</p>
              </Spotlight>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
