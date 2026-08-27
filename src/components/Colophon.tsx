'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL, CHANNELS, CONTACT } from '@/lib/data'

export function Colophon() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = () => {
    const done = () => {
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2200)
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL.email).then(done, done)
    } else {
      done()
    }
  }

  return (
    <section className="colophon" id="contact">
      <span className="colophon_numeral" aria-hidden="true">
        VI
      </span>

      <div className="colophon_inner wrap">
        <div className="colophon_kicker">Correspondence</div>

        <div className="colophon_grid">
          <div>
            <h2 className="colophon_title">
              Tell me what
              <br />
              you&rsquo;re building.
            </h2>
            <p className="colophon_lede">{CONTACT.lede}</p>
            <div className="colophon_actions">
              <a className="colophon_btn is_primary" href={'mailto:' + PERSONAL.email}>
                Write to me →
              </a>
              <button className="colophon_btn" onClick={copy}>
                {copied ? 'Address copied' : 'Copy address'}
              </button>
            </div>
          </div>

          <div className="colophon_channels">
            {CHANNELS.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                download={c.download || undefined}
                className="colophon_channel"
              >
                <span className="colophon_channel_label">{c.label}</span>
                <span className="colophon_channel_value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="colophon_foot">
          <span>
            {PERSONAL.name} · {PERSONAL.location}
          </span>
          <span className="tnum">Set in Cormorant Garamond &amp; Lora · MMXXVI</span>
        </div>
      </div>
    </section>
  )
}
