'use client'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { Section } from './ui/Section'
import { PERSONAL } from '@/lib/data'

export function Resume() {
  return (
    <Section id="resume" label="resume">
      <div className="flex items-center justify-between gap-4 -mt-1 mb-3">
        <p className="text-sm" style={{ color: 'var(--text-2)' }}>
          The full thing, right here.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
          >
            <FiExternalLink size={12} /> open
          </a>
          <a
            href={PERSONAL.resume}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
          >
            <FiDownload size={12} /> download
          </a>
        </div>
      </div>
      <div className="terminal" style={{ padding: 0 }}>
        <div className="terminal-bar">
          <span className="terminal-dot" style={{ background: '#f38ba8' }} />
          <span className="terminal-dot" style={{ background: '#f9e2af' }} />
          <span className="terminal-dot" style={{ background: '#a6e3a1' }} />
          <span className="terminal-title">GauthamManuruPrabhu_Resume.pdf</span>
        </div>
        <object
          data={`${PERSONAL.resume}#view=FitH&toolbar=0`}
          type="application/pdf"
          className="w-full"
          style={{ height: '58vh', minHeight: 460, background: 'var(--bg-elevated)' }}
          aria-label="Résumé PDF"
        >
          <div className="p-8 text-center text-sm" style={{ color: 'var(--text-2)' }}>
            Your browser can&apos;t display the embedded PDF.{' '}
            <a href={PERSONAL.resume} target="_blank" rel="noreferrer" className="ulink">Open it in a new tab ↗</a>
          </div>
        </object>
      </div>
    </Section>
  )
}
