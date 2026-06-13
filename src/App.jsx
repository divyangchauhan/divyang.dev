import { sans } from './theme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      id="dc-portfolio"
      style={{
        background: '#0a0c10',
        color: '#e6e9ef',
        fontFamily: sans,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ambient blueprint grid */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(130,150,180,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(130,150,180,.045) 1px,transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '60%',
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(circle,rgba(242,180,65,.07),transparent 62%)',
        }}
      />

      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
