import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { perfil, secciones } from "@/data/portafolio"

const ids = ["sobre", "educacion", "proyectos", "software", "logros", "contacto"]

export default function Navbar() {
  const [activa, setActiva] = useState("sobre")
  const [abierto, setAbierto] = useState(false)
  const [pastilla, setPastilla] = useState({ left: 0, width: 0, listo: false })
  const headerRef = useRef(null)
  const enlaces = useRef({})
  const bloqueo = useRef(0) // evita que el observer pise el click mientras se hace scroll

  // Detecta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < bloqueo.current) return
        entries.forEach((e) => e.isIntersecting && setActiva(e.target.id))
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Al llegar al final de la página, la última sección queda activa
    const alFinal = () => {
      if (Date.now() < bloqueo.current) return
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiva(ids[ids.length - 1])
      }
    }
    window.addEventListener("scroll", alFinal, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", alFinal)
    }
  }, [])

  // Posiciona la pastilla (versión escritorio) debajo del enlace activo
  const medir = () => {
    const el = enlaces.current[activa]
    if (!el) return
    setPastilla({ left: el.offsetLeft, width: el.offsetWidth, listo: true })
  }

  useLayoutEffect(medir, [activa])

  useEffect(() => {
    window.addEventListener("resize", medir)
    document.fonts?.ready.then(medir)
    return () => window.removeEventListener("resize", medir)
  }, [activa])

  // Cierra el menú móvil con Esc o al hacer click fuera
  useEffect(() => {
    if (!abierto) return
    const onKey = (e) => e.key === "Escape" && setAbierto(false)
    const onClickFuera = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setAbierto(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClickFuera)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClickFuera)
    }
  }, [abierto])

  const irA = (id) => {
    setActiva(id)
    setAbierto(false)
    bloqueo.current = Date.now() + 900
  }

  return (
    <header
      ref={headerRef}
      className={
        "fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur transition-colors " +
        (abierto ? "bg-background/95" : "bg-background/70")
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2.5">
        <a href="#sobre" onClick={() => setAbierto(false)} className="shrink-0 font-mono text-sm font-semibold">
          {perfil.nombreCorto}
        </a>

        {/* Escritorio: enlaces con pastilla deslizante */}
        <ul className="relative hidden gap-1 text-sm md:flex">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 rounded-full bg-white/10 ring-1 ring-white/10 transition-[left,width,opacity] duration-300 ease-out"
            style={{ left: pastilla.left, width: pastilla.width, opacity: pastilla.listo ? 1 : 0 }}
          />
          {ids.map((id) => (
            <li key={id}>
              <a
                ref={(el) => (enlaces.current[id] = el)}
                href={`#${id}`}
                onClick={() => irA(id)}
                className={
                  "relative block rounded-full px-3 py-1.5 whitespace-nowrap transition-colors hover:text-foreground " +
                  (activa === id ? "text-foreground" : "text-muted-foreground")
                }
              >
                {secciones[id]}
              </a>
            </li>
          ))}
        </ul>

        {/* Móvil: botón de hamburguesa */}
        <button
          onClick={() => setAbierto((v) => !v)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground md:hidden"
        >
          {abierto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Móvil: menú desplegable */}
      <div
        id="menu-movil"
        className={
          "grid transition-[grid-template-rows,visibility] duration-300 ease-out md:hidden " +
          (abierto ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]")
        }
      >
        <ul className="overflow-hidden px-4 text-sm">
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => irA(id)}
                className={
                  "block rounded-lg px-3 py-2.5 transition-colors " +
                  (activa === id ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground")
                }
              >
                {secciones[id]}
              </a>
            </li>
          ))}
          <li className="h-3" aria-hidden="true" />
        </ul>
      </div>
    </header>
  )
}