import { PERSONAL, STATS, HERO } from '@/lib/data'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero_grid">
        <div>
          <div className="kicker">Curriculum Vitæ · {PERSONAL.location}</div>

          <h1 className="hero_name">
            Gautham
            <br />
            Manuru Prabhu
          </h1>

          <p className="hero_standfirst">{HERO.standfirst}</p>

          <hr className="hero_rule" />

          <div className="hero_columns">
            {HERO.columns.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>

          <div className="hero_actions">
            <a href="#experience" className="btn_ed is_primary">
              See the work
            </a>
            <a href={PERSONAL.resume} download className="btn_ed">
              Résumé (PDF)
            </a>
          </div>
        </div>

        <figure className="hero_plate">
          <div className="plate_frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PERSONAL.photo} alt={PERSONAL.name} />
          </div>
          <figcaption className="plate_caption">
            <span>Manipal Institute of Technology</span>
            <span className="tnum">2024</span>
          </figcaption>
        </figure>
      </div>

      <div className="figures">
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
