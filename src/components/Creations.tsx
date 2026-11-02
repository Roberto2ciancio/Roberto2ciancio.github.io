import type { CSSProperties } from 'react'
import { creations } from '../data/cv'
import { useReveal } from '../hooks/useReveal'

export default function Creations() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="creations section wrap" id="creazioni" ref={ref} data-reveal>
      <h2 className="section-heading">Creazioni</h2>
      <ul className="creations-list">
        {creations.map((item, i) => (
          <li className="creation card" key={item.name} data-reveal style={{ '--i': i } as CSSProperties}>
            <div className="creation-media">
              <img src={item.icon} alt="" width={512} height={512} loading="lazy" />
            </div>
            <div className="creation-body">
              <h3 className="creation-name">{item.name}</h3>
              <p className="creation-desc">{item.description}</p>
              <ul className="creation-tags">
                {item.stack.map((tech) => (
                  <li className="badge" key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="creation-actions">
                <a className="pill pill-solid" href={item.appUrl} target="_blank" rel="noreferrer">
                  <span>{item.appLabel ?? "Apri l'app"}</span>
                </a>
                {item.demoUrl && (
                  <a className="pill pill-outline" href={item.demoUrl} target="_blank" rel="noreferrer">
                    <span>Provala senza account</span>
                  </a>
                )}
              </div>
              {item.install && <p className="small muted creation-install">{item.install}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
