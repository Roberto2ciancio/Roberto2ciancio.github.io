import type { CSSProperties } from 'react'
import { experience } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Work() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="work section wrap" id="esperienza" ref={ref} data-reveal>
      <h2 className="head">Esperienza</h2>
      <ul className="ledger">
        {experience.map((job, i) => (
          <li className="ledger-row" key={job.role + job.period} data-reveal style={{ '--i': i } as CSSProperties}>
            <div className="ledger-row-top">
              <span className="ledger-role">{job.role}</span>
              <span className="small muted ledger-place">{job.place}</span>
              <span className="small nums ledger-period">{job.period}</span>
            </div>
            <p className="small muted ledger-desc">{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
