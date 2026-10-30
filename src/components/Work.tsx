import type { CSSProperties } from 'react'
import { experience } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import { images } from '../assets-src'

export default function Work() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="work section wrap" id="esperienza" ref={ref} data-reveal>
      <h2 className="section-heading">Esperienza</h2>
      <div className="work-grid">
        {experience.map((job, i) => (
          <article className="work-card card card-hover" key={job.role + job.period} data-reveal style={{ '--i': i } as CSSProperties}>
            <div className="work-card-media">
              <img src={images[job.image]} alt={job.imageAlt} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
            <div className="work-card-body">
              <div className="work-card-top">
                <h3 className="work-role">{job.role}</h3>
                <span className="badge nums work-period">{job.period}</span>
              </div>
              <p className="small muted work-place">{job.place}</p>
              <p className="work-desc">{job.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
