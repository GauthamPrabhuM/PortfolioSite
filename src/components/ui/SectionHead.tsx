import type { ReactNode } from 'react'

export function SectionHead({
  numeral,
  title,
  dek,
}: {
  numeral: string
  title: string
  dek: ReactNode
}) {
  return (
    <div className="sec_head">
      <span className="sec_num">{numeral}</span>
      <div className="sec_head_main">
        <h2 className="sec_title">{title}</h2>
        <p className="sec_dek">{dek}</p>
      </div>
    </div>
  )
}
