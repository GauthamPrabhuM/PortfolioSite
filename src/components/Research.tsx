import { SectionHead } from './ui/SectionHead'
import { RESEARCH_EXPERIENCE } from '@/lib/data'

export function Research() {
  return (
    <section className="sec" id="research">
      <SectionHead
        numeral="II."
        title="Research Appointments"
        dek="Five appointments, four labs. Graph learning, quantum machine learning, medical imaging, NLP."
      />

      {RESEARCH_EXPERIENCE.map(a => (
        <article className="entry" key={a.id}>
          <div className="entry_aside">
            <span className="entry_when">{a.period}</span>
            <span className="entry_where">{a.location}</span>
          </div>

          <div>
            <h3 className="entry_title entry_title_sm">{a.title}</h3>
            <p className="entry_org entry_org_tight">
              <em>{a.institution}</em>
            </p>
            <p className="entry_advisor">{a.advisor}</p>
            <div className="entry_prose">
              <p>{a.summary}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
