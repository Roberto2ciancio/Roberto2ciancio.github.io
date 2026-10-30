import type { CSSProperties } from 'react'
import { certifications } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Proof() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="proof section wrap" id="certificazioni" ref={ref} data-reveal>
      <h2 className="section-heading proof-heading">
        Certificazioni
        <br />
        ottenute
      </h2>

      <table className="proof-table">
        <tbody>
          {certifications.map((cert, i) => (
            <tr key={cert.title} data-reveal style={{ '--i': i } as CSSProperties}>
              <td className="small nums proof-year">{cert.year}</td>
              <td className="proof-title">{cert.title}</td>
              <td className="small muted proof-body">{cert.body}</td>
              <td className="proof-link">
                <a className="link small" href={cert.verifyUrl} target="_blank" rel="noreferrer">
                  Verifica
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
