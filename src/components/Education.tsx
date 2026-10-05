import { SectionHead } from './ui/SectionHead'
import { More } from './ui/More'
import { EDUCATION } from '@/lib/data'

export function Education() {
  return (
    <section className="sec" id="education">
      <SectionHead numeral="IV." title="Education" />

      {EDUCATION.map(e => (
        <article className="entry edu_entry" key={e.degree} data-reveal>
          <div className="entry_aside">
            <span className="entry_when">{e.period}</span>
            <span className="entry_where">{e.location}</span>
          </div>

          <div>
            <h3 className="entry_title entry_title_sm">{e.degree}</h3>
            <p className="entry_org">
              <em>{e.school}</em> · {e.note}
            </p>
            <More>
              <div className="entry_prose">
                <p>{e.summary}</p>
              </div>
            </More>
          </div>

          <div className="edu_figure">
            <div className="edu_figure_value">{e.grade}</div>
            <div className="edu_figure_label">{e.gradeLabel}</div>
          </div>
        </article>
      ))}
    </section>
  )
}
