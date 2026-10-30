import type { CSSProperties } from 'react'
import { fullstackDiploma, fullstackModules } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

const tracks = ['Frontend', 'React', 'Java', 'Extra'] as const

export default function ProofFullstack() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="proof-fs section wrap" id="certificazioni-fullstack" ref={ref} data-reveal>
      <div className="proof-heading-row">
        <h2 className="section-heading">Certificazioni Full-Stack</h2>
        <span className="badge">EPICODE · {fullstackModules.length + 1} certificati</span>
      </div>

      <div className="proof-fs-diploma card" data-reveal>
        <div>
          <span className="small muted nums">{fullstackDiploma.date}</span>
          <h3 className="proof-fs-diploma-title">{fullstackDiploma.title}</h3>
          <p className="small muted">{fullstackDiploma.issuer} — diploma del percorso completo</p>
        </div>
        <div className="proof-fs-diploma-actions">
          <a className="pill pill-solid" href={fullstackDiploma.pdfUrl} download>
            <span>Scarica il PDF</span>
          </a>
          <a className="pill pill-outline" href={fullstackDiploma.verifyUrl} target="_blank" rel="noreferrer">
            <span>Verifica</span>
          </a>
        </div>
      </div>

      {tracks.map((track) => {
        const items = fullstackModules.filter((m) => m.track === track)
        if (!items.length) return null
        return (
          <div className="proof-fs-track" key={track}>
            <h3 className="proof-fs-track-label">{track}</h3>
            <ul className="proof-fs-list">
              {items.map((mod, i) => (
                <li className="proof-fs-row card card-hover" key={mod.verifyUrl} data-reveal style={{ '--i': i } as CSSProperties}>
                  <span className="small muted nums proof-fs-date">{mod.date}</span>
                  {mod.module && <span className="badge proof-fs-module">{mod.module}</span>}
                  <span className="proof-fs-skills">{mod.skills}</span>
                  <a className="link small proof-fs-link" href={mod.verifyUrl} target="_blank" rel="noreferrer">
                    Verifica →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
