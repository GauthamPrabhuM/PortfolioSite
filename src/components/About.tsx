import { PERSONAL, STATS, HERO } from '@/lib/data'

export function About() {
  return (
    <section className="about" id="about">
      <div className="about_grid">
        <figure className="about_plate" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PERSONAL.photo} alt={PERSONAL.name} />
        </figure>

        <div className="about_text" data-reveal>
          {HERO.columns.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </div>

      <div className="figures" data-reveal>
        {STATS.map(s => (
          <div className="figures_item" key={s.label}>
            <div className="figures_value">{s.value}</div>
            <div className="figures_label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
