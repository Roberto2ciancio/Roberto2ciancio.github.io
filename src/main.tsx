import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.documentElement.classList.add('js')
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.classList.add('motion-ok')
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
const container = document.getElementById('root')!

// The production build ships prerendered HTML (scripts/prerender.mjs): hydrate it.
// In dev the container is empty, so render from scratch.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
