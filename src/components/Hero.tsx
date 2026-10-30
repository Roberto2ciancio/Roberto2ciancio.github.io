import type { CSSProperties } from 'react'
import { profile } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <header className="hero">
      <nav className="hero-nav wrap">
        <span className="hero-nav-mark">Roberto Ciancio</span>
        <div className="hero-nav-links">
          <a className="link small" href="#esperienza">Esperienza</a>
          <a className="link small" href="#competenze">Competenze</a>
          <a className="link small" href="#certificazioni-ai">Certificazioni AI</a>
          <a className="link small" href="#certificazioni-fullstack">Full-Stack</a>
          <a className="link small" href="#contatti">Contatti</a>
        </div>
        <a className="pill pill-solid hero-nav-cta" href={profile.cvFile} download>
          <span>Scarica il CV</span>
        </a>
      </nav>

      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content wrap" ref={ref} data-reveal>
        <span className="badge hero-badge" data-reveal>Disponibile per nuove opportunità</span>
        <h1 className="hero-title" data-reveal style={{ '--i': 1 } as CSSProperties}>
          Sviluppatore fullstack junior a Roma
        </h1>
        <p className="lead hero-lead" data-reveal style={{ '--i': 2 } as CSSProperties}>
          Dai cavi di rete alle interfacce React: supporto IT sul campo, un bootcamp intensivo EPICODE
          e l'obiettivo di una laurea in Informatica, poi una magistrale in Cybersecurity.
        </p>
        <div className="hero-actions" data-reveal style={{ '--i': 3 } as CSSProperties}>
          <a className="pill pill-solid" href={profile.cvFile} download>
            <span>Scarica il CV</span>
          </a>
          <a className="pill pill-outline" href="#contatti">
            <span>Scriviamoci</span>
          </a>
        </div>
        <div className="hero-stats" data-reveal style={{ '--i': 4 } as CSSProperties}>
          <div className="hero-stat">
            <span className="hero-stat-num nums">14</span>
            <span className="small muted">Certificazioni AI</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num nums">17</span>
            <span className="small muted">Certificazioni Full-Stack</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num nums">4</span>
            <span className="small muted">Esperienze sul campo</span>
          </div>
        </div>
      </div>
    </header>
  )
}
