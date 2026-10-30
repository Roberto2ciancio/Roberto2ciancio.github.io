import { useLayoutEffect, useRef, useState } from 'react'
import { profile } from '../data/cv'
import { images } from '../assets-src'

const PANEL_COUNT = 3

function getMotionOk() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('motion-ok')
}

export default function Hero() {
  const pinRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const photoRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [motionOk] = useState(getMotionOk)

  useLayoutEffect(() => {
    if (!motionOk) return

    let raf = 0
    let scheduled = false

    const update = () => {
      scheduled = false
      const el = pinRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
      const continuous = progress * (PANEL_COUNT - 1)

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return
        panel.style.transform = `translateY(${(i - continuous) * 100}%)`
      })
      photoRefs.current.forEach((photo, i) => {
        if (!photo) return
        const distance = continuous - i
        photo.style.transform = `translateY(${distance * 36}px) scale(${1 + Math.min(Math.abs(distance), 1) * 0.06})`
      })
      setActiveIndex(Math.round(continuous))
    }

    const onScroll = () => {
      if (scheduled) return
      scheduled = true
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [motionOk])

  const panels = [
    {
      statement: 'Dai cavi di rete alle interfacce React.',
      body: 'Sviluppatore fullstack junior a Roma, formato con un bootcamp intensivo EPICODE dopo anni di supporto IT sul campo.',
      image: images.switchAndNest,
      alt: 'Switch di rete avvolto in un nido di cavi',
      action: true,
    },
    {
      statement: 'Dall’hardware al software.',
      body: 'Ticket, cablaggi, collaudi: la stessa precisione si porta dietro nel codice.',
      image: images.circuitMacro,
      alt: 'Primo piano di un circuito stampato',
      action: false,
    },
    {
      statement: 'Laurea, poi Cybersecurity.',
      body: 'Quindici certificazioni già prese, tra Anthropic Academy ed EPICODE, e l’obiettivo chiaro davanti.',
      image: images.romanSkyline,
      alt: 'Tetti di Roma visti dall’alto',
      action: false,
    },
  ]

  return (
    <header className="hero-pin" ref={pinRef} style={motionOk ? undefined : { height: 'auto' }}>
      <nav className="hero-nav wrap" aria-label="Sezioni della pagina">
        <span className="hero-nav-mark">RC</span>
        <div className="hero-nav-links">
          <a className="link small" href="#esperienza">Esperienza</a>
          <a className="link small" href="#competenze">Competenze</a>
          <a className="link small" href="#certificazioni">Certificazioni</a>
          <a className="link small" href="#contatti">Contatti</a>
        </div>
      </nav>

      <div className="hero-pin-sticky" style={motionOk ? undefined : { position: 'static', height: 'auto' }}>
        <h1 className="hero-corner-group">
          <span className="hero-corner hero-corner-tl">ROBERTO</span>
          <span className="hero-corner hero-corner-br">CIANCIO</span>
        </h1>
        <p className="sr-only">{profile.role}, {profile.city}</p>

        <div className="hero-panels" style={motionOk ? undefined : { position: 'static' }}>
          {panels.map((panel, i) => (
            <div
              className="hero-panel wrap"
              key={panel.statement}
              ref={(el) => { panelRefs.current[i] = el }}
              style={motionOk ? undefined : { position: 'static', transform: 'none' }}
              inert={motionOk && i !== activeIndex ? true : undefined}
            >
              <div className="hero-panel-text">
                <p className="hero-panel-statement">{panel.statement}</p>
                <p className="small muted hero-panel-body">{panel.body}</p>
                {panel.action && (
                  <a className="button hero-panel-cta" href={profile.cvFile} download>
                    <span>Scarica il CV</span>
                  </a>
                )}
              </div>
              <div className="hero-panel-photo">
                <div className="hero-panel-photo-inner" ref={(el) => { photoRefs.current[i] = el }}>
                  <img src={panel.image} alt={panel.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
