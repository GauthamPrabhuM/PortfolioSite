import { SectionHead } from './ui/SectionHead'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  return (
    <section className="sec" id="projects">
      <SectionHead numeral="II." title="Projects" />

      {PROJECTS.map(p => (
        <article className="entry" key={p.id} data-reveal>
          <div className="entry_aside">
            <span className="entry_when">{p.period}</span>
            <span className="entry_where">{p.where}</span>
          </div>

          <div>
            <h3 className="entry_title entry_title_sm">{p.title}</h3>
            <p className="entry_org">
              <em>{p.org}</em> · {p.role}
            </p>
            <div className="entry_prose">
              <p>{p.summary}</p>
            </div>
            <p className="stackline">{p.stack.join(' · ')}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
