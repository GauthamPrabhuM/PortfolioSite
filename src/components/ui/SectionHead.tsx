export function SectionHead({ numeral, title }: { numeral: string; title: string }) {
  return (
    <div className="sec_head" data-reveal>
      <span className="sec_num">{numeral}</span>
      <h2 className="sec_title">{title}</h2>
    </div>
  )
}
