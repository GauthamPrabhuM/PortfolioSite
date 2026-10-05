import { SectionHead } from './ui/SectionHead'
import { SKILLS } from '@/lib/data'

export function Stack() {
  return (
    <section className="sec" id="stack">
      <SectionHead numeral="V." title="Stack" />

      <div className="stack_grid">
        {SKILLS.map(g => (
          <div className="stack_cell" key={g.id} data-reveal>
            <span className="stack_label">{g.category}</span>
            <p className="stack_line">{g.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
