import { FileText } from "lucide-react"
import Seccion from "@/components/Seccion"
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography"
import { retrato } from "@/retrato"
import { perfil, secciones } from "@/data/portafolio"

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
          <a
            href={perfil.cv}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            <FileText className="size-4" />
            {perfil.textoBotonCv}
          </a>
        </div>
      </div>
    </Seccion>
  )
}
