import { FileText, Download } from "lucide-react"
import Seccion from "@/components/Seccion"
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography"
import { retrato } from "@/retrato"
import { perfil, secciones } from "@/data/portafolio"

// Estilo compartido por los dos botones del CV (mismo hover: elevación leve + brillo suave)
const botonBase =
  "group inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.3)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
const botonPrimario = botonBase + " border-foreground bg-foreground text-background"
const botonSecundario = botonBase + " border-white/15 hover:border-white/40 hover:bg-white/5"
const iconoClase = "size-4 transition-transform duration-300 group-hover:scale-110"

export default function Sobre() {
  return (
    <Seccion id="sobre" numero="01" titulo={secciones.sobre} completa>
      <div className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr]">
        <CursorDrivenParticleTypography
          text={retrato}
          fontFamily="monospace"
          fontSize={10}
          particleSize={0.7}
          particleDensity={1}
          className="h-[420px] min-h-0 md:h-[calc(100vh-9rem)]"
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{perfil.saludo}</h1>
          <p className="mt-2 font-mono text-sm text-muted-foreground">{perfil.rol}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{perfil.descripcion}</p>
          <div className="mt-8 flex flex-wrap gap-3">
<div className="mt-8 flex flex-wrap gap-3">
  <a href={perfil.cv} target="_blank" rel="noreferrer" className={botonPrimario}>
    <FileText className={iconoClase} />
    {perfil.textoBotonCv}
  </a>
  <a href={perfil.cv} download={perfil.nombreArchivoCv} className={botonSecundario}>
    <Download className={iconoClase} />
    {perfil.textoBotonDescarga}
  </a>
</div>
          </div>
        </div>
      </div>
    </Seccion>
  )
}
