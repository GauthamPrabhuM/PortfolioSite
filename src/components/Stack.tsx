import { SectionHead } from './ui/SectionHead'
import { SKILLS } from '@/lib/data'

export function Stack() {
  return (
    <section className="sec" id="stack">
      <SectionHead
        numeral="V."
        title="Tools of the Trade"
        dek="What I reach for daily, not everything I have once installed."
      />

      {SKILLS.map(g => (
        <div className="stack_row" key={g.id}>
          <span className="stack_label">{g.category}</span>
          <div>
            <div className="stack_logos">
              {g.logos.map(l => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={l.name} src={l.src} alt={l.name} title={l.name} loading="lazy" />
              ))}
            </div>
            <p className="stack_line">{g.items.join(' · ')}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
