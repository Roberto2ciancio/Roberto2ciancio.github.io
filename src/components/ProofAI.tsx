import type { CSSProperties } from 'react'
import { aiCertifications } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function ProofAI() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="proof-ai section wrap" id="certificazioni-ai" ref={ref} data-reveal>
      <div className="proof-heading-row">
        <h2 className="section-heading">Certificazioni AI</h2>
        <span className="badge">Anthropic Academy · {aiCertifications.length} corsi</span>
      </div>
      <ul className="proof-ai-grid">
        {aiCertifications.map((cert, i) => (
          <li className="proof-ai-card card card-hover" key={cert.title} data-reveal style={{ '--i': i } as CSSProperties}>
            <span className="small muted nums">{cert.date}</span>
            <h3 className="proof-ai-title">{cert.title}</h3>
            <a className="link small proof-ai-link" href={cert.verifyUrl} target="_blank" rel="noreferrer">
              Verifica il certificato →
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
