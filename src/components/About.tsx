import { intro } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import { images } from '../assets-src'

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="about section wrap" id="chi-sono" ref={ref} data-reveal>
      <h2 className="section-heading">Chi sono</h2>
      <div className="about-card card">
        <img className="about-portrait" src={images.portrait} alt="Ritratto di Roberto Ciancio" loading="lazy" />
        <div className="about-body">
          <p className="about-bio">{intro.bio}</p>
          <div className="about-facts">
            {intro.facts.map((fact) => (
              <span className="badge" key={fact.label}>
                <span className="muted">{fact.label}:</span> {fact.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
