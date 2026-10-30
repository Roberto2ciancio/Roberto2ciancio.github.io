import type { CSSProperties } from 'react'
import { intro } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import portrait from '../assets-src/roberto-portrait.jpg'

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="about section wrap" id="chi-sono" ref={ref} data-reveal>
      <h2 className="head about-heading">Chi sono</h2>
      <img className="about-portrait" src={portrait} alt="Ritratto di Roberto Ciancio" loading="lazy" />

      <div className="about-facts">
        {intro.facts.map((fact, i) => (
          <div className="fact" key={fact.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <p className="small muted">{fact.label}</p>
            <p className="small">{fact.value}</p>
          </div>
        ))}
      </div>

      <p className="about-paragraph lead">{intro.paragraph}</p>

      <div className="about-row-2">
        <p className="small muted about-row-2-label">Percorso</p>
        <div className="about-lists">
          <div className="about-list">
            <p className="small about-list-heading">Istruzione</p>
            <ul>
              {intro.education.map((item, i) => (
                <li key={item.name} data-reveal style={{ '--i': i } as CSSProperties}>
                  <span className="small">{item.name}</span>
                  <span className="small muted nums">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-list">
            <p className="small about-list-heading">Soft skill</p>
            <ul>
              {intro.softSkills.map((item, i) => (
                <li key={item} data-reveal style={{ '--i': i } as CSSProperties}>
                  <span className="small">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
