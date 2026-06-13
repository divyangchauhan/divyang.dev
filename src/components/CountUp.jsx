import { useEffect, useRef, useState } from 'react'

// Additive count-up: the final value is rendered immediately (so it reads
// correctly even if the animation never runs), then animated on first view.
export default function CountUp({ to, prefix = '', suffix = '', style }) {
  const ref = useRef(null)
  const [value, setValue] = useState(to)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || to === 0) return

    const run = () => {
      if (done.current) return
      done.current = true
      const dur = 1300
      const start = performance.now()
      const ease = (t) => 1 - Math.pow(1 - t, 3)
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur)
        setValue(Math.round(to * ease(p)))
        if (p < 1) requestAnimationFrame(tick)
        else setValue(to)
      }
      requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver !== 'function') {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return (
    <div ref={ref} style={style}>
      {prefix}
      {value}
      {suffix}
    </div>
  )
}
