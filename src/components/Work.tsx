import { useState, type CSSProperties } from 'react'
import { experience } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import { images } from '../assets-src'

export default function Work() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState(0)

  return (
    <section className="work section wrap" id="esperienza" ref={ref} data-reveal>
      <h2 className="section-heading work-heading">Esperienza</h2>

      <div className="work-grid">
        <ul className="work-list">
          {experience.map((job, i) => (
            <li
              className={`work-row${i === active ? ' is-active' : ''}`}
              key={job.role + job.period}
              data-reveal
              style={{ '--i': i } as CSSProperties}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <button
                className="work-row-button"
                type="button"
                aria-expanded={i === active}
                onClick={() => setActive(i)}
              >
                <span className="work-row-top">
                  <span className="work-role">{job.role}</span>
                  <span className="small muted work-place">{job.place}</span>
                  <span className="small nums work-period">{job.period}</span>
                </span>
                <span className="work-desc">{job.description}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="work-frame" aria-hidden="true">
          <div className="work-frame-stage">
            {experience.map((job, i) => (
              <img
                key={job.role}
                src={images[job.image]}
                alt=""
                className="work-frame-img"
                style={{ opacity: i === active ? 1 : 0 }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
