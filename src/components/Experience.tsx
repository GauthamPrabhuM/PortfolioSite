import { SectionHead } from './ui/SectionHead'
import { More } from './ui/More'
import { WORK_EXPERIENCE } from '@/lib/data'

export function Experience() {
  return (
    <section className="sec" id="experience">
      <SectionHead numeral="I." title="Experience" />

      {WORK_EXPERIENCE.map(exp => {
        const [lead, ...rest] = exp.highlights
        return (
          <article className="entry" key={exp.id} data-reveal>
            <div className="entry_aside">
              <span className="entry_when">
                {exp.from} {exp.to}
              </span>
              {exp.isCurrent && <span className="mark">Current</span>}
            </div>

            <div>
              <h3 className="entry_title">{exp.title}</h3>
              <p className="entry_org">
                <em>{exp.company}</em> · {exp.location}
              </p>
              <div className="entry_prose">
                <p>{lead}</p>
              </div>
              <More>
                <div className="entry_prose">
                  {rest.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
                <p className="stackline">{exp.stack.join(' · ')}</p>
              </More>
            </div>
          </article>
        )
      })}
    </section>
  )
}
