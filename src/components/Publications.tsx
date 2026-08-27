import { SectionHead } from './ui/SectionHead'
import { PUBLICATIONS } from '@/lib/data'

export function Publications() {
  return (
    <section className="sec" id="publications">
      <SectionHead
        numeral="III."
        title="Publications"
        dek="Six papers, peer reviewed. Author order as published."
      />

      <ol className="biblio">
        {PUBLICATIONS.map(p => (
          <li className="biblio_item" key={p.id}>
            <div className="biblio_aside">
              <span className="biblio_num">{p.num}</span>
              {p.mark ? <span className="mark">{p.mark}</span> : null}
              {p.quiet ? <span className="quietmark">{p.quiet}</span> : null}
              {p.citations ? <span className="biblio_cites">{p.citations}</span> : null}
            </div>

            <div>
              <h3 className="biblio_title">{p.title}</h3>
              <p className="biblio_authors">
                {p.authorsBefore}
                <strong>G. M. Prabhu</strong>
                {p.authorsAfter}
              </p>
              <p className={p.link ? 'biblio_venue' : 'biblio_venue is_last'}>
                <em>{p.venue}</em>
                {p.ref}
              </p>
              {p.link ? (
                <a className="biblio_doi" href={p.link} target="_blank" rel="noreferrer">
                  doi {p.doi} →
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
