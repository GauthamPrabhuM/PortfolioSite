'use client'
import Image from 'next/image'
import { FiMapPin, FiBriefcase, FiBookOpen, FiAward, FiDownload } from 'react-icons/fi'
import { FadeIn, FadeInStagger, FadeInItem } from './ui/FadeIn'
import { SectionHeader } from './ui/SectionHeader'
import { PERSONAL } from '@/lib/data'

const FOCUS = [
  'Agentic AI Systems',
  'LLMs & RAG',
  'Temporal Graph Neural Networks',
  'Quantum ML',
  'Backend & Microservices',
  'MLOps / Observability',
]

const QUICK_FACTS = [
  { icon: <FiBriefcase size={15} />, label: 'Currently', value: 'Software Engineer 2, Cisco Systems' },
  { icon: <FiBookOpen size={15} />, label: 'Research', value: 'MiCoSys Lab, SJSU — TGNNs & GraphML' },
  { icon: <FiMapPin size={15} />, label: 'Based in', value: 'Bengaluru, India' },
  { icon: <FiAward size={15} />, label: 'Recognition', value: '2× Promoted · SE2 in 18 months' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          number="01 — About"
          title="Engineer. Researcher. Builder."
          subtitle="I design and ship AI systems that move real operational metrics — and publish the science behind them."
        />

        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">
          {/* Photo + quick facts */}
          <FadeIn className="flex flex-col gap-6">
            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-56 h-56 sm:w-64 sm:h-64">
              <div
                className="absolute -inset-3 rounded-2xl opacity-40 blur-xl"
                style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border-strong)' }}
              >
                <Image
                  src={PERSONAL.photo}
                  alt="Gautham Manuru Prabhu"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-2">
              {QUICK_FACTS.map(f => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors duration-150"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                >
                  <span
                    className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-md shrink-0"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {f.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-3)' }}>{f.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Body text */}
          <FadeIn delay={0.15} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 text-base leading-loose" style={{ color: 'var(--text-2)' }}>
              <p>
                I'm <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Gautham Manuru Prabhu</strong>,
                a software engineer on Cisco's AI Acceleration team inside Supply Chain Operations. Over 18 months
                I was double-promoted from intern to{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>SE2</strong> while building agentic AI
                systems that autonomously handle{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>20% of incoming cases</strong>, cut
                case volume by 35%, and save roughly{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>5,000 engineer-hours</strong> every
                quarter.
              </p>
              <p>
                In parallel, I'm a{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Research Associate at MiCoSys Lab,
                San Jose State University</strong>, working on efficient training of Temporal Graph Neural Networks
                over dynamic graphs with millions of edges. Prior research spans quantum ML for cardiovascular
                disease, retinal-image segmentation, and transformer-based NLP — six peer-reviewed publications
                across IEEE Access, Springer, Procedia CS, and IOP.
              </p>
              <p>
                I graduated from{' '}
                <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Manipal Institute of Technology</strong>{' '}
                (B.Tech CSE, 8.91/10, Top 15%) with a minor in Big Data Analytics. I gravitate toward problems
                that sit between systems engineering, machine learning, and measurable business impact.
              </p>
            </div>

            {/* Focus area tags */}
            <div>
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--text-3)' }}>FOCUS AREAS</p>
              <FadeInStagger className="flex flex-wrap gap-2">
                {FOCUS.map(f => (
                  <FadeInItem key={f}>
                    <span className="tag-base">{f}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>

            {/* Resume CTA */}
            <div className="pt-2">
              <a
                href={PERSONAL.resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-1)',
                }}
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
