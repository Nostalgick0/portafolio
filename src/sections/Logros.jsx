import { useState } from "react"
import { Image as ImageIcon, ArrowUpRight } from "lucide-react"
import Seccion from "@/components/Seccion"
import { logros, secciones } from "@/data/portafolio"

function Tarjeta({ item }) {
  const [actual, setActual] = useState(0)
  const imgs = item.imagenes || []

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card">
      <div className="aspect-[4/3] bg-white/5">
        {imgs.length ? (
          <img src={imgs[actual]} alt={item.titulo} className="size-full object-contain" />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">
            <ImageIcon className="size-8" />
          </div>
        )}
      </div>

      {imgs.length > 1 && (
        <div className="flex gap-2 px-4 pt-3">
          {imgs.map((src, i) => (
            <button
              key={src}
              onClick={() => setActual(i)}
              className={"size-10 overflow-hidden rounded border " + (i === actual ? "border-foreground" : "border-white/10 opacity-60")}
            >
              <img src={src} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium">{item.titulo}</h3>
          {item.fecha && <span className="font-mono text-xs text-muted-foreground">{item.fecha}</span>}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.descripcion}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {item.etiquetas?.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-xs text-muted-foreground">{t}</span>
          ))}
          {item.enlace && (
            <a href={item.enlace} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1 text-sm hover:underline">
              Ver <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Logros() {
  return (
    <Seccion id="logros" numero="04" titulo={secciones.logros}>
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">/ {secciones.logros}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {logros.map((l) => (
          <Tarjeta key={l.titulo} item={l} />
        ))}
      </div>
    </Seccion>
  )
}
