import { SectionHead } from './ui/SectionHead'
import { More } from './ui/More'
import { RESEARCH_EXPERIENCE } from '@/lib/data'

export function Research() {
  return (
    <section className="sec" id="research">
      <SectionHead numeral="II." title="Research" />

      {RESEARCH_EXPERIENCE.map((a, i) => (
        <article className="entry" key={a.id} data-reveal>
          <div className="entry_aside">
            <span className="entry_when">{a.period}</span>
            <span className="entry_where">{a.location}</span>
          </div>

          <div>
            <h3 className="entry_title entry_title_sm">{a.title}</h3>
            <p className="entry_org">
              <em>{a.institution}</em> · {a.advisor.replace(/^\w+:\s*/, '')}
            </p>
            {i === 0 ? (
              <div className="entry_prose">
                <p>{a.summary}</p>
              </div>
            ) : (
              <More>
                <div className="entry_prose">
                  <p>{a.summary}</p>
                </div>
              </More>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
