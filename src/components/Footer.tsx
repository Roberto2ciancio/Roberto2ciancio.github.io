import { profile } from '../data/cv'

export default function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <span className="hero-nav-mark">Roberto Ciancio</span>
        <div className="footer-links">
          <a className="link small" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link small" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a className="link small" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="small muted">© {new Date().getFullYear()} {profile.name}</p>
        <p className="small muted footer-credits">
          Fotografie: RustCodeOnScreen (Slashme, CC0) · Cisco Hall Infnet (Bruno de Lima, CC BY-SA 4.0) · Roman skyline (Edmund F. Arras, pubblico dominio) · Disassembled laptop (Tulumnes, CC BY-SA 4.0) · Electronics shop (PattayaPatrol, CC BY-SA 4.0), via Wikimedia Commons
        </p>
      </div>
    </footer>
  )
}
