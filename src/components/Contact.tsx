import { useState, type CSSProperties } from 'react'
import { contactRows, profile } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

function breakable(value: string) {
  return value.split(/([@/])/).map((part, i) =>
    part === '@' || part === '/' ? (
      <span key={i}>
        {part}
        <wbr />
      </span>
    ) : (
      part
    ),
  )
}

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
      <h2 className="head contact-heading">Contatti</h2>
      <ul className="contact-rows">
        {contactRows.map((row, i) => (
          <li className="contact-row" key={row.label} data-reveal style={{ '--i': i } as CSSProperties}>
            <a
              className="contact-row-value link"
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={`${row.label}: ${row.value}`}
              onClick={(e) => handleCopy(e, row.copy, row.label)}
            >
              {copied === row.label ? 'Copiato negli appunti' : breakable(row.value)}
            </a>
          </li>
        ))}
      </ul>

      <div className="contact-row contact-greeting" data-reveal style={{ '--i': contactRows.length } as CSSProperties}>
        <span className="contact-row-value">Scriviamoci</span>
        <a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Scrivi un'email a Roberto Ciancio">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
