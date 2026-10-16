import Seccion from "@/components/Seccion"
import { software, secciones } from "@/data/portafolio"

export default function Software() {
  // agrupa las herramientas por categoría
  const grupos = software.reduce((acc, s) => {
    ;(acc[s.categoria] ||= []).push(s)
    return acc
  }, {})

  return (
    <Seccion id="software" numero="03" titulo={secciones.software}>
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">/ {secciones.software}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(grupos).map(([categoria, items]) => (
          <div key={categoria} className="rounded-xl border border-white/10 bg-card p-5">
            <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">{categoria}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s.nombre}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/5"
                >
                  {s.logo && <img src={s.logo} alt="" className="size-4" />}
                  {s.nombre}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Seccion>
  )
}
