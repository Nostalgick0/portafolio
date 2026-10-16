import { useEffect, useState } from "react"
import { perfil, secciones } from "@/data/portafolio"

const ids = ["sobre", "educacion", "proyectos", "software", "logros", "contacto"]

export default function Navbar() {
  const [activa, setActiva] = useState("sobre")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiva(e.target.id))
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <a href="#sobre" className="shrink-0 font-mono text-sm font-semibold">
          {perfil.nombreCorto}
        </a>
        <ul className="flex gap-5 overflow-x-auto text-sm">
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  "whitespace-nowrap transition-colors hover:text-foreground " +
                  (activa === id ? "text-foreground" : "text-muted-foreground")
                }
              >
                {secciones[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
