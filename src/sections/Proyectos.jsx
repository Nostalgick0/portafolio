import { useState } from "react"
import { Image as ImageIcon } from "lucide-react"
import Seccion from "@/components/Seccion"
import ProyectoModal from "@/components/ProyectoModal"
import { proyectos, secciones } from "@/data/portafolio"
import { createPortal } from "react-dom"

function Tarjeta({ item, onAbrir }) {
  const portada = item.imagenes?.[0]

  return (
    <button
      onClick={onAbrir}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card text-left transition-colors hover:border-white/25"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-white/5">
        {portada ? (
          <img
            src={portada}
            alt={item.titulo}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">
            <ImageIcon className="size-6" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium">{item.titulo}</h3>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.descripcion}</p>
      </div>
    </button>
  )
}

export default function Proyectos() {
  const [abierto, setAbierto] = useState(null)

  return (
    <Seccion id="proyectos" numero="04" titulo={secciones.proyectos}>
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">/ {secciones.proyectos}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p) => (
          <Tarjeta key={p.titulo} item={p} onAbrir={() => setAbierto(p)} />
        ))}
      </div>
      {abierto && createPortal(<ProyectoModal proyecto={abierto} onClose={() => setAbierto(null)} />, document.body)}    </Seccion>
  )
}
