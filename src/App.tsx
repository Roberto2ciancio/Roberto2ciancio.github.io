import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import ProofAI from './components/ProofAI'
import ProofFullstack from './components/ProofFullstack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <div className="beam wrap" aria-hidden="true" />
      <ProofAI />
      <ProofFullstack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
