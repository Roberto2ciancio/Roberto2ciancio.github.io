import { profile } from '../data/cv'

export default function Footer() {
  return (
    <footer className="footer wrap">
      <p className="lead footer-invite">
        Disponibile per nuove opportunità come sviluppatore fullstack a Roma e da remoto.
      </p>
      <h2 className="footer-name">ROBERTO CIANCIO</h2>
      <div className="footer-bottom">
        <p className="small">© {new Date().getFullYear()} {profile.name}</p>
        <p className="small footer-credits">
          Fotografie: Switch-and-nest (J.smith, CC BY-SA 2.5) · Macro RP2350 (Profpcde, CC0) · Roman skyline (Edmund F. Arras, pubblico dominio) · Disassembled laptop (Tulumnes, CC BY-SA 4.0) · Electronics shop (PattayaPatrol, CC BY-SA 4.0), via Wikimedia Commons
        </p>
      </div>
    </footer>
  )
}
