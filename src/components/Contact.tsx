import { useState, type CSSProperties } from 'react'
import { contactRows, profile } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (e: React.MouseEvent, copy: string | null, label: string) => {
    if (!copy || !navigator.clipboard) return
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(copy)
      setCopied(label)
      window.setTimeout(() => setCopied((current) => (current === label ? null : current)), 1800)
    } catch {
      window.location.href = contactRows.find((r) => r.label === label)?.href ?? '#'
    }
  }

  return (
    <section className="contact section wrap" id="contatti" ref={ref} data-reveal>
      <div className="contact-card card">
        <h2 className="section-heading contact-heading">Scriviamoci</h2>
        <p className="muted contact-sub">
          Disponibile per nuove opportunità come sviluppatore fullstack, a Roma e da remoto.
        </p>
        <div className="contact-rows">
          {contactRows.map((row, i) => (
            <a
              className="contact-row"
              key={row.label}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={(e) => handleCopy(e, row.copy, row.label)}
              data-reveal
              style={{ '--i': i } as CSSProperties}
            >
              <span className="small muted contact-row-label">{row.label}</span>
              <span className="contact-row-value">{copied === row.label ? 'Copiato negli appunti' : row.value}</span>
            </a>
          ))}
        </div>
        <a className="pill pill-solid contact-cta" href={`mailto:${profile.email}`}>
          <span>Inviami un'email</span>
        </a>
      </div>
    </section>
  )
}
