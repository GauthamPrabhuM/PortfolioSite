import type { ReactNode } from 'react'

/* Native disclosure: the lead stays visible, the rest folds away. */
export function More({ children }: { children: ReactNode }) {
  return (
    <details className="more">
      <summary className="more_toggle">
        <span className="more_open">More</span>
        <span className="more_close">Less</span>
      </summary>
      <div className="more_body">{children}</div>
    </details>
  )
}
