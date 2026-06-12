import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0B0F13',
    color: '#B9C7D1',
    fontFamily: "'IBM Plex Mono', monospace",
  },
  container: { maxWidth: '1000px', margin: '0 auto', padding: '0 32px' },
}

export default function App() {
  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.container}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
