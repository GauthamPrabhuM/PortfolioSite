import { SectionHead } from './ui/SectionHead'
import { WORK_EXPERIENCE } from '@/lib/data'

export function Experience() {
  return (
    <section className="sec" id="experience">
      <SectionHead
        numeral="I."
        title="Professional Experience"
        dek="Cisco Systems, Bengaluru. Intern to Software Engineer 2 in 18 months."
      />

      {WORK_EXPERIENCE.map(exp => (
        <article className="entry" key={exp.id}>
          <div className="entry_aside">
            <span className="entry_when">{exp.from}</span>
            <span className="entry_when is_quiet">{exp.to}</span>
            {exp.isCurrent && <span className="mark">Current</span>}
          </div>

          <div>
            <h3 className="entry_title">{exp.title}</h3>
            <p className="entry_org">
              <em>{exp.company}</em> · {exp.location}
            </p>

            <div className="entry_prose">
              {exp.highlights.map((h, i) => (
                <p key={i}>{h}</p>
              ))}
            </div>

            <p className="stackline">
              <b>Stack —</b> {exp.stack.join(' · ')}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
