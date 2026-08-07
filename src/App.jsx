import { useEffect } from 'react'
import { color, sans } from './theme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const hashSectionTopGap = 32

function scrollToHash() {
  const hash = window.location.hash.slice(1)

  if (!hash) {
    return
  }

  let targetId

  try {
    targetId = decodeURIComponent(hash)
  } catch {
    targetId = hash
  }

  const target = document.getElementById(targetId)

  if (target) {
    if (targetId === 'top') {
      window.scrollTo({ top: 0, left: 0 })
      return
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const targetPaddingTop =
      parseFloat(window.getComputedStyle(target).paddingTop) || 0
    const top = Math.max(targetTop + targetPaddingTop - hashSectionTopGap, 0)

    window.scrollTo({ top, left: 0 })
  }
}

export default function App() {
  useEffect(() => {
    let frameId
    const scroll = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(scrollToHash)
    }

    scroll()
    window.addEventListener('hashchange', scroll)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('hashchange', scroll)
    }
  }, [])

  return (
    <div
      id="dc-portfolio"
      style={{
        background: color.bg,
        // blueprint grid: 28px ruling drawn straight onto the page ground
        backgroundImage: `linear-gradient(${color.grid} 1px,transparent 1px),linear-gradient(90deg,${color.grid} 1px,transparent 1px)`,
        backgroundSize: '28px 28px',
        color: color.ink,
        fontFamily: sans,
        minHeight: '100vh',
      }}
    >
      <Nav />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
