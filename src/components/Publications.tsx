import { SectionHead } from './ui/SectionHead'
import { PUBLICATIONS } from '@/lib/data'

export function Publications() {
  return (
    <section className="sec" id="publications">
      <SectionHead numeral="III." title="Publications" />

      <ol className="biblio">
        {PUBLICATIONS.map(p => {
          const body = (
            <>
              <h3 className="biblio_title">{p.title}</h3>
              <p className="biblio_authors">
                {p.authorsBefore}
                <strong>G. M. Prabhu</strong>
                {p.authorsAfter}
              </p>
              <p className="biblio_venue">
                <em>{p.venue}</em>
                {p.ref}
                {p.citations ? <span className="biblio_cites"> · {p.citations}</span> : null}
              </p>
            </>
          )
          return (
            <li className="biblio_item" key={p.id} data-reveal>
              <span className="biblio_num">{p.num}</span>
              {p.link ? (
                <a className="biblio_link" href={p.link} target="_blank" rel="noreferrer">
                  {body}
                  <span className="biblio_arrow" aria-hidden="true">↗</span>
                </a>
              ) : (
                <div className="biblio_link is_static">{body}</div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
