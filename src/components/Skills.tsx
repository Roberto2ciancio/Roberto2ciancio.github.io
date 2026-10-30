import type { CSSProperties } from 'react'
import { skills } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="skills section wrap" id="competenze" ref={ref} data-reveal>
      <h2 className="section-heading">Competenze</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skills-card card" key={skill.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <h3 className="skills-card-label">{skill.label}</h3>
            <div className="skills-card-tags">
              {skill.detail.split(' · ').map((tech) => (
                <span className="badge" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
