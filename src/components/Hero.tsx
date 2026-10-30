import { useEffect, useRef } from 'react'
import { profile } from '../data/cv'
import portrait from '../assets-src/roberto-portrait.jpg'

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = nameRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / window.innerHeight, 1)
        const scale = 1 - progress * 0.08
        el.style.transform = `scale(${scale})`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="hero wrap">
      <div className="hero-row">
        <div className="hero-top">
          <p className="hero-pitch">
            Sviluppatore fullstack junior a Roma — da cablaggi e ticket a React e Spring.
          </p>
          <a className="button" href={profile.cvFile} download>
            Scarica il CV
          </a>
        </div>

        <nav className="hero-menu" aria-label="Sezioni della pagina">
          <a className="link small" href="#esperienza">Esperienza</a>
          <a className="link small" href="#competenze">Competenze</a>
          <a className="link small" href="#contatti">Contatti</a>
        </nav>
      </div>

      <h1 className="hero-name" ref={nameRef}>
        ROBERTO
        <br />
        CIANCIO
      </h1>

      <div className="hero-row hero-row-bottom">
        <p className="small">Roma · Fullstack Developer</p>
        <div className="hero-bottom-links">
          <a className="link small" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link small" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <img className="hero-phone-portrait" src={portrait} alt="Ritratto di Roberto Ciancio" loading="eager" />
    </header>
  )
}
