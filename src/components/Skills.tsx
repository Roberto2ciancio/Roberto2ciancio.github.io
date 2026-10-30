import type { CSSProperties } from 'react'
import { skills } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="skills section wrap" id="competenze" ref={ref} data-reveal>
      <h2 className="head skills-heading">Competenze</h2>
      <ul className="poster-list">
        {skills.map((skill, i) => (
          <li className="poster-item" key={skill.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <span className="poster-word">{skill.label}</span>
            <span className="small nums poster-detail">{skill.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
