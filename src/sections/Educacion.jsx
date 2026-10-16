import { GraduationCap } from "lucide-react"
import Seccion from "@/components/Seccion"
import { educacion, secciones } from "@/data/portafolio"

export default function Educacion() {
  return (
    <Seccion id="educacion" numero="02" titulo={secciones.educacion}>
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">/ {secciones.educacion}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {educacion.map((e) => (
          <article key={e.grado + e.periodo} className="flex flex-col rounded-xl border border-white/10 bg-card p-5">
            <div className="flex items-center justify-between">
              <GraduationCap className="size-5 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">{e.periodo}</span>
            </div>
            <h3 className="mt-4 text-lg leading-snug font-medium">{e.grado}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.escuela}</p>
            {e.descripcion && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.descripcion}</p>}
            {e.estado && (
              <span className="mt-auto w-fit rounded-full bg-white/5 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                {e.estado}
              </span>
            )}
          </article>
        ))}
      </div>
    </Seccion>
  )
}
