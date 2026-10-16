import { Mail } from "lucide-react"
import Seccion from "@/components/Seccion"
import { GithubIcon, LinkedinIcon } from "@/components/Iconos"
import { contacto, perfil, secciones } from "@/data/portafolio"

const enlaceClase =
  "flex size-12 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"

export default function Contacto() {
  return (
    <Seccion id="contacto" numero="05" titulo={secciones.contacto}>
      <h2 className="text-3xl font-semibold tracking-tight">/ {secciones.contacto}</h2>
      <p className="mt-4 max-w-md text-muted-foreground">{contacto.texto}</p>
      <div className="mt-8 flex gap-4">
        <a href={`mailto:${contacto.correo}`} aria-label="Correo" title={contacto.correo} className={enlaceClase}>
          <Mail className="size-5" />
        </a>
        <a href={contacto.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={enlaceClase}>
          <GithubIcon className="size-5" />
        </a>
        <a href={contacto.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={enlaceClase}>
          <LinkedinIcon className="size-5" />
        </a>
      </div>
      <p className="mt-12 text-center font-mono text-xs text-muted-foreground">Diseñado y desarrollado por {perfil.nombre}.</p>
      <p className="text-center font-mono text-xs text-muted-foreground">Todos los derechos reservados. ©</p>
    </Seccion>
  )
}
