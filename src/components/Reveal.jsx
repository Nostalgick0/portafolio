import { useEffect, useRef, useState } from "react"

// Aparece con un fundido y un leve desplazamiento hacia arriba cuando entra en pantalla.
// "delay" (ms) sirve para escalonar varios elementos.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        "transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none " +
        (visible ? "translate-y-0 opacity-100 " : "translate-y-4 opacity-0 ") +
        className
      }
    >
      {children}
    </div>
  )
}
