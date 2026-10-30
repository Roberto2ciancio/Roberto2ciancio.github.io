import type { CSSProperties } from 'react'
import { skills } from '../data/cv'
import { useReveal } from '../hooks/useReveal'
import { images } from '../assets-src'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="skills section wrap" id="competenze" ref={ref} data-reveal>
      <h2 className="skills-heading">
        Il mio
        <br />
        stack tecnico
      </h2>

      <img className="skills-photo" src={images.romanSkyline} alt="Tetti di Roma visti dall'alto" loading="lazy" />

      <ul className="skills-table">
        {skills.map((skill, i) => (
          <li className="skills-row" key={skill.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <span className="skills-row-label">{skill.label}</span>
            <span className="small muted skills-row-detail nums">{skill.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
