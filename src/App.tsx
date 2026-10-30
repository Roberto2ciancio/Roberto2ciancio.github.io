import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import ImageBand from './components/ImageBand'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import switchAndNest from './assets-src/switch-and-nest.jpg'
import circuitMacro from './assets-src/circuit-macro.jpg'
import romanSkyline from './assets-src/roman-skyline.jpg'

function App() {
  return (
    <>
      <Hero />
      <About />
      <ImageBand
        src={switchAndNest}
        alt="Switch di rete avvolto in un nido di cavi Cat5"
        caption="Prima di scrivere codice, ho messo ordine nei cavi."
      />
      <Work />
      <ImageBand
        src={circuitMacro}
        alt="Primo piano di un microcontrollore RP2350 su una scheda Raspberry Pi Pico 2"
        caption="Dall'hardware al software: stessa attenzione al dettaglio."
      />
      <Skills />
      <ImageBand
        src={romanSkyline}
        alt="Tetti di Roma visti dall'alto, fotografia d'epoca del 1913"
        caption="Roma, dove lavoro, e da remoto ovunque."
      />
      <Contact />
      <Footer />
    </>
  )
}

export default App
