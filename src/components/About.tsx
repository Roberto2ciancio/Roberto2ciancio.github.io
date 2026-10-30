import type { CSSProperties } from 'react'
import { intro } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import { images } from '../assets-src'

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="about section wrap" id="chi-sono" ref={ref} data-reveal>
      <h2 className="section-heading about-heading">Chi sono</h2>
      <div className="about-facts">
        {intro.facts.map((fact, i) => (
          <div className="fact" key={fact.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <p className="small muted">{fact.label}</p>
            <p className="small">{fact.value}</p>
          </div>
        ))}
      </div>

      <div className="about-text">
        <p className="about-paragraph" data-reveal-scale>
          <img className="about-portrait" src={images.portrait} alt="Ritratto di Roberto Ciancio" loading="lazy" />
          {intro.bio}
        </p>
      </div>
    </section>
  )
}
